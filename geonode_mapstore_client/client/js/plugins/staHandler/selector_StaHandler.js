//import {get} from 'lodash';

export const staLayerSelector = (state) => {
    return state.layers.flat.filter(layer => filterSTA(layer,'https://sta-canwin.ad.umanitoba.ca'));
};

function filterSTA(layer, filterProperty) {
    if (layer.url){
        if (layer.url.startsWith(filterProperty)) {
            return layer;
        }
    }
}
