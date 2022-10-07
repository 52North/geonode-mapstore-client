import React, { useState } from 'react';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { Glyphicon } from 'react-bootstrap';
import ResizableModal from '@mapstore/framework/components/misc/ResizableModal';
import Button from '../../MapStore2/web/client/components/misc/Button';

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
                    show={open} 
                    onClose={()=>setOpen(false)}
                >
                    <div>
                        <Button onClick={()=>setOpen(false)}>Close</Button>
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
