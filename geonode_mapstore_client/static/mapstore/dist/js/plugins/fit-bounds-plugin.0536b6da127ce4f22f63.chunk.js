(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[18294],{240986:(t,r,e)=>{"use strict";e.d(r,{Z:()=>p});var n=e(124852),o=e(675263),i=e.n(o),a=e(688362),u=e(310699),l=e(898631);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function f(t,r,e){return(r=function(t){var r=function(t,r){if("object"!=c(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function m(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}var d=f(f({},l.Bk.OPENLAYERS,{fit:function(t){var r,e=t.map,n=t.geometry,o=t.padding,i=t.geometryProjection,l=t.fixedZoom,c=t.maxZoom,f=t.duration,m=e.getView(),d=m.getProjection().getCode();if(2===n.length){var y=(0,a.reproject)(n,i,d),p=y.x,s=y.y;r=new u.Z([p,s])}else r=(0,a.reprojectBbox)(n,i,d);var v=o||{},g=v.top,b=void 0===g?0:g,h=v.right,j=void 0===h?0:h,P=v.bottom,S=void 0===P?0:P,x=v.left,O=void 0===x?0:x;m.fit(r,{padding:[b,j,S,O],maxZoom:l?m.getZoom():c,duration:f})}}),l.Bk.LEAFLET,{fit:function(t){var r,e,n,o=t.map,i=t.geometry,u=t.padding,l=t.geometryProjection,c=t.fixedZoom,f=t.maxZoom,d=t.duration,y=c?o.getZoom():f,p=u.top,s=void 0===p?0:p,v=u.right,g=void 0===v?0:v,b=u.bottom,h=void 0===b?0:b,j=u.left,P=void 0===j?0:j;if(2===i.length){var S=(0,a.reproject)(i,l,"EPSG:4326"),x=S.x,O=S.y;r=[[O,x],[O,x]]}else{var w=(e=(0,a.reprojectBbox)(i,l,"EPSG:4326"),n=4,function(t){if(Array.isArray(t))return t}(e)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(e,n)||function(t,r){if(t){if("string"==typeof t)return m(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(t,r):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),Z=w[0],E=w[1],A=w[2];r=[[E,Z],[w[3],A]]}o.flyToBounds(r,{paddingTopLeft:[P,s],paddingBottomRight:[g,h],maxZoom:y,animate:!!d,duration:d/1e3})}});function y(t){var r=t.map,e=t.mapType,o=t.active,i=t.geometry,a=t.geometryProjection,u=void 0===a?"EPSG:4326":a,l=t.padding,c=t.maxZoom,f=t.fixedZoom,m=t.duration,y=(0,n.useRef)();return y.current=function(){r&&d[e]&&d[e].fit({map:r,geometry:i,padding:l,geometryProjection:u,maxZoom:c,fixedZoom:f,duration:m})},(0,n.useEffect)((function(){o&&i&&y.current()}),[i,o]),null}y.propTypes={id:i().string,map:i().object,mapType:i().string,active:i().bool,geometry:i().array,geometryProjection:i().string,padding:i().object,maxZoom:i().number,fixedZoom:i().bool,duration:i().number},y.defaultProps={geometryProjection:"EPSG:4326",padding:{top:0,right:0,bottom:0,left:0}};const p=y},422595:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>s});var n=e(124852),o=e.n(n),i=e(322843),a=e(800827),u=e(171703),l=e(22222),c=e(240986),f=["mapProjection"];function m(){return m=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)({}).hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},m.apply(null,arguments)}function d(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}var y=[-180,-85,180,85],p=(0,u.connect)((0,l.P1)([function(t){var r,e;return null==t||null===(r=t.controls)||void 0===r||null===(e=r.fitBounds)||void 0===e?void 0:e.geometry},function(t){var r,e;return null==t||null===(r=t.controls)||void 0===r||null===(e=r.fitBounds)||void 0===e?void 0:e.duration},a.uy],(function(t,r,e){return{geometry:t,duration:r,mapProjection:e}})))((function(t){var r=t.mapProjection,e=function(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(r.indexOf(n)>=0)continue;e[n]=t[n]}return e}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||{}.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}(t,f),i=(0,n.useMemo)((function(){return function(t,r){if(t&&["EPSG:900913","EPSG:3857"].includes(r)){var e=(p=4,function(t){if(Array.isArray(t))return t}(m=t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(m,p)||function(t,r){if(t){if("string"==typeof t)return d(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,r):void 0}}(m,p)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=e[0],o=e[1],i=e[2],a=e[3],u=y[0],l=y[1],c=y[2],f=y[3];return[n<u?u:n,o<l||o>f?l:o,i>c?c:i,a>f||a<l?f:a]}var m,p;return t}(e.geometry,r)}),[e.geometry,r]);return o().createElement(c.Z,m({active:!0},e,{duration:e.duration,geometry:i}))}));const s=(0,i.rx)("FitBounds",{component:function(){return null},containers:{Map:{priority:1,name:"FitBounds",Tool:p}},epics:{},reducers:{}})}}]);