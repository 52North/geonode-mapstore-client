(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[65940],{5993:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(675263),o=r.n(n),i=r(984596),c=r.n(i),a=r(418093),u=r(86638),l=["locale"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const y=function(e){return(0,a.compose)((0,a.getContext)({locale:o().string}),(0,a.mapProps)((function(t){var r=t.locale,n=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,l);return p(p({},n),c()(e).reduce(function(e,t){return function(){var r=arguments.length>1?arguments[1]:void 0;return p(p({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},f({},r,e[r]&&(0,u.MZ)(t,e[r])))}}(n,r),{}))})))}},979105:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(418093);const o=function(e,t,r){return(0,n.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!e[t]}),(0,n.withState)(e,t,r))}},75927:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(513218),o=r.n(n),i=r(667294),c=r.n(i),a=r(757588),u=r(805346),l=r(815135),s=["settings","element","tabs","activeTab","width","groups","isLocalizedLayerStylesEnabled","setActiveTab","onUpdateParams","onRetrieveLayerData","realtimeUpdate"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=(0,l.Z)(a.NavItem);const b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.settings,r=e.element,n=void 0===r?{}:r,i=e.tabs,l=void 0===i?[]:i,b=e.activeTab,v=e.width,m=e.groups,g=e.isLocalizedLayerStylesEnabled,h=e.setActiveTab,O=void 0===h?function(){}:h,w=e.onUpdateParams,P=void 0===w?function(){}:w,j=e.onRetrieveLayerData,E=void 0===j?function(){}:j,S=e.realtimeUpdate,C=y(e,s);return c().createElement(a.Row,{key:"ms-toc-settings-navbar",className:"ms-row-tab"},c().createElement(a.Col,{xs:12},c().createElement(a.Nav,{bsStyle:"tabs",activeKey:b,justified:!0},l.map((function(e){return c().createElement(d,{key:"ms-tab-settings-"+e.id,tooltip:c().createElement(u.Z,{msgId:e.tooltipId}),eventKey:e.id,onClick:function(){return O(e.id)}},c().createElement(a.Glyphicon,{glyph:e.glyph}))})))),c().createElement(a.Col,{xs:12},l.filter((function(e){return e.id&&e.id===b})).filter((function(e){return e.Component})).map((function(e){return c().createElement(e.Component,p({},C,{key:"ms-tab-settings-body-"+e.id,containerWidth:v,element:n,groups:m,nodeType:t.nodeType,settings:t,retrieveLayerData:E,isLocalizedLayerStylesEnabled:g,onChange:function(e,t){return o()(e)?P(e,S):P(f({},e,t),S)}}))}))))}},616701:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(667294),o=r.n(n),i=r(418093),c=r(581859),a=r(590690),u=r(229423),l=r(221338),s=r(91175),p=r.n(s);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function e(t,r){return t.reduce((function(t,n){var o=y({},n);return o.nodes&&(o=y(y({},o),{},{nodes:e(o.nodes,r)})),r.forEach((function(e){o.nodes&&e.func(o)?o=y(y({},o),e.options):o.nodes&&(o=y({},o))})),t.push(o),t}),[])},v=function(e){var t=e.nodes,r=e.filterText;return e.currentLocale,b(t,[{options:{showComponent:!0},func:function(){return!r}},{options:{loadingError:!0},func:function(e){return p()(e.nodes.filter((function(e){return e.loadingError&&"Warning"!==e.loadingError})))}},{options:{expanded:!0,showComponent:!0},func:function(e){return r&&p()(e.nodes.filter((function(e){return!0})))}}])};const m=(0,i.withProps)((function(e){return{nodes:v(e)}}));var g=r(803307),h=r(117802);const O=(0,i.compose)(h.Z,m,g.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.changeLayerPropertyByGroup,r=void 0===t?function(){}:t,n=e.changeLayerProperty,i=void 0===n?function(){}:n,s=e.changeGroupProperty,p=void 0===s?function(){}:s,f=e.onSort,y=e.onSelect,d=e.selectedNodes,b=e.nodes,v=void 0===b?[]:b;return o().createElement(l.Z,{onSort:f,selectedNodes:d,onSelect:y,nodes:v},o().createElement(u.Z,{groupElement:o().createElement(c.Z,{onSort:f,selectedNodes:d,onSelect:y,propertiesChangeHandler:function(e,t){return Object.keys(t).map((function(n){return r(e,n,t[n])}))},onToggle:function(e,t){return p(e,"expanded",!t)},groupVisibilityCheckbox:!0}),layerElement:o().createElement(a.Z,{selectedNodes:d,onSelect:y,titleTooltip:!0,propertiesChangeHandler:function(e,t){return Object.keys(t).map((function(r){return i(e,r,t[r])}))},onUpdateNode:function(e,t,r){return Object.keys(r).map((function(t){return i(e,t,r[t])}))},onToggle:function(e,t){return i(e,"expanded",!t)}})}))}))},803307:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(984596),o=r.n(n),i=r(630998),c=r.n(i),a=r(418093),u=r(624262);const l=(0,a.withHandlers)({changeLayerProperty:function(e){var t=e.onChange,r=void 0===t?function(){}:t,n=e.map,o=void 0===n?{}:n;return function(e,t,n){var i=c()(o.layers||[],{id:e});r("map.layers[".concat(i,"].").concat(t),n)}},changeLayerPropertyByGroup:function(e){var t=e.onChange,r=void 0===t?function(){}:t,n=e.map,o=void 0===n?{}:n;return function(e,t,n){return o.layers.filter((0,u.CK)(e)).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id;return c()(o.layers||[],{id:t})})).filter((function(e){return e>=0})).map((function(e){return r("map.layers[".concat(e,"].").concat(t),n)}))}},changeGroupProperty:function(e){var t=e.onChange,r=void 0===t?function(){}:t,n=e.map,i=void 0===n?[]:n;return function(e,t,n){var a,u=i.groups?o()(i.groups):[],l=c()(u,(function(t){return e===t.id})),s=-1===l?u.length:l;"expanded"!==t||null!=u&&null!==(a=u[s])&&void 0!==a&&a.id||r("map.groups[".concat(s,"].id"),e),r("map.groups[".concat(s,"].").concat(t),n)}},updateMapEntries:function(e){var t=e.onChange,r=void 0===t?function(){}:t;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map((function(t){return r("map[".concat(t,"]"),e[t])}))}}})},648860:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(630998),o=r.n(n),i=r(418093);function c(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(e,t){return(t.layers||[]).filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.group,n=void 0===r?"Default":r;return n===e})).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id;return t}))};const l=(0,i.compose)((0,i.withStateHandlers)((function(){return{selectedLayers:[],selectedGroups:[]}}),{onNodeSelect:function(e,t){var r=e.selectedLayers,n=void 0===r?[]:r,i=e.selectedGroups,a=void 0===i?[]:i,l=t.map,s=void 0===l?{}:l;return function(e,t,r){return{selectedLayers:"group"===t?o()(a,(function(t){return t===e}))>=0?n.filter((function(t){return o()(u(e,s),(function(e){return e===t}))<0})):r?[].concat(c(n),c(u(e,s))):c(u(e,s)):o()(n,(function(t){return t===e}))>=0?n.filter((function(t){return t!==e})):r?[].concat(c(n),[e]):[e],selectedGroups:"group"===t?o()(a,(function(t){return t===e}))>=0?a.filter((function(t){return t!==e})):r?[].concat(c(a),[e]):[e]:r?a:[]}}}}),(0,i.withProps)((function(e){var t=e.selectedLayers,r=e.selectedGroups;return{selectedNodes:[].concat(c(t),c(r))}})))},117802:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(418093),o=r(624262);const i=(0,n.withProps)((function(e){var t,r,n,i=e.map;return{nodes:(t=(0,o.DN)(i),r=t.layers,n=void 0===r?{}:r,(0,o.C1)(n.flat||[],n.groups||[]).groups)}}))},651768:(e,t,r)=>{"use strict";r.d(t,{Z:()=>J});var n=r(227361),o=r.n(n),i=r(418093),c=r(624262),a=r(979105),u=r(487427),l=r(518842),s=r(363209),p=r(630998),f=r.n(p),y=r(675263),d=r.n(y),b=r(667294),v=r.n(b),m=r(757588),g=r(743129),h=r(282467),O=r(805346);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(c,e);var t,r,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(n);if(o){var r=L(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return S(this,e)});function c(){var e;P(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return x(C(e=i.call.apply(i,[this].concat(r))),"renderLegend",(function(){return null})),x(C(e),"renderItemLabel",(function(e){return v().createElement("div",null,v().createElement("div",{key:"item-title"},e.title||e.name),v().createElement("div",null,v().createElement("small",{className:"text-muted",key:"item-key-description"},e.name)))})),x(C(e),"renderError",(function(){return e.props.element&&e.props.element.capabilities&&e.props.element&&e.props.element.capabilities.error?v().createElement(m.Alert,{bsStyle:"danger"},v().createElement(O.Z,{msgId:"layerProperties.styleListLoadError"})):null})),x(C(e),"updateEntry",(function(t,r){var n=r.target.value;e.props.onChange(t,n)})),e}return t=c,(r=[{key:"render",value:function(){var e=this,t=[{label:"Default Style",value:""}].concat((this.props.element.availableStyles||[]).map((function(t){return{label:e.renderItemLabel(t),value:t.name}})));return(this.props.element.style&&this.props.element.availableStyles&&f()(this.props.element.availableStyles,(function(t){return t.name===e.props.element.style})))>=0||!this.props.element.style||t.push({label:this.props.element.style,value:this.props.element.style}),v().createElement(m.Grid,{fluid:!0,style:{paddingTop:15,paddingBottom:15}},v().createElement("form",{ref:"style"},v().createElement(g.ZP.Creatable,{key:"styles-dropdown",options:t,isLoading:this.props.element&&this.props.element.capabilitiesLoading,value:this.props.element.style||"",onOpen:function(){!e.props.element||e.props.element.capabilities&&e.props.element.availableStyles||e.props.retrieveLayerData(e.props.element)},promptTextCreator:function(e){return v().createElement(O.Z,{msgId:"layerProperties.styleCustom",msgParams:{value:e}})},onChange:function(t){e.updateEntry("style",{target:{value:t&&t.value||""}})}}),v().createElement("br",null),this.renderLegend(),this.renderError(),v().createElement(h.Z,{bsStyle:"primary",style:{float:"right"},onClick:function(){return e.props.retrieveLayerData(e.props.element)}},v().createElement(m.Glyphicon,{glyph:"refresh"})," ",v().createElement(O.Z,{msgId:"layerProperties.stylesRefreshList"})),v().createElement("br",null)))}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(v().Component);x(k,"propTypes",{retrieveLayerData:d().func,onChange:d().func,element:d().object,groups:d().array}),x(k,"defaultProps",{element:{},retrieveLayerData:function(){},onChange:function(){}});const D=k;var T=r(803307),Z=r(117802),N=r(989255),_=r(680833);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const G=(0,i.mapPropsStream)((function(e){var t=(0,i.createEventHandler)(),r=t.stream,n=t.handler;return e.pluck("element").distinctUntilChanged((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.id===t.id})).switchMap((function(){return r.switchMap((function(e){return(0,_.kB)(e).map((function(e){return{capabilities:e,capabilitiesLoading:null,description:e._abstract,boundingBox:e.latLonBoundingBox,availableStyles:e.style&&(Array.isArray(e.style)?e.style:[e.style])}})).startWith({capabilitiesLoading:!0})})).catch((function(e){return N.Observable.of({capabilitiesLoading:null,capabilities:{error:"error getting capabilities",details:e},description:null})}))})).startWith({}).combineLatest(e,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return I(I({},t),{},{retrieveLayerData:n,element:I(I({},t.element),e)})}))}));var B=r(666379),U=r.n(B),M=void 0;function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}var W=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;for(var o in t)null!==t[o]&&"object"===H(t[o])&&(U()(t[o],r)&&n.apply(M,[t[o]]),e(t[o],r,n))};const z=(0,i.withProps)((function(e){var t=e.nodes,r=void 0===t?{}:t,n=e.editNode,o={};return n&&W(r,{id:n},(function(e){o=e})),{selectedNode:o}}));function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var $=G(D),q=(0,i.withProps)((function(e){return{tabs:e.tabs||[{id:"general",titleId:"layerProperties.general",tooltipId:"layerProperties.general",glyph:"wrench",visible:!0,Component:s.Z},{id:"display",titleId:"layerProperties.display",tooltipId:"layerProperties.display",glyph:"eye-open",visible:e.settings&&"layers"===e.settings.nodeType,Component:l.Z},{id:"style",titleId:"layerProperties.style",tooltipId:"layerProperties.style",glyph:"dropper",visible:e.settings&&"layers"===e.settings.nodeType&&e.element&&"wms"===e.element.type,Component:$}]}}));const J=(0,i.compose)(Z.Z,z,(0,i.withState)("settings","onUpdateSettings",{}),(0,i.withProps)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.map,r=void 0===t?{}:t,n=e.selectedNode,i=e.settings,a=void 0===i?{}:i;return{element:n,settings:F(F({},a),{},{nodeType:n&&n.nodes?"groups":"layers",options:{opacity:a.opacity>=0?a.opacity:n.opacity>=0?n.opacity:1}}),groups:o()((0,c.DN)(r),"layers.groups")}})),(0,i.compose)(T.Z,(0,i.withHandlers)({onUpdateNode:function(e){var t=e.changeLayerProperty,r=void 0===t?function(){}:t,n=e.changeGroupProperty,o=void 0===n?function(){}:n,i=e.editNode;return function(e,t,n){"layers"===t&&Object.keys(n).map((function(e){return r(i,e,n[e])})),"groups"===t&&Object.keys(n).map((function(e){return o(i,e,n[e])}))}}}),(0,i.withHandlers)({onUpdateParams:function(e){var t=e.settings,r=void 0===t?{}:t,n=e.onUpdateNode,o=void 0===n?function(){}:n;return function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&o(r.node,r.nodeType,F(F({},r.props),e))}}})),u.kZ,(0,a.Z)("activeTab","setActiveTab","general"),q)},510284:(e,t,r)=>{"use strict";r.d(t,{sw:()=>v,oB:()=>m});var n=r(989255),o=r(227361),i=r.n(o),c=r(505055),a=r(507526);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var t="function"==typeof Map?new Map:void 0;return s=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return p(e,arguments,d(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,e)},s(e)}function p(e,t,r){return p=f()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&y(o,r.prototype),o},p.apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}r(324384);var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(i,e);var t,r,n,o=(t=i,r=f(),function(){var e,n=d(t);if(r){var o=d(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return l(this,e)});function i(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e)).name="OGCError",r.code=t,r}return n=i,Object.defineProperty(n,"prototype",{writable:!1}),n}(s(Error)),v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[a.stripPrefix],explicitArray:!1,mergeAttrs:!0};return n.Observable.bindNodeCallback((function(e,r){return(0,c.parseString)(e,t,r)}))(e)},m=function(e){return e.switchMap((function(e){return"string"==typeof e.data&&e.data.indexOf("ExceptionReport")>0?n.Observable.bindNodeCallback((function(e,t){return(0,c.parseString)(e,{tagNameProcessors:[a.stripPrefix],explicitArray:!1,mergeAttrs:!0},t)}))(e.data).map((function(e){var t=i()(e,"ExceptionReport.Exception.ExceptionText");throw new b(t||"Undefined OGC Service Error",i()(e,"ExceptionReport.Exception.exceptionCode"))})):n.Observable.of(e)}))}}}]);