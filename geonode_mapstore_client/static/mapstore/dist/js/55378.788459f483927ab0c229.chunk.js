(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[55378],{615402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(675263),o=r.n(n),i=r(667294),s=r.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function l(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=r(837101).FormattedHTMLMessage,b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(c,e);var t,r,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(o){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return l(this,e)});function c(){return a(this,c),i.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){return this.context.intl?s().createElement(d,{id:this.props.msgId,values:this.props.msgParams}):s().createElement("span",null,this.props.msgId||"")}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(s().Component);y(b,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(b,"contextTypes",{intl:o().object});const h=b},542872:(e,t,r)=>{"use strict";r.d(t,{Z:()=>D});var n=r(667294),o=r.n(n),i=r(675263),s=r.n(i),c=r(107412),a=r(615402),u=r(805346),p=r(757588);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function b(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(c,e);var t,r,n,i,s=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(i){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function c(){var e;f(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(h(e=s.call.apply(s,[this].concat(r))),"onTouchStart",(function(t){var r=t.touches[0];e.startX=r.pageX,e.startY=r.pageY,e.setState({scrolling:!1})})),m(h(e),"onTouchMove",(function(t){var r=t.touches[0],n=t.currentTarget;if(e.state.scrolling)t.stopPropagation();else if(Math.abs(e.startY-r.pageY)>Math.abs(e.startX-r.pageX))t.stopPropagation();else{var o=e.startX<r.pageX?"left":"right";(n&&"left"===o&&n.clientWidth<n.scrollWidth&&0!==n.scrollLeft||n&&"right"===o&&n.clientWidth+n.scrollLeft!==n.scrollWidth)&&(e.setState({scrolling:!0}),t.stopPropagation())}})),m(h(e),"onTouchEnd",(function(){e.setState({scrolling:!1})})),m(h(e),"renderPage",(function(){var t="function"==typeof e.props.viewers?e.props.viewers:e.props.viewers[e.props.format];return t?o().createElement(t,{response:e.props.response,layer:e.props.layer}):null})),e}return t=c,(r=[{key:"render",value:function(){return o().createElement("div",{style:{width:"100%",height:"100%",overflowX:"auto"},onTouchMove:this.onTouchMove,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd},this.renderPage())}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);m(g,"propTypes",{format:s().string,viewers:s().oneOfType([s().func,s().object]),response:s().oneOfType([s().string,s().object,s().node]),layer:s().object});var w=r(441609),O=r.n(w),P=r(531351),j=r.n(P),R=r(410240),E=r.n(R),x=r(902870);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function k(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(l,e);var t,r,n,i,s=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(n);if(i){var r=N(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return k(this,e)});function l(){var e;_(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Z(C(e=s.call.apply(s,[this].concat(r))),"getResponseProperties",(function(){var t=e.props.validator(e.props.format),r=e.props.responses.map((function(e){return void 0===e?{}:e})),n=e.props.renderValidOnly?t.getValidResponses(r):r,o=t.getNoValidResponses(e.props.responses),i=e.props.requests.length===o.length;return{validResponses:n,currResponse:e.getCurrentResponse(n[e.props.index]),emptyResponses:i,invalidResponses:o}})),Z(C(e),"getCurrentResponse",(function(t){return e.props.validator(e.props.format).getValidResponses([t])})),Z(C(e),"renderEmptyLayers",(function(){var t=e.getResponseProperties(),r=t.invalidResponses,n=t.emptyResponses;if(0===e.props.missingResponses&&n)return null;var i=0!==r.length;if(e.props.renderValidOnly||(i=i&&0===e.props.missingResponses),i){var s=r.map((function(e){return e.layerMetadata.title}));return e.props.showEmptyMessageGFI?o().createElement(p.Alert,{bsStyle:"info"},o().createElement(u.Z,{msgId:"noInfoForLayers"}),o().createElement("b",null,s.join(", "))):null}return null})),Z(C(e),"renderPage",(function(t){var r=e.props.viewers[e.props.format];return r?o().createElement(r,{response:t}):null})),Z(C(e),"renderEmptyPages",(function(){var t=e.getResponseProperties().emptyResponses;return 0===e.props.missingResponses&&t?o().createElement(p.Alert,{bsStyle:"danger"},o().createElement("h4",null,o().createElement(a.Z,{msgId:"noFeatureInfo"}))):null})),Z(C(e),"renderPages",(function(){var t=e.getResponseProperties().validResponses;return t.map((function(r,n){var i,s,a=r.response,u=r.layerMetadata,l=(0,x.Q)(r,e.props),f=e.props.header;null!=u&&null!==(i=u.viewer)&&void 0!==i&&i.type&&(s=(0,c.gA)(u.viewer.type));var y=t.filter((function(e){return!E()(e.response,"no features were found")})).length;return o().createElement(p.Panel,{eventKey:n,key:n,collapsible:e.props.collapsible,header:f?o().createElement("span",null,o().createElement(f,T({size:y},e.props.headerOptions,u,{index:e.props.index,onNext:function(){return e.props.onNext()},onPrevious:function(){return e.props.onPrevious()}}))):null,style:e.props.style},o().createElement(g,{response:a,format:l,viewers:s||e.props.viewers,layer:u}))}))})),Z(C(e),"containerStyle",(function(t){return O()(t)&&e.props.isMobile?{height:"100%"}:{display:O()(t)?"none":"block"}})),e}return t=l,(r=[{key:"shouldComponentUpdate",value:function(e){return e.responses!==this.props.responses||e.missingResponses!==this.props.missingResponses||e.index!==this.props.index}},{key:"render",value:function(){var e=this,t=this.props.container,r=this.getResponseProperties(),n=r.currResponse,i=r.emptyResponses,s=[this.renderEmptyLayers(),o().createElement(t,T({},this.props.containerProps,{onChangeIndex:function(t){e.props.setIndex(t)},ref:"container",index:this.props.index||0,key:"swiper",style:this.containerStyle(n),className:"swipeable-view"}),this.renderPages())];return s=this.props.isMobile?s:j()(s),o().createElement("div",{className:"mapstore-identify-viewer"},i?this.renderEmptyPages():s.map((function(e){return e})))}}])&&M(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o().Component);Z(B,"propTypes",{format:s().string,collapsible:s().bool,requests:s().array,responses:s().array,missingResponses:s().number,container:s().oneOfType([s().object,s().func]),header:s().oneOfType([s().object,s().func]),headerOptions:s().object,validator:s().func,viewers:s().object,style:s().object,containerProps:s().object,index:s().number,onNext:s().func,onPrevious:s().func,onUpdateIndex:s().func,setIndex:s().func,showEmptyMessageGFI:s().bool,renderValidOnly:s().bool,loaded:s().bool,isMobile:s().bool}),Z(B,"defaultProps",{format:(0,c.wR)(),responses:[],requests:[],missingResponses:0,collapsible:!1,headerOptions:{},container:p.Accordion,validator:c.Te,viewers:(0,c.Qm)(),style:{position:"relative",marginBottom:0},containerProps:{},showEmptyMessageGFI:!0,renderValidOnly:!1,onNext:function(){},onPrevious:function(){},setIndex:function(){},isMobile:!1});const D=B},11196:(e,t,r)=>{"use strict";r.d(t,{mI:()=>i,Yy:()=>s});var n=r(418093),o=r(107412),i=(0,n.withHandlers)({onNext:function(e){var t=e.index,r=void 0===t?0:t,n=e.setIndex,o=void 0===n?function(){}:n,i=e.validResponses,s=void 0===i?[]:i;return function(){o(Math.min(s.length-1,r+1))}},onPrevious:function(e){var t=e.index,r=e.setIndex,n=void 0===r?function(){}:r;return function(){n(Math.max(0,t-1))}}}),s=(0,n.defaultProps)({format:(0,o.wR)(),validator:o.Te})},82110:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(667294),o=r.n(n),i=r(496259),s=r(532425);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p=function(e){var t=e.width,r=e.height,n=e.className,c=void 0===n?"loader-container":n,u=e.contentStyle,p=void 0===u?{}:u;return o().createElement("div",{className:c},o().createElement(i.Z,null,(function(e){var n=e.width,i=void 0===n?200:n,c=e.height,u=void 0===c?200:c,l=t||(u>0?Math.min(i,u):i),f=r||(u>0?Math.min(i,u):i),y=Math.min(l,f);return o().createElement(s.Z,{size:y,style:a({padding:y/10,margin:"auto",display:"flex"},p)})})))}},173014:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(667294),o=r.n(n),i=r(418093),s=r(82110);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}var a=function(e){var t=e.loading,r=e.isLoading;return t||r&&("function"==typeof r?r():!0===r)};const u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.Z;return(0,i.branch)(e,(function(){return function(e){var n=e.loaderProps;return o().createElement(r,c({},t,n))}}))}},902870:(e,t,r)=>{"use strict";r.d(t,{Q:()=>s,j:()=>c});var n=r(227361),o=r.n(n),i=r(453005),s=function(e,t){var r=e.format,n=e.queryParams,o=void 0===n?{}:n;return o.info_format||o.outputFormat||r&&i.O7[r]||t.format},c=function(e){return!!o()(e,"layer.search.url")}}}]);