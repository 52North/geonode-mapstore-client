(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[37161,7654],{48507:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=function(){return n(935701),{Map:n(739726).Z,Layer:n(152792).Z,Feature:n(444948).Z,MeasurementSupport:n(442047).Z,Overview:n(521975),ScaleBar:n(20564),DrawSupport:n(791753).Z,PopupSupport:n(967465).Z}}},503901:(t,e,n)=>{"use strict";n.d(e,{qR:()=>l,yQ:()=>f});var r=n(375875),i=n.n(r),o=n(581399),a=n.n(o),s=n(882702),c=new(a())(100),u=function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-9999,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=r*t+n;try{var s=e.dataView.getInt16(2*a,o);if(s!==i&&32767!==s&&-32768!==s)return s}catch(t){}return null},l=function(t,e,n){return c.has(n)?null:new s.Promise((function(r,o){i().get(t,{responseType:"arraybuffer"}).then((function(t){!function(t,e,n){c.set(n,{data:t,dataView:new DataView(t),coords:e,current:!0,status:"success"})}(t.data,e,n),r()})).catch((function(t){!function(t,e,n){c.set(n,{coords:e,current:!0,status:"error: "+t})}(t.message,e,n),o(t)}))}))},f=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-9999,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=c.get(t);return o&&"success"===o.status?{available:!0,value:u(n,o,e.x,e.y,r,i)}:o&&"loading"===o.status?{available:!1,message:"elevationLoading"}:o&&"error"===o.status?{available:!1,message:"elevationLoadingError"}:{available:!1,message:"elevationNotAvailable"}}},808797:(t,e,n)=>{"use strict";n.d(e,{rp:()=>c,Ov:()=>l,wd:()=>f,L0:()=>d}),n(701469);var r=n(91175),i=n.n(r),o=n(807654),a=n.n(o);function s(t){var e=Math.floor(t),n=60*(t-e),r=Math.floor(n),i=60*(n-r);return e+"° "+r+"' "+Math.floor(i)+"'' "}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.measureTrueBearing,r=void 0!==n&&n,i=e.fractionDigits,o=void 0===i?0:i,a="";if(r){var c="";t>=0&&t<10?c="00":t>10&&t<100&&(c="0");var u=o>0?t.toFixed(o):Math.floor(t);a=c+u+"°"}else t>=0&&t<90?a="N "+s(t)+"E":t>90&&t<=180?a="S "+s(180-t)+"E":t>180&&t<270?a="S "+s(t-180)+"W":t>=270&&t<=360&&(a="N "+s(360-t)+"W");return a}var u={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return u[e]&&u[e][n]?t*u[e][n]:t}var f=function(t){return!a()(parseFloat(t[0]))&&!a()(parseFloat(t[1]))},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.coordinates,n=t.type,r=e;if("LineString"===n){if((r=e.filter(f)).length<2)return[]}else if("Polygon"===n){if((r=i()(e).filter(f)).length<3)return[[]];r=[r.concat([i()(r)])]}return r}},45992:(t,e,n)=>{"use strict";n.d(e,{h:()=>l,Z:()=>f});var r=n(535937),i=n.n(r),o=n(836882),a=n(463202);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(t,e){var n,r,s,u,l=o.Z;if("custom"===t)n=e;else if(s=(u=t.split("."))[0],r=u[1],!(n=l[s]))throw new Error("No such provider ("+s+")");var f={url:n.url,options:n.options||{}};if(r&&"variants"in n){if(!(r in n.variants))throw new Error("No such variant of "+(s||n.url)+" ("+r+")");var d,h=n.variants[r];d="string"==typeof h?{variant:h}:h.options,f={url:h.url||f.url,options:c(c({},f.options||{}),d)}}else"function"==typeof f.url&&(f.url=f.url(u.splice(1,u.length-1).join(".")));var p="file:"===window.location.protocol||f.options.forceHTTP;0===f.url.indexOf("//")&&p&&(f.url="http:"+f.url),f.options.retina&&(e.detectRetina&&a.ZP.getBrowserProperties().retina?e.detectRetina=!1:f.options.retina=""),f.options.attribution&&(f.options.attribution=function t(e){return-1===e.indexOf("{attribution.")?e:e.replace(/\{attribution.(\w*)\}/,(function(e,n){return t(l[n].options.attribution)}))}(f.options.attribution));var v=c(c({},f.options),i()(e,(function(t){return void 0!==t})));return[f.url,v]};const f={getLayerConfig:l}},333358:(t,e,n)=>{"use strict";n.d(e,{z:()=>i});var r=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],i=function(t){return-1!==r.indexOf(t)}},923645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},807654:(t,e,n)=>{var r=n(281763);t.exports=function(t){return r(t)&&t!=+t}},581399:function(t,e){var n,r,i;!function(o,a){"use strict";"object"==typeof t.exports?t.exports=a():(r=[],void 0===(i="function"==typeof(n=a)?n.apply(e,r):n)||(t.exports=i))}("object"==typeof window&&window,(function(){"use strict";function t(e){if(!(this instanceof t))return new t(e);this._LRUCacheState=new n(e)}var e=t.prototype;function n(t){this.capacity=t>0?+t:Number.MAX_SAFE_INTEGER||Number.MAX_VALUE,this.data=Object.create?Object.create(null):{},this.hash=Object.create?Object.create(null):{},this.linkedList=new r}function r(){this.length=0,this.head=null,this.end=null}function i(t){this.key=t,this.p=null,this.n=null}function o(t,e){e!==t.head&&(t.end?t.end===e&&(t.end=e.n):t.end=e,a(e.n,e.p),a(e,t.head),t.head=e,t.head.n=null)}function a(t,e){t!==e&&(t&&(t.p=e),e&&(e.n=t))}return e.get=function(t){var e=this._LRUCacheState,n=e.hash[t];if(n)return o(e.linkedList,n),e.data[t]},e.set=function(t,e){var n=this._LRUCacheState,r=n.hash[t];return void 0===e||(r||(n.hash[t]=new i(t),n.linkedList.length+=1,r=n.hash[t]),o(n.linkedList,r),n.data[t]=e,n.linkedList.length>n.capacity&&this.remove(n.linkedList.end.key)),this},e.update=function(t,e){return this.has(t)&&this.set(t,e(this.get(t))),this},e.remove=function(t){var e=this._LRUCacheState,n=e.hash[t];return n?(n===e.linkedList.head&&(e.linkedList.head=n.p),n===e.linkedList.end&&(e.linkedList.end=n.n),a(n.n,n.p),delete e.hash[t],delete e.data[t],e.linkedList.length-=1,this):this},e.removeAll=function(){return this._LRUCacheState=new n(this._LRUCacheState.capacity),this},e.info=function(){var t=this._LRUCacheState;return{capacity:t.capacity,length:t.linkedList.length}},e.keys=function(){for(var t=[],e=this._LRUCacheState.linkedList.head;e;)t.push(e.key),e=e.p;return t},e.has=function(t){return!!this._LRUCacheState.hash[t]},e.staleKey=function(){return this._LRUCacheState.linkedList.end&&this._LRUCacheState.linkedList.end.key},e.popStale=function(){var t=this.staleKey();if(!t)return null;var e=[t,this._LRUCacheState.data[t]];return this.remove(t),e},t}))},893379:(t,e,n)=>{"use strict";var r,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function a(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],i=0;i<t.length;i++){var s=t[i],c=e.base?s[0]+e.base:s[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var f=a(l),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(o[f].references++,o[f].updater(d)):o.push({identifier:l,updater:v(d,e),references:1}),r.push(l)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,l=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function d(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,p=0;function v(t,e){var n,r,i;if(e.singleton){var o=p++;n=h||(h=c(e)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=c(e),r=d.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var c=s(t,e),u=0;u<n.length;u++){var l=a(n[u]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=c}}}}}]);