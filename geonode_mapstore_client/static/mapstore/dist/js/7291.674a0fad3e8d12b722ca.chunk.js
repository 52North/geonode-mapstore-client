(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7291],{85148:(t,n,r)=>{"use strict";r.d(n,{Qw:()=>b,jo:()=>v,m$:()=>g,AF:()=>h,WT:()=>O,ns:()=>j,RP:()=>w,aK:()=>S,oP:()=>P});var e=r(75110),o=r(22222),i=r(27361),u=r.n(i),a=r(13311),c=r.n(a);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return s(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function m(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function y(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?m(Object(r),!0).forEach((function(n){p(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function p(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!==l(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var b=function(t,n){return function(r){return u()(r,"dimension.data[".concat(n,"][").concat(t,"]"))}},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return c()(t.dimensions||[],{name:n})},v=function(t,n){return function(r){return b(t.id,n)(r)||d(t,n)}},g=function(t){return(0,e.l2)(t).reduce((function(n,r){var e=v(r,"time")(t);return e?y(y({},n),{},p({},r.id,e)):n}),{})},h=function(t){return(0,e.l2)(t).filter((function(t){return d(t,"time")}))},O=function(t){var n=u()(t,"dimension.currentTime");return n&&n.split("/")[0]},j=function(t){return u()(t,"dimension.offsetTime")},w=function(t){return!!j(t)},S=((0,o.P1)(g,(function(t){return Object.keys(t).reduce((function(n,r){return[].concat(f(n),f(t[r]&&t[r].values||[]))}),[]).sort()||[]})),function(t){return function(n){return f(u()(v(t,"time")(n),"values",[])).sort()}}),P=function(t,n){var r=b(n,"time")(t),e=r&&r.domain&&r.domain.split("--");if(e&&2===e.length)return e&&{start:e[0],end:e[1]};var o=r&&r.domain&&r.domain.split(",");return o&&o.length>0?{start:o[0],end:o[o.length-1]}:null}},97291:(t,n,r)=>{"use strict";r.d(n,{YK:()=>w,zb:()=>S,en:()=>P,cX:()=>A,__:()=>T,E2:()=>k,Li:()=>I,fP:()=>_,uy:()=>C,gB:()=>F,Ry:()=>M,m_:()=>$,dJ:()=>N,rV:()=>Q,qJ:()=>R,pn:()=>q,F3:()=>B});var e=r(27361),o=r.n(e),i=r(91175),u=r.n(i),a=r(22222),c=r(84715),l=r(86267),f=r(55237),s=r(85148),m=r(827),y=r(75110);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function b(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function d(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?b(Object(r),!0).forEach((function(n){v(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function v(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!==p(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function g(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||O(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(e=i.call(r)).done)&&(a.push(e.value),a.length!==n);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||O(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,n){if(t){if("string"==typeof t)return j(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,n):void 0}}function j(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var w=function(t){return o()(t,"timeline.range")},S=function(t){return o()(t,"timeline.settings.collapsed")},P=function(t){return o()(t,"timeline.settings.autoSelect")},A=function(t){return o()(t,"timeline.settings.mapSync")},D=function(t,n){return(t||[]).reduce((function(t,r){return[].concat(g(t),g(function(t,n){var r=h(t.split("/"),3),e=r[0],o=r[1],i=r[2];if(i&&"0"!==i){var u=(0,f.Xu)({start:e,end:o,duration:i},n),a=u.count,c=u.start,l=u.end;return a>50?[{start:e,end:o,duration:i,type:"range",content:"".concat(a," items")}]:(0,f.tr)({start:c,end:l,duration:i}).map((function(t){return{start:new Date(t),end:new Date(t),type:"point"}}))}return isNaN(new Date(e).getTime())?null:[{start:new Date(e),end:new Date(o||e),type:o?"range":"point"}]}(r,n)))}),[]).filter((function(t){return t&&t.start}))},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(t.domain&&t.domain.values)return D(t.domain.values,n);if(t.histogram&&t.histogram.domain&&t.histogram.values){var r=h(t.histogram.domain.split("/"),3),e=r[0],o=r[1],i=r[2],u=Math.max.apply(Math,g(t.histogram.values)),a=(0,f.jb)({start:e,end:o,duration:i});return t.histogram.values.map((function(t,n){return d(d({},a[n]),{},{type:"range",itemType:"histogram",count:t,className:"histogram-item",content:'<div><div class="histogram-box" style="height: '.concat(100*t/u,'%"></div> <span class="histogram-count">').concat(t,"</span></div>")})}))}return[]},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return t&&t.values||t&&t.domain&&!(0,f._q)(t.domain)?D(t.values||t.domain.split(","),n):r&&r.histogram?x(r,n):[]},T=(0,c.y)(s.m$,w,(function(t){return o()(t,"timeline.rangeData")}),(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g(Object.keys(t).map((function(e){return E(t[e],n,r[e]).map((function(){return d(d({content:" "},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},{group:e})}))})).reduce((function(t,n){return[].concat(g(t),g(n))}),[]))})),k=function(t){return o()(t,"timeline.loading")},I=function(t){return o()(t,"timeline.selectedLayer")},_=function(t){return(0,y.CA)(t,I(t))},C=function(t){return _(t)&&_(t).name},F=function(t){return _(t)&&_(t).dimensions&&u()(_(t).dimensions.filter((function(t){return"time"===t.name})))},M=function(t){return o()(F(t),"source.url")},$=(0,a.P1)(s.WT,s.ns,(function(t,n){return{start:t,end:n}})),N=function(t){return(0,s.oP)(t,I(t))},Q=s.AF,R=(0,a.P1)(Q,(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).length>0})),q=function(t){return!S(t)&&R(t)},B=function(t){return function(n){var r=((0,m.Od)(n)||{}).bbox;if(!r)return{};var e=(0,s.Qw)(t,"time")(n),i=o()(e,"source.version"),u=Object.keys(r.bounds).reduce((function(t,n){return d(d({},t),{},v({},n,parseFloat(r.bounds[n])))}),{});if(!u||!A(n))return{};if("1.1"!==i){var a=(0,s.Qw)(t,"space")(n),c=o()(a,"domain.CRS");if(!c||!u||!A(n))return{};var f=h((0,l.reprojectBbox)(u,(0,m.uy)(n),c),4),y=f[0],p=f[1],b=f[2],g=f[3];return b<y&&"EPSG:4326"===c&&(b+=360),{bbox:"".concat(y,",").concat(p,",").concat(b,",").concat(g),crs:c}}var O=u.minx,j=u.miny,w=u.maxx,S=u.maxy,P=r.crs;return{bbox:"".concat(O,",").concat(j,",").concat(w,",").concat(S,",").concat(P)}}}}}]);