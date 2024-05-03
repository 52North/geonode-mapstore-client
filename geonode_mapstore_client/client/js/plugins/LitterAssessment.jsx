import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { Glyphicon } from "react-bootstrap";
import assign from "object-assign";

import axios from "@mapstore/framework/libs/ajax";
import { createPlugin } from "@mapstore/framework/utils/PluginsUtils";
import { setControlProperty } from "@mapstore/framework/actions/controls";
import { addAuthenticationParameter } from "@mapstore/framework/utils/SecurityUtils";
import Message from "@mapstore/framework/components/I18N/Message";
import controls from "@mapstore/framework/reducers/controls";

import Button from "@js/components/Button";
import OverlayContainer from "@js/components/OverlayContainer";
import { getResourceId } from "@js/selectors/resource";

import Form from "@rjsf/core";

const jsonSchema = {
  title: "Input Data",
  type: "object",
  required: [],
  properties: {
    input: {
      type: "string",
    },
    PLD: {
      in: "query",
      type: "boolean",
      title: "PLD plot",
      description: "Whether a detection plot should be provided.",
      default: true,
    },
    PLQ: {
      in: "query",
      type: "boolean",
      title: "PLD plot",
      description: "Whether a quantification plot should be provided.",
      default: true,
    },
  },
};

const uiSchema = {
    input: {
      "ui:widget": "hidden",
    },
    PLD: {
      "ui:widget": "radio",
    },
    PLQ: {
      "ui:widget": "radio",
    },
  };

const log = (type) => console.log.bind(console, type);

async function getModels() {
  return fetch(
    "/proxy/?url=" + encodeURIComponent("http://172.18.0.1:5000/v2/models/")
  )
    .then((response) => response.json())
    .catch(function (error) {
      console.log("Show error notification!");
      return Promise.reject(error);
    });
}

function triggerAiInference({ formData }) {
  console.info(`sending form data ...`);

  const headers = {
    "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  };

  const data = assign(formData, { accept: "application/json" });
  const url =
    "http://172.18.0.1:5000/v2/models/litter_assessment_service/predict";
  axios.post(url, data, headers).then((response) => {
    console.info(`receiving response: ${JSON.stringify(response)}`);

    // TODO handle jobID
  });

  return setTimeout(() => console.log("release"), 3000);
}

function toWmsUrl(wmsLayerOptions, securityToken) {
  const bounds = wmsLayerOptions.bbox.bounds;
  const bbox = [bounds.minx, bounds.miny, bounds.maxx, bounds.maxy];
  const queryParameters = assign(
    {},
    {
      LAYERS: wmsLayerOptions.name,
      STYLES: wmsLayerOptions.style || "",
      FORMAT: "image/png8",
      TRANSPARENT: true,
      SERVICE: "WMS",
      REQUEST: "GetMap",
      WIDTH: "1000",
      HEIGHT: "600",
      BBOX: bbox,
      TILED: false,
      VERSION: "1.3.0",
    }
  );

  const url = wmsLayerOptions.url;
  addAuthenticationParameter(url, queryParameters, securityToken);
  const query = new URLSearchParams(queryParameters);
  return new URL(`${url}?${query}`).toString();
}

function LitterAssessment({ enabled, wmsLayers = [], securityToken, onClose }) {
  const [models, setModels] = useState([
    { name: "model a" },
    { name: "model b" },
  ]);
  const [formData, setFormData] = React.useState(null);

  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    getModels()
      .then((response) => setModels(response.models))
      .catch((error) => {
        console.log(error);
      });
  }, []);


  // https://github.com/rjsf-team/react-jsonschema-form/blob/v4.2.3/docs/api-reference/form-props.md#children

  const wmsLayer = wmsLayers?.length
    ? toWmsUrl(wmsLayers[0], securityToken)
    : "";

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
            <label>
              <Message msgId="gnviewer.litterassessment.model" />
            </label>

            <select>
              {models.map((model) => (
                <option>{model.name}</option>
              ))}
            </select>

            <Form
              schema={jsonSchema}
              uiSchema={uiSchema}
              formData={{input: wmsLayer}}
              onChange={(e) => setFormData(e.formData)}
              onSubmit={(e) => triggerAiInference(e)}
              onError={log("errors")}
            >
              <div>
                <button type="submit" onClick="triggerAiInference">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </OverlayContainer>
  );
}

LitterAssessment.propTypes = {
  enabled: PropTypes.bool,
  onClose: PropTypes.func,
};

LitterAssessment.defaultProps = {
  enabled: false,
  onClose: () => {},
};

const LitterAssessmentPlugin = connect(
  createSelector(
    [
      (state) => state?.controls?.rightOverlay?.enabled === "LitterAssessment",
      (state) => state.layers,
      (state) => state.security,
    ],
    (enabled, layers, security) => ({
      enabled,
      wmsLayers:
        layers?.flat?.filter(
          (l) => l.type === "wms" && (!l.group || l.group !== "background")
        ) || [],
      securityToken: security.token,
    })
  ),
  {
    onClose: setControlProperty.bind(null, "rightOverlay", "enabled", false),
  }
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
    enabled: resourceId !== undefined,
  })),
  {
    onClick: setControlProperty.bind(
      null,
      "rightOverlay",
      "enabled",
      "LitterAssessment"
    ),
  }
)(LitterAssessmentButton);

export default createPlugin("LitterAssessment", {
  component: LitterAssessmentPlugin,
  containers: {
    ActionNavbar: {
      name: "LitterAssessment",
      Component: ConnectedLitterAssessmentButton,
    },
  },
  epics: {},
  reducers: {
    controls,
  },
});
