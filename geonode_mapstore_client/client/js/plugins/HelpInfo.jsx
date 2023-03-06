import React, { useState } from 'react';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { Glyphicon } from 'react-bootstrap';
import ResizableModal from '@mapstore/framework/components/misc/ResizableModal';
import Button from '../../MapStore2/web/client/components/misc/Button';
import Message from '@mapstore/framework/components/I18N/Message';

import './helpInfo/helpInfo.css';
import layerIcon from './helpInfo/layer.png';
import addLayer from './helpInfo/addLayer.png';
import plus from './helpInfo/plus.png';
import arrow from './helpInfo/arrow.png';
import burger from './helpInfo/burger.png';


/**
 * Plugin for HelpInfo modal
 * @name HelpInfo
 * @class
 * @memberof plugins
 * @example
 */

function HelpModal(props) {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <Button onClick={()=>setOpen(true)} className="square-button" bsStyle={props.bsStyle}>
                <Glyphicon glyph="info-sign"/>
            </Button>
            {
                open && <ResizableModal
                    title={<Message msgId="helpInfo.title" />}
                    show={open} 
                    onClose={()=>setOpen(false)}
                    fitContent={true}
                >
                    <div className='helpInfoModal'>
                        <h1> {<Message msgId="helpInfo.header"/>} </h1>
                        <p>
                            {<Message msgId="helpInfo.quickstart1" />} 
                            <img src={layerIcon} className="icon"></img> 
                            {<Message msgId="helpInfo.quickstart2"/>} 
                            <img src={addLayer} className="icon"></img>
                            {<Message msgId="helpInfo.quickstart3"/>} 
                            <img src={plus} className="icon"></img>
                            {<Message msgId="helpInfo.quickstart4"/>} 
                            <img src={arrow} className="icon"></img>
                            {<Message msgId="helpInfo.quickstart5"/>}
                            <img src={burger} className="icon"></img>
                            {<Message msgId="helpInfo.quickstart6"/>} <a href='https://canwin-public-docs.readthedocs.io/en/latest/CanWIN_GeoNode_Guide/>'>https://canwin-public-docs.readthedocs.io/en/latest/CanWIN_GeoNode_Guide/.</a>
                        </p>
                        <div className='closeButton'>
                            <Button onClick={()=>setOpen(false)}>
                                {<Message msgId="close"/>}
                            </Button>
                        </div>

                    </div>
                </ResizableModal>
            }
        </React.Fragment>
    )
}

export default createPlugin('HelpInfo', {
    component: HelpModal,
    containers: {
        Toolbar: {
            name: 'helpInfo',
            position: 1,
            tool: true,
            priority: 1,
        }
    },    
    epics: {
    },
    reducers: {
    }
});
