(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[16164,84035,888],{38560:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(480681),o=r(124852),i=r.n(o),a=r(294184),l=r.n(a),c=["disabled","className","onClick"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(null,arguments)}var s=r(815135);const f=(p=n.zx,i().forwardRef((function(e,t){var r=e.disabled,n=e.className,o=e.onClick,a=void 0===o?function(){}:o,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c);return i().createElement(p,u({ref:t,className:r?l()("disabled",n):n,onClick:function(){r||a.apply(void 0,arguments)}},s),s.children)})));var p;(0,s.Z)(n.zx)},807472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var n=r(727418),o=r.n(n),i=r(675263),a=r.n(i),l=r(124852),c=r.n(l),u=r(485294),s=r.n(u),f=r(472986),p=r.n(f),d=r(805346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,R(n.key),n)}}function b(e,t,r){return t=O(t),function(e,t){if(t&&("object"==m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,g()?Reflect.construct(t,r||[],O(e).constructor):t.apply(e,r))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function S(e,t,r){return(t=R(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}var N=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return S(e=b(this,t,[].concat(n)),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(d.Z,{msgId:"loading"}),c().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),S(e,"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),S(e,"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),S(e,"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:v({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),r=this.props.draggable?c().createElement(s(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&y(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(c().Component);S(N,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),S(N,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const _=N},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(675263),o=r.n(n),i=r(124852),a=r.n(i);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return a().createElement("div",{className:o,style:u({width:t,height:t,overflow:"hidden"},n)},!i&&a().createElement("div",{className:"mapstore-".concat(f(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const d=p},975480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(124852),o=r.n(n);const i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{display:"inline-block"}:e;return o().createElement("div",{style:t,className:"mapstore-inline-loader"})}},399534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(461365),o=r(356936);const i=(0,n.Z)(o.h_)},694745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(294184),a=r.n(i),l=r(480681),c=r(807472),u=r(80717),s=r(867076),f=r(819081),p=r.n(f),d=r(975480),m={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},E={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const v=(0,s.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,i=e.loadingText,s=e.onClose,f=void 0===s?function(){}:s,v=e.title,y=void 0===v?"":v,b=e.clickOutEnabled,g=void 0===b||b,O=e.showClose,h=void 0===O||O,S=e.disabledClose,R=void 0!==S&&S,N=e.showFullscreen,_=void 0!==N&&N,w=e.fullscreenType,C=void 0===w?"full":w,P=e.buttons,j=void 0===P?[]:P,T=e.size,D=void 0===T?"":T,k=e.bodyClassName,I=void 0===k?"":k,x=e.children,U=e.draggable,G=void 0!==U&&U,L=e.fullscreenState,A=e.onFullscreen,Z=e.fade,z=void 0!==Z&&Z,M=e.fitContent,F=e.modalClassName,V=void 0===F?"":F,B=e.dialogClassName,K=void 0===B?"":B,W=e.enableFooter,H=void 0===W||W,Q=m[D]||"",X=_&&"expanded"===L&&E.className[C]||"",Y=r?o().createElement("div",{className:"modal-fixed ".concat(V," ")+(G?"ms-draggable":"")},o().createElement(c.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:g?f:function(){},containerClassName:"ms-resizable-modal",draggable:G,modal:!0,className:a()("modal-dialog modal-content",Q,X,K,{"ms-fit-content":M})},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},y),_&&E.className[C]&&o().createElement(l.gG,{className:"ms-header-btn",onClick:function(){return A("expanded"===L?"collapsed":"expanded")},glyph:E.glyph[L][C]}),h&&f&&o().createElement(l.gG,{glyph:"1-close",className:"ms-header-btn",onClick:f,disabled:R}))),o().createElement("div",{role:"body",className:I},x),H&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(d.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?i:null),o().createElement(u.Z,{buttons:j})))):null;return z?o().createElement(p(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},Y):Y}))},212610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(124852),o=r.n(n),i=r(867076),a=r(957557),l=r.n(a),c=r(815135);const u=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled;return!(void 0!==r&&r&&t)}),c.Z,(function(e){return function(t){return o().createElement(e,l()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(124852),o=r.n(n),i=r(867076),a=r(675263),l=r.n(a),c=r(957557),u=r.n(c),s=r(480681),f=r(950966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function m(e,t,r){return t=v(t),function(e,t){if(t&&("object"==p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,E()?Reflect.construct(t,r||[],v(e).constructor):t.apply(e,r))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e,t,r){return(t=g(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}const O=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),m(this,r,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(r,t),n=r,(a=[{key:"renderPopover",value:function(){return o().createElement(s.J2,u()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,u()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(f.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&d(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,a}(o().Component),b(t,"propTypes",{popover:l().object}),b(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(124852),o=r.n(n),i=r(819081),a=r.n(i),l=r(480681),c=r(90085),u=["visible","Element","renderButton"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(null,arguments)}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,f=e.btnDefaultProps,p=void 0===f?{}:f,d=e.transitionProps,m=void 0===d?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:d,E=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,a=e.renderButton,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u);return n?a||i&&o().createElement(i,s({key:l.key||t},l))||o().createElement(c.Z,s({key:l.key||t},p,l)):null}))};return o().createElement(l.hE,i,m?o().createElement(a(),m,E()):E())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(867076),a=r(805346),l=r(957557),c=r.n(l),u=r(480681),s=r(532425),f=r(212610),p=r(617252),d=r(38560),m=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(null,arguments)}const v=(0,i.compose)(f.Z,p.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,l=e.textId,f=e.glyphClassName,p=void 0===f?"":f,v=e.loaderProps,y=void 0===v?{}:v,b=e.children,g=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,m);return o().createElement(d.Z,c()(g,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(u.gG,{glyph:t,className:p}):null,l?o().createElement(a.Z,{msgId:l}):i,r?o().createElement(s.Z,E({className:"ms-loader".concat(g.bsStyle&&" ms-loader-"+g.bsStyle||"").concat(g.bsSize&&" ms-loader-"+g.bsSize||"")},y)):null,b)}))},788113:(e,t,r)=>{"use strict";r.d(t,{b6:()=>d,PG:()=>m,_x:()=>E,Mm:()=>v,dP:()=>y,SX:()=>b,ZL:()=>g,_S:()=>O,iH:()=>h,R7:()=>S,Q7:()=>R,n7:()=>N,bA:()=>_,hm:()=>w,E2:()=>C,Cb:()=>P,eK:()=>j,Im:()=>T,e8:()=>D,JF:()=>k,kS:()=>I,y:()=>x,l2:()=>U,HN:()=>G,BM:()=>L,O8:()=>A,am:()=>Z,LV:()=>z,CK:()=>M,jU:()=>F,Qg:()=>V,$c:()=>B});var n=r(22222),o=r(227361),i=r.n(o),a=r(800827),l=r(577215),c=r(274621);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){return i()(e,"catalog.services")},m=(0,n.P1)((function(e){return i()(e,"catalog.default.staticServices")}),d,(function(e,t){var r=null==e?void 0:e.default_map_backgrounds;return r?(r.readOnly=!0,f(f({},t),{},{default_map_backgrounds:r})):t})),E=function(e){return i()(e,"catalog.default.tileSizes",[256,512])},v=function(e){return i()(e,"controls.metadataexplorer.group")},y=function(e){return i()(e,"catalog.saving")},b=function(e){return i()(e,"catalog.result")},g=function(e){return i()(e,"catalog.openCatalogServiceList")},O=function(e){return i()(e,"catalog.newService")},h=function(e){return i()(e,"catalog.newService.type","csw")},S=function(e){return i()(e,'catalog.services["'.concat(i()(e,"catalog.selectedService"),'"]'))},R=function(e){return i()(e,'catalog.services["'.concat(i()(e,"catalog.selectedService"),'"].type'),function(e){return i()(e,'catalog.default.staticServices["'.concat(i()(e,"catalog.selectedService"),'"].type'),"csw")}(e))},N=function(e){return i()(e,'catalog.services["'.concat(i()(e,"catalog.selectedService"),'"].layerOptions'),{})},_=function(e){return i()(e,"catalog.searchOptions")},w=function(e){return i()(e,"catalog.loadingError")},C=function(e){return i()(e,"catalog.loading",!1)},P=function(e){return i()(e,"catalog.selectedService")},j=function(e){return i()(e,"catalog.mode","view")},T=function(e){return i()(e,"catalog.layerError")},D=function(e){return i()(e,"catalog.searchOptions.text","")},k=function(e){return"metadataexplorer"===i()(e,"controls.toolbar.active")||i()(e,"controls.metadataexplorer.enabled")},I=function(e){return(i()(e,"localConfig.authenticationRules")||[]).filter((function(e){return"authkey"===e.method})).map((function(e){return e.authkeyParamName}))||[]},x=function(e){return i()(e,"catalog.pageSize",4)},U=function(e){return i()(e,"catalog.delayAutoSearch",1e3)},G=(0,n.zB)({projection:a.uy}),L=function(e){return i()(e,"catalog.formatsLoading",!1)},A=function(e){return i()(e,"catalog.newService.supportedFormats.imageFormats",[])},Z=function(e){var t,r;return"edit"===j(e)?A(e):(null===(t=S(e))||void 0===t||null===(r=t.supportedFormats)||void 0===r?void 0:r.imageFormats)||[]},z=function(e){return i()(e,"catalog.newService.supportedFormats.infoFormats",(0,l.oL)())},M=function(e){return i()(e,"catalog.newService.formatUrlUsed","")},F=function(e){return i()(e,"catalog.isNewServiceAdded",!1)},V=function(e){return i()(e,"catalog.showFormatError",!1)},B=function(e){var t=function(e){return i()(e,"catalog.editingAllowedRoles",[])}(e),r=function(e){return i()(e,"catalog.editingAllowedGroups",[])}(e);return(0,c.tv)({allowedRoles:t,allowedGroups:r})(e)}},643892:(e,t,r)=>{"use strict";r.d(t,{W:()=>n,Zf:()=>o,Eu:()=>i,Vy:()=>a,YB:()=>l,xm:()=>c,_f:()=>u,ek:()=>s,cd:()=>f,pt:()=>p,ww:()=>d,tR:()=>m,Js:()=>E,p2:()=>v,ZH:()=>y,eQ:()=>b,ql:()=>g,$X:()=>O,nS:()=>h,ih:()=>S,J5:()=>R,uA:()=>N,Pv:()=>_,_Z:()=>w,dh:()=>C,IH:()=>P,e3:()=>j,Oq:()=>T,Y0:()=>D,sA:()=>k,ip:()=>I,li:()=>x,F_:()=>U,pG:()=>G,Q$:()=>L,DF:()=>A,id:()=>Z,Br:()=>z,bI:()=>M,U5:()=>F,e5:()=>V,b3:()=>B,mN:()=>K,QN:()=>W,HV:()=>H,xe:()=>Q,vA:()=>X,gw:()=>Y,qs:()=>q,CB:()=>J,vg:()=>$,Z0:()=>ee,lf:()=>te,jQ:()=>re,nk:()=>ne,X7:()=>oe,nO:()=>ie,F4:()=>ae,EU:()=>le,Rk:()=>ce,V1:()=>ue,rg:()=>se,v6:()=>fe,d7:()=>pe,Rx:()=>de,as:()=>me,iL:()=>Ee});var n="GEONODE:RESOURCE_LOADING",o="GEONODE:SET_RESOURCE",i="GEONODE:RESOURCE_ERROR",a="GEONODE:UPDATE_RESOURCE_PROPERTIES",l="GEONODE:SET_RESOURCE_TYPE",c="GEONODE:SET_NEW_RESOURCE",u="GEONODE:SET_RESOURCE_ID",s="GEONODE:SET_RESOURCE_PERMISSIONS",f="GEONODE:EDIT_TITLE_RESOURCE",p="GEONODE:EDIT_ABSTRACT_RESOURCE",d="GEONODE:EDIT_THUMBNAIL_RESOURCE",m="GEONODE:SET_FAVORITE_RESOURCE",E="GEONODE:SET_MAP_THUMBNAIL",v="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",y="GEONODE:REQUEST_RESOURCE_CONFIG",b="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",g="GEONODE:LOADING_RESOURCE_CONFIG",O="GEONODE:RESET_RESOURCE_STATE",h="GEONODE:RESOURCE_CONFIG_ERROR",S="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",R="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",N="GEONODE:RESET_GEO_LIMITS",_="GEONODE:PROCESS_RESOURCES",w="GEONODE_SET_RESOURCE_THUMBNAIL",C="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",P="GEONODE_DOWNLOAD_RESOURCE",j="GEONODE_DOWNLOAD_COMPLETE",T="GEONODE_UPDATE_SINGLE_RESOURCE",D="GEONODE_SET_RESOURCE_EXTENT",k="GEONODE:SET_RESOURCE_PATH_PARAMETERS",I="GEONODE:SET_MAP_VIEWER_LINKED_RESOURCE",x="GEONODE:MANAGE_LINKED_RESOURCE",U="GEONODE:SET_DEFAULT_VIEWER_PLUGINS",G="GEONODE:SET_SELECTED_LAYER_DATASET";function L(){return{type:n}}function A(e,t){return{type:o,data:e,pending:t}}function Z(e){return{type:T,data:e}}function z(e){return{type:f,title:e}}function M(e){return{type:p,abstract:e}}function F(e){return{type:d,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function V(){return{type:w}}function B(e){return{type:l,resourceType:e}}function K(e){return{type:i,error:e}}function W(e){return{type:a,properties:e}}function H(){return{type:c}}function Q(e){return{type:u,id:e}}function X(e){return{type:v,permissions:e}}function Y(e){return{type:m,favorite:e}}function q(e){return{type:C,enabled:e}}function J(e){return{type:E,bbox:e}}function $(e,t,r){return{type:y,resourceType:e,pk:t,options:r}}function ee(e,t){return{type:b,resourceType:e,options:t}}function te(e){return{type:g,loading:e}}function re(e){return{type:h,message:e}}function ne(){return{type:O}}function oe(e){return{type:S,compactPermissions:e}}function ie(e){return{type:R,compactPermissions:e}}function ae(){return{type:N}}function le(e,t,r){return{type:_,processType:e,resources:t,redirectTo:r}}function ce(e){return{type:P,resource:e}}function ue(e){return{type:j,resource:e}}function se(e){return{type:D,coords:e}}function fe(e){return{type:k,params:e}}function pe(e){return{type:x,payload:e}}function de(e){return{type:I,resource:e}}function me(e){return{type:U,plugins:e}}function Ee(e){return{type:G,layer:e}}},53645:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>D});var n=r(124852),o=r.n(n),i=r(171703),a=r(441609),l=r.n(a),c=r(22222),u=r(303744),s=r(322843),f=r(643892),p=r(805346),d=r(532425),m=r(535721),E=r(694745),v=r(399534),y=r(621886),b=r(12530),g=r(782904),O=r(17594),h=r(482100),S=["hide","loading","labelId","showLoader"],R=["linkedResources"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(null,arguments)}function _(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var w=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).resourceType;return e?o().createElement("div",{className:"gn-resource-delete-warning"},o().createElement(O.Z,{className:"warning",name:"warning"}),"  ",o().createElement(p.Z,{msgId:"gnviewer.linkedResource.deleteAndUnlinkWarning.".concat(e)})):null},C=(0,i.connect)((0,c.P1)([function(e){var t,r;return null==e||null===(t=e.controls)||void 0===t||null===(r=t[b.zj.REMOVE_LINKED_RESOURCE])||void 0===r?void 0:r.value},function(e){var t,r;return null==e||null===(t=e.controls)||void 0===t||null===(r=t[b.zj.REMOVE_LINKED_RESOURCE])||void 0===r?void 0:r.loading},h.yK],(function(e,t,r){var n;return{resources:null!==(n=null==e?void 0:e.resources)&&void 0!==n?n:[],resourceType:null==e?void 0:e.resourceType,enabled:!l()(null==e?void 0:e.resources),loading:t,source:null==r?void 0:r.pk}})),{onRemove:f.d7,onDelete:f.EU.bind(null,b.zj.REMOVE_LINKED_RESOURCE),onClose:g.Xg.bind(null,b.zj.REMOVE_LINKED_RESOURCE,"value",void 0)})((function(e){var t=e.enabled,r=e.resources,n=void 0===r?[]:r,i=e.onClose,a=void 0===i?function(){}:i,c=e.onDelete,u=void 0===c?function(){}:c,s=e.onRemove,f=void 0===s?function(){}:s,m=e.loading,g=e.resourceType,O=e.source,h=function(){var e=n.map((function(e){return null==e?void 0:e.pk}));l()(O)||l()(e)||!g||f({resourceType:g,source:O,target:e,processType:b.zj.REMOVE_LINKED_RESOURCE})};return o().createElement(v.Z,null,o().createElement(E.Z,{title:o().createElement(p.Z,{msgId:"gnviewer.linkedResource.deleteTitle",msgParams:{count:n.length}}),show:t,fitContent:!0,clickOutEnabled:!1,modalClassName:"gn-simple-dialog",buttons:m?[]:[{text:o().createElement(p.Z,{msgId:"gnviewer.deleteResourceNo",msgParams:{count:n.length}}),onClick:function(){h(),a()}},{text:o().createElement(p.Z,{msgId:"gnviewer.deleteResourceYes",msgParams:{count:n.length}}),bsStyle:"danger",onClick:function(){h(),u(n)}}],onClose:m?null:function(){return a()}},o().createElement("ul",{className:"gn-card-grid",style:{listStyleType:"none",padding:"0.5rem",margin:0}},n.map((function(e,t){return o().createElement("li",{style:{padding:"0.25rem 0"},key:e.pk+"-"+t},o().createElement(y.Z,{data:e,layoutCardsStyle:"list",readOnly:!0}))}))),o().createElement(w,{resourceType:g}),m&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(d.Z,{size:70}))))})),P=function(e){var t=e.hide,r=e.loading,n=e.labelId,i=e.showLoader,a=_(e,S);return t?null:o().createElement(u.Z,N({},a,{disabled:r,style:{display:"flex",alignItems:"center",gap:10}}),o().createElement(p.Z,{msgId:null!=n?n:"gnviewer.linkedResource.remove"}),r&&i&&o().createElement(d.Z,{size:12}))},j=(0,i.connect)((function(e){var t,r,n,o;return{loading:null==e||null===(t=e.controls)||void 0===t||null===(r=t[b.zj.REMOVE_LINKED_RESOURCE])||void 0===r?void 0:r.loading,viewerLinkedResource:null==e||null===(n=e.gnresource)||void 0===n?void 0:n.viewerLinkedResource,resource:null==e||null===(o=e.gnresource)||void 0===o?void 0:o.data}}),{onRemove:f.d7,onDelete:g.Xg.bind(null,b.zj.REMOVE_LINKED_RESOURCE,"value")})((function(e){var t,r,n=m.P6.VIEWER,i=null!==(t=e.viewerLinkedResource)&&void 0!==t?t:{},a=i.linkedResources,c=_(i,R),u=1===(null==a||null===(r=a.linkedBy)||void 0===r?void 0:r.length);return o().createElement(P,N({},e,{showLoader:!u,onClick:function(){if(u)e.onDelete({resources:[c],resourceType:n});else{var t,r=null===(t=e.resource)||void 0===t?void 0:t.pk,o=null==c?void 0:c.pk;l()(r)||l()(o)||!n||e.onRemove({resourceType:n,source:r,target:o,processType:b.zj.REMOVE_LINKED_RESOURCE})}},labelId:"gnviewer.removeViewerConfiguration"}))})),T=(0,i.connect)((function(e){var t,r,n,o;return{loading:null==e||null===(t=e.controls)||void 0===t||null===(r=t[b.zj.REMOVE_LINKED_RESOURCE])||void 0===r?void 0:r.loading,resourceParams:null==e||null===(n=e.gnresource)||void 0===n?void 0:n.params,resource:null==e||null===(o=e.gnresource)||void 0===o?void 0:o.data}}),{})((function(e){var t,r;return o().createElement(P,N({},e,{href:"#/viewer/"+(null===(t=e.resourceParams)||void 0===t?void 0:t.appPk)+"/map/"+(null===(r=e.resource)||void 0===r?void 0:r.pk),labelId:"gnviewer.editViewerConfiguration"}))}));const D=(0,s.rx)("MapViewerConfiguration",{component:C,containers:{ActionNavbar:[{name:"RemoveMapViewer",Component:j},{name:"EditMapViewer",Component:T}]},epics:{},reducers:{}})},887157:(e,t,r)=>{var n=r(640554),o=r(588958);e.exports=function(e,t,r,i){var a=e.length;for((r=n(r))<0&&(r=-r>a?0:a+r),(i=void 0===i||i>a?a:n(i))<0&&(i+=a),i=r>i?0:o(i);r<i;)e[r++]=t;return e}},580760:(e,t,r)=>{var n=r(989881);e.exports=function(e,t){var r=[];return n(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}},441761:(e,t,r)=>{var n=r(644239),o=r(637005);e.exports=function(e){return o(e)&&"[object Date]"==n(e)}},819873:(e,t,r)=>{var n=r(887157),o=r(816612);e.exports=function(e,t,r,i){var a=null==e?0:e.length;return a?(r&&"number"!=typeof r&&o(e,t,r)&&(r=0,i=a),n(e,t,r,i)):[]}},763105:(e,t,r)=>{var n=r(234963),o=r(580760),i=r(267206),a=r(701469);e.exports=function(e,t){return(a(e)?n:o)(e,i(t,3))}},647960:(e,t,r)=>{var n=r(441761),o=r(307518),i=r(531167),a=i&&i.isDate,l=a?o(a):n;e.exports=l},313880:(e,t,r)=>{var n=r(479833);e.exports=function(){var e=arguments,t=n(e[0]);return e.length<3?t:t.replace(e[1],e[2])}},588958:(e,t,r)=>{var n=r(829750),o=r(640554);e.exports=function(e){return e?n(o(e),0,4294967295):0}},819081:(e,t,r)=>{"use strict";e.exports=r(1174)}}]);