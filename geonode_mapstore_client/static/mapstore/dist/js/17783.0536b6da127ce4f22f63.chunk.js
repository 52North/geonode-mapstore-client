(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[17783],{352595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(461365).Z)(r(480681).aV)},694745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(124852),o=r.n(n),i=r(294184),a=r.n(i),l=r(480681),c=r(807472),s=r(80717),u=r(867076),p=r(819081),f=r.n(p),y=r(975480),d={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},m={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const b=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,i=e.loadingText,u=e.onClose,p=void 0===u?function(){}:u,b=e.title,v=void 0===b?"":b,g=e.clickOutEnabled,h=void 0===g||g,O=e.showClose,w=void 0===O||O,P=e.disabledClose,S=void 0!==P&&P,j=e.showFullscreen,E=void 0!==j&&j,C=e.fullscreenType,L=void 0===C?"full":C,T=e.buttons,N=void 0===T?[]:T,k=e.size,Z=void 0===k?"":k,D=e.bodyClassName,x=void 0===D?"":D,z=e.children,_=e.draggable,I=void 0!==_&&_,A=e.fullscreenState,G=e.onFullscreen,M=e.fade,U=void 0!==M&&M,R=e.fitContent,B=e.modalClassName,F=void 0===B?"":B,H=e.dialogClassName,W=void 0===H?"":H,J=e.enableFooter,K=void 0===J||J,X=d[Z]||"",q=E&&"expanded"===A&&m.className[L]||"",V=r?o().createElement("div",{className:"modal-fixed ".concat(F," ")+(I?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:h?p:function(){},containerClassName:"ms-resizable-modal",draggable:I,modal:!0,className:a()("modal-dialog modal-content",X,q,W,{"ms-fit-content":R})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},v),E&&m.className[L]&&o().createElement(l.gG,{className:"ms-header-btn",onClick:function(){return G("expanded"===A?"collapsed":"expanded")},glyph:m.glyph[A][L]}),w&&p&&o().createElement(l.gG,{glyph:"1-close",className:"ms-header-btn",onClick:p,disabled:S}))),o().createElement("div",{role:"body",className:x},z),K&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(y.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?i:null),o().createElement(s.Z,{buttons:N})))):null;return U?o().createElement(f(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},V):V}))},5993:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(675263),o=r.n(n),i=r(984596),a=r.n(i),l=r(867076),c=r(86638),s=["locale"];function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const d=function(e){return(0,l.compose)((0,l.getContext)({locale:o().string}),(0,l.mapProps)((function(t){var r=t.locale,n=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,s);return f(f({},n),a()(e).reduce(function(e,t){return function(){var r=arguments.length>1?arguments[1]:void 0;return f(f({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},y({},r,e[r]&&(0,c.MZ)(t,e[r])))}}(n,r),{}))})))}},979105:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(867076);const o=function(e,t,r){return(0,n.branch)((function(){return!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})[t]}),(0,n.withState)(e,t,r))}},75927:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(513218),o=r.n(n),i=r(124852),a=r.n(i),l=r(480681),c=r(805346),s=r(815135),u=r(898631);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var f=["settings","element","tabs","activeTab","width","groups","isLocalizedLayerStylesEnabled","setActiveTab","onUpdateParams","onRetrieveLayerData","realtimeUpdate"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(null,arguments)}var d=(0,s.Z)(l.LY);const m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.settings,r=e.element,n=void 0===r?{}:r,i=e.tabs,s=void 0===i?[]:i,m=e.activeTab,b=e.width,v=e.groups,g=e.isLocalizedLayerStylesEnabled,h=e.setActiveTab,O=void 0===h?function(){}:h,w=e.onUpdateParams,P=void 0===w?function(){}:w,S=e.onRetrieveLayerData,j=void 0===S?function(){}:S,E=e.realtimeUpdate,C=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,f);return a().createElement(l.X2,{key:"ms-toc-settings-navbar",className:"ms-row-tab"},a().createElement(l.JX,{xs:12},a().createElement(l.JL,{bsStyle:"tabs",activeKey:m,justified:!0},s.map((function(e){return a().createElement(d,{key:"ms-tab-settings-"+e.id,tooltip:a().createElement(c.Z,{msgId:e.tooltipId}),eventKey:e.id,onClick:function(){return O(e.id)}},a().createElement(l.gG,{glyph:e.glyph}))})))),a().createElement(l.JX,{xs:12},s.filter((function(e){return e.id&&e.id===m})).filter((function(e){return e.Component})).map((function(e){var r,i;return a().createElement(e.Component,y({},C,{key:"ms-tab-settings-body-"+e.id,containerWidth:b,element:n,groups:v,nodeType:t.nodeType,settings:t,retrieveLayerData:j,isLocalizedLayerStylesEnabled:g,projection:null===(r=C.map)||void 0===r?void 0:r.projection,isCesiumActive:(null===(i=C.map)||void 0===i?void 0:i.visualizationMode)===u.nU._3D,onChange:function(e,t){return o()(e)?P(e,E):P((r={},i=t,(n=function(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}(n=e))in r?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r),E);var r,n,i}}))}))))}},618300:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(867076),a=r(462104),l=r(803307);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onSelect,r=e.selectedNodes,n=e.updateMapEntries,i=void 0===n?function(){}:n,l=e.map;return o().createElement(a.Z,{map:l,selectedNodes:r,onSelectNode:t,config:{hideOpacitySlider:!1,showFullTitle:!0,showOpacityTooltip:!0,showTitleTooltip:!0,sortable:!0,visualizationMode:null==l?void 0:l.visualizationMode,layerOptions:{legendOptions:{WMSLegendOptions:"forceLabels:on",scaleDependent:!0,legendWidth:12,legendHeight:12},hideLegend:!1}},onChangeMap:function(e){i({layers:null==e?void 0:e.layers,groups:null==e?void 0:e.groups},"replace")}})}const s=(0,i.compose)(l.Z)((function(e){return o().createElement(c,e)}))},803307:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(984596),o=r.n(n),i=r(630998),a=r.n(i),l=r(867076),c=r(624262),s=function(e){return"".concat(e.mapId?"maps[".concat(e.mapId,"]"):"map")};const u=(0,l.withHandlers)({changeLayerProperty:function(e){var t=e.onChange,r=void 0===t?function(){}:t,n=e.map,o=void 0===n?{}:n;return function(e,t,n){var i=a()(o.layers||[],{id:e});r("".concat(s(o),".layers[").concat(i,"].").concat(t),n)}},changeLayerPropertyByGroup:function(e){var t=e.onChange,r=void 0===t?function(){}:t,n=e.map,o=void 0===n?{}:n;return function(e,t,n){return o.layers.filter((0,c.CK)(e)).map((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id;return a()(o.layers||[],{id:e})})).filter((function(e){return e>=0})).map((function(e){return r("".concat(s(o),".layers[").concat(e,"].").concat(t),n)}))}},changeGroupProperty:function(e){var t=e.onChange,r=void 0===t?function(){}:t,n=e.map,i=void 0===n?{}:n;return function(e,t,n){var l,c=i.groups?o()(i.groups):[],u=a()(c,(function(t){return e===t.id})),p=-1===u?c.length:u;"expanded"!==t||null!=c&&null!==(l=c[p])&&void 0!==l&&l.id||r("".concat(s(i),".groups[").concat(p,"].id"),e),r("".concat(s(i),".groups[").concat(p,"].").concat(t),n)}},updateMapEntries:function(e){var t=e.onChange,r=void 0===t?function(){}:t,n=e.map,o=void 0===n?{}:n;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object.keys(e).map((function(n){return r("".concat(s(o),"[").concat(n,"]"),e[n],t)}))}}})},648860:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(867076),o=r(624262);function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}const l=(0,n.compose)((0,n.withStateHandlers)((function(){return{selectedLayers:[],selectedGroups:[]}}),{onNodeSelect:function(e){var t=e.selectedLayers,r=void 0===t?[]:t,n=e.selectedGroups,a=void 0===n?[]:n;return function(e,t,n){var l=(0,o.WR)([].concat(i(r),i(a)),e,n),c="layer"===t?[].concat(i(r),[e]):r,s="group"===t?[].concat(i(a),[e]):a;return{selectedLayers:l.filter((function(e){return c.includes(e)})),selectedGroups:l.filter((function(e){return s.includes(e)}))}}}}),(0,n.withProps)((function(e){var t=e.selectedLayers,r=e.selectedGroups;return{selectedNodes:[].concat(i(t),i(r))}})))},910336:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Q});var n=r(227361),o=r.n(n),i=r(867076),a=r(624262),l=r(979105),c=r(487427),s=r(33848),u=r(363209),p=r(630998),f=r.n(p),y=r(675263),d=r.n(y),m=r(124852),b=r.n(m),v=r(480681),g=r(743129),h=r(38560),O=r(805346);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,T(n.key),n)}}function S(e,t,r){return t=E(t),function(e,t){if(t&&("object"==w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,j()?Reflect.construct(t,r||[],E(e).constructor):t.apply(e,r))}function j(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(j=function(){return!!e})()}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function L(e,t,r){return(t=T(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){var t=function(e,t){if("object"!=w(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==w(t)?t:t+""}var N=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return L(e=S(this,t,[].concat(n)),"renderLegend",(function(){return null})),L(e,"renderItemLabel",(function(e){return b().createElement("div",null,b().createElement("div",{key:"item-title"},e.title||e.name),b().createElement("div",null,b().createElement("small",{className:"text-muted",key:"item-key-description"},e.name)))})),L(e,"renderError",(function(){return e.props.element&&e.props.element.capabilities&&e.props.element&&e.props.element.capabilities.error?b().createElement(v.bZ,{bsStyle:"danger"},b().createElement(O.Z,{msgId:"layerProperties.styleListLoadError"})):null})),L(e,"updateEntry",(function(t,r){var n=r.target.value;e.props.onChange(t,n)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=[{label:"Default Style",value:""}].concat((this.props.element.availableStyles||[]).map((function(t){return{label:e.renderItemLabel(t),value:t.name}})));return(this.props.element.style&&this.props.element.availableStyles&&f()(this.props.element.availableStyles,(function(t){return t.name===e.props.element.style})))>=0||!this.props.element.style||t.push({label:this.props.element.style,value:this.props.element.style}),b().createElement(v.rj,{fluid:!0,style:{paddingTop:15,paddingBottom:15}},b().createElement("form",{ref:"style"},b().createElement(g.ZP.Creatable,{key:"styles-dropdown",options:t,isLoading:this.props.element&&this.props.element.capabilitiesLoading,value:this.props.element.style||"",onOpen:function(){!e.props.element||e.props.element.capabilities&&e.props.element.availableStyles||e.props.retrieveLayerData(e.props.element)},promptTextCreator:function(e){return b().createElement(O.Z,{msgId:"layerProperties.styleCustom",msgParams:{value:e}})},onChange:function(t){e.updateEntry("style",{target:{value:t&&t.value||""}})}}),b().createElement("br",null),this.renderLegend(),this.renderError(),b().createElement(h.Z,{bsStyle:"primary",style:{float:"right"},onClick:function(){return e.props.retrieveLayerData(e.props.element)}},b().createElement(v.gG,{glyph:"refresh"})," ",b().createElement(O.Z,{msgId:"layerProperties.stylesRefreshList"})),b().createElement("br",null)))}}])&&P(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(b().Component);L(N,"propTypes",{retrieveLayerData:d().func,onChange:d().func,element:d().object,groups:d().array}),L(N,"defaultProps",{element:{},retrieveLayerData:function(){},onChange:function(){}});const k=N;var Z=r(803307);const D=(0,i.withProps)((function(e){var t,r,n,o=e.map;return{nodes:(t=(0,a.DN)(o),r=t.layers,n=void 0===r?{}:r,(0,a.C1)(n.flat||[],n.groups||[]).groups)}}));var x=r(49977),z=r.n(x),_=r(680833),I=r(577215);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){U(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=A(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==A(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const R=(0,i.mapPropsStream)((function(e){var t=(0,i.createEventHandler)(),r=t.stream,n=t.handler;return e.pluck("element").distinctUntilChanged((function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id===e.id})).switchMap((function(){return r.switchMap((function(e){return(0,_.kB)(e).map((function(e){return M(M({},(0,I.Br)(e)),{},{capabilitiesLoading:null})})).startWith({capabilitiesLoading:!0})})).catch((function(e){return z().Observable.of({capabilitiesLoading:null,capabilities:{error:"error getting capabilities",details:e},description:null})}))})).startWith({}).combineLatest(e,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return M(M({},t),{},{retrieveLayerData:n,element:M(M({},t.element),e)})}))}));var B=r(666379),F=r.n(B);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}var W=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;for(var o in t)null!==t[o]&&"object"===H(t[o])&&(F()(t[o],r)&&n.apply(void 0,[t[o]]),e(t[o],r,n))};const J=(0,i.withProps)((function(e){var t=e.nodes,r=void 0===t?{}:t,n=e.editNode,o={};return n&&W(r,{id:n},(function(e){o=e})),{selectedNode:o}}));function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=K(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=K(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==K(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y=R(k),$=(0,i.withProps)((function(e){return{tabs:(e.tabs||[{id:"general",titleId:"layerProperties.general",tooltipId:"layerProperties.general",glyph:"wrench",visible:!0,Component:u.Z},{id:"display",titleId:"layerProperties.display",tooltipId:"layerProperties.display",glyph:"eye-open",visible:e.settings&&"layers"===e.settings.nodeType,Component:s.Z},{id:"style",titleId:"layerProperties.style",tooltipId:"layerProperties.style",glyph:"dropper",visible:e.settings&&"layers"===e.settings.nodeType&&e.element&&"wms"===e.element.type,Component:Y}]).filter((function(e){return!!e.visible}))}}));const Q=(0,i.compose)(D,J,(0,i.withState)("settings","onUpdateSettings",{}),(0,i.withProps)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.map,r=void 0===t?{}:t,n=e.selectedNode,i=e.settings,l=void 0===i?{}:i;return{element:n,settings:q(q({},l),{},{nodeType:n&&n.nodes?"groups":"layers",options:{opacity:l.opacity>=0?l.opacity:n.opacity>=0?n.opacity:1}}),groups:o()((0,a.DN)(r),"layers.groups")}})),(0,i.compose)(Z.Z,(0,i.withHandlers)({onUpdateNode:function(e){var t=e.changeLayerProperty,r=void 0===t?function(){}:t,n=e.changeGroupProperty,o=void 0===n?function(){}:n,i=e.editNode;return function(e,t,n){"layers"===t&&Object.keys(n).map((function(e){return r(i,e,n[e])})),"groups"===t&&Object.keys(n).map((function(e){return o(i,e,n[e])}))}}}),(0,i.withHandlers)({onUpdateParams:function(e){var t=e.settings,r=void 0===t?{}:t,n=e.onUpdateNode,o=void 0===n?function(){}:n;return function(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&o(r.node,r.nodeType,q(q({},r.props),e))}}})),c.kZ,(0,l.Z)("activeTab","setActiveTab","general"),$)},202576:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(124852),o=r.n(n),i=r(180307),a=r.n(i),l=r(675263),c=r.n(l),s=r(480681),u=r(352595),p=r(950966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function d(e,t,r){return t=b(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,m()?Reflect.construct(t,r||[],b(e).constructor):t.apply(e,r))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(t,e),r=t,(n=[{key:"renderPopover",value:function(){return o().createElement(s.J2,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title,style:this.props.popoverStyle},this.props.text)}},{key:"renderContent",value:function(){var e=this;return o().createElement(s.gG,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(p.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(u.Z,{placement:this.props.placement,show:!0,target:function(){return a().findDOMNode(e.target)}},this.renderPopover())])}}])&&y(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);g(O,"propTypes",{id:c().string,title:c().string,text:c().string,glyph:c().string,bsStyle:c().string,placement:c().string,left:c().number,top:c().number,trigger:c().oneOfType([c().array,c().bool]),popoverStyle:c().object}),g(O,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const w=O}}]);