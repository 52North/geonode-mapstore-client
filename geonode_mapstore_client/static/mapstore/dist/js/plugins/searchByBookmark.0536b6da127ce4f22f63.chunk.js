(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[80962],{597222:(e,t,r)=>{"use strict";r.d(t,{Vc:()=>o,qj:()=>i,bj:()=>a,p7:()=>l,Av:()=>c,M8:()=>u,wn:()=>s,gs:()=>f,NN:()=>m,C2:()=>p,O7:()=>b,oQ:()=>y,dX:()=>d,al:()=>v,Gh:()=>g,x2:()=>h,Y7:()=>E,b4:()=>O,GI:()=>k,KP:()=>S,dS:()=>w,Zw:()=>j,l4:()=>P,fZ:()=>C,Z:()=>_,a:()=>T,WN:()=>x,k9:()=>N,yo:()=>R,kE:()=>I,kV:()=>Z,v2:()=>D,_q:()=>A,tt:()=>H,Jc:()=>B,w4:()=>F,QJ:()=>L,KG:()=>G,o$:()=>M,TS:()=>X,Tw:()=>q,I3:()=>U});var n=r(197395),o="SEARCH:SEARCH_WITH_FILTER",i="SEARCH:SCHEDULE_SEARCH_WITH_FILTER",a="TEXT_SEARCH_STARTED",l="TEXT_SEARCH_RESULTS_LOADED",c="TEXT_SEARCH_RESULTS_PURGE",u="TEXT_SEARCH_RESET",s="TEXT_SEARCH_ADD_MARKER",f="TEXT_SEARCH_TEXT_CHANGE",m="TEXT_SEARCH_LOADING",p="TEXT_SEARCH_NESTED_SERVICE_SELECTED",b="TEXT_SEARCH_ERROR",y="TEXT_SEARCH_CANCEL_ITEM",d="TEXT_SEARCH_ITEM_SELECTED",v="TEXT_SEARCH_SHOW_GFI",g="TEXT_SEARCH_SET_HIGHLIGHTED_FEATURE",h="UPDATE_RESULTS_STYLE",E="CHANGE_SEARCH_TOOL",O="SEARCH:ZOOM_ADD_POINT",k="SEARCH:CHANGE_FORMAT",S="SEARCH:CHANGE_COORD",w="SEARCH:HIDE_MARKER";function j(e){return{type:k,format:e}}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.layer,r=e.cql_filter;return{type:o,layer:t,cql_filter:r}}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.layer,r=e.cql_filter;return{type:i,layer:t,cql_filter:r}}function _(e,t,r){return{type:O,pos:e,zoom:t,crs:r}}function T(e){return{type:E,activeSearchTool:e}}function x(e){return{type:l,results:e,append:arguments.length>1&&void 0!==arguments[1]&&arguments[1],services:arguments.length>2?arguments[2]:void 0}}function N(e){return{type:f,searchText:e}}function R(e){return{type:m,loading:e}}function I(e){return{type:b,error:e}}function Z(){return{type:c}}function D(){return{type:u}}function A(e,t){return{type:s,markerPosition:e,markerLabel:t}}function H(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).services;return{type:a,searchText:e,services:void 0===t?null:t,maxResults:arguments.length>2&&void 0!==arguments[2]?arguments[2]:15}}function B(e,t,r,n){return{type:d,item:e,mapConfig:t,service:r,resultsStyle:n}}var F=function(e){return{type:v,item:e}};function L(e,t,r){return{type:p,searchText:r,services:e,items:t}}function G(e){return{type:y,item:e}}function M(e){return{type:h,style:e}}function X(e,t){return{type:S,coord:e,val:t}}function q(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.nonQueriableLayers",autoDismiss:10})}function U(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.serverError",autoDismiss:10})}},225016:(e,t,r)=>{"use strict";r.d(t,{Cv:()=>n,RD:()=>o,NR:()=>i,mV:()=>a,N3:()=>l,dR:()=>c,sS:()=>u,sm:()=>s});var n="SET_SEARCH_BOOKMARK_CONFIG",o="RESET_BOOKMARK_CONFIG",i="UPDATE_BOOKMARK",a="FILTER_BOOKMARKS";function l(e,t){return{type:n,property:e,value:t}}function c(){return{type:o}}function u(e){return{type:i,bookmark:e,idx:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1}}function s(e){return{type:a,filter:e}}},698772:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(893379),o=r.n(n),i=r(172704);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=r(675263),l=r.n(a),c=r(124852),u=r.n(c),s=r(480681);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function p(e,t,r){return t=y(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,b()?Reflect.construct(t,r||[],y(e).constructor):t.apply(e,r))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function v(e,t,r){return(t=g(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}var h=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return v(e=p(this,t,[].concat(n)),"onFilter",(function(t){e.props.onFilter(t.target.value)})),v(e,"onClear",(function(){e.props.onFilter("")})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.filterText?u().createElement(s.Ox,{placement:"bottom",overlay:u().createElement(s.u,{id:"mapstore-toc-filter"},this.props.tooltipClear)},u().createElement(s.gG,{glyph:"1-close",className:"text-primary close-filter",onClick:this.onClear})):u().createElement(s.gG,{className:"text-primary",glyph:"filter"});return u().createElement(s.cw,{className:"mapstore-filter"},u().createElement(s.BZ,null,u().createElement(s.NI,{value:this.props.filterText,placeholder:this.props.filterPlaceholder,onChange:this.onFilter,onFocus:this.props.onFocus,type:"text"}),u().createElement(s.BZ.Addon,{className:"square-button-md"},this.props.loading?u().createElement("div",{className:"toc-inline-loader"}):e)))}}])&&m(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(u().Component);v(h,"propTypes",{loading:l().bool,filterText:l().string,filterPlaceholder:l().oneOfType([l().object,l().string]),onFilter:l().func,onFocus:l().func,tooltipClear:l().oneOfType([l().object,l().string])}),v(h,"defaultProps",{loading:!1,filterText:"",filterPlaceholder:"",onFilter:function(){},onFocus:function(){},tooltipClear:"Clear"});const E=h},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(675263),o=r.n(n),i=r(124852),a=r.n(i);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){return e>100?"full":e>40?"medium":"small"},m=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return a().createElement("div",{className:o,style:u({width:t,height:t,overflow:"hidden"},n)},!i&&a().createElement("div",{className:"mapstore-".concat(f(t),"-size-loader")}))};m.propTypes={size:o().number,className:o().string,style:o().object};const p=m},876424:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(124852),o=r.n(n),i=r(513218),a=r.n(i),l=r(532425);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}var u=["body","caption","infoExtra","className","description","fullText","onClick","onMouseEnter","onMouseLeave","preview","selected","size","style","stylePreview","styleTools","title","loading","dragSymbol","tools"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.body,r=e.caption,n=e.infoExtra,i=e.className,c=void 0===i?"":i,m=e.description,p=e.fullText,b=e.onClick,y=void 0===b?function(){}:b,d=e.onMouseEnter,v=void 0===d?function(){}:d,g=e.onMouseLeave,h=void 0===g?function(){}:g,E=e.preview,O=e.selected,k=e.size,S=e.style,w=void 0===S?{}:S,j=e.stylePreview,P=void 0===j?{}:j,C=e.styleTools,_=void 0===C?{}:C,T=e.title,x=e.loading,N=e.dragSymbol,R=void 0===N?"+":N,I=e.tools,Z=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u);return o().createElement("div",{className:"mapstore-side-card".concat(O?" selected":"").concat(k?" ms-"+k:"").concat(c?" ".concat(c):"").concat(p?" full-text":""),onClick:function(e){return y(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({title:T,preview:E,description:m,caption:r,tools:I},Z),e)},onMouseEnter:v,onMouseLeave:h,style:w},o().createElement("div",{className:"ms-head"},Z.isDraggable&&Z.connectDragSource&&Z.connectDragSource(o().createElement("div",{className:"mapstore-side-card-tool text-center"},o().createElement("div",{style:{width:10,overflow:"hidden"}},R))),E&&o().createElement("div",{className:"mapstore-side-preview",style:P},E),o().createElement("div",{className:"mapstore-side-card-container"},o().createElement("div",{className:"mapstore-side-card-inner"},o().createElement("div",{className:"mapstore-side-card-left-container"},o().createElement("div",{className:"mapstore-side-card-info"},T&&o().createElement("div",{className:"mapstore-side-card-title"},o().createElement("span",null,T)),m&&o().createElement("div",{className:"mapstore-side-card-desc"},a()(m)?m:o().createElement("span",null,m)),r&&o().createElement("div",{className:"mapstore-side-card-caption"},o().createElement("span",null,r))),n),o().createElement("div",{className:"mapstore-side-card-right-container"},o().createElement("div",{className:"mapstore-side-card-tool text-center",style:_},I),"sm"!==k&&o().createElement("div",{className:"mapstore-side-card-loading"},o().createElement(l.Z,{className:"mapstore-side-card-loader",size:12,hidden:!x})))))),t&&o().createElement("div",{className:"ms-body"},t))}},212610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(124852),o=r.n(n),i=r(867076),a=r(957557),l=r.n(a),c=r(815135);const u=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled;return!(void 0!==r&&r&&t)}),c.Z,(function(e){return function(t){return o().createElement(e,l()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},993451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(86638),o=r(285547),i=r(675263),a=r.n(i),l=r(984596),c=r.n(l),u=r(701469),s=r.n(u),f=r(414293),m=r.n(f),p=r(747037),b=r.n(p),y=r(867076),d=["messages","locale"];function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=v(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==v(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"msgId";return(0,y.compose)((0,y.getContext)({messages:a().object,locale:a().string}),(0,y.mapProps)((function(i){var a=i.messages,l=i.locale,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(i,d);return h(h({},u),c()(e).reduce(function(e,t,r){var i=t.messages,a=t.locale,l=t.mode;return function(){var t=arguments.length>1?arguments[1]:void 0;return h(h({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},E({},t,"msgId"===l?function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(s()(t))return t.map((function(o){var i=(0,n.S$)(e,o[r]||b()(o)&&o||"");return h(h({},o),{},E({},r,m()(i)?t:i))}));var o=t?(0,n.S$)(e,t):t;return m()(o)?t:o}(i,e[t],r):function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(s()(e))return e.map((function(n){var i=(0,o.Z)(n[r]||b()(n)&&n||"",t);return h(h({},n),{},E({},r,m()(i)?e:i))}));var n=(0,o.Z)(e,t);return m()(n)?e:n}(e[t],a,r)))}}(u,{locale:l,messages:a,mode:r},t),{}))})))}},617252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(124852),o=r.n(n),i=r(867076),a=r(675263),l=r.n(a),c=r(957557),u=r.n(c),s=r(480681),f=r(950966);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function b(e,t,r){return t=d(t),function(e,t){if(t&&("object"==m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,r||[],d(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}const E=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),b(this,r,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(r,t),n=r,(a=[{key:"renderPopover",value:function(){return o().createElement(s.J2,u()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,u()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(f.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&p(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,a}(o().Component),g(t,"propTypes",{popover:l().object}),g(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(124852),o=r.n(n),i=r(819081),a=r.n(i),l=r(480681),c=r(90085),u=["visible","Element","renderButton"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(null,arguments)}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,f=e.btnDefaultProps,m=void 0===f?{}:f,p=e.transitionProps,b=void 0===p?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:p,y=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,a=e.renderButton,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u);return n?a||i&&o().createElement(i,s({key:l.key||t},l))||o().createElement(c.Z,s({key:l.key||t},m,l)):null}))};return o().createElement(l.hE,i,b?o().createElement(a(),b,y()):y())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(124852),o=r.n(n),i=r(867076),a=r(805346),l=r(957557),c=r.n(l),u=r(480681),s=r(532425),f=r(212610),m=r(617252),p=r(38560),b=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(null,arguments)}const d=(0,i.compose)(f.Z,m.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,l=e.textId,f=e.glyphClassName,m=void 0===f?"":f,d=e.loaderProps,v=void 0===d?{}:d,g=e.children,h=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,b);return o().createElement(p.Z,c()(h,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(u.gG,{glyph:t,className:m}):null,l?o().createElement(a.Z,{msgId:l}):i,r?o().createElement(s.Z,y({className:"ms-loader".concat(h.bsStyle&&" ms-loader-"+h.bsStyle||"").concat(h.bsSize&&" ms-loader-"+h.bsSize||"")},v)):null,g)}))},315092:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ie});var n=r(124852),o=r.n(n),i=r(171703),a=r(22222),l=r(480681),c=r(227361),u=r.n(c),s=r(414293),f=r.n(s),m=r(322843),p=r(688362),b=r(729679),y=r(807472),d=r(38560),v=r(481756),g=r(675263),h=r.n(g),E=r(698772),O=r(805346),k=r(876424),S=r(993451),w=r(80717),j=(0,S.Z)("filterPlaceholder")(E.Z),P=function(e){var t=e.filter,r=void 0===t?"":t,n=e.onFilter,i=e.onPropertyChange,a=e.bookmarks,c=void 0===a?[]:a,u=function(e,t){i("bookmark",e),i("editIdx",t),i("page",1)};return o().createElement(l.rj,{fluid:!0,id:"bookmark-list",className:"ms-header",style:{width:"100%",boxShadow:"none"}},o().createElement(l.X2,null,o().createElement(l.JX,{xs:12,style:{padding:0}},o().createElement(j,{filterPlaceholder:"search.bookmarkFilter",filterText:r,onFilter:n}))),o().createElement(l.X2,{className:"bookmark-card"},0===c.length?o().createElement("div",{className:"search-bookmark-name"},o().createElement(O.Z,{msgId:"search.bookmarkslistempty"})):c.map((function(e,t){return(n=e.title)&&-1!==n.toLowerCase().indexOf(r.toLowerCase())?o().createElement(k.Z,{key:"bookmark-card-".concat(t),preview:o().createElement(l.gG,{glyph:"bookmark"}),title:o().createElement("span",{onClick:function(){return u(e,t)},style:{margin:"6px 0px"}},e&&e.title),size:"sm",tools:o().createElement(w.Z,{btnDefaultProps:{className:"square-button-md no-border"},btnGroupProps:{style:{margin:10}},buttons:[{glyph:"pencil",tooltipId:"search.editBookmark",onClick:function(){return u(e,t)}},{glyph:"trash",tooltipId:"search.deleteBookmark",onClick:function(){return function(e){var t=c.filter((function(t,r){return r!==e}));i("bookmarkSearchConfig",{bookmarks:t})}(t)}}]})}):null;var n}))))};P.propTypes={filter:h().string,onFilter:h().func.isRequired,onPropertyChange:h().func.isRequired,bookmarks:h().array.isRequired};const C={Element:P,validate:!0};var _=r(694174),T=r.n(_),x=r(794192);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=N(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=N(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==N(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=(0,S.Z)("placeholder")(l.NI),H=(0,S.Z)("placeholder")(x.Z),B=function(e){var t=e.onPropertyChange,r=e.bookmark,n=void 0===r?{}:r,i=e.bbox,a=n.options,c=void 0===a?{}:a,u=n.title,s=n.layerVisibilityReload,f=void 0!==s&&s,m=function(e,r){var o=Z(Z({},n.options),{},D({},r,parseFloat(e)));t("bookmark",Z(Z({},n),{},{options:o}))},p=function(e){t("bookmark",Z(Z({},n),{},{title:e}))},b=function(e){return c[e]?["north","south"].includes(e)?c[e]&&!T()(c[e],-90,91)?"error":null:c[e]&&!T()(c[e],-180,181)?"error":null:null};return o().createElement("div",{id:"add-new-bookmark"},o().createElement(l.JX,null,o().createElement(l.cw,{validationState:b("title")},o().createElement(l.J$,null,o().createElement(O.Z,{msgId:"search.b_title"})),o().createElement(A,{className:"bookmark-title",value:u,name:"title",type:"text",placeholder:"search.b_title",onChange:function(e){var t=e.target;return p(t.value)},onBlur:function(e){var t=e.target;return p(t.value.trim())}}))),o().createElement(l.JX,null,o().createElement(l.cw,{style:{display:"flex",justifyContent:"space-between"}},o().createElement(l.J$,null,o().createElement(O.Z,{msgId:"search.b_bbox"})),o().createElement("div",{id:"bookmark-tools"},o().createElement(l.Ox,{key:"toggleLayer",placement:"top",overlay:o().createElement(l.u,{id:"search-bookmark-layer"},o().createElement(O.Z,{msgId:"search.b_layer_tooltip"}))},o().createElement(d.Z,{key:"toggleLayer",bsStyle:"primary",className:"square-button-md btn btn-default no-border",onClick:function(){t("bookmark",Z(Z({},n),{},{layerVisibilityReload:!f}))}},o().createElement(l.gG,{glyph:f?"eye-open":"eye-close"}))),o().createElement(l.Ox,{key:"getBBox",placement:"top",overlay:o().createElement(l.u,{id:"search-bookmark-bbox"},o().createElement(O.Z,{msgId:"search.b_bbox_tooltip"}))},o().createElement(d.Z,{key:"getBBox",bsStyle:"primary",className:"square-button-md btn btn-default no-border",onClick:function(){var e,r,o=(r=4,function(e){if(Array.isArray(e))return e}(e=i)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,r)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(e,t):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],l=o[1],c=o[2],u=o[3],s={west:parseFloat(a)||0,south:parseFloat(l)||0,east:parseFloat(c)||0,north:parseFloat(u)||0},f=Z(Z({},n.options),s);t("bookmark",Z(Z({},n),{},{options:f}))}},o().createElement(l.gG,{glyph:"fit-cover"})))))),o().createElement("div",{className:"bbox-field-group"},o().createElement("div",{className:"field-top-bottom"},o().createElement(l.cw,{validationState:b("north")},o().createElement(l.J$,null,o().createElement(O.Z,{msgId:"search.b_bbox_north"})),o().createElement(H,{placeholder:"search.b_bbox_north_placeholder",min:-90,max:90,name:"north",type:"number",onChange:function(e){return m(e,"north")},value:c.north}))),o().createElement("div",{className:"field-center-group"},o().createElement("div",{className:"field-left-right"},o().createElement(l.cw,{validationState:b("west")},o().createElement(l.J$,null,o().createElement(O.Z,{msgId:"search.b_bbox_west"})),o().createElement(H,{placeholder:"search.b_bbox_west_placeholder",min:-180,max:180,name:"west",type:"number",onChange:function(e){return m(e,"west")},value:c.west}))),o().createElement("div",{className:"field-left-right"},o().createElement(l.cw,{validationState:b("east")},o().createElement(l.J$,null,o().createElement(O.Z,{msgId:"search.b_bbox_east"})),o().createElement(H,{placeholder:"search.b_bbox_east_placeholder",min:-180,max:180,name:"east",type:"number",onChange:function(e){return m(e,"east")},value:c.east})))),o().createElement("div",{className:"field-top-bottom"},o().createElement(l.cw,{validationState:b("south")},o().createElement(l.J$,null,o().createElement(O.Z,{msgId:"search.b_bbox_south"})),o().createElement(H,{placeholder:"search.b_bbox_south_placeholder",min:-90,max:90,name:"south",type:"number",onChange:function(e){return m(e,"south")},value:c.south})))))};B.propTypes={onPropertyChange:h().func,bookmark:h().object,bbox:h().array};const F={Element:B,validate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,n=e.title,o=void 0===n?"":n,i=r.south,a=r.north,l=r.west,c=r.east,u=T()(i,-90,91)&&T()(a,-90,91),s=T()(l,-180,181)&&T()(c,-180,181),f=!!o.trim().length;return s&&u&&f}};var L=r(782904),G=r(597222),M=r(225016),X=r(881808);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){J(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function J(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=q(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==q(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var K=r(800827),V=r(274621);function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W.apply(null,arguments)}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=$(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==$(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var te=function(e,t,r,n){var o=r.canEdit,i=r.id,a=t&&(o||f()(i));return"ALL"===e||"EDIT"===e&&a||"ADMIN"===e&&n},re=(0,i.connect)((0,a.P1)([function(e){var t;return(null==e||null===(t=e.search)||void 0===t?void 0:t.activeSearchTool)||null},function(e){return(null==e?void 0:e.searchbookmarkconfig)||{}}],(function(e,t){return{active:"bookmarkSearch"===e,show:(null==t?void 0:t.allowUser)||!!u()(t,"bookmarkSearchConfig.bookmarks",[]).length}})),{onClick:G.a})((function(e){var t=e.show,r=e.onClick,n=e.active;return t?o().createElement(l.sN,{active:n,onClick:function(){r("bookmarkSearch"),document.dispatchEvent(new MouseEvent("click"))}},o().createElement(l.gG,{glyph:"bookmark"})," ",o().createElement(v.Z,{msgId:"search.searchByBookmark"})):null})),ne=(0,a.P1)([K.Od,function(e){return e.controls||{}},function(e){return e.searchbookmarkconfig||{}},V.jl,V.qg,K._H],(function(e,t,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return{bbox:e&&e.bbox&&(0,p.getExtentFromViewport)(e.bbox),enabled:t.searchBookmarkConfig&&t.searchBookmarkConfig.enabled||!1,pages:[C,F],page:r&&r.page||0,bookmark:r&&r.bookmark,bookmarkSearchConfig:r&&r.bookmarkSearchConfig,editIdx:r&&r.editIdx,filter:r&&r.filter,allowUser:te(u()(r,"bookmarkEditing"),n,i,o)}})),oe=(0,i.connect)(ne,{toggleControl:L.Xi,onPropertyChange:M.N3,resetBookmarkConfig:M.dR,updateBookmark:M.sS,onFilter:M.sm})((function(e){var t=e.enabled,r=e.pages,i=e.page,a=e.onPropertyChange,c=e.bookmark,u=e.bookmarkSearchConfig,s=void 0===u?{}:u,f=e.editIdx,m=e.zoomOnSelect,p=void 0===m||m,g=e.bookmarkEditing,h=void 0===g?"EDIT":g,E=e.allowUser;(0,n.useEffect)((function(){a("zoomOnSelect",p),a("bookmarkEditing",h)}),[a]),(0,n.useEffect)((function(){a("allowUser",E)}),[E]);var O,k=function(){i>1?a("page",i-1):1===i&&e.resetBookmarkConfig()},S=function(){return r[i].validate(c)},w=r&&r[i]||null;return t?o().createElement(y.Z,{id:"bookmark-panel-dialog",draggable:!0,modal:!1},o().createElement("span",{role:"header",style:{display:"flex",justifyContent:"space-between"}},o().createElement("span",null,(O=0===i?"search.b_listpaneltitle":"search.b_newpaneltitle",o().createElement(v.Z,{msgId:O}))),0===i&&o().createElement("button",{onClick:function(){e.toggleControl("searchBookmarkConfig"),e.resetBookmarkConfig()},className:"close"}," ",o().createElement(l.gG,{glyph:"1-close"}))),o().createElement("div",{role:"body",className:"services-config-editor"},o().createElement(w.Element,W({bookmarks:s.bookmarks,onPropertyChange:a,bookmark:c},e))),0===i?o().createElement("span",{role:"footer"},o().createElement(d.Z,{onClick:function(){a("bookmark",{}),a("page",1)},bsStyle:"primary"},o().createElement(v.Z,{msgId:"search.addbtn"}))):i===r.length-1?o().createElement("span",{role:"footer"},o().createElement(d.Z,{onClick:k,bsStyle:"primary"},o().createElement(v.Z,{msgId:"search.prevbtn"})),o().createElement(d.Z,{disabled:!S(),onClick:function(){var t=c.layerVisibilityReload,r=void 0!==t&&t;e.updateBookmark(Y(Y({},c),{},{layerVisibilityReload:r}),f)},bsStyle:"success"},o().createElement(v.Z,{msgId:"search.savebtn"}))):o().createElement("span",{role:"footer"},1===i?o().createElement(b.Z,{onConfirm:k,bsStyle:"primary",confirming:{text:o().createElement(v.Z,{msgId:"search.cancelconfirm"})},text:o().createElement(v.Z,{msgId:"search.cancelbtn"})}):o().createElement(d.Z,{onClick:k,bsStyle:"primary"},o().createElement(v.Z,{msgId:1===i?"search.cancelbtn":"search.prevbtn"})),o().createElement(d.Z,{disabled:!S(),onClick:function(){i<r.length-1&&a("page",i+1)},bsStyle:"primary"},o().createElement(v.Z,{msgId:"search.nextbtn"})))):null}));const ie=(0,m.rx)("SearchByBookmark",{component:oe,containers:{Search:{menuItem:re,bookmarkConfig:function(e,t,r){return{onClick:function(){t||e("searchBookmarkConfig")},glyph:"cog",className:"square-button-md no-border ",tooltipId:"search.bookmarksettings",tooltipPosition:"bottom",bsStyle:"default",pullRight:!0,visible:"bookmarkSearch"===r}}}},reducers:{searchbookmarkconfig:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.Cv:return z(z({},e),{},J({},t.property,t.value));case X.ok:var r=t.config.map.bookmark_search_config||{};return z(z({},e),{},{bookmarkSearchConfig:r});case L.l:case M.RD:return z(z({},e),{},{bookmark:void 0,page:0,editIdx:void 0});case M.NR:var n=(e.bookmarkSearchConfig&&e.bookmarkSearchConfig.bookmarks||[]).slice(),o=z({},t.bookmark);return-1!==t.idx?n[t.idx]=o:n.push(o),z(z({},e),{},{bookmark:void 0,page:0,editIdx:void 0,bookmarkSearchConfig:z(z({},e.bookmarkSearchConfig),{},{bookmarks:n})});case M.mV:return z(z({},e),{},{filter:t.filter});default:return e}}}})},172704:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(923645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".msgapi .mapstore-filter input::-ms-clear,\n.msgapi .mapstore-filter input::-ms-reveal {\n  display: none;\n}\n",""]);const i=o},515600:e=>{var t=Math.max,r=Math.min;e.exports=function(e,n,o){return e>=r(n,o)&&e<t(n,o)}},694174:(e,t,r)=>{var n=r(515600),o=r(418601),i=r(14841);e.exports=function(e,t,r){return t=o(t),void 0===r?(r=t,t=0):r=o(r),e=i(e),n(e,t,r)}},819081:(e,t,r)=>{"use strict";e.exports=r(1174)}}]);