(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[91063],{580416:(e,t,n)=>{"use strict";n.d(t,{yS:()=>r,Zz:()=>o,ms:()=>i,ih:()=>u,OX:()=>c,sb:()=>a,K$:()=>l,k7:()=>s,cX:()=>p,x9:()=>f,vs:()=>y,oE:()=>d,Po:()=>m,qv:()=>E,cI:()=>b,g6:()=>g,I4:()=>v,l$:()=>O,Xv:()=>S,k3:()=>R,CQ:()=>h,R8:()=>A,HN:()=>_,sH:()=>P,c7:()=>L,_7:()=>w,eF:()=>T,O6:()=>j,ED:()=>D,RP:()=>I,sF:()=>Y,VP:()=>N,He:()=>C,vO:()=>k,WO:()=>G,bh:()=>H,MK:()=>x,ZF:()=>M,tV:()=>z,Dv:()=>F,Yz:()=>U,kI:()=>V,XG:()=>Z,A4:()=>K,Rp:()=>W,$o:()=>X,ct:()=>$,oh:()=>B,$h:()=>q,ud:()=>Q,Qr:()=>J,LR:()=>ee,nN:()=>te,UG:()=>ne,c9:()=>re,Xy:()=>oe});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",c="SORT_NODE",a="REMOVE_NODE",l="UPDATE_NODE",s="MOVE_NODE",p="LAYER_LOADING",f="LAYER_LOAD",y="LAYER_ERROR",d="ADD_LAYER",m="ADD_GROUP",E="REMOVE_LAYER",b="SHOW_SETTINGS",g="HIDE_SETTINGS",v="UPDATE_SETTINGS",O="REFRESH_LAYERS",S="LAYERS:UPDATE_LAYERS_DIMENSION",R="LAYERS_REFRESHED",h="LAYERS_REFRESH_ERROR",A="LAYERS:BROWSE_DATA",_="LAYERS:DOWNLOAD",P="LAYERS:CLEAR_LAYERS",L="LAYERS:SELECT_NODE",w="LAYERS:FILTER_LAYERS",T="LAYERS:SHOW_LAYER_METADATA",j="LAYERS:HIDE_LAYER_METADATA",D="LAYERS:UPDATE_SETTINGS_PARAMS";function I(e,t,n){return{type:b,node:e,nodeType:t,options:n}}function Y(){return{type:g}}function N(e){return{type:v,options:e}}function C(e,t){return{type:r,newProperties:t,layer:e}}function k(e,t){return{type:o,layer:e,params:t}}function G(e,t){return{type:i,newProperties:t,group:e}}function H(e,t,n){return{type:u,node:e,nodeType:t,status:!n}}function x(e,t){return{type:c,node:e,order:t,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function M(e,t){return{type:a,node:e,nodeType:t,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function z(e,t,n){return{type:l,node:e,nodeType:t,options:n}}function F(e,t,n){return{type:s,node:e,groupId:t,index:n}}function U(e){return{type:p,layerId:e}}function V(e,t){return{type:f,layerId:e,error:t}}function Z(e,t,n){return{type:y,layerId:e,tilesCount:t,tilesErrorCount:n}}function K(e){return{type:d,layer:e,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function W(e,t,n){return{type:m,group:e,parent:t,options:n,asFirst:arguments.length>3&&void 0!==arguments[3]&&arguments[3]}}function X(e){return{type:E,layerId:e}}function $(e,t){return{type:r,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function B(e){return{type:R,layers:e}}function q(e,t){return{type:h,layers:e,error:t}}function Q(e,t,n,r){return{type:S,dimension:e,value:t,options:n,layers:r}}function J(e){return{type:A,layer:e}}function ee(e){return{type:_,layer:e}}function te(){return{type:P}}function ne(e,t,n){return{type:L,id:e,nodeType:t,ctrlKey:n}}function re(e,t){return{type:T,metadataRecord:e,maskLoading:t}}function oe(e,t){return{type:D,newParams:e,update:t}}},615402:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(675263),o=n.n(r),i=n(124852),u=n.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function l(e,t,n){return t=p(t),function(e,t){if(t&&("object"==c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,s()?Reflect.construct(t,n||[],p(e).constructor):t.apply(e,n))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function y(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}var m=n(868195).FormattedHTMLMessage,E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return this.context.intl?u().createElement(m,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&a(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(u().Component);y(E,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(E,"contextTypes",{intl:o().object});const b=E},38842:(e,t,n)=>{"use strict";n.d(t,{wk:()=>p,Yf:()=>f,c3:()=>y,fY:()=>d});var r=n(218721),o=n.n(r),i=n(227361),u=n.n(i),c=n(313311),a=n.n(c),l=n(22222),s=n(308316),p=function(e){return o()(e,"localConfig.localizedLayerStyles")},f=function(e){var t=u()(e,"localConfig.plugins.dashboard",[]),n=a()(t,(function(e){return"DashboardEditor"===e.name}))||{};return u()(n,"cfg.catalog.localizedLayerStyles",!1)},y=function(e){return u()(e,"localConfig.localizedLayerStyles.name","mapstore_language")},d=(0,l.P1)(p,y,s.KV,(function(e,t,n){var r=[];return e&&r.push({name:t,value:n}),r}))},426379:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var r=n(124852),o=n.n(r),i=n(322843),u=n(171703),c=n(22222),a=n(675110),l=n(800827),s=n(580416),p=n(615402),f=n(462104),y=n(308316),d=n(38842),m=n(552259);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=E(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==E(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){return v(v({},e),{},{legendParams:v(v({},null==e?void 0:e.legendParams),{},{_v_:null==e?void 0:e._v_})})}var R=(0,u.connect)((0,c.P1)([a.l2,l.Od,y.Pz,y.KV,d.wk],(function(e,t,n,r,o){return{layers:e.filter((function(e){return"background"!==e.group&&"wms"===e.type})),currentZoomLvl:null==t?void 0:t.zoom,scales:(0,m.yu)(t&&t.projection||"EPSG:3857",t&&t.mapOptions&&t.mapOptions.view&&t.mapOptions.view.DPI||null),language:o?r:null,currentLocale:n}})),{onUpdateNode:s.tV})((function(e){var t,n,i=e.layers,u=e.onUpdateNode,c=e.currentZoomLvl,a=e.scales,l=e.language,s=e.currentLocale,y=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=y[0],m=y[1];return i.length?o().createElement("div",{className:"shadow gn-legend-wrapper",style:{position:"absolute",margin:4,width:"auto",zIndex:50}},o().createElement("div",{onClick:function(){m((function(e){return!e}))},className:"gn-legend-head",style:{padding:"4px 8px",fontSize:"0.75rem"}},o().createElement("span",{role:"button",className:"identify-icon glyphicon glyphicon-".concat(d?"bottom":"next"),title:"Expand layer legend"}),o().createElement("span",{className:"gn-legend-list-item",style:{paddingLeft:4}},o().createElement(p.Z,{msgId:"gnviewer.legend"}))),o().createElement("div",{style:{display:d?"block":"none"}},o().createElement(f.Z,{map:{layers:i.map(S),groups:[]},theme:"legend",config:{sortable:!1,showFullTitle:!0,hideOpacitySlider:!1,hideVisibilityButton:!1,expanded:!0,language:l,currentLocale:s,scales:a,zoom:c},onChangeMap:function(e){e.layers.forEach((function(e){u(e.id,"layers",{opacity:e.opacity,visibility:e.visibility})}))}}))):null}));const h=(0,i.rx)("Legend",{component:R,containers:{},epics:{},reducers:{}})}}]);