
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Glyphicon } from 'react-bootstrap';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { setControlProperty } from '@mapstore/framework/actions/controls';
import Message from '@mapstore/framework/components/I18N/Message';
import controls from '@mapstore/framework/reducers/controls';
import Button from '@js/components/Button';
import OverlayContainer from '@js/components/OverlayContainer';
import {
    getResourceId,
} from '@js/selectors/resource';
import Form from '@rjsf/core';

const schema = {
    title: 'Input Data',
    type: 'object',
    required: [],
    properties: {
      PLD: {
        in: "query",
        type: "boolean",
        title: "PLD plot",
        description: "Whether a detection plot should be provided.",
        default: true
      },
      PLQ: {
        in: "query",
        type: "boolean",
        title: "PLD plot",
        description: "Whether a quantification plot should be provided.",
        default: true
      }
    },
  };



async function getModels() {
    return fetch("/proxy/?url=" + encodeURIComponent("http://172.18.0.1:5000/v2/models/"))
        .then(response => response.json())
        .catch(
            function (error) {
              console.log('Show error notification!')
              return Promise.reject(error)
            }
          );
}


function LitterAssessment({
    enabled,
    onClose
}) {

    const [models, setModels] = useState([{name: "model a"}, {name: "model b"}]);

    const isMounted = useRef(false);
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        getModels().then(response => setModels(response.models)).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <OverlayContainer
            enabled={enabled}
            className="gn-overlay-wrapper"
        >
            <section
                className="gn-litterassessment-panel"
            >
                <div className="gn-litterassessment-panel-head">
                    <h2><Message msgId="gnviewer.litterassessment.title" /></h2>
                    <Button className="square-button" onClick={() => onClose()}>
                        <Glyphicon glyph="1-close" />
                    </Button>
                </div>
                <div className="gn-litterassessment-panel-body">
                    <Message msgId="gnviewer.litterassessment.description" />
                    <div>
                        <label><Message msgId="gnviewer.litterassessment.model" /></label>
                        <select>
                            {models.map(model => <option>{model.name}</option>)}
                        </select>
                        <Form schema={schema} />,
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
    createSelector([
        state => state?.controls?.rightOverlay?.enabled === 'LitterAssessment'
    ], (enabled) => ({
        enabled
    })),
    {
        onClose: setControlProperty.bind(null, 'rightOverlay', 'enabled', false),
    }
)(LitterAssessment);


function LitterAssessmentButton({
    enabled,
    variant,
    onClick,
    size
}) {
    return enabled
        ? <Button
            variant={variant || "primary"}
            size={size}
            onClick={() => onClick()}
        >
            <Message msgId="gnviewer.litterassessment.title"/>
        </Button>
        : null
    ;
}

const ConnectedLitterAssessmentButton = connect(
    createSelector(
        getResourceId,
        (resourceId) => ({
            enabled: resourceId !== undefined
        })
    ),
    {
        onClick: setControlProperty.bind(null, 'rightOverlay', 'enabled', 'LitterAssessment')
    }
)((LitterAssessmentButton));

export default createPlugin('LitterAssessment', {
    component: LitterAssessmentPlugin,
    containers: {
        ActionNavbar: {
            name: 'LitterAssessment',
            Component: ConnectedLitterAssessmentButton
        }
    },
    epics: {},
    reducers: {
        controls
    }
});