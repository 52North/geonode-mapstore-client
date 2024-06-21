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

import {
  parseDevHostname,
  getGeoNodeLocalConfig,
} from '@js/utils/APIUtils';
import Button from "@js/components/Button";
import OverlayContainer from "@js/components/OverlayContainer";
import { getResourceId } from "@js/selectors/resource";

import Form from "@rjsf/core";


const log = (type) => console.log.bind(console, type);

async function getModels() {
  const configPath = "litterassessment/litterassessmentConfig.json";
  const configUrl =
    getGeoNodeLocalConfig("geoNodeSettings.staticPath", "/static/") +
    configPath;
  return axios.get(configUrl);
}

function triggerAiInference({ formData }, model) {

  const headers = {
    "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    Accept: "application/json",
  };

  const data = assign(formData, {
    Accept: "application/json",
  });

  const url = parseDevHostname("/litterassessment/")
  return axios
    .post(url, formData, headers)
    .then((response) => {
      console.info(`receiving response: ${JSON.stringify(response)}`);

      // TODO handle jobID
    })
    .catch((err) => console.error("could not trigger litter assessment!", err));
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

function LitterAssessment({ enabled, pk, wmsLayers = [], securityToken, onClose }) {
  const [models, setModels] = useState({
    "model a": { jsonSchema: {}, uiSchema: {} },
    "model b": { jsonSchema: {}, uiSchema: {} },
  });

  const [selectedModel, setSelectedModel] = useState("");

  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    getModels()
      .then((response) => {
        const models = response.data.models; 
        setSelectedModel(Object.keys(models)[0] || null)
        setModels(models);
      })
      .catch((err) => {
        console.error("could get models from config!", err);
      });
  }, []);

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
            <label for="model-select">
              <Message msgId="gnviewer.litterassessment.model" />
            </label>

            <select id="model-select"
              onChange={(event) => setSelectedModel(event.target.value)}
              value={selectedModel}
            >
              {Object.keys(models)
                .map((modelName, index) => (
                  <option key={index} value={modelName}>
                    {modelName}
                  </option>
                ))}
            </select>

            <Form
              schema={models[selectedModel]?.jsonSchema || {}}
              uiSchema={models[selectedModel]?.uiSchema || {}}
              formData={{ imageUrl: wmsLayer, pk }}
              onSubmit={(e) => triggerAiInference(e, models[selectedModel])}
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
      (state) => state?.gnresource?.data.pk || null,
      (state) => state.layers,
      (state) => state.security,
    ],
    (enabled, pk, layers, security) => ({
      enabled,
      pk,
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
