(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[49595],{881808:(e,r,t)=>{"use strict";t.d(r,{eD:()=>n,AM:()=>o,ok:()=>i,Gg:()=>u,nT:()=>a,TL:()=>c,KS:()=>s,EB:()=>l,DZ:()=>f,Aw:()=>p,V_:()=>y,H0:()=>d,jW:()=>E,JZ:()=>m,fQ:()=>b,HK:()=>v,YO:()=>g,I6:()=>O});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",i="MAP_CONFIG_LOADED",u="MAP_CONFIG_LOAD_ERROR",a="MAP_LOAD_INFO",c="MAP_INFO_LOAD_START",s="MAP_INFO_LOADED",l="MAP_INFO_LOAD_ERROR",f="MAP:MAP_SAVE_ERROR",p="MAP:MAP_SAVED",y="MAP:RESET_MAP_SAVE_ERROR";function d(e,r,t){return{type:i,config:e,legacy:!!r,mapId:r,zoomToExtent:t}}function E(e,r){return{type:u,error:e,mapId:r}}function m(e,r,t,n,i){return{type:o,configName:e,mapId:r,config:t,mapInfo:n,overrideConfig:i}}function b(e,r){return{type:s,mapId:r,info:e}}function v(e,r){return{type:l,mapId:e,error:r}}function g(e){return{type:c,mapId:e}}function O(e){return{type:a,mapId:e}}},580416:(e,r,t)=>{"use strict";t.d(r,{yS:()=>n,Zz:()=>o,ms:()=>i,ih:()=>u,OX:()=>c,sb:()=>s,K$:()=>l,k7:()=>f,cX:()=>p,x9:()=>y,vs:()=>d,oE:()=>E,Po:()=>m,qv:()=>b,cI:()=>v,g6:()=>g,I4:()=>O,l$:()=>_,Xv:()=>S,k3:()=>A,CQ:()=>P,R8:()=>R,HN:()=>T,sH:()=>h,c7:()=>D,_7:()=>I,eF:()=>w,O6:()=>j,ED:()=>L,RP:()=>C,sF:()=>M,VP:()=>H,He:()=>N,vO:()=>q,WO:()=>G,bh:()=>F,pV:()=>Y,MK:()=>k,ZF:()=>x,tV:()=>X,Dv:()=>U,Yz:()=>V,kI:()=>Z,XG:()=>W,A4:()=>K,Rp:()=>Q,$o:()=>z,ct:()=>$,oh:()=>B,$h:()=>J,ud:()=>ee,Qr:()=>re,LR:()=>te,nN:()=>ne,UG:()=>oe,F5:()=>ie,c9:()=>ue,Jh:()=>ae,Xy:()=>ce});var n="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",a="CONTEXT_NODE",c="SORT_NODE",s="REMOVE_NODE",l="UPDATE_NODE",f="MOVE_NODE",p="LAYER_LOADING",y="LAYER_LOAD",d="LAYER_ERROR",E="ADD_LAYER",m="ADD_GROUP",b="REMOVE_LAYER",v="SHOW_SETTINGS",g="HIDE_SETTINGS",O="UPDATE_SETTINGS",_="REFRESH_LAYERS",S="LAYERS:UPDATE_LAYERS_DIMENSION",A="LAYERS_REFRESHED",P="LAYERS_REFRESH_ERROR",R="LAYERS:BROWSE_DATA",T="LAYERS:DOWNLOAD",h="LAYERS:CLEAR_LAYERS",D="LAYERS:SELECT_NODE",I="LAYERS:FILTER_LAYERS",w="LAYERS:SHOW_LAYER_METADATA",j="LAYERS:HIDE_LAYER_METADATA",L="LAYERS:UPDATE_SETTINGS_PARAMS";function C(e,r,t){return{type:v,node:e,nodeType:r,options:t}}function M(){return{type:g}}function H(e){return{type:O,options:e}}function N(e,r){return{type:n,newProperties:r,layer:e}}function q(e,r){return{type:o,layer:e,params:r}}function G(e,r){return{type:i,newProperties:r,group:e}}function F(e,r,t){return{type:u,node:e,nodeType:r,status:!t}}function Y(e){return{type:a,node:e}}function k(e,r){return{type:c,node:e,order:r,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function x(e,r){return{type:s,node:e,nodeType:r,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function X(e,r,t){return{type:l,node:e,nodeType:r,options:t}}function U(e,r,t){return{type:f,node:e,groupId:r,index:t}}function V(e){return{type:p,layerId:e}}function Z(e,r){return{type:y,layerId:e,error:r}}function W(e,r,t){return{type:d,layerId:e,tilesCount:r,tilesErrorCount:t}}function K(e){return{type:E,layer:e,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function Q(e,r,t){return{type:m,group:e,parent:r,options:t}}function z(e){return{type:b,layerId:e}}function $(e,r){return{type:n,layer:e,newProperties:{_v_:r||(new Date).getTime()}}}function B(e){return{type:A,layers:e}}function J(e,r){return{type:P,layers:e,error:r}}function ee(e,r,t,n){return{type:S,dimension:e,value:r,options:t,layers:n}}function re(e){return{type:R,layer:e}}function te(e){return{type:T,layer:e}}function ne(){return{type:h}}function oe(e,r,t){return{type:D,id:e,nodeType:r,ctrlKey:t}}function ie(e){return{type:I,text:e}}function ue(e,r){return{type:w,metadataRecord:e,maskLoading:r}}function ae(){return{type:j}}function ce(e,r){return{type:L,newParams:e,update:r}}},73814:(e,r,t)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){var o,i,u,a;o=e,i=r,u=t[r],a=function(e,r){if("object"!=n(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i),(i="symbol"==n(a)?a:String(a))in o?Object.defineProperty(o,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[i]=u})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.d(r,{xO:()=>u,HH:()=>a,yp:()=>c,i8:()=>s,hC:()=>l,UK:()=>f});var u="MAP:ADD_POPUP",a="MAP:REMOVE_POPUP",c="MAP:CLEAN_POPUPS",s=function(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return{type:u,id:e,popup:i({id:e},r),single:t}},l=function(e){return{type:a,id:e}},f=function(){return{type:c}}},213652:(e,r,t)=>{"use strict";t.d(r,{Wz:()=>n,v2:()=>o,gj:()=>i,e_:()=>u});var n="MAP_TYPE_CHANGED",o="MAP_TYPE:UPDATE_LAST_2D_MAPTYPE";function i(e){return{type:n,mapType:e}}function u(e){return{type:o,mapType:e}}},597222:(e,r,t)=>{"use strict";t.d(r,{Vc:()=>o,qj:()=>i,bj:()=>u,p7:()=>a,Av:()=>c,M8:()=>s,wn:()=>l,gs:()=>f,NN:()=>p,C2:()=>y,O7:()=>d,oQ:()=>E,dX:()=>m,al:()=>b,Gh:()=>v,x2:()=>g,Y7:()=>O,b4:()=>_,GI:()=>S,KP:()=>A,dS:()=>P,Zw:()=>R,l4:()=>T,fZ:()=>h,Z:()=>D,a:()=>I,WN:()=>w,k9:()=>j,yo:()=>L,kE:()=>C,kV:()=>M,v2:()=>H,_q:()=>N,tt:()=>q,Jc:()=>G,w4:()=>F,QJ:()=>Y,KG:()=>k,o$:()=>x,TS:()=>X,Tw:()=>U,I3:()=>V});var n=t(197395),o="SEARCH:SEARCH_WITH_FILTER",i="SEARCH:SCHEDULE_SEARCH_WITH_FILTER",u="TEXT_SEARCH_STARTED",a="TEXT_SEARCH_RESULTS_LOADED",c="TEXT_SEARCH_RESULTS_PURGE",s="TEXT_SEARCH_RESET",l="TEXT_SEARCH_ADD_MARKER",f="TEXT_SEARCH_TEXT_CHANGE",p="TEXT_SEARCH_LOADING",y="TEXT_SEARCH_NESTED_SERVICE_SELECTED",d="TEXT_SEARCH_ERROR",E="TEXT_SEARCH_CANCEL_ITEM",m="TEXT_SEARCH_ITEM_SELECTED",b="TEXT_SEARCH_SHOW_GFI",v="TEXT_SEARCH_SET_HIGHLIGHTED_FEATURE",g="UPDATE_RESULTS_STYLE",O="CHANGE_SEARCH_TOOL",_="SEARCH:ZOOM_ADD_POINT",S="SEARCH:CHANGE_FORMAT",A="SEARCH:CHANGE_COORD",P="SEARCH:HIDE_MARKER";function R(e){return{type:S,format:e}}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.layer,t=e.cql_filter;return{type:o,layer:r,cql_filter:t}}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.layer,t=e.cql_filter;return{type:i,layer:r,cql_filter:t}}function D(e,r,t){return{type:_,pos:e,zoom:r,crs:t}}function I(e){return{type:O,activeSearchTool:e}}function w(e){return{type:a,results:e,append:arguments.length>1&&void 0!==arguments[1]&&arguments[1],services:arguments.length>2?arguments[2]:void 0}}function j(e){return{type:f,searchText:e}}function L(e){return{type:p,loading:e}}function C(e){return{type:d,error:e}}function M(){return{type:c}}function H(){return{type:s}}function N(e,r){return{type:l,markerPosition:e,markerLabel:r}}function q(e){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).services;return{type:u,searchText:e,services:void 0===r?null:r,maxResults:arguments.length>2&&void 0!==arguments[2]?arguments[2]:15}}function G(e,r,t){return{type:m,item:e,mapConfig:r,resultsStyle:t}}var F=function(e){return{type:b,item:e}};function Y(e,r,t){return{type:y,searchText:t,services:e,items:r}}function k(e){return{type:E,item:e}}function x(e){return{type:g,style:e}}function X(e,r){return{type:A,coord:e,val:r}}function U(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.nonQueriableLayers",autoDismiss:10})}function V(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.serverError",autoDismiss:10})}},615402:(e,r,t)=>{"use strict";t.d(r,{Z:()=>b});var n=t(675263),o=t.n(n),i=t(124852),u=t.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function s(e,r,t){return r=f(r),function(e,r){if(r&&("object"===a(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,l()?Reflect.construct(r,t||[],f(e).constructor):r.apply(e,t))}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,r){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},p(e,r)}function y(e,r,t){return(r=d(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){var r=function(e,r){if("object"!=a(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(r)?r:String(r)}var E=t(868195).FormattedHTMLMessage,m=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),s(this,r,arguments)}var t,n;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&p(e,r)}(r,e),t=r,(n=[{key:"render",value:function(){return this.context.intl?u().createElement(E,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),r}(u().Component);y(m,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(m,"contextTypes",{intl:o().object});const b=m},821751:(e,r,t)=>{"use strict";t.r(r),t.d(r,{IDENTIFY_POPUP:()=>S,default:()=>A});var n=t(124852),o=t.n(n),i=t(173014),u=t(11196),a=t(867076),c=t(171703),s=t(22222),l=t(307877),f=t(921914),p=t(542872),y=t(701469),d=t.n(y),E=t(352353),m=t.n(E),b=t(979870),v=t(800827),g=(0,a.compose)((0,c.connect)((0,s.P1)(l.Qf,(function(e){return{index:e}})),{setIndex:f.oO}),(0,a.defaultProps)({index:0,responses:[]})),O=(0,s.P1)([l.q7,l.o9,l.OK,l.us,l.x0,v.hp,l.vR],(function(e,r,t,n,o,i,u){return{responses:e,validResponses:r,requests:t,format:n,showEmptyMessageGFI:o,missingResponses:(t||[]).length-(e||[]).length,renderValidOnly:i,loaded:u}}));const _=(0,a.compose)((0,c.connect)(O),(0,a.defaultProps)({responses:[],container:function(e){var r=e.index,t=e.children;return o().createElement(o().Fragment,null,d()(t)&&t[r]||t)},header:b.Z}),g,u.Yy,u.mI,(0,i.Z)((function(e){var r=e.loaded;return m()(r)})))(p.Z);var S="identify";const A={identify:_}},993451:(e,r,t)=>{"use strict";t.d(r,{Z:()=>O});var n=t(86638),o=t(675263),i=t.n(o),u=t(984596),a=t.n(u),c=t(701469),s=t.n(c),l=t(414293),f=t.n(l),p=t(747037),y=t.n(p),d=t(867076),E=["messages"];function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){g(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e,r,t){var n;return n=function(e,r){if("object"!=m(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r),(r="symbol"==m(n)?n:String(n))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const O=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,d.compose)((0,d.getContext)({messages:i().object}),(0,d.mapProps)((function(t){var o=t.messages,i=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(t,E);return v(v({},i),a()(e).reduce(function(e,r,t){return function(){var o=arguments.length>1?arguments[1]:void 0;return v(v({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},g({},o,e[o]&&function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(s()(r))return r.map((function(o){var i=(0,n.S$)(e,o[t]||y()(o)&&o||"");return v(v({},o),{},g({},t,f()(i)?r:i))}));var o=(0,n.S$)(e,r);return f()(o)?r:o}(r,e[o],t)))}}(i,o,r),{}))})))}},426125:(e,r,t)=>{"use strict";t.d(r,{Z:()=>D});var n=t(727418),o=t.n(n),i=t(630998),u=t.n(i),a=t(352353),c=t.n(a),s=t(441609),l=t.n(s),f=t(755745),p=t.n(f),y=t(165442),d=t.n(y),E=t(921914),m=t(881808),b=t(782904),v=t(213652),g=t(396606),O=["index","loaded"];function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function S(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return A(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?A(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){var n,o,i,u;n=e,o=r,i=t[r],u=function(e,r){if("object"!=_(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==_(u)?u:String(u))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function T(e,r,t){var n="vector"===t,i=n?r.reqId:u()(e.requests||[],(function(e){return e.reqId===r.reqId}));if(-1!==i){var a;if(["exceptions","error"].includes(t)){var s=e.requests.filter((function(e,r){return r!==i})),f=e.responses.filter((function(e,r){return r!==i}));return R(R({},e),{},{responses:f,requests:s})}var p,y=e.configuration,d=e.requests,E=e.responses||[],m="hover"===(null==y?void 0:y.trigger)||(null==e?void 0:e.showInMapPopup);if(!n){var b={response:r[t],queryParams:r.requestParams,layerMetadata:r.layerMetadata,layer:r.layer};m?E=[].concat(S(E),[b]):E[i]=b}return m?p={loaded:!0,index:0}:!m&&function(e,r,t,n){var o,i,u=e.configuration,a=e.requests,s=e.queryableLayers,f=void 0===s?[]:s,p=e.index,y=(u||{}).infoFormat,d=(r[t]||{}).layer,E=!(!n&&"3dtiles"!==(void 0===d?{}:d).type),m=null===(o=(0,g.Te)(y))||void 0===o?void 0:o.getValidResponses([r[t]]),b=null===(i=(0,g.Te)(y))||void 0===i?void 0:i.getNoValidResponses(r),v=c()(p)&&!!m.length,O=!E&&a.length===b.filter((function(e){return e})).length,_=c()(p)&&n&&a.filter((function(e){return l()(e)})).length===f.length;return v||O||_}(e,E,i,n)?p={loaded:!0,index:i}:E.length!==d.length||null!==(a=p)&&void 0!==a&&a.loaded||(p={loaded:!0}),o()({},e,R(R(R({},n&&{requests:d}),!c()(p)&&p),{},{responses:S(E)}))}return e}var h={enabled:!0,configuration:{}};const D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case E.Re:return o()({},e,{warning:"NO_QUERYABLE_LAYERS"});case E.ih:return o()({},e,{warning:null});case E.Xw:return o()({},e,{enabled:r.enabled});case E.ph:return o()({},e,{enabled:!e.enabled});case E.gG:return o()({},e,{index:r.index});case E.oz:return o()({},e,{highlight:r.enabled});case E.Pn:var t=r.reqId,n=r.request,i=e.requests||[];return o()({},e,{requests:[].concat(S(i),[{request:n,reqId:t}])});case E.DZ:return e.index,e.loaded,R(R({},function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,O)),{},{queryableLayers:[],responses:[],requests:[]});case E.XL:return T(e,r,"data");case E.Ih:return T(e,r,"exceptions");case E.km:return T(e,r,"error");case E.xy:return o()({},e,{clickPoint:r.point,clickLayer:r.layer||null,itemId:r.itemId||null,overrideParams:r.overrideParams||null,filterNameList:r.filterNameList||null});case E.e8:return R(R({},e),{},{configuration:R(R({},e.configuration),{},{infoFormat:r.infoFormat})});case E.E0:return o()({},e,{showMarker:!0});case E.F9:return o()({},e,{showMarker:!1});case E.X_:return o()({},e,{showModalReverse:!0,reverseGeocodeData:r.reverseGeocodeData});case E.pb:return o()({},e,{showModalReverse:!1,reverseGeocodeData:void 0});case b.l:return o()({},e,{showMarker:!1,responses:[],requests:[],configuration:R(R({},e.configuration),{},{trigger:"click"})});case E.qb:var u,a={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[r.request.lng,r.request.lat]}},c=r.metadata&&r.metadata.units;switch(c){case"m":default:c="meters";break;case"deg":c="degrees";break;case"mi":c="miles"}var s,l=r.metadata&&r.metadata.resolution||1,f=p()(a,(r.metadata.buffer||1)*l,c),y=(r.layer.features||[]).filter((function(e){try{return"FeatureCollection"===e.type&&e.features&&e.features.length?e.features.reduce((function(e,t){var n=t.properties.useGeodesicLines&&t.properties.geometryGeodesic?R(R({},t),{},{geometry:t.properties.geometryGeodesic}):t;return e||d()(f,l&&r.metadata.buffer&&c?p()(n,1,"meters"):n)}),!1):d()(f,l&&r.metadata.buffer&&c?p()(e,1,"meters"):e)}catch(e){return!1}})),g=e.responses||[],_="hover"===(null==e||null===(u=e.configuration)||void 0===u?void 0:u.trigger)||(null==e?void 0:e.showInMapPopup),A={response:{crs:null,features:y,totalFeatures:"unknown",type:"FeatureCollection"},queryParams:r.request,layerMetadata:r.metadata,format:"JSON"};_?(g=[].concat(S(g),[A]),s={reqId:0}):(g[e.requests.length]=A,s={reqId:e.requests.length});var P=[].concat(S(e.requests),[{}]);return T(o()({},e,{requests:P,queryableLayers:r.queryableLayers,responses:S(g)}),s,"vector");case E.lF:return o()({},e,{centerToMarker:r.status});case E.ZF:return R(R({},e),{},{configuration:R(R({},e.configuration),{},{showEmptyMessageGFI:!e.configuration.showEmptyMessageGFI})});case m.ok:return R(R({},e),{},{configuration:r.config.mapInfoConfiguration||e.configuration||{}});case E.GI:return R(R({},e),{},{formatCoord:r.format});case E.B1:return R(R({},e),{},{showCoordinateEditor:!r.showCoordinateEditor});case E.gc:return R(R({},e),{},{currentEditFeatureQuery:r.query});case E.zX:return R(R({},e),{},{configuration:R(R({},e.configuration),{},{trigger:r.trigger})});case E.Zb:return R(R({},e),{},{showInMapPopup:r.value});case v.Wz:return"cesium"===r.mapType?R(R({},e),{},{configuration:R(R({},e.configuration),{},{trigger:"click"})}):e;case E.Xp:var D;return R(R(R({},e),r.cfg),{},{configuration:R(R({},e.configuration),null===(D=r.cfg)||void 0===D?void 0:D.configuration)});default:return e}}}}]);