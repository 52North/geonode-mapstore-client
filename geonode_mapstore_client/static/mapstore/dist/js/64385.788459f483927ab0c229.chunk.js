(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[64385],{389912:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r,o=n(667294),i=n(843033);const c=function(e){var t=e.map,n=e.onBoxEnd,c=e.status;return(0,o.useEffect)((function(){"start"===c?(r=new i.Z({condition:function(e){return e.originalEvent.altKey}}),t.addInteraction(r)):"end"===c&&t.removeInteraction(r)}),[c]),(0,o.useEffect)((function(){r&&r.on("boxend",(function(e){n({boxExtent:r.getGeometry().getExtent(),modifiers:{ctrl:e.mapBrowserEvent.pointerEvent.ctrlKey,metaKey:e.mapBrowserEvent.pointerEvent.metaKey}})}))}),[c]),null}},126105:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(667294),o=n.n(r),i=n(973935),c=n.n(i),a=n(675263),u=n.n(a),l=n(193409),p=n(747037),s=n.n(p),f=n(925064),y=n(821751);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new MutationObserver((function(){e.getMap().getSize()&&(e.setPosition(void 0),e.setPosition(n.coordinates))}));return r.observe(t,{attributes:!0,childList:!0,subtree:!0}),r},_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(i){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(){var e;v(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return j(O(e=a.call.apply(a,[this].concat(n))),"onPopupClose",(function(t){e.props.onPopupClose(t)})),j(O(e),"renderPopups",(function(){return e.preparePopups().map((function(t){var n,r=t.popup,i=t.id,a=t.component,u=t.content,l=t.props,p=t.containerStyle,d=r.getElement(),b=s()(a)&&y.default[a]||a;return b?n=o().isValidElement(b)&&b||o().createElement(b,l):u&&(n=f.FP(u)?o().createElement("div",{dangerouslySetInnerHTML:{__html:u}}):u),d&&c().createPortal(o().createElement("div",{className:"map-popup-ol",key:i,onMouseUp:e.convertToClick},o().createElement("div",{className:"ol-popup-content-wrapper"},o().createElement("div",{className:"ol-popup-content",style:p},n)),o().createElement("div",{className:"ol-popup-closer",onClick:function(){return e.onPopupClose(i)}},"x")),d)}))})),j(O(e),"update",(function(){(e._popups||[]).map((function(e){var t=e.popup;t.setElement(t.getElement())}))})),j(O(e),"convertToClick",(function(e){var t=new MouseEvent("click",{bubbles:!0});t.stopPropagation=function(){},e.target.dispatchEvent(t)})),j(O(e),"preparePopups",(function(){var t=e.props,n=t.popups,r=void 0===n?[]:n,o=t.map,i=o.getSize();return(e._popups||[]).forEach((function(e){var t=e.popup,n=e.observer;n&&n.disconnect(),t&&o.removeOverlay(t)})),e._popups=r.map((function(e){var t=Math.round(.9*i[0])-40,n=Math.round(.9*i[1])-40,r=e.id,c=e.position.coordinates,a=e.className,u=e.maxWidth,p=void 0===u?t:u,s=e.maxHeight,y=void 0===s?n:s,d=e.autoPan,b=void 0!==d&&d,v=e.autoPanMargin,h=void 0===v?20:v,g=e.offset,w=void 0===g?[0,0]:g,O=e.autoPanAnimation,P=void 0===O?{duration:200}:O,j=p>t?t:p,_=y>n?n:y,E=f.fH(r,a),k=new l.Z({id:r,element:E,autoPan:b,offset:w,autoPanMargin:h,autoPanAnimation:P,positioning:"bottom-center",className:"ol-overlay-container ol-unselectable",position:c});return o.addOverlay(k),m({popup:k,observer:S(k,E,{coordinates:c}),containerStyle:{maxWidth:j,maxHeight:_}},e)})),e._popups})),j(O(e),"stopPropagationOnPointerMove",(function(e){e.stopPropagation()})),e}return t=u,(n=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().addEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().removeEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"render",value:function(){return o().createElement("div",null,this.renderPopups())}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);j(_,"propTypes",{map:u().object,popups:u().arrayOf(u().object),onPopupClose:u().func}),j(_,"defaultProps",{popups:[],onPopupClose:function(){}})},864385:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ne});var r=n(837101),o=n(675263),i=n.n(o),c=n(957557),a=n.n(c),u=n(418093);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){return(0,u.mapProps)((function(t){return a()(t,e)}))},y={locale:navigator&&navigator.language,formats:{},messages:{},defaultLocale:"en",defaultFormats:{},formatDate:function(e){return e},formatTime:function(e){return e},formatRelative:function(e){return e},formatNumber:function(e){return e},formatPlural:function(e){return e},formatMessage:function(e){return e},formatHTMLMessage:function(e){return e},now:function(){return new Date}},d=n(790596),b=n(145697),m=n(130072),v=n(505904),h=n(722404),g=n(809056),w=n(706909),O=n(667294),P=n.n(O),j=n(51273),S=n(436403),_=n(120767),E=n(898185),k=n(831219),I=n(409371);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function Z(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Z(this,e)});function c(){var e;F(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return A(M(e=i.call.apply(i,[this].concat(n))),"getLayer",(function(){var t;return e.props.map.getLayers().forEach((function(n){e.layersFilter(n)&&(t=n)}),M(e)),t})),A(M(e),"setSelectInteraction",(function(){e._selectInteraction.getActive()||e._selectInteraction.setActive(!0)})),A(M(e),"createSelectInteraction",(function(){e.createStyle(),e._selectInteraction=new j.Z({layers:e.layersFilter,style:e._style,toggleCondition:S.QC}),e._selectInteraction.on("select",e.selectionChange,M(e)),e.props.map.addInteraction(e._selectInteraction)})),A(M(e),"selectionChange",(function(){var t=[];e._selectInteraction.getFeatures().forEach((function(e){t.push(e.getId())})),e.props.updateHighlighted(t,"")})),A(M(e),"cleanSupport",(function(){e._selectInteraction&&e._selectInteraction.getActive()&&(e._selectInteraction.getFeatures().clear(),e.props.updateHighlighted([],""),e._selectInteraction.setActive(!1))})),A(M(e),"layersFilter",(function(t){return e.props.layer&&t.get("msId")===e.props.layer})),A(M(e),"createStyle",(function(){var t=e.props.selectedStyle,n={stroke:new _.default(t.stroke?t.stroke:{color:"blue",width:1}),fill:new E.default(t.fill?t.fill:{color:"blue"})};"Point"===t.type&&(n={image:new I.default(D(D({},n),{},{radius:t.radius||5}))}),e._style=new k.default(n)})),A(M(e),"highlightFeatures",(function(t){var n=e.getLayer(),r=e._selectInteraction.getFeatures();r.clear(),n&&n.getSource().getFeatures().map((function(e){-1!==t.indexOf(e.getId())&&r.push(e)}),M(e))})),e}return t=c,(n=[{key:"componentDidMount",value:function(){this.createSelectInteraction(),"enabled"===this.props.status?this._selectInteraction.setActive(!0):this._selectInteraction.setActive(!1),this.props.features&&this.highlightFeatures(this.props.features)}},{key:"shouldComponentUpdate",value:function(e){var t=this.props;return e.status!==t.status||e.layer!==t.layer||"update"===e.status&&e.features.toString()!==t.features.toString()}},{key:"UNSAFE_componentWillUpdate",value:function(e){switch(e.status){case"enabled":this.setSelectInteraction(e);break;case"disabled":this.cleanSupport();break;case"update":this.highlightFeatures(e.features);break;default:return}}},{key:"componentWillUnmount",value:function(){this._selectInteraction&&(this.cleanSupport(),this._selectInteraction.un("select",this.selectionChange,this),this.props.map.removeInteraction(this._selectInteraction),this._selectInteraction=null,this._style=null)}},{key:"render",value:function(){return null}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(P().Component);A(N,"propTypes",{map:i().object,layer:i().string.isRequired,status:i().oneOf(["disabled","enabled","update"]),updateHighlighted:i().func,selectedStyle:i().object,features:i().array}),A(N,"contextTypes",{messages:i().object}),A(N,"defaultProps",{status:"disabled",updateHighlighted:function(){},selectedStyle:{type:"Point",radius:12,stroke:{width:4,color:"yellow"},fill:{color:"red"}}});var H=n(197016),B=n(429902),U=n(372445),W=n(718369);function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function Q(e,t){if(t&&("object"===K(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return V(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Q(this,e)});function c(){var e;z(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return X(V(e=i.call.apply(i,[this].concat(n))),"addDrawInteraction",(function(t){e.drawInteraction&&e.removeDrawInteraction();var n=new H.Z,r=new B.Z({source:n,zIndex:1e6,style:new k.default({fill:new E.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new _.default({color:"#ffcc33",width:2}),image:new I.default({radius:7,fill:new E.default({color:"#ffcc33"})})})});e.props.map.addLayer(r);var o=new U.ZP({source:n,type:t.selection.geomType,style:new k.default({fill:new E.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new _.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new I.default({radius:5,stroke:new _.default({color:"rgba(0, 0, 0, 0.7)"}),fill:new E.default({color:"rgba(255, 255, 255, 0.2)"})})})});o.on("drawstart",(function(t){e.sketchFeature=t.feature,n.clear()})),o.on("drawend",(function(){e.updateSelectionState()})),e.props.map.addInteraction(o),e.drawInteraction=o,e.selectionLayer=r,e.setDoubleClickZoomEnabled(!1)})),X(V(e),"removeDrawInteraction",(function(){null!==e.drawInteraction&&(e.props.map.removeInteraction(e.drawInteraction),e.drawInteraction=null,e.props.map.removeLayer(e.selectionLayer),e.sketchFeature=null,setTimeout((function(){return e.setDoubleClickZoomEnabled(!0)}),251))})),X(V(e),"updateSelectionState",(function(){if(e.sketchFeature){var t=e.sketchFeature.getGeometry().getCoordinates(),n={geomType:e.props.selection.geomType,point:"Point"===e.props.selection.geomType?[t[0],t[1]]:null,line:"LineString"===e.props.selection.geomType?t.map((function(e){return[e[0],e[1]]})):null,polygon:"Polygon"===e.props.selection.geomType?e.sketchFeature.getGeometry().getLinearRing(0).getCoordinates().map((function(e){return[e[0],e[1]]})):null};e.props.changeSelectionState(n)}})),X(V(e),"setDoubleClickZoomEnabled",(function(t){for(var n=e.props.map.getInteractions(),r=0;r<n.getLength();r++){var o=n.item(r);if(o instanceof W.Z){o.setActive(t);break}}})),e}return t=c,(n=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selection.geomType&&e.selection.geomType!==this.props.selection.geomType&&this.addDrawInteraction(e),e.selection.geomType||this.removeDrawInteraction()}},{key:"render",value:function(){return null}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(P().Component);X(Y,"propTypes",{map:i().object,projection:i().string,selection:i().object,changeSelectionState:i().func}),X(Y,"defaultProps",{selection:{}});var $=n(126105),ee=n(389912),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,u.compose)((0,u.getContext)({intl:i().object}),(0,u.branch)((function(e){return!!e.intl}),r.injectIntl,(0,u.withProps)({intl:y})),(0,u.withPropsOnChange)(["intl"],(function(t){var n=t.intl,r=void 0===n?{}:n;return e.reduce((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return p(p({},e),{},s({},t,r[t]))}),{})})),f(["intl"]))}(["formatNumber"]);const ne={LMap:d.Z,Layer:b.Z,Feature:m.Z,MeasurementSupport:te(v.Z),Overview:h.Z,ScaleBar:g.Z,DrawSupport:w.Z,HighlightFeatureSupport:N,SelectionSupport:Y,PopupSupport:$.Z,BoxSelectionSupport:ee.Z}},925064:(e,t,n)=>{"use strict";n.d(t,{fH:()=>i,FP:()=>c,R3:()=>a});var r=n(455877),o=n.n(r),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",n=document.createElement("div");return n.setAttribute("id",e+"-map-popup"),n.setAttribute("class",t),n},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("<")},a=function(e,t){if(!t)return e;if(t instanceof Node){var n=document.createDocumentFragment();n.appendChild(t),e.appendChild(n)}else c(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}}}]);