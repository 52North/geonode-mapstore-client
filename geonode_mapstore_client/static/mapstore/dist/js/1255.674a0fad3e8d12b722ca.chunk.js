(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1255],{85148:(r,e,t)=>{"use strict";t.d(e,{Qw:()=>p,jo:()=>d,m$:()=>v,AF:()=>O,WT:()=>j,ns:()=>w,RP:()=>P,aK:()=>S,oP:()=>h});var n=t(75110),u=t(22222),i=t(27361),o=t.n(i),f=t(13311),c=t.n(f);function a(r){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},a(r)}function l(r){return function(r){if(Array.isArray(r))return y(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return y(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function s(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function m(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){b(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function b(r,e,t){return(e=function(r){var e=function(r,e){if("object"!==a(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===a(e)?e:String(e)}(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var p=function(r,e){return function(t){return o()(t,"dimension.data[".concat(e,"][").concat(r,"]"))}},g=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return c()(r.dimensions||[],{name:e})},d=function(r,e){return function(t){return p(r.id,e)(t)||g(r,e)}},v=function(r){return(0,n.l2)(r).reduce((function(e,t){var n=d(t,"time")(r);return n?m(m({},e),{},b({},t.id,n)):e}),{})},O=function(r){return(0,n.l2)(r).filter((function(r){return g(r,"time")}))},j=function(r){var e=o()(r,"dimension.currentTime");return e&&e.split("/")[0]},w=function(r){return o()(r,"dimension.offsetTime")},P=function(r){return!!w(r)},S=((0,u.P1)(v,(function(r){return Object.keys(r).reduce((function(e,t){return[].concat(l(e),l(r[t]&&r[t].values||[]))}),[]).sort()||[]})),function(r){return function(e){return l(o()(d(r,"time")(e),"values",[])).sort()}}),h=function(r,e){var t=p(e,"time")(r),n=t&&t.domain&&t.domain.split("--");if(n&&2===n.length)return n&&{start:n[0],end:n[1]};var u=t&&t.domain&&t.domain.split(",");return u&&u.length>0?{start:u[0],end:u[u.length-1]}:null}},31255:(r,e,t)=>{"use strict";t.d(e,{u$:()=>S,_w:()=>h,eO:()=>q,kG:()=>D,P3:()=>A,bq:()=>E,LB:()=>k,b4:()=>L,M0:()=>I,Li:()=>_,Rd:()=>C,g5:()=>M,Sj:()=>G,o:()=>z,eK:()=>K,jY:()=>x,ND:()=>N,OK:()=>R,tU:()=>Q,ou:()=>U,DK:()=>V,Gl:()=>W,uz:()=>$,Ci:()=>B,Ae:()=>H,gz:()=>Y,He:()=>X,P4:()=>J,kd:()=>Z,TC:()=>rr,nq:()=>er,Vf:()=>tr,lg:()=>nr});var n=t(91175),u=t.n(n),i=t(27361),o=t.n(i),f=t(13218),c=t.n(f),a=t(75110),l=t(78889),y=t(8316),s=t(52259),m=t(96958),b=t(85148),p=t(74621),g=t(93152),d=t(24260);function v(r){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},v(r)}function O(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function j(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){w(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function w(r,e,t){return(e=function(r){var e=function(r,e){if("object"!==v(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===v(e)?e:String(e)}(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var P=a.CA,S=function(r){return o()(r,"featuregrid.selectedLayer")},h=function(r){return r&&r.featuregrid&&r.featuregrid.select},q=function(r){return r&&r.featuregrid&&r.featuregrid.changes},D=function(r){return r&&r.featuregrid&&r.featuregrid.newFeatures},A=function(r){return u()(h(r))},F=function(r){var e=(0,d.Qs)(r);if(e){var t=(0,l.findGeometryProperty)(e);return t&&t.localType}return null},T=["Geometry","GeometryCollection"],E=function(r){return!u()(T.filter((function(e){return F(r)===e})))},k=function(r){return q(r)&&q(r).length>0},L=function(r){return D(r)&&D(r).length>0},I=function(r){return r&&r.featuregrid&&r.featuregrid.filters},_=function(r){return P(r,S(r))},C=function(r){return r&&r.featuregrid&&r.featuregrid.open},M=function(r,e){return o()(I(r),e)},G=function(r){var e=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.title||r.name}(P(r,S(r)));return c()(e)?e[(0,y.Pz)(r)]||e.default||"":e},z=function(r){return((0,d.L)(r)||[]).map((function(e){var t=function(r,e){return o()(r,"featuregrid.attributes[".concat(e.name||e.attribute,"]"))}(r,e);return t?j(j({},e),t):e}))},K=function(r){return r&&r.featuregrid&&r.featuregrid.mode},x=function(r){return(h(r)||[]).length},N=function(r){return(0,m.rK)(q(r))},R=function(r){return function(r){var e=A(r);if(e){var t=(0,m.rK)(q(r));return!((!t[e.id]||null===t[e.id].geometry)&&(t[e.id]&&null===t[e.id].geometry||e._new&&u()(D(r))&&null===u()(D(r)).geometry||(!e._new||!u()(D(r))||null===u()(D(r)).geometry)&&null===e.geometry))}return!1}(r)},Q=function(r){return o()(r,"featuregrid.showAgain",!1)},U=function(r){if(o()(r,"featuregrid.showTimeSync",!1)){var e=S(r);return(0,b.jo)({id:e},"time")(r)}return null},V=function(r){return o()(r,"featuregrid.timeSync",!1)},W=function(r){return o()(r,"featuregrid.showPopoverSync",!0)},$=function(r){return r&&r.featuregrid&&r.featuregrid.saving},B=function(r){return r&&r.featuregrid&&r.featuregrid.saved},H=function(r){return r&&r.featuregrid&&r.featuregrid.drawing},Y=function(r){return o()(r,"featuregrid.multiselect",!1)},X=function(r){return(0,s.isSimpleGeomType)(F(r))},J=function(r){return r.featuregrid&&r.featuregrid.dockSize},Z=function(r){var e=P(r,S(r));return e&&e.name||""},rr=function(r){var e=function(r){return o()(P(r,S(r)),"params")}(r);return{viewParams:e&&(e.VIEWPARAMS||e.viewParams||e.viewparams),cqlFilter:e&&(e.CQL_FILTER||e.cqlFilter||e.cql_filter)}},er=function(r){var e=(0,p.L3)(r),t=function(r){return o()(r,"featuregrid.editingAllowedRoles",["ADMIN"])}(r)||["ADMIN"],n=function(r){return r&&r.featuregrid&&r.featuregrid.canEdit}(r);return(-1!==t.indexOf(e)||n)&&!(0,g.c0)(r)},tr=function(r){return o()(r,"featuregrid.pagination")},nr=function(r){return o()(r,"featuregrid.useLayerFilter",!0)}},24260:(r,e,t)=>{"use strict";t.d(e,{qj:()=>O,Bu:()=>j,UM:()=>w,X1:()=>P,L:()=>S,HY:()=>h,Mz:()=>q,F0:()=>D,dc:()=>A,b0:()=>F,hk:()=>T,Qs:()=>E,gy:()=>k,M7:()=>L,VD:()=>I});var n=t(14293),u=t.n(n),i=t(27361),o=t.n(i),f=t(91175),c=t.n(f),a=t(1469),l=t.n(a),y=t(30998),s=t.n(y);function m(r){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},m(r)}function b(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function p(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){g(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function g(r,e,t){return(e=function(r){var e=function(r,e){if("object"!==m(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===m(e)?e:String(e)}(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var d=function(r){return o()(r,"query.filterObj.featureTypeName")},v=function(r){return function(e){return o()(e,'query.featureTypes["'.concat(r,'"]'))}},O=function(r,e){return o()(v(e)(r),"original")},j=function(r){return r&&r.query&&r.query.searchUrl},w=function(r){return r&&r.query&&r.query.url},P=function(r){return r&&r.query&&r.query.filterObj},S=function(r){return o()(v(d(r))(r),"attributes")},h=function(r){return o()(r,"query.typeName")},q=function(r){return o()(r,"query.result.features")},D=function(r){var e=o()(r,"query.result");return p(p({},e),{},{features:(e&&e.features||[]).filter((function(r){return!u()(r.geometry)}))})},A=function(r,e){var t=r&&r.query&&r.query.result&&r.query.result.features;return c()(t.filter((function(r){return r.id===e})))},F={startIndex:function(r){return o()(r,"query.filterObj.pagination.startIndex")},maxFeatures:function(r){return o()(r,"query.filterObj.pagination.maxFeatures")},resultSize:function(r){return o()(r,"query.result.features.length")},totalFeatures:function(r){return o()(r,"query.result.totalFeatures")}},T=function(r,e){var t=v(e)(r);return!!(t&&t.attributes&&t.geometry&&t.original)},E=function(r){return O(r,d(r))},k=function(r){return o()(r,"query.featureLoading")},L=function(r){return o()(r,"query.syncWmsFilter",!1)},I=function(r){var e=o()(r,"query.filterObj.crossLayerFilter"),t=o()(r,"query.filterObj.spatialField"),n=o()(r,"query.filterObj.filterFields");return!!(n&&c()(n)||t&&(t.method&&t.operation&&t.geometry||l()(t)&&s()(t,(function(r){return r.method&&r.operation&&r.geometry}))>-1)||e&&e.collectGeometries&&e.operation)}}}]);