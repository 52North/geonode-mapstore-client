import React, { useEffect, useState, useRef } from "react";
import Rx from "rxjs/Rx";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect";
import { Glyphicon } from "react-bootstrap";
import assign from "object-assign";

import jp from "jsonpath";

import axios from "@mapstore/framework/libs/ajax";
import { createPlugin } from "@mapstore/framework/utils/PluginsUtils";
import { mapSelector } from "@mapstore/framework/selectors/map";
import { getExtentFromViewport} from "@mapstore/framework/utils/CoordinatesUtils";
import { setControlProperty } from "@mapstore/framework/actions/controls";
import { addAuthenticationParameter } from "@mapstore/framework/utils/SecurityUtils";
import Message from "@mapstore/framework/components/I18N/Message";
import controls from "@mapstore/framework/reducers/controls";
import {
  info as infoNotification,
  error as errorNotification,
  success as successNotification
} from "@mapstore/framework/actions/notifications";

import { parseDevHostname, getGeoNodeLocalConfig } from "@js/utils/APIUtils";
import Button from "@js/components/Button";
import OverlayContainer from "@js/components/OverlayContainer";
import { getResourceId } from "@js/selectors/resource";

import Form from "@rjsf/core";

const log = (type) => console.log.bind(console, type);

async function createGroupSelectorWidget(setInferenceGroup) {
  const url = parseDevHostname(
    "/api/v2/groups?exclude[]=*&include[]=title&include[]=group"
  );
  const group_response = await fetch(url, { Accept: "application/json" });
  const json = await group_response.json();
  const groupProfiles = json.group_profiles.map((profile) => {
    return {
      // we take the profile's name
      title: profile.group.name,
      // but have to reference the core group
      pk: profile.pk
    };
  });

  if (groupProfiles.length > 0) {
    // set state to first group
    setInferenceGroup(`${groupProfiles[0].pk}`);
  }
  return (props) => (
    <select
      required={props.required}
      onChange={(event) => setInferenceGroup(`${event.target.value.pk}`)}
    >
      {groupProfiles.map((group, index) => (
        <option key={index} value={group.pk}>
          {group.title}
        </option>
      ))}
    </select>
  );
}

async function getUiSchemas() {
  const baseUrl = getGeoNodeLocalConfig(
    "geoNodeSettings.staticPath",
    "/static/"
  );
  return axios.get(baseUrl + "litterassessment/litterassessmentConfig.json");
}

async function getOpenApiSchema() {
  const url = parseDevHostname("/litterassessment");
  return axios.get(`${url}/openapi.json`);
}

async function getModels() {
  const url = parseDevHostname("/litterassessment");
  const configUrl = `${url}/models`;
  return axios.get(configUrl);
}

function _triggerAiInference(selectedModel, { formData }) {
  const headers = {
    "Content-type": "application/json",
    Accept: "application/json"
  };

  const path = `/litterassessment/models/${selectedModel}/`;
  const url = parseDevHostname(path);
  return (dispatch) => {
    Rx.Observable.defer(() => {
      dispatch(
        infoNotification({
          title: "Litter Assessment",
          message: "Triggering assessment ..."
        })
      );
      return axios.post(url, formData, headers);
    })
      .catch((err) => {
        console.error("ai_inference API is not available!", err);
        dispatch(
          errorNotification({
            title: "Litter Assessment",
            message: "Could not connect to assessment service!"
          })
        );
      })
      .subscribe((response) => {
        console.log(`job_id ${response.data.job_id}`);
        const content = response.data;
        const failStatuses = ["failed", "cancelled"];
        const hasFailed =
          response.status > 400 || failStatuses.includes(content.status);
        if (hasFailed) {
          dispatch(
            errorNotification({
              title: "Litter Assessment",
              message: `Assessment could not be started! ${content.msg}`
            })
          );
        } else {
          dispatch(
            successNotification({
              title: "Litter Assessment",
              message: "Assessment started and will be uploaded once ready."
            })
          );
        }
      });
  };
}

function toWmsUrl(wmsLayerOptions, map, securityToken) {
  const bounds = wmsLayerOptions.bbox.bounds;
  const bboxDeg = [bounds.minx, bounds.miny, bounds.maxx, bounds.maxy];
  const projection = map.projection;
  const bboxMeters = getExtentFromViewport(wmsLayerOptions.bbox, projection);
  const width = (bboxMeters[2] - bboxMeters[0]) * 1000;
  const height = (bboxMeters[3] - bboxMeters[1]) * 1000;
  const queryParameters = assign(
    {},
    {
      LAYERS: wmsLayerOptions.name,
      STYLES: wmsLayerOptions.style || "",
      FORMAT: "image/png8",
      TRANSPARENT: true,
      SERVICE: "WMS",
      REQUEST: "GetMap",
      WIDTH: Math.floor(width),
      HEIGHT: Math.floor(height),
      CRS: projection,
      BBOX: bboxMeters,
      TILED: false,
      VERSION: "1.3.0"
    }
  );

  const url = wmsLayerOptions.url;
  addAuthenticationParameter(url, queryParameters, securityToken);
  const query = new URLSearchParams(queryParameters);
  return new URL(`${url}?${query}`).toString();
}

