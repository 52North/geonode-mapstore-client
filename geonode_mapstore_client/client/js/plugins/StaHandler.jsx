import React, {useEffect, useState} from 'react';
import { createPlugin } from '../../MapStore2/web/client/utils/PluginsUtils';
import { connect } from 'react-redux';
import {staLayerSelector} from './staHandler/selector_StaHandler';
import {getMarkerLayer} from '@mapstore/framework/utils/MapInfoUtils';
import layers from '@mapstore/framework/reducers/layers';
import {addLayer} from '@mapstore/framework/actions/layers';

function STA(props) {
    const [value, setValue] = useState('')
    if (props.staLayers.length > 0) {
        const marker = createMarkerLayer(props.staLayers[0]);
        useEffect(() => {
            props.addLayerAction(marker)
        }, [value]);
    }
    return(
    <div></div>    
    );
}

const createMarkerLayer = (staLayer) => {
    return getMarkerLayer("GetFeatureInfo", {lat:staLayer.bbox.bounds.maxy, lng:staLayer.bbox.bounds.maxx});
}

const StaPlugin = connect((state) => ({
    staLayers: staLayerSelector(state)
}), {
    addLayerAction: addLayer,
}
)(STA)

export default createPlugin('StaHandler', {
    component: StaPlugin,
    reducers: {
        addLayerReducer: layers,
    }
});
