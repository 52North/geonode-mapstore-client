(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4618],{91753:(e,t,o)=>{"use strict";o.d(t,{Z:()=>R});var r=o(45697),n=o.n(r),a=o(67294),i=o.n(a),p=o(10928),s=o.n(p),c=o(14293),u=o.n(c),l=o(56307),f=o.n(l),d=(o(21787),o(52259)),y=function(e){return[e.getWest(),e.getSouth(),e.getEast(),e.getNorth()]};function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function w(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function g(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?w(Object(o),!0).forEach((function(t){j(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function P(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function j(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}f().Draw.Polygon.prototype._calculateFinishDistance=function(e){if(this._markers.length>0){var t=this._map.latLngToContainerPoint(this._markers[0].getLatLng()),o=this._map.latLngToContainerPoint(this._markers[this._markers.length-1].getLatLng()),r=new(f().Marker)(e,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset}),n=this._map.latLngToContainerPoint(r.getLatLng());return Math.min(t.distanceTo(n),o.distanceTo(n))}return 1/0};var S=o(27418),C=o(86267),E=C.reproject,D=C.reprojectBbox,M=C.calculateCircleCoordinates,G=C.reprojectGeoJson,k=o(80379).pointToLayer,_=Math.PI/180,I=function(e,t,o){if("EPSG:4326"===o)return{center:t,srs:o,radius:e};var r=e/40075017*360/Math.cos(_*t[1]),n=E(t,"EPSG:4326",o);if(r){var a=E([t[0]+r,t[1]],"EPSG:4326",o);return{center:n,srs:o,radius:Math.sqrt(Math.pow(n.x-a.x,2)+Math.pow(n.y-a.y,2))}}return{center:n,srs:o,radius:e}},x=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"EPSG:4326";if("EPSG:4326"===o||void 0===e)return{center:t,projection:o,radius:e};var r=E({x:t.lng,y:t.lat},o,"EPSG:4326");if(void 0===e)return{center:r,projection:o,radius:e};var n=E([t.lng+e,t.lat],o,"EPSG:4326"),a=Math.sqrt(Math.pow(r.x-n.x,2)+Math.pow(r.y-n.y,2)),i=a*Math.cos(_*r.y)*40075017/360;return{center:r,projection:"EPSG:4326",radius:i}},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(i,e);var t,o,r,n,a=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(n){var o=L(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return P(this,e)});function i(){var e;h(this,i);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return j(O(e=a.call.apply(a,[this].concat(o))),"onDrawStart",(function(){e.drawing=!0})),j(O(e),"onDrawCreated",(function(t){e.drawing=!1;var o,r=t.layer,n=r.toGeoJSON();"marker"===t.layerType?o=f().latLngBounds(n.geometry.coordinates,n.geometry.coordinates):(r._map||(r._map=e.props.map,r._renderer=e.props.map.getRenderer(r),r._project()),o=r.getBounds());var a=y(o),i=o.getCenter();i=[i.lng,i.lat];var p=n.geometry.coordinates,s="EPSG:4326",c=n.geometry.type,u=r.getRadius?r.getRadius():0;if("circle"===t.layerType){n.projection="EPSG:4326",a=D(a,"EPSG:4326",s="EPSG:3857");var l=I(r._mRadius,i,s);i=l.center,u=l.radius,p=M(i,u,100),n.radius=r.getRadius?r.getRadius():0,i=[i.x,i.y],c="Polygon"}e.drawLayer.addData(n);var d={type:c,extent:a,center:i,coordinates:p,radius:u,projection:s};e.props.options&&e.props.options.stopAfterDrawing&&e.props.onChangeDrawingStatus("stop",e.props.drawMethod,e.props.drawOwner);var m=e.convertFeaturesToGeoJson(t.layer,e.props);e.props.onEndDrawing(d,e.props.drawOwner),e.props.onGeometryChanged([m],e.props.drawOwner,e.props.options&&e.props.options.stopAfterDrawing?"enterEditMode":"")})),j(O(e),"onUpdateGeom",(function(t,o){var r=e.convertFeaturesToGeoJson(t,o);o.onGeometryChanged([r],o.drawOwner)})),j(O(e),"addLayer",(function(t){e.clean();var o=f().geoJson(null,{pointToLayer:function(e,t){var o=x(e.radius,t,e.projection),r=o.center,n=o.radius;return f().circle(r,n||5)},style:function(e){return t.style&&t.style[e.geometry.type]||{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}}});e.props.map.addLayer(o),t.features&&t.features.length>0&&o.addData(e.convertFeaturesPolygonToPoint(t.features,e.props.drawMethod)),e.drawLayer=o})),j(O(e),"addGeojsonLayer",(function(t){var o=t.features,r=t.projection,n=t.style;e.clean();var a=f().geoJson(o,{style:function(e){return e.style||n},pointToLayer:function(e,t){var o=E({x:t.lng,y:t.lat},r,"EPSG:4326");return k(f().latLng(o.y,o.x),e,n)}});e.drawLayer=a.addTo(e.props.map)})),j(O(e),"replaceFeatures",(function(t){e.drawLayer?(e.drawLayer.clearLayers(),"Circle"===e.props.drawMethod?(e.drawLayer.options.pointToLayer=function(e,t){var o=x(e.radius,t,e.projection),r=o.center,n=o.radius;return f().circle(r,n||5)},e.drawLayer.options.style={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}):e.drawLayer.options.pointToLayer=function(e,o){var r=E({x:o.lng,y:o.lat},t.options&&t.options.featureProjection||"EPSG:4326","EPSG:4326");return k(f().latLng(r.y,r.x),e,t.style)},e.drawLayer.addData(e.convertFeaturesPolygonToPoint(t.features,e.props.drawMethod))):e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style})})),j(O(e),"endDrawing",(function(t){e.replaceFeatures(t);var o=s()(t.features);"Circle"!==e.props.drawMethod||!o||u()(o.center)||u()(o.radius)?o&&e.props.onEndDrawing(o,e.props.drawOwner):e.props.onEndDrawing(g(g({},o),{},{coordinates:M(o.center,o.radius,100)}),e.props.drawOwner)})),j(O(e),"addDrawInteraction",(function(t){e.removeAllInteractions(),"Point"===t.drawMethod||"MultiPoint"===t.drawMethod?e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style}):e.addLayer(t),e.props.map.on("draw:created",e.onDrawCreated,O(e)),e.props.map.on("draw:drawstart",e.onDrawStart,O(e)),"LineString"===t.drawMethod||"Bearing"===t.drawMethod||"MultiLineString"===t.drawMethod?e.drawControl=new(f().Draw.Polyline)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2},showLength:!1,repeatMode:!0,icon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"Polygon"===t.drawMethod||"MultiPolygon"===t.drawMethod?e.drawControl=new(f().Draw.Polygon)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5],guidelineDistance:5},allowIntersection:!1,showLength:!1,showArea:!1,repeatMode:!0,icon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"BBOX"===t.drawMethod?e.drawControl=new(f().Draw.Rectangle)(e.props.map,{draw:!1,shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5]},repeatMode:!0,icon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"Circle"===t.drawMethod?e.drawControl=new(f().Draw.Circle)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5]},showRadius:!1,repeatMode:!0}):"Point"!==t.drawMethod&&"MultiPoint"!==t.drawMethod||(e.drawControl=new(f().Draw.Marker)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2},repeatMode:!0})),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.disable(),e.drawControl.enable()})),j(O(e),"addDrawOrEditInteractions",(function(t){var o=[];t.features.map((function(e){var t;e&&e.geometry&&e.geometry.type&&!(0,d.isSimpleGeomType)(e.geometry.type)&&("GeometryCollection"===e.geometry.type?(t=e.geometry.geometries.map((function(t){return t.coordinates.map((function(o,r){return{type:"Feature",properties:g({},e.properties),id:t.type+r,geometry:{coordinates:o,type:(0,d.getSimpleGeomType)(t.type)}}}))})),o.push({type:"FeatureCollection",features:t})):(t=e.geometry.coordinates.map((function(t,o){return{type:"Feature",properties:g({},e.properties),id:e.geometry.type+o,geometry:{coordinates:t,type:(0,d.getSimpleGeomType)(e.geometry.type)}}})),o.push({type:"FeatureCollection",features:t})))}));var r=S({},t,{features:o.length>0?o:[{}]});e.drawLayer?(e.drawLayer.clearLayers(),e.drawLayer.addData(e.convertFeaturesPolygonToPoint(r.features,r.drawMethod))):e.addGeojsonLayer({features:t.features&&t.options.featureProjection&&"EPSG:4326"!==t.options.featureProjection?t.features.map((function(e){return G(e,t.options.featureProjection,"EPSG:4326")})):t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style}),t.options.editEnabled&&e.addEditInteraction(r),t.options.drawEnabled&&e.addDrawInteraction(r)})),j(O(e),"addEditInteraction",(function(t){e.clean(),e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:S({},t.style,{poly:{icon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(f().DivIcon)({iconSize:new(f().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}})});var o=e.drawLayer.getLayers();setTimeout((function(){o.forEach((function(o){o.getLayers&&o.getLayers()&&o.getLayers().length?o.getLayers().forEach((function(o){o.on("edit",(function(o){return e.onUpdateGeom(o.target,t)})),o.on("moveend",(function(o){return e.onUpdateGeom(o.target,t)})),o.editing&&o.editing.enable()})):(o.on("edit",(function(o){return e.onUpdateGeom(o.target,t)})),o.on("moveend",(function(o){return e.onUpdateGeom(o.target,t)})),o.editing&&o.editing.enable())}))}),0),e.editControl=new(f().Control.Draw)({edit:{featureGroup:e.drawLayer,poly:{allowIntersection:!1},edit:!0},draw:{polygon:{allowIntersection:!1,showArea:!0}}}),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.disable()})),j(O(e),"removeAllInteractions",(function(){e.removeEditInteraction(),e.removeDrawInteraction()})),j(O(e),"removeDrawInteraction",(function(){null!==e.drawControl&&void 0!==e.drawControl&&(e.props.options&&e.props.options.stopAfterDrawing&&(e.drawControl.setOptions({repeatMode:!1}),e.props.onDrawStopped()),e.drawControl.disable(),e.drawControl=null,e.props.map.off("draw:created",e.onDrawCreated,O(e)),e.props.map.off("draw:drawstart",e.onDrawStart,O(e)),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.enable())})),j(O(e),"removeEditInteraction",(function(){e.drawLayer&&(e.drawLayer.getLayers().forEach((function(e){e.getLayers&&e.getLayers()&&e.getLayers().length?e.getLayers().forEach((function(e){e.off("edit"),e.off("moveend"),e.editing&&e.editing.disable()})):(e.off("edit"),e.off("moveend"),e.editing&&e.editing.disable())})),e.editControl=null),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.enable()})),j(O(e),"cleanAndStop",(function(){e.removeAllInteractions(),e.drawLayer&&(e.drawLayer.clearLayers(),e.props.map.removeLayer(e.drawLayer),e.drawLayer=null)})),j(O(e),"clean",(function(){e.removeEditInteraction(),e.removeDrawInteraction(),e.drawLayer&&(e.drawLayer.clearLayers(),e.props.map.removeLayer(e.drawLayer),e.drawLayer=null)})),j(O(e),"convertFeaturesPolygonToPoint",(function(e,t){return"Circle"===t?e.map((function(e){var t=void 0!==e.center&&void 0!==e.radius?x(e.radius,{lat:e.center.y,lng:e.center.x},e.projection):e,o=t.center,r=t.projection,n=t.radius;return g(g({},e),{},{coordinates:o?[o.x,o.y]:e.coordinates,center:o||e.center,projection:r||e.projection,radius:void 0!==n?n:e.radius,type:"Point"})})):e})),j(O(e),"convertFeaturesToGeoJson",(function(t,o){var r;if((0,d.isSimpleGeomType)(o.drawMethod))r=t.toGeoJSON().geometry;else{if("GeometryCollection"===o.drawMethod)return{type:"GeometryCollection",geometries:e.drawLayer.getLayers().map((function(e){return e.toGeoJSON()})).map((function(e){return"FeatureCollection"===e.type?{type:"Multi"+e.features[0].geometry.type,coordinates:e.features.map((function(e){return e.geometry.coordinates}))}:{type:e.geometry.type,coordinates:e.geometry.coordinates}}))};var n=e.drawLayer.getLayers().map((function(e){return e.toGeoJSON()}));r={type:o.drawMethod,coordinates:n.reduce((function(e,t){return e.concat([t.geometry.coordinates])}),[])}}return S({},t.toGeoJSON(),{geometry:r})})),e}return t=i,(o=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=!(!this.props.messages&&!this.context.messages)&&this.context.messages.drawLocal;if(t&&(f().drawLocal=t),this.props.drawStatus!==e.drawStatus||"replace"===e.drawStatus||this.props.drawMethod!==e.drawMethod||this.props.features!==e.features)switch(e.drawStatus){case"create":this.addGeojsonLayer({features:e.features,projection:e.options&&e.options.featureProjection||"EPSG:4326",style:e.style&&e.style[e.drawMethod]||e.style});break;case"start":this.addDrawInteraction(e);break;case"drawOrEdit":this.addDrawOrEditInteractions(e);break;case"stop":this.removeAllInteractions();break;case"replace":this.replaceFeatures(e);break;case"clean":this.cleanAndStop();break;case"endDrawing":this.endDrawing(e);break;default:return}}},{key:"render",value:function(){return null}}])&&v(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),i}(i().Component);j(T,"displayName","DrawSupport"),j(T,"propTypes",{map:n().object,drawOwner:n().string,drawStatus:n().string,drawMethod:n().string,options:n().object,features:n().array,onChangeDrawingStatus:n().func,onGeometryChanged:n().func,onDrawStopped:n().func,onEndDrawing:n().func,messages:n().object,style:n().object}),j(T,"defaultProps",{map:null,drawOwner:null,drawStatus:null,drawMethod:null,features:null,options:{stopAfterDrawing:!0},onChangeDrawingStatus:function(){},onGeometryChanged:function(){},onDrawStopped:function(){},onEndDrawing:function(){},style:{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1,editing:{fill:1}}});const R=T},67465:(e,t,o)=>{"use strict";o.d(t,{Z:()=>C});var r=o(67294),n=o.n(r),a=o(73935),i=o.n(a),p=o(45697),s=o.n(p),c=o(56307),u=o.n(c),l=o(47037),f=o.n(l),d=o(25064),y=o(21751);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function w(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function g(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?w(Object(o),!0).forEach((function(t){j(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function P(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function j(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var S=function(e,t){var o=new MutationObserver((function(){e.update()}));e.once("remove",(function(){o&&o.disconnect(),o=null})),o.observe(t,{attributes:!0,childList:!0,subtree:!0})},C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(s,e);var t,o,r,a,p=(r=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(a){var o=L(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return P(this,e)});function s(){var e;h(this,s);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return j(O(e=p.call.apply(p,[this].concat(o))),"updatePopup",(function(){(e._popups||[]).map((function(e){return e.popup.update()}))})),j(O(e),"popupClose",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.target,r=(o=void 0===o?{}:o).options,n=(r=void 0===r?{}:r).id;n&&e.props.onPopupClose(n)})),j(O(e),"preparePopups",(function(){var t=e.props,o=t.popups,r=void 0===o?[]:o,n=t.map,a=e.props.map.getSize();return(e._popups||[]).forEach((function(t){var o=t.popup;o.off("remove",e.popupClose),o&&e.props.map.removeLayer(o)})),e._popups=r.map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=.9*a.x,r=.9*a.y,i=t.id,p=t.position.coordinates,s=t.component,c=t.content,l=t.className,f=t.maxWidth,y=void 0===f?o:f,m=t.maxHeight,w=void 0===m?r:m,h=t.autoPan,v=void 0===h||h,b=t.offset,P=void 0===b?[0,7]:b,O=y>o?o:y,L=w>r?r:w,j=d.fH(i,l);j.setAttribute("style","max-width: ".concat(O,"px; max-height: ").concat(L,"px")),d.R3(j,c);var C=u().popup({id:i,autoClose:!1,closeOnClick:!1,autoPan:v,autoPanPadding:u().point(70,70),maxWidth:O,maxHeight:L,className:"ms-leaflet-popup",offset:P}).setContent(j);return C.once("remove",e.popupClose),s&&S(C,j),C.setLatLng(p),n.addLayer(C),g({popup:C},t)})),e._popups})),j(O(e),"stopPropagationOnMouseMove",(function(e){e.stopPropagation()})),j(O(e),"fireMouseOutEvent",(function(){e.props.map.fireEvent("mouseout")})),e}return t=s,(o=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&(this.props.map.getContainer().querySelector(".leaflet-popup-pane").addEventListener("mousemove",this.stopPropagationOnMouseMove),this.props.map.getContainer().querySelector(".leaflet-popup-pane").addEventListener("mouseenter",this.fireMouseOutEvent))}},{key:"componentDidMount",value:function(){this.props.map&&this.props.map.on("resize",this.updatePopup)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){var e=this;(this._popups||[]).forEach((function(t){var o,r,n=t.popup;n.off("remove",e.popupClose),n&&(null===(o=e.props.map)||void 0===o||null===(r=o.removeLayer)||void 0===r||r.call(o,n))})),this.props.map&&(this.props.map.off("resize",this.updatePopup),this.props.map.getContainer().removeEventListener("mousemove",this.stopPropagationOnMouseMove),this.props.map.getContainer().removeEventListener("mouseenter",this.fireMouseOutEvent))}},{key:"renderPopups",value:function(){return this.preparePopups().filter((function(e){return!!e.component})).map((function(e){var t=e.popup,o=e.props,r=void 0===o?{}:o,a=e.component,p=e.id,s=t.getContent(),c=f()(a)&&y.default[a]||a,u=n().isValidElement(c)&&c||n().createElement(c,r);return s?i().createPortal(u,s,p):null}))}},{key:"render",value:function(){return n().createElement("div",null,this.renderPopups())}}])&&v(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(n().Component);j(C,"propTypes",{map:s().object,popups:s().arrayOf(s().object),onPopupClose:s().func}),j(C,"defaultProps",{popups:[],onPopupClose:function(){}})},21751:(e,t,o)=>{"use strict";o.r(t),o.d(t,{IDENTIFY_POPUP:()=>O,default:()=>L});var r=o(67294),n=o.n(r),a=o(73014),i=o(11196),p=o(18093),s=o(33664),c=o(22222),u=o(7877),l=o(21914),f=o(42872),d=o(1469),y=o.n(d),m=o(52353),w=o.n(m),g=o(79870),h=o(827),v=(0,p.compose)((0,s.connect)((0,c.P1)(u.Qf,(function(e){return{index:e}})),{setIndex:l.oO}),(0,p.defaultProps)({index:0,responses:[]})),b=(0,c.P1)([u.q7,u.o9,u.OK,u.us,u.x0,h.hp,u.vR],(function(e,t,o,r,n,a,i){return{responses:e,validResponses:t,requests:o,format:r,showEmptyMessageGFI:n,missingResponses:(o||[]).length-(e||[]).length,renderValidOnly:a,loaded:i}}));const P=(0,p.compose)((0,s.connect)(b),(0,p.defaultProps)({responses:[],container:function(e){var t=e.index,o=e.children;return n().createElement(n().Fragment,null,y()(o)&&o[t]||o)},header:g.Z}),v,i.Yy,i.mI,(0,a.Z)((function(e){var t=e.loaded;return w()(t)})))(f.Z);var O="identify";const L={identify:P}},25064:(e,t,o)=>{"use strict";o.d(t,{fH:()=>a,FP:()=>i,R3:()=>p});var r=o(55877),n=o.n(r),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",o=document.createElement("div");return o.setAttribute("id",e+"-map-popup"),o.setAttribute("class",t),o},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("<")},p=function(e,t){if(!t)return e;if(t instanceof Node){var o=document.createDocumentFragment();o.appendChild(t),e.appendChild(o)}else i(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}}}]);