/*! For license information please see litterassessment-plugin.0536b6da127ce4f22f63.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[18509],{618456:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>T});var n=r(124852),o=r.n(n),i=r(675263),a=r.n(i),c=r(171703),u=r(22222),l=r(480681),s=r(727418),f=r.n(s),h=r(375875),p=r.n(h),m=r(322843),y=r(782904),v=r(233044),d=r(805346),g=r(925108),b=r(55035),w=r(303744),E=r(100824),L=r(482100),S=r(640980);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function O(){O=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new C(n||[]);return o(a,"_invoke",{value:A(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",m="executing",y="completed",v={};function d(){}function g(){}function b(){}var w={};l(w,a,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(T([])));L&&L!==r&&n.call(L,a)&&(w=L);var S=b.prototype=d.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==x(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function A(e,r,n){var o=h;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=N(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?y:p,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(x(e)+" is not iterable")}return g.prototype=b,o(S,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(k.prototype),l(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(S),l(S,u,"Generator"),l(S,a,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function j(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function A(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function N(){var t;return t=O().mark((function t(){var e;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(0,b.PX)("geoNodeSettings.staticPath","/static/")+"mapstore/configs/litterassessmentConfig.json",t.abrupt("return",p().get(e));case 3:case"end":return t.stop()}}),t)})),N=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){A(i,n,o,a,c,"next",t)}function c(t){A(i,n,o,a,c,"throw",t)}a(void 0)}))},N.apply(this,arguments)}function P(t){var e,r,i=t.enabled,a=t.wmsLayers,c=void 0===a?[]:a,u=t.securityToken,s=t.onClose,h=j((0,n.useState)({"model a":{jsonSchema:{},uiSchema:{}},"model b":{jsonSchema:{},uiSchema:{}}}),2),m=h[0],y=h[1],g=j((0,n.useState)(""),2),b=g[0],L=g[1],x=(0,n.useRef)(!1);(0,n.useEffect)((function(){return x.current=!0,function(){x.current=!1}}),[]),(0,n.useEffect)((function(){(function(){return N.apply(this,arguments)})().then((function(t){var e=t.data.models;L(Object.keys(e)[0]||null),y(e)})).catch((function(t){console.error("could get models from config!",t)}))}),[]);var O=null!=c&&c.length?function(t,e){var r=t.bbox.bounds,n=[r.minx,r.miny,r.maxx,r.maxy],o=f()({},{LAYERS:t.name,STYLES:t.style||"",FORMAT:"image/png8",TRANSPARENT:!0,SERVICE:"WMS",REQUEST:"GetMap",WIDTH:"1000",HEIGHT:"600",BBOX:n,TILED:!1,VERSION:"1.3.0"}),i=t.url;(0,v.addAuthenticationParameter)(i,o,e);var a=new URLSearchParams(o);return new URL("".concat(i,"?").concat(a)).toString()}(c[0],u):"";return o().createElement(E.Z,{enabled:i,className:"gn-overlay-wrapper"},o().createElement("section",{className:"gn-litterassessment-panel"},o().createElement("div",{className:"gn-litterassessment-panel-head"},o().createElement("h2",null,o().createElement(d.Z,{msgId:"gnviewer.litterassessment.title"})),o().createElement(w.Z,{className:"square-button",onClick:function(){return s()}},o().createElement(l.gG,{glyph:"1-close"}))),o().createElement("div",{className:"gn-litterassessment-panel-body"},o().createElement(d.Z,{msgId:"gnviewer.litterassessment.description"}),o().createElement("div",null,o().createElement("label",{for:"model-select"},o().createElement(d.Z,{msgId:"gnviewer.litterassessment.model"})),o().createElement("select",{id:"model-select",onChange:function(t){return L(t.target.value)},value:b},Object.keys(m).map((function(t,e){return o().createElement("option",{key:e,value:t},t)}))),o().createElement(S.ZP,{schema:(null===(e=m[b])||void 0===e?void 0:e.jsonSchema)||{},uiSchema:(null===(r=m[b])||void 0===r?void 0:r.uiSchema)||{},formData:{input:O},onSubmit:function(t){return function(t,e){var r=t.formData,n=f()(r,{Accept:"application/json"}),o=new URLSearchParams;Object.keys(n).forEach((function(t){return o.append(t,n[t])}));var i="/proxy/?url="+encodeURIComponent(e.apiUrl);return p().post(i,o,{"Content-type":"application/x-www-form-urlencoded;charset=utf-8",Accept:"application/json"}).then((function(t){console.info("receiving response: ".concat(JSON.stringify(t)))})).catch((function(t){return console.error("could not trigger litter assessment!",t)}))}(t,m[b])},onError:console.log.bind(console,"errors")},o().createElement("div",null,o().createElement("button",{type:"submit",onClick:"triggerAiInference"},"Submit")))))))}P.propTypes={enabled:a().bool,onClose:a().func},P.defaultProps={enabled:!1,onClose:function(){}};var _=(0,c.connect)((0,u.P1)([function(t){var e,r;return"LitterAssessment"===(null==t||null===(e=t.controls)||void 0===e||null===(r=e.rightOverlay)||void 0===r?void 0:r.enabled)},function(t){return t.layers},function(t){return t.security}],(function(t,e,r){var n;return{enabled:t,wmsLayers:(null==e||null===(n=e.flat)||void 0===n?void 0:n.filter((function(t){return"wms"===t.type&&(!t.group||"background"!==t.group)})))||[],securityToken:r.token}})),{onClose:y.Xg.bind(null,"rightOverlay","enabled",!1)})(P),C=(0,c.connect)((0,u.P1)(L.fg,(function(t){return{enabled:void 0!==t}})),{onClick:y.Xg.bind(null,"rightOverlay","enabled","LitterAssessment")})((function(t){var e=t.enabled,r=t.variant,n=t.onClick,i=t.size;return e?o().createElement(w.Z,{variant:r||"primary",size:i,onClick:function(){return n()}},o().createElement(d.Z,{msgId:"gnviewer.litterassessment.title"})):null}));const T=(0,m.rx)("LitterAssessment",{component:_,containers:{ActionNavbar:{name:"LitterAssessment",Component:C}},epics:{},reducers:{controls:g.Z}})}}]);