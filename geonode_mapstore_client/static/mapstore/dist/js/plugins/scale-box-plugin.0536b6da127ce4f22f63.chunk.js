(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[24593],{898939:(e,t,n)=>{"use strict";n.d(t,{d2:()=>r,yX:()=>o,Uo:()=>i,n2:()=>c,SA:()=>a});var r="CHANGE_HELP_STATE",o="CHANGE_HELP_TEXT",i="CHANGE_HELPWIN_VIZ";function c(e){return{type:o,helpText:e}}function a(e){return{type:i,helpwinViz:e}}},801550:(e,t,n)=>{"use strict";n.d(t,{pP:()=>r,TR:()=>o,N7:()=>i,mq:()=>c,uv:()=>a,Qy:()=>u,IL:()=>l,Li:()=>s,OW:()=>p,ZO:()=>f,Um:()=>b,TF:()=>y,Ls:()=>m,Ec:()=>d,Eu:()=>h,JJ:()=>v,nZ:()=>g,YD:()=>O,GI:()=>E,Jb:()=>w,Uh:()=>T,e$:()=>_,eh:()=>P,$j:()=>x,bJ:()=>S,Mk:()=>j,xy:()=>C,o6:()=>N,NH:()=>A,FP:()=>M,Mo:()=>I,sO:()=>R,Px:()=>Z,hd:()=>H,y9:()=>L,Ju:()=>k,BV:()=>V,SO:()=>B,H0:()=>U,$X:()=>z,ou:()=>G,NE:()=>D,Lq:()=>J,aN:()=>F});var r="CHANGE_MAP_VIEW",o="CLICK_ON_MAP",i="CHANGE_MOUSE_POINTER",c="CHANGE_ZOOM_LVL",a="PAN_TO",u="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",s="CHANGE_MAP_CRS",p="CHANGE_MAP_SCALES",f="CHANGE_MAP_STYLE",b="CHANGE_ROTATION",y="CREATION_ERROR_LAYER",m="UPDATE_VERSION",d="INIT_MAP",h="RESIZE_MAP",v="CHANGE_MAP_LIMITS",g="SET_MAP_RESOLUTIONS",O="REGISTER_EVENT_LISTENER",E="UNREGISTER_EVENT_LISTENER",w="MOUSE_MOVE",T="MOUSE_OUT",_="MAP:MAP_PLUGIN_LOAD",P="MAP:ORIENTATION",x="MAP:UPDATE_MAP_VIEW",S="MAP:UPDATE_MAP_OPTIONS";function j(e,t,n,r){return{type:_,mapType:t,loading:e,loaded:n,error:r}}function C(e,t,n){return{type:l,pos:e,zoom:t,crs:n}}function N(e,t,n,o,i,c,a,u){return{type:r,center:e,zoom:t,bbox:n,size:o,mapStateSource:i,projection:c,viewerOptions:a,resolution:u}}function A(e){return{type:s,crs:e}}function M(e,t){return{type:o,point:e,layer:t}}function I(e){return{type:i,pointer:e}}function R(e,t){return{type:c,zoom:e,mapStateSource:t}}function Z(e,t,n,r){return{type:u,extent:e,crs:t,maxZoom:n,options:r}}function H(e,t){return{type:f,style:e,mapStateSource:t}}function L(e){return{type:d,disableFeedbackMask:e}}function k(){return{type:h}}function V(e){var t=e.restrictedExtent,n=e.crs,r=e.minZoom;return{type:v,restrictedExtent:t,crs:n,minZoom:r}}function B(e){return{type:g,resolutions:e}}var U=function(e,t){return{type:O,eventName:e,toolName:t}},z=function(e,t){return{type:E,eventName:e,toolName:t}},G=function(e){return{type:w,position:e}},D=function(){return{type:T}},J=function(e){return{type:P,orientation:e}},F=function(e){return{type:S,configUpdate:e}}},383606:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(747037),o=n.n(r),i=n(675263),c=n.n(i),a=n(124852),u=n.n(a),l=n(480681),s=n(86638);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function b(e,t,n){return t=m(t),function(e,t){if(t&&("object"==p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,n||[],m(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}var g=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return h(e=b(this,t,[].concat(r)),"onMouseOver",(function(){var t=o()(e.props.helpText)?e.props.helpText:(0,s.S$)(e.context.messages,e.props.helpText.props.msgId);e.props.changeHelpText(t),e.props.changeHelpwinVisibility(!0)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return u().createElement(l.Ct,{id:this.props.id,onMouseOver:this.onMouseOver,className:(this.props.isVisible?"":"hidden ")+(this.props.className?this.props.className:"")},"?")}}])&&f(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(u().Component);h(g,"propTypes",{id:c().string,helpText:c().oneOfType([c().string,c().element]),isVisible:c().bool,changeHelpText:c().func,changeHelpwinVisibility:c().func,className:c().string}),h(g,"contextTypes",{messages:c().object}),h(g,"defaultProps",{helpText:"",isVisible:!1});const O=g},875964:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(618446),o=n.n(r),i=n(675263),c=n.n(i),a=n(124852),u=n.n(a),l=n(480681),s=n(552259);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function b(e,t,n){return t=m(t),function(e,t){if(t&&("object"==p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,n||[],m(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}var g=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return h(e=b(this,t,[].concat(r)),"onComboChange",(function(t){var n=parseInt(t.nativeEvent.target.value,10);e.props.onChange(n,e.props.scales[n])})),h(e,"getOptions",(function(){return e.props.scales.map((function(t,n){return u().createElement("option",{value:n,key:n},e.props.template(t,n))})).filter((function(t,n){return n>=e.props.minZoom}))})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(t,e),n=t,(r=[{key:"shouldComponentUpdate",value:function(e){return!o()(e,this.props)}},{key:"render",value:function(){var e,t=Math.round(this.props.currentZoomLvl);return e=this.props.readOnly?u().createElement("label",null,this.props.template(this.props.scales[t],t)):this.props.useRawInput?u().createElement("select",{label:this.props.label,onChange:this.onComboChange,bsSize:"small",value:t||""},this.getOptions()):u().createElement(l.l0,{inline:!0},u().createElement(l.cw,{bsSize:"small"},u().createElement(l.J$,null,this.props.label),u().createElement(l.NI,{componentClass:"select",onChange:this.onComboChange,value:t||""},this.getOptions()))),u().createElement("div",{id:this.props.id,style:this.props.style},e)}}])&&f(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(u().Component);h(g,"propTypes",{id:c().string,style:c().object,scales:c().array,currentZoomLvl:c().number,minZoom:c().number,onChange:c().func,readOnly:c().bool,label:c().oneOfType([c().func,c().string,c().object]),template:c().func,useRawInput:c().bool}),h(g,"defaultProps",{id:"mapstore-scalebox",scales:(0,s.Z5)(0,28),currentZoomLvl:0,minZoom:0,onChange:function(){},readOnly:!1,template:function(e){return e<1?Math.round(1/e)+" : 1":"1 : "+Math.round(e)},useRawInput:!1});const O=g},423519:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$});var r=n(124852),o=n.n(r),i=n(322843),c=n(22222),a=n(800827),u=n(801550),l=n(171703),s=n(898939),p=n(675263),f=n.n(p),b=n(383606),y=n(893379),m=n.n(y),d=n(992058);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,T(r.key),r)}}function g(e,t,n){return t=E(t),function(e,t){if(t&&("object"==h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,O()?Reflect.construct(t,n||[],E(e).constructor):t.apply(e,n))}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(O=function(){return!!e})()}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function T(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:t+""}m()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;var _,P,x,S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o().createElement("div",{id:this.props.id},o().createElement(b.Z,{id:"helpbadge-"+(this.props.children.key||this.props.id),isVisible:this.props.helpEnabled,helpText:this.props.helpText,changeHelpText:this.props.changeHelpText,changeHelpwinVisibility:this.props.changeHelpwinVisibility}),this.props.children)}}])&&v(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(o().Component);_=S,P="propTypes",x={id:f().string,helpText:f().oneOfType([f().string,f().element]),helpEnabled:f().bool,changeHelpText:f().func,changeHelpwinVisibility:f().func},(P=T(P))in _?Object.defineProperty(_,P,{value:x,enumerable:!0,configurable:!0,writable:!0}):_[P]=x;const j=S,C=(0,l.connect)((function(e){return{helpEnabled:e.controls&&e.controls.help&&e.controls.help.enabled}}),{changeHelpText:s.n2,changeHelpwinVisibility:s.SA})(j);var N=n(481756),A=n(875964),M=n(552259),I=n(727418),R=n.n(I),Z=n(638068);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(null,arguments)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,V(r.key),r)}}function V(e){var t=function(e,t){if("object"!=H(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==H(t)?t:t+""}function B(e,t,n){return t=z(t),function(e,t){if(t&&("object"==H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,U()?Reflect.construct(t,n||[],z(e).constructor):t.apply(e,n))}function U(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(U=function(){return!!e})()}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}m()(Z.Z,{insert:"head",singleton:!1}),Z.Z.locals;var D=(0,c.P1)([a.Od,a._e],(function(e,t){return{minZoom:t,currentZoomLvl:e&&e.zoom,scales:(0,M.yu)(e&&e.projection||"EPSG:3857",e&&e.mapOptions&&e.mapOptions.view&&e.mapOptions.view.DPI||null)}})),J=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),B(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(t,e),function(e,t,n){return t&&k(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(t,[{key:"render",value:function(){return o().createElement(C,{id:"mapstore-scalebox-container",key:"scalebox-help",helpText:o().createElement(N.Z,{msgId:"helptexts.scaleBox"})},o().createElement(A.Z,L({key:"scaleBox",label:o().createElement(N.Z,{msgId:"mapScale"})},this.props)))}}])}(o().Component),F=(0,i.$j)(D,{onChange:u.sO})(J);const $={ScaleBoxPlugin:R()(F,{disablePluginIf:"{state('mapType') === 'cesium'}"},{MapFooter:{name:"scale",position:2,tool:!0,priority:1}}),reducers:{}}},481756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(171703),o=n(805346);const i=(0,r.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},992058:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(923645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi .mapToolbar .mapstore-tb-helpbadge {\n    display: block;\n    background-color: #777;\n    position: absolute;\n    z-index: 1000;\n    top : -10px;\n    left: -10px;\n}\n\n\n.msgapi #helpbadge-zoomToMaxExtent {\n    display: inline;\n    position: absolute;\n    left: 34px;\n    top: 72px;\n    z-index: 100000\n}\n\n.msgapi #helpbadge-scaleBox {\n    display: inline;\n    position: absolute;\n    left: 116px;\n    bottom: 48px;\n    z-index: 100000\n}\n\n.msgapi #helpbadge-seachBar {\n    display: inline;\n    position: absolute;\n    left: 46px;\n    top: 10px;\n    z-index: 100000\n}\n\n\n.msgapi .btn .badge {\n    position: absolute;\n    top: -10px;\n    left: -10px;\n}\n\n.msgapi .themed .btn .badge {\n    top: -35px;\n    left: -50px;\n}\n\n.msgapi .badge {\n    cursor: pointer;\n}\n\n.msgapi #helpbadge-scaleBox {\n    left: 0 !important;\n}\n\n.msgapi #mapstore-navbar #helpbadge-search-help {\n    position: absolute;\n    left: -10px;\n    bottom: -8px;\n    z-index: 1;\n}\n",""]);const i=o},638068:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(923645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi #mapstore-scalebox {\n    /*z-index: 10;\n    bottom: 6px;\n    left: -2px;\n    position: absolute;\n    margin: 8px;\n    width: 148px;*/\n}\n\n.msgapi #mapstore-scalebox-container {\n    /*z-index: 10;\n    bottom: -16px;\n    right: 55px;\n    left: auto;\n    position: absolute;\n    margin: 8px;\n    width: 148px;*/\n}\n",""]);const i=o},923645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},893379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var p=c(s),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:s,updater:m(f,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,y=0;function m(e,t){var n,r,o;if(t.singleton){var i=y++;n=b||(b=u(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=u(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var u=a(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=u}}}}}]);