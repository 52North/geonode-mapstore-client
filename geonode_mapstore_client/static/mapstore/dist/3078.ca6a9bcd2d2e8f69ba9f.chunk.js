(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3078],{21914:(t,e,r)=>{"use strict";r.d(e,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>c,Pn:()=>u,DZ:()=>l,e8:()=>f,E0:()=>s,F9:()=>p,X_:()=>v,pb:()=>d,qb:()=>b,Re:()=>y,ih:()=>m,xy:()=>g,jL:()=>O,oz:()=>h,ph:()=>w,lF:()=>S,gG:()=>E,cb:()=>P,GI:()=>R,B1:()=>j,fv:()=>A,gc:()=>T,zX:()=>I,ZF:()=>_,Zb:()=>M,Fm:()=>x,sV:()=>D,Mn:()=>C,LU:()=>F,XP:()=>N,WU:()=>L,JB:()=>U,g:()=>G,ws:()=>Z,HP:()=>Y,aN:()=>k,Pg:()=>B,u0:()=>H,TM:()=>W,PM:()=>V,lK:()=>$,sv:()=>K,MO:()=>X,oO:()=>z,Mc:()=>J,Zw:()=>Q,RA:()=>tt,am:()=>et,ZM:()=>rt,wm:()=>nt,Y$:()=>ot});var n=r(47310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",c="CHANGE_MAPINFO_STATE",u="NEW_MAPINFO_REQUEST",l="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",s="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",v="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",b="GET_VECTOR_INFO",y="NO_QUERYABLE_LAYERS",m="CLEAR_WARNING",g="FEATURE_INFO_CLICK",O="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",h="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",w="TOGGLE_MAPINFO_STATE",S="UPDATE_CENTER_TO_MARKER",E="IDENTIFY:CHANGE_PAGE",P="IDENTIFY:CLOSE_IDENTIFY",R="IDENTIFY:CHANGE_FORMAT",j="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",A="IDENTIFY:EDIT_LAYER_FEATURES",T="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",I="IDENTIFY:SET_MAP_TRIGGER",_="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",M="IDENTIFY:SET_SHOW_IN_MAP_POPUP";function x(t,e,r,n,i){return{type:o,data:e,reqId:t,requestParams:r,layerMetadata:n,layer:i}}function D(t,e,r,n){return{type:i,error:e,reqId:t,requestParams:r,layerMetadata:n}}function C(t,e,r,n){return{type:a,reqId:t,exceptions:e,requestParams:r,layerMetadata:n}}function F(){return{type:y}}function N(){return{type:m}}function L(t,e){return{type:u,reqId:t,request:e}}function U(t,e,r,n){return{type:b,layer:t,request:e,metadata:r,queryableLayers:n}}function G(){return{type:l}}function Z(t){return{type:f,infoFormat:t}}function Y(){return{type:s}}function k(){return{type:p}}function q(t){return{type:v,reverseGeocodeData:t.data}}function B(t){return function(e){n.Z.reverseGeocode(t).then((function(t){e(q(t))})).catch((function(t){e(q(t))}))}}function H(){return{type:d}}function W(){return{type:w}}function V(t){return{type:S,status:t}}function $(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:g,point:t,layer:e,filterNameList:r,overrideParams:n,itemId:o}}function K(t){return{type:O,point:t}}function X(t){return{type:h,enabled:t}}function z(t){return{type:E,index:t}}var J=function(){return{type:P}},Q=function(t){return{type:R,format:t}},tt=function(t){return{type:j,showCoordinateEditor:t}},et=function(t){return{type:A,layer:t}},rt=function(t){return{type:T,query:t}},nt=function(t){return{type:I,trigger:t}},ot=function(t){return{type:M,value:t}}},47310:(t,e,r)=>{"use strict";r.d(e,{Z:()=>f});var n=r(75875),o=r.n(n),i=r(72500),a=r.n(i),c=r(27418),u=r.n(c),l={format:"json",bounded:0,polygon_geojson:1,priority:5};const f={geocode:function(t,e){var r=u()({q:t},l,e||{}),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(t,e){var r=u()({lat:t.lat,lon:t.lng},e||{},l),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},64152:(t,e,r)=>{"use strict";r.d(e,{Z:()=>ut});var n={};r.r(n),r.d(n,{getRecords:()=>q,testService:()=>W,textSearch:()=>B,validate:()=>H});var o={};r.r(o),r.d(o,{getRecords:()=>rt,parseUrl:()=>et,textSearch:()=>nt});var i=r(59551),a=r(67007),c=r(3475),u=r(37275),l=r(5055),f=r.n(l),s=r(75875),p=r.n(s),v=r(86494),d=r(33044),b=r(93201);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O={},h=function(t,e){return t===e||"EPSG:3857"===t&&"EPSG:900913"===e||"EPSG:900913"===t&&"EPSG:3857"===e},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=(0,v.castArray)((0,v.get)(t,"TileMapService.TileMaps.TileMap",[])),a=o.projection,c=(0,v.get)(o,"options.service.allSRS"),u=i.map((function(e){var r=e.$,n=void 0===r?{}:r;return m(m({},n),{},{href:(0,d.cleanAuthParamsFromURL)(n.href),identifier:(0,d.cleanAuthParamsFromURL)(n.href),format:(0,b.A)(n.href),tmsUrl:(0,d.cleanAuthParamsFromURL)(t.url)})})).filter((function(t){var e=t.srs;return!(a&&!c)||h(e,a)})).filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,r=void 0===e?"":e,o=t.srs,i=void 0===o?"":o;return!n||-1!==r.toLowerCase().indexOf(n.toLowerCase())||-1!==i.toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:u.length,numberOfRecordsReturned:Math.min(r,u.length),nextRecord:e+Math.min(r,u.length)+1,records:u.filter((function(t,n){return n>=e-1&&n<e-1+r}))}},S=function(t){return t},E=function(t,e,r,n,o){var i=O[t];return i&&(new Date).getTime()<i.timestamp+1e3*(u.ZP.getConfigProp("cacheExpire")||60)?new Promise((function(t){t(w(i.data,e,r,n,o))})):p().get(t).then((function(i){var a;return f().parseString(i.data,{explicitArray:!1},(function(e,r){a=m(m({},r),{},{url:t})})),O[t]={timestamp:(new Date).getTime(),data:a},w(a,e,r,n,o)}))},P=r(36882),R=r(49977),j=r.n(R),A=r(11847);function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var M="custom",x=function(t,e,r,n,o){var i,a,c,u=(0,v.get)(o,"options.service"),l=[];if(u.provider&&u.provider!==M){var f=(i=u.provider,Object.keys(null!==(a=null===P.Z||void 0===P.Z||null===(c=P.Z[i])||void 0===c?void 0:c.variants)&&void 0!==a?a:{}));0===f.length?l.push({provider:"".concat(u.provider),title:"".concat(u.provider)}):l=f.map((function(t){return{provider:"".concat(u.provider,".").concat(t)}}))}else u.url&&(l=[I(I({},u),{},{title:u.title,type:"tileprovider",url:u.url,attribution:u.attribution,options:u.options||{},provider:M})]);return new Promise((function(t){t(function(t,e,r,n){var o=t.filter((function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).title;return!n||-1!==(void 0===t?"":t).toLowerCase().indexOf(n.toLowerCase())})),i=o.filter((function(t,n){return n>=e-1&&n<e-1+r}));return{numberOfRecordsMatched:o.length,numberOfRecordsReturned:i.length,nextRecord:e+Math.min(r,o.length)+1,records:i}}(l,e,r,n))}))};function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){return!e||"object"!==D(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function F(t){var e="function"==typeof Map?new Map:void 0;return(F=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return N(t,arguments,G(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),U(n,t)})(t)}function N(t,e,r){return(N=L()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&U(o,r.prototype),o}).apply(null,arguments)}function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function G(t){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(o,t);var e,r,n=(e=o,r=L(),function(){var t,n=G(e);if(r){var o=G(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return C(this,t)});function o(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(r=n.call(this,t)).name="ServiceValidationError",r.notification=e,r}return o}(F(Error)),Y=function(t){return""===t.title||""===t.url?j().Observable.throw(new Z("Validation Error","catalog.notification.warningAddCatalogService")):j().Observable.of(t)},k=function(t){var e=t.parseUrl;return function(t){var r="catalog.notification.errorServiceUrl";return j().Observable.defer((function(){return p().get(e(t.url))})).catch((function(){throw new Z("Service Test error",r)})).switchMap((function(e){if(e.error||""===e.data)throw new Z("Service Test error",r);return j().Observable.of(t)}))}},q=function(t,e,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.options,a=i||{},c=a.service,u=void 0===c?{}:c;return"tms"===u.provider&&E(t,e,r,n,o),x(0,e,r,n,o)},B=function(t,e,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.options,a=i||{},c=a.service,u=void 0===c?{}:c;return"tms"===u.provider?E(t,e,r,n,o):x(0,e,r,n,o)},H=function(t){return"tms"===t.provider?Y(t):function(t){var e,r=t.provider&&"custom"!==t.provider?!!t.provider:(e=t.url,(0,A.Nw)(e));if(t.title&&r)return R.Observable.of(t);throw new Error("catalog.config.notValidURLTemplate")}(t)},W=function(t){return"tms"===t.provider?k({parseUrl:S})(t):function(t){return R.Observable.of(t)}(t)},V=r(32420);function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function K(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(Object(r),!0).forEach((function(e){X(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function X(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function z(t){return function(t){if(Array.isArray(t))return J(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return J(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Q={},tt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=(0,v.castArray)((0,v.get)(t,'["wfs:WFS_Capabilities"].FeatureTypeList.FeatureType',[])),i=o.map((function(e){var r=e.Name,n=e.Title,o=e.Abstract,i=e.DefaultSRS,a=e.OtherSRS,c=void 0===a?[]:a,u=e["ows:WGS84BoundingBox"],l=u["ows:LowerCorner"].split(" "),f=u["ows:UpperCorner"].split(" "),s={minx:parseFloat(l[0]),miny:parseFloat(l[1]),maxx:parseFloat(f[0]),maxy:parseFloat(f[1])};return{featureType:e,type:"wfs",url:(0,d.cleanAuthParamsFromURL)(t.url),name:r,title:n,description:o,SRS:[i].concat(z(c)),defaultSRS:i,boundingBox:{bounds:s,crs:"EPSG:4326"}}})).filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,r=void 0===e?"":e,o=t.name,i=void 0===o?"":o,a=t.description;return!n||-1!==r.toLowerCase().indexOf(n.toLowerCase())||-1!==i.toLowerCase().indexOf(n.toLowerCase())||-1!==a.toLowerCase().indexOf(n.toLowerCase())})),a=i.filter((function(t,n){return n>=e-1&&n<e-1+r}));return{numberOfRecordsMatched:i.length,numberOfRecordsReturned:Math.min(r,a.length),nextRecord:e+Math.min(r,i.length)+1,records:a}},et=V.getCapabilitiesURL,rt=function(t,e,r,n,o){var i=Q[t];return i&&(new Date).getTime()<i.timestamp+1e3*(u.ZP.getConfigProp("cacheExpire")||60)?new Promise((function(t){t(tt(i.data,e,r,n,o))})):(0,V.getCapabilities)(t).then((function(i){var a;return f().parseString(i.data,{explicitArray:!1,stripPrefix:!0},(function(e,r){a=K(K({},r),{},{url:t})})),Q[t]={timestamp:(new Date).getTime(),data:a},tt(a,e,r,n,o)}))},nt=function(t,e,r,n,o){return rt(t,e,r,n,o)},ot=r(32354);function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function at(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(Object(r),!0).forEach((function(e){ct(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ct(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const ut={csw:at({validate:Y,testService:k(i.Z)},i.Z),wfs:at({validate:Y,testService:k(o)},o),wms:at({validate:Y,testService:k(a.ZP)},a.ZP),tms:n,wmts:at({validate:Y,testService:k(c.Z)},c.Z),backgrounds:at({validate:Y,testService:k(ot.Z)},ot.Z)}},56175:(t,e,r)=>{"use strict";r.d(e,{Z:()=>M});var n=r(49977),o=r(9669),i=r.n(o),a=r(37691),c=r.n(a),u=r(30647),l=r(86494),f=r(31273),s=r(80416),p=r(97395),v=r(82904),d=r(33528),b=r(21914),y=r(53001),m=r(88113),g=r(31935),O=r(8316),h=r(75110),w=r(76712),S=r(86267),E=r(24262);function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||j(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||j(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){if(t){if("string"==typeof t)return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(t,e):void 0}}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const M=function(t){return{recordSearchEpic:function(e,r){return e.ofType(f.V3).switchMap((function(e){var o=e.format,i=e.url,a=e.startPosition,c=e.maxRecords,u=e.text,l=e.options;return n.Observable.defer((function(){return t[o].textSearch(i,a,c,u,I({options:l},(0,m.HN)(r.getState())))})).switchMap((function(t){return t.error?n.Observable.of((0,f.m)(t)):n.Observable.of((0,f.nX)({url:i,startPosition:a,maxRecords:c,text:u},t))})).startWith((0,f.K4)(!0)).catch((function(t){return n.Observable.of((0,f.m)(t))}))}))},addLayersFromCatalogsEpic:function(e,r){return e.ofType(f.WX).filter((function(t){var e=t.layers,r=t.sources;return(0,l.isArray)(e)&&(0,l.isArray)(r)&&e.length&&e.length===r.length})).switchMap((function(e){var o=e.layers,i=e.sources,a=e.options,c=e.startPosition,u=void 0===c?1:c,f=e.maxRecords,s=void 0===f?4:f,p=r.getState(),v=a||(0,m.bA)(p),d=(0,m.b6)(p),b=o.filter((function(t,e){return!!d[i[e]]})).map((function(e,r){var a=d[i[r]],c=a.type,l=a.url,f=o[r];return n.Observable.defer((function(){return t[c].textSearch(l,u,s,f,v).catch((function(){return{results:[]}}))})).map((function(t){return I(I({},t),{},{format:c,url:l,text:f})}))}));return n.Observable.forkJoin(b).switchMap((function(t){return(0,l.isArray)(t)&&t.length?n.Observable.of(t.map((function(t){var e=t.format,r=t.url,o=t.text,i=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,["format","url","text"]),a=(0,O.Ps)(p),c=(0,w.eL)(e,i,v,a)||[],u=(0,l.head)(c.filter((function(t){return t.identifier===o}))),f=(0,w.tW)(u),s=f.wms,d=f.wmts,b={},y={},g=(0,m.kS)(p);if(s){var h=(0,w.n0)(s.SRS);if(s.SRS.length>0&&!S.default.isAllowedSRS("EPSG:3857",h))return n.Observable.empty();b=(0,w.ll)(u,"wms",{removeParams:g,catalogURL:"csw"===e&&r?r+"?request=GetRecordById&service=CSW&version=2.0.2&elementSetName=full&id="+u.identifier:r},y)}else if(d){b={};var E=(0,w.n0)(d.SRS);if(d.SRS.length>0&&!S.default.isAllowedSRS("EPSG:3857",E))return n.Observable.empty();b=(0,w.ll)(u,"wmts",{removeParams:g},y)}else(0,w.FJ)(u).esri&&(b=(0,w.AD)(u,y));return u?b:o}))):n.Observable.empty()}))})).mergeMap((function(t){if(t){var e=t.filter((function(t){return(0,l.isString)(t)})).join(" "),r=[];return e&&(r=[(0,f.E9)(e)]),r=[].concat(R(r),R(t.filter((function(t){return(0,l.isObject)(t)})).map((function(t){return(0,s.A4)(t)})))),n.Observable.from(r)}return n.Observable.empty()})).catch((function(){return n.Observable.empty()}))},newCatalogServiceAdded:function(e,r){return e.ofType(f.mh).switchMap((function(){var e=r.getState(),o=(0,m._S)(e);return n.Observable.of(o).switchMap((function(e){var r,o,i;return null!==(r=null===(o=t[e.type])||void 0===o||null===(i=o.validate)||void 0===i?void 0:i.call(o,e))&&void 0!==r?r:n.Observable.of(e)})).switchMap((function(e){var r,o,i;return null!==(r=null===(o=t[e.type])||void 0===o||null===(i=o.testService)||void 0===i?void 0:i.call(o,e))&&void 0!==r?r:n.Observable.of(e)})).switchMap((function(){return n.Observable.of((0,f.N3)(o),(0,p.Vp)({title:"notification.success",message:"catalog.notification.addCatalogService",autoDismiss:6,position:"tc"}))})).startWith((0,f.Rc)(!0)).catch((function(t){return n.Observable.of((0,p.vU)({exception:t,title:"notification.warning",message:t.notification||"catalog.notification.warningAddCatalogService",autoDismiss:6,position:"tc"}))})).concat(n.Observable.of((0,f.Rc)(!1)))}))},deleteCatalogServiceEpic:function(t,e){return t.ofType(f.$Y).switchMap((function(){var t=e.getState(),r=(0,m.Cb)(t),o=(0,m.b6)(t),i=o[r]?(0,p.Vp)({title:"notification.warning",message:"catalog.notification.serviceDeletedCorrectly",autoDismiss:6,position:"tc"}):(0,p.vU)({title:"notification.warning",message:"catalog.notification.impossibleDeleteService",autoDismiss:6,position:"tc"}),a=(0,f.SU)(r);return o[r]?n.Observable.of(i,a):n.Observable.of(i)}))},openCatalogEpic:function(t){return t.ofType(v.At).filter((function(t){return"metadataexplorer"===t.control&&t.value})).switchMap((function(){return n.Observable.of((0,d.YV)(),(0,b.g)(),(0,b.aN)())}))},getMetadataRecordById:function(e,r){return e.ofType(f.UT).switchMap((function(e){var o=e.metadataOptions,a=void 0===o?{}:o,f=r.getState(),v=(0,h.Iz)(f);return n.Observable.defer((function(){return t.wms.getCapabilities((0,E.getCapabilitiesUrl)(v))})).switchMap((function(e){var r=(0,l.get)(e,"capability.layer.layer",[]),o=1===r.length?r[0].metadataURL:(0,l.find)(r,(function(t){return t.name===v.name.split(":")[1]})),f=(0,l.get)((0,l.find)(o,(function(t){return(0,l.isString)(t.type)&&"iso19115:2003"===t.type.toLowerCase()&&("application/xml"===t.format||"text/xml"===t.format)})),"onlineResource.href"),d=(0,l.get)((0,l.find)(o,(function(t){return(0,l.isString)(t.type)&&"iso19115:2003"===t.type.toLowerCase()&&"text/html"===t.format})),"onlineResource.href"),b=(0,l.find)((0,l.get)(a,"extractors",[]),(function(t){var e=t.properties,r=t.layersRegex,n=r?new RegExp(r):null;return(0,l.isObject)(e)&&(!r||n.test(v.name))})),y=d?{metadataUrl:d}:{},m=n.Observable.defer((function(){return t.csw.getRecordById(v.catalogURL)})).switchMap((function(t){return t&&t.error?n.Observable.of((0,p.vU)({title:"notification.warning",message:"toc.layerMetadata.notification.warnigGetMetadataRecordById",autoDismiss:6,position:"tc"}),(0,s.c9)(y,!1)):t&&t.dc?n.Observable.of((0,s.c9)(I(I({},y),t.dc),!1)):n.Observable.empty()})),g=n.Observable.defer((function(){return i().get(f)})).pluck("data").map((function(t){return(new u.a).parseFromString(t)})).map((function(t){var e=c().useNamespaces(a.xmlNamespaces||{});return function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return(0,l.toPairs)(r).reduce((function(r,o){var i,a=P(o,2),c=a[0],u=a[1];if((0,l.isObject)(u)&&(0,l.isString)(u.xpath)&&(0,l.isObject)(u.properties)&&(0,l.keys)(u.properties).length>0)0===(i=e(u.xpath,n).map((function(e){return t(u.properties,e)}))).length&&(i=null);else{var f,s=e(u,n);1===s.length?i=null!==(f=(0,l.get)(s[0],"nodeValue"))&&void 0!==f?f:(0,l.get)(s[0],"childNodes[0].nodeValue"):s.length>1&&(i=s.map((function(t){return(0,l.get)(t,"childNodes[0].nodeValue")})).filter((function(t){return!!t})))}return I(I({},r),i?_({},c,i):{})}),{})}(b.properties,t)})).switchMap((function(t){return n.Observable.of((0,s.c9)(I(I({},y),t),!1))}));return f&&b?g:v.catalogURL?m:n.Observable.of((0,s.c9)(y,!1))})).startWith((0,s.c9)({},!0)).catch((function(){return n.Observable.of((0,p.vU)({title:"notification.warning",message:"toc.layerMetadata.notification.warnigGetMetadataRecordById",autoDismiss:6,position:"tc"}),(0,s.c9)({},!1))}))}))},autoSearchEpic:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.getState,o=void 0===r?function(){}:r;return t.ofType(f.CO).debounce((function(){var t=o(),e=(0,m.l2)(t);return n.Observable.timer(e)})).switchMap((function(t){var e=t.text,r=o(),i=(0,m.y)(r),a=(0,m.R7)(r),c=a.type,u=a.url;return n.Observable.of((0,f.tt)({format:c,url:u,startPosition:1,maxRecords:i,text:e}))}))},catalogCloseEpic:function(t,e){return t.ofType(f.ur).switchMap((function(){var t,r=e.getState(),o=(0,g.YL)(r),i=(0,m.b6)(r);return(t=n.Observable).of.apply(t,R([(0,v.pu)("metadataexplorer","enabled",!1,"group",null),(0,f.In)("view"),(0,f.ye)()].concat("backgroundSelector"===o?[(0,f.Dw)((0,l.head)((0,l.keys)(i))),(0,y.vw)(!0)]:[])))}))}}}},93201:(t,e,r)=>{"use strict";r.d(e,{A:()=>o});var n=r(86494),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split("?")[0].split("@");if(e.length>1){var r=e[e.length-1];if((0,n.includes)(["png","png8","jpeg","vnd.jpeg-png","gif"],r))return r}return null}},11847:(t,e,r)=>{"use strict";r.d(e,{ij:()=>u,w0:()=>l,vl:()=>f,K2:()=>s,Nw:()=>p});var n=r(72500),o=r.n(n),i=r(86494),a=r(64210);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=function(t){if(!t)return{};var e=!(0===t.indexOf("http")),r=e?[]:t.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(e){var n=window.location;r[1]=n.protocol,r[3]=n.hostname,r[4]=n.port,r[5]=t}r[4]=""!==r[4]&&r[4]?r[4]:"https:"===r[1]?"443":"80",r[5]=r[5]?r[5]:t.slice(r[0].length);var o,i,a=(i=6,function(t){if(Array.isArray(t))return t}(o=r)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(o,i)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[1],l=a[3],f=a[4],s=a[5],p=0===s.indexOf("/")?s.split("/")[1]:"";return{protocol:u,domain:l,port:f,rootPath:s,applicationRootPath:p}},l=function(t,e){var r=(0,i.isArray)(t)?t[0]:t,n=(0,i.isArray)(e)?e[0]:e;if(r===n)return!0;if(!r||!n)return!1;if(!(0,i.isString)(r)||!(0,i.isString)(n))return!1;var a=o().parse(r),c=o().parse(n),l=u(r),f=u(n),s=l.protocol===f.protocol,p=l.domain===f.domain,v=l.port===f.port,d=a.pathname===c.pathname,b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t===e)return!0;if(!t&&!e)return!0;var r=t?t.split("&").filter((function(t){return!!t})):[],n=e?e.split("&").filter((function(t){return!!t})):[];return(0,i.isEqual)((0,i.sortBy)(r),(0,i.sortBy)(n))}(a.query,c.query);return s&&v&&p&&d&&b},f=function(t){return a.parse(t)},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/^(http(s{0,1}):\/\/)+?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,r=new RegExp(e);return r.test(t)},p=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/^(http(s{0,1}):\/\/)+?[\w.\-{}]+(?:\.[\w\.-]+)+[\w\-\._~\/\;\.\%\:\&\=\?{}]+$/,n=new RegExp(r),o=n.test(t);if(!o)return!1;if(o&&!e)return!0;if(o&&e){var a=/\{(.*?)\}/.test(t);return 0===e.filter((function(t){return(0,i.find)(a,t)})).length}return!1}}}]);