function LitterAssessment({
  enabled,
  resource,
  map,
  wmsLayers = [],
  securityToken,
  triggerAiInference,
  onClose
}) {
  const pk = resource?.pk;
  const title = resource?.title;

  const [models, setModels] = useState({});
  const [uischemas, setSchemas] = useState({});
  const [jsonSchemas, setJsonSchemas] = useState({});
  const [selectedModel, setSelectedModel] = useState("");
  const [inferenceGroup, setInferenceGroup] = useState(null);
  const [widgets, setWidgets] = useState({});

  const wmsUrl = wmsLayers?.length && map
      ? toWmsUrl(wmsLayers[0], map, securityToken)
      : "";

  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;

    createGroupSelectorWidget(setInferenceGroup)
      .then((GroupSelectorWidget) => {
        setWidgets({
          groupSelectorWidget: GroupSelectorWidget
        });
      })
      .catch((err) => {
        console.error("could not create group select!", err);
      });

    getOpenApiSchema()
      .then(async (response) => {
        const openApiSchema = response.data;
        const re = new RegExp("/models/");
        const models = {};
        Object.entries(openApiSchema.paths).forEach(async ([k, v]) => {
          if (k.includes("/models/") && k !== "/models/") {
            const key = k.replace(re, "");
            const modelName = key.endsWith("/") ? key.slice(0, -1) : key;

            const resolve = function (ref) {
              if (ref === undefined || !ref.startsWith("#/")) {
                return undefined;
              }
              const jsonPath = ref.replace("#/", "$.").replaceAll("/", ".");
              return jp.query(openApiSchema, jsonPath)[0] || undefined;
            };

            const responseBody =
              v.post?.requestBody?.content["application/json"];
            const schema = resolve(responseBody?.schema["$ref"]);

            jp.apply(schema, "$.properties.*['$ref']", (ref) =>
              resolve(ref)
            ).forEach((rr) => {
              schema.properties[rr.path.slice(-1)] = rr.value;
            });

            models[modelName] = schema;
          }
        });
        setJsonSchemas(models);
      })
      .catch((err) => {
        console.error("could not get OpenAPI schema!", err);
      });

    getUiSchemas()
      .then(async (response) => {
        const schemas = response.data.schemas;
        Object.values(schemas).forEach((schema) => {
          schema.inferenceGroup = {
            "ui:widget": "groupSelectorWidget"
          };
        });
        setSchemas(schemas);
      })
      .catch((err) => {
        console.error("could get schemas from config!", err);
      });

    getModels()
      .then((response) => {
        const models = response.data.models?.reduce(
          (acc, m) => ({ ...acc, [m.name]: m }),
          {}
        );
        setSelectedModel(Object.keys(models)[0] || null);
        setModels(models);
      })
      .catch((err) => {
        console.error("could get models from config!", err);
      });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <OverlayContainer enabled={enabled} className="gn-overlay-wrapper">
      <section className="gn-litterassessment-panel">
        <div className="gn-litterassessment-panel-head">
          <h2>
            <Message msgId="gnviewer.litterassessment.title" />
          </h2>
          <Button className="square-button" onClick={() => onClose()}>
            <Glyphicon glyph="1-close" />
          </Button>
        </div>
        <div className="gn-litterassessment-panel-body">
          <Message msgId="gnviewer.litterassessment.description" />
          <div>
            <label htmlFor="model-select">
              <Message msgId="gnviewer.litterassessment.model" />
            </label>

            <select
              id="model-select"
              onChange={(event) => {
                setSelectedModel(event.target.value);
              }}
              value={selectedModel}
            >
              {Object.keys(models).map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>

            <div>
              <h3>Description</h3>
              <span className="model-description">
                {models[selectedModel]?.description}
              </span>
            </div>

            <div className="model-input">
              <Form
                widgets={widgets}
                schema={jsonSchemas[selectedModel] || {}}
                uiSchema={uischemas[selectedModel] || {}}
                formData={{ imageUrl: wmsUrl, pk, title, inferenceGroup }}
                onSubmit={(e) => triggerAiInference(selectedModel, e)}
                onError={log("errors")}
              >
                <div className="submit-btn">
                  <button type="submit">Submit</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </OverlayContainer>
  );
}

LitterAssessment.propTypes = {
  enabled: PropTypes.bool,
  onClose: PropTypes.func
};

LitterAssessment.defaultProps = {
  enabled: false,
  onClose: () => {}
};

const LitterAssessmentPlugin = connect(
  createSelector(
    [
      (state) => state?.controls?.rightOverlay?.enabled === "LitterAssessment",
      (state) => state?.gnresource?.data || null,
      (state) => mapSelector(state),
      (state) => state.layers,
      (state) => state.security
    ],
    (enabled, resource, map, layers, security) => ({
      enabled,
      resource,
      map,
      wmsLayers:
        layers?.flat?.filter(
          (l) => l.type === "wms" && (!l.group || l.group !== "background")
        ) || [],
      securityToken: security.token
    })
  ),
  (dispatch) => ({
    onClose: setControlProperty.bind(null, "rightOverlay", "enabled", false),
    triggerAiInference: bindActionCreators(_triggerAiInference, dispatch)
  })
)(LitterAssessment);

function LitterAssessmentButton({ enabled, variant, onClick, size }) {
  return enabled ? (
    <Button
      variant={variant || "primary"}
      size={size}
      onClick={() => onClick()}
    >
      <Message msgId="gnviewer.litterassessment.title" />
    </Button>
  ) : null;
}

const ConnectedLitterAssessmentButton = connect(
  createSelector(getResourceId, (resourceId) => ({
    enabled: resourceId !== undefined
  })),
  {
    onClick: setControlProperty.bind(
      null,
      "rightOverlay",
      "enabled",
      "LitterAssessment"
    )
  }
)(LitterAssessmentButton);

export default createPlugin("LitterAssessment", {
  component: LitterAssessmentPlugin,
  containers: {
    ActionNavbar: {
      name: "LitterAssessment",
      Component: ConnectedLitterAssessmentButton
    }
  },
  epics: {},
  reducers: {
    controls
  }
});
