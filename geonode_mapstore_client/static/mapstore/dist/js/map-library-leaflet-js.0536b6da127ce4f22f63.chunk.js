(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[37161,47310,45992],{921914:(t,e,r)=>{"use strict";r.d(e,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>u,Pn:()=>c,DZ:()=>s,e8:()=>f,E0:()=>l,F9:()=>p,X_:()=>d,pb:()=>v,Re:()=>y,ih:()=>b,xy:()=>h,jL:()=>m,oz:()=>E,ph:()=>T,lF:()=>g,gG:()=>O,cb:()=>I,GI:()=>_,B1:()=>N,fv:()=>P,gc:()=>R,zX:()=>w,ZF:()=>A,Zb:()=>F,DW:()=>S,Xp:()=>M,Fm:()=>j,sV:()=>D,LU:()=>C,XP:()=>H,WU:()=>x,mK:()=>G,g:()=>L,ws:()=>U,HP:()=>k,aN:()=>Y,Pg:()=>q,u0:()=>B,TM:()=>W,PM:()=>X,lK:()=>K,sv:()=>z,MO:()=>Q,oO:()=>V,Mc:()=>J,Zw:()=>$,RA:()=>tt,am:()=>et,ZM:()=>rt,wm:()=>nt,Y$:()=>ot,Qu:()=>it,kT:()=>at});var n=r(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",u="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",d="SHOW_REVERSE_GEOCODE",v="HIDE_REVERSE_GEOCODE",y="NO_QUERYABLE_LAYERS",b="CLEAR_WARNING",h="FEATURE_INFO_CLICK",m="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",E="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",T="TOGGLE_MAPINFO_STATE",g="UPDATE_CENTER_TO_MARKER",O="IDENTIFY:CHANGE_PAGE",I="IDENTIFY:CLOSE_IDENTIFY",_="IDENTIFY:CHANGE_FORMAT",N="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",P="IDENTIFY:EDIT_LAYER_FEATURES",R="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",w="IDENTIFY:SET_MAP_TRIGGER",A="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",F="IDENTIFY:SET_SHOW_IN_MAP_POPUP",S="IDENTIFY:IDENTIFY_IS_MOUNTED",M="IDENTIFY:INIT_PLUGIN";function j(t,e,r,n,i){return{type:o,data:e,reqId:t,requestParams:r,layerMetadata:n,layer:i}}function D(t,e,r,n){return{type:i,error:e,reqId:t,requestParams:r,layerMetadata:n}}function C(){return{type:y}}function H(){return{type:b}}function x(t,e){return{type:c,reqId:t,request:e}}function G(t){return{type:u,enabled:t}}function L(){return{type:s}}function U(t){return{type:f,infoFormat:t}}function k(){return{type:l}}function Y(){return{type:p}}function Z(t){return{type:d,reverseGeocodeData:t.data}}function q(t){return function(e){n.Z.reverseGeocode(t).then((function(t){e(Z(t))})).catch((function(t){e(Z(t))}))}}function B(){return{type:v}}function W(){return{type:T}}function X(t){return{type:g,status:t}}function K(t,e){return{type:h,point:t,layer:e,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,ignoreVisibilityLimits:arguments.length>5&&void 0!==arguments[5]&&arguments[5]}}function z(t){return{type:m,point:t}}function Q(t){return{type:E,enabled:t}}function V(t){return{type:O,index:t}}var J=function(){return{type:I}},$=function(t){return{type:_,format:t}},tt=function(t){return{type:N,showCoordinateEditor:t}},et=function(t){return{type:P,layer:t}},rt=function(t){return{type:R,query:t}},nt=function(t){return{type:w,trigger:t}},ot=function(t){return{type:F,value:t}},it=function(t){return{type:S,isMounted:t}},at=function(t){return{type:M,cfg:t}}},647310:(t,e,r)=>{"use strict";r.d(e,{Z:()=>f});var n=r(375875),o=r.n(n),i=r(472500),a=r.n(i),u=r(727418),c=r.n(u),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const f={geocode:function(t,e){var r=c()({q:t},s,e||{}),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(t,e){var r=c()({lat:t.lat,lon:t.lng},e||{},s),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},615402:(t,e,r)=>{"use strict";r.d(e,{Z:()=>h});var n=r(675263),o=r.n(n),i=r(124852),a=r.n(i);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,v(n.key),n)}}function s(t,e,r){return e=l(e),function(t,e){if(e&&("object"==u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,f()?Reflect.construct(e,r||[],l(t).constructor):e.apply(t,r))}function f(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(f=function(){return!!t})()}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function d(t,e,r){return(e=v(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:e+""}var y=r(868195).FormattedHTMLMessage,b=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){return this.context.intl?a().createElement(y,{id:this.props.msgId,values:this.props.msgParams}):a().createElement("span",null,this.props.msgId||"")}}])&&c(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(a().Component);d(b,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),d(b,"contextTypes",{intl:o().object});const h=b},48507:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n=function(){return r(935701),{Map:r(739726).Z,Layer:r(152792).Z,Feature:r(444948).Z,MeasurementSupport:r(442047).default,Overview:r(521975),ScaleBar:r(20564),DrawSupport:r(791753).Z,PopupSupport:r(967465).Z}}},38560:(t,e,r)=>{"use strict";r.d(e,{Z:()=>l});var n=r(480681),o=r(124852),i=r.n(o),a=r(294184),u=r.n(a),c=["disabled","className","onClick"];function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},s.apply(null,arguments)}var f=r(815135);const l=(p=n.zx,i().forwardRef((function(t,e){var r=t.disabled,n=t.className,o=t.onClick,a=void 0===o?function(){}:o,f=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,c);return i().createElement(p,s({ref:e,className:r?u()("disabled",n):n,onClick:function(){r||a.apply(void 0,arguments)}},f),f.children)})));var p;(0,f.Z)(n.zx)},443143:(t,e,r)=>{"use strict";r.d(e,{qH:()=>f,qj:()=>l,qq:()=>p,TM:()=>d});var n,o=r(717621),i=r.n(o),a=r(14841),u=r.n(a),c=r(264721),s=r.n(c),f=function(t,e,r,o){var i=t;isNaN(parseFloat(t))&&(i=n.hexToHsv(t)[0]);var a=.5/(r-1),u=e/(r-1),c=[];1===r&&(a=.5,u=e/2);for(var s=0;s<r;s++){var f=i+s*u-e/2,l=a*s+.3,p=l;o&&(f=o.h||f,l=o.s||l,p=o.v||p),c.push(n.hsvToHex(f,l,p,s))}return c},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red";return i()(t).toHexString()},p=function(t,e,r){var n=i()(t);return t&&n.setAlpha(u()(void 0!==e?e:n.getAlpha())).toRgbString()||r},d=function t(e){var r=Math.round,o=Math.random,i=[r(255*o()),r(255*o()),r(255*o())],a=n.rgbToHex(i);if(e)for(;s()(e,a)||"#000000"===a||"#FFFFFF"===a;)t(e);return a};n={decToHex:function(t){var e="0123456789ABCDEF",r=parseInt(t,10);return r=isNaN(r)?0:r,e.charAt(((r=r>255||r<0?0:r)-r%16)/16)+e.charAt(r%16)},rgbToHex:function(t,e,r){return t instanceof Array?n.rgbToHex(t[0],t[1],t[2]):"#"+n.decToHex(t)+n.decToHex(e)+n.decToHex(r)},realToDec:function(t){return Math.min(255,Math.round(256*t))},rgbToHsv:function(t,e,r){if(t instanceof Array)return n.rgbToHsv(t[0],t[1],t[2]);var o,i,a,u,c,s=t/255,f=e/255,l=r/255;switch(o=Math.min(Math.min(s,f),l),a=(i=Math.max(Math.max(s,f),l))-o,i){case o:u=0;break;case s:u=60*(f-l)/a,f<l&&(u+=360);break;case f:u=60*(l-s)/a+120;break;case l:u=60*(s-f)/a+240}return c=0===i?0:1-o/i,[Math.round(u),c,i]},distributedColorsHEX:function(t){for(var e=360/(t-1),r=[],o=function t(e,r,o){var i=t(e,r,o);return n.rgbToHex(i)},i=0;i<t;i++)r.push(o(e*i,.57,.63));return r},sameToneRangeColors:f,hsvToRgb:function(t,e,r){if(t instanceof Array)return n.hsvToRgb(t[0],t[1],t[2]);var o,i,a,u=Math.floor(t/60%6),c=t/60-u,s=r*(1-e),f=r*(1-c*e),l=r*(1-(1-c)*e);switch(u){case 0:o=r,i=l,a=s;break;case 1:o=f,i=r,a=s;break;case 2:o=s,i=r,a=l;break;case 3:o=s,i=f,a=r;break;case 4:o=l,i=s,a=r;break;case 5:o=r,i=s,a=f}return[n.realToDec(o),n.realToDec(i),n.realToDec(a)]},hsvToHex:function(t,e,r){var o=n.hsvToRgb(t,e,r);return n.rgbToHex(o)},hexToHsv:function(t){var e=t;if(e.length>0){"#"===e[0]&&(e=t.substring(1));var r=n.hexToRgb(e);return n.rgbToHsv(r)}return null},hexToRgb:function(t){var e,r,n,o=t;return"#"===o.charAt(0)&&(o=t.substring(1)),e=o.charAt(0)+o.charAt(1),r=o.charAt(2)+o.charAt(3),n=o.charAt(4)+o.charAt(5),[parseInt(e,16),parseInt(r,16),parseInt(n,16)]},colorToHexStr:l,colorToRgbaStr:p,generateRandomHexColor:d}},45992:(t,e,r)=>{"use strict";r.d(e,{h:()=>l,Z:()=>p});var n=r(535937),o=r.n(n),i=r(836882),a=r(737275);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=function(t,e){var r,n,u,c,f=i.Z;if("custom"===t)r=e;else if(u=(c=t.split("."))[0],n=c[1],!(r=f[u]))throw new Error("No such provider ("+u+")");var l={url:r.url,options:r.options||{}};if(n&&"variants"in r){if(!(n in r.variants))throw new Error("No such variant of "+(u||r.url)+" ("+n+")");var p,d=r.variants[n];p="string"==typeof d?{variant:d}:d.options,l={url:d.url||l.url,options:s(s({},l.options||{}),p)}}else"function"==typeof l.url&&(l.url=l.url(c.splice(1,c.length-1).join(".")));var v="file:"===window.location.protocol||l.options.forceHTTP;0===l.url.indexOf("//")&&v&&(l.url="http:"+l.url),l.options.retina&&(e.detectRetina&&a.ZP.getBrowserProperties().retina?e.detectRetina=!1:l.options.retina=""),l.options.attribution&&(l.options.attribution=function t(e){return-1===e.indexOf("{attribution.")?e:e.replace(/\{attribution.(\w*)\}/,(function(e,r){return t(f[r].options.attribution)}))}(l.options.attribution));var y=s(s({},l.options),o()(e,(function(t){return void 0!==t})));return[l.url,y]};const p={getLayerConfig:l}},923645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},893379:(t,e,r)=>{"use strict";var n,o=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),i=[];function a(t){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===t){e=r;break}return e}function u(t,e){for(var r={},n=[],o=0;o<t.length;o++){var u=t[o],c=e.base?u[0]+e.base:u[0],s=r[c]||0,f="".concat(c," ").concat(s);r[c]=s+1;var l=a(f),p={css:u[1],media:u[2],sourceMap:u[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:y(p,e),references:1}),n.push(f)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,f=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function l(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d=null,v=0;function y(t,e){var r,n,o;if(e.singleton){var i=v++;r=d||(d=c(e)),n=l.bind(null,r,i,!1),o=l.bind(null,r,i,!0)}else r=c(e),n=p.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=a(r[n]);i[o].references--}for(var c=u(t,e),s=0;s<r.length;s++){var f=a(r[s]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}r=c}}}}}]);