(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4333],{504333:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var r=n(667294),a=n.n(r),l=n(2212),o=n(475977),i=n(629521),c=n(477854),u=n(270052),s=n(166037),d=n(707433),m=n(917047),f=n(340879),y=n(55035);function v(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(){var e=(0,i.S)().progress;return a().createElement(c.V,{center:!0},a().createElement("div",{className:"gn-media-scene-3d-progress"},a().createElement("div",{style:{width:"".concat(e,"%")}}),"".concat(Math.round(e),"%")))}var h={gltf:function(e){var t=e.src,n=e.onChange,i=(0,o.U2)(m.E,(0,y.z)(t)),c=function(e){if(null!=e&&e.scene){e.scene.updateMatrixWorld(!0);var t=(new l.Box3).setFromObject(e.scene);return{radius:t.getSize(new l.Vector3).length(),center:t.getCenter(new l.Vector3)}}return{radius:10,center:{x:0,y:0,z:0}}}(i),u=c.radius,s=c.center;return(0,r.useEffect)((function(){n({center:[s.x||0,s.y||0,s.z||0],radius:u})}),[u,null==s?void 0:s.x,null==s?void 0:s.y,null==s?void 0:s.z]),null!=i&&i.scene?a().createElement("primitive",{object:i.scene}):null},pcd:function(e){var t,n=e.src,i=e.onChange,c=(0,o.U2)(f.w,(0,y.z)(n));c&&(c.geometry.computeBoundingSphere(),c.material&&(c.material.color=new l.Color(3766955)));var u=(null==c||null===(t=c.geometry)||void 0===t?void 0:t.boundingSphere)||{},s=u.radius,d=u.center;return(0,r.useEffect)((function(){i({center:[d.x||0,d.y||0,d.z||0],radius:s})}),[s,null==d?void 0:d.x,null==d?void 0:d.y,null==d?void 0:d.z]),c?a().createElement("primitive",{object:c}):null}};const E=function(e){var t,n,l=e.src,i=e.mediaType,c=e.environmentFiles,m=void 0===c?"/static/mapstore/img/studio_small_03_1k.hdr":c,f=(t=(0,r.useState)({radius:10,center:[0,0,0]}),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(t,n)||p(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=f[0],g=f[1],E=h[i];return a().createElement("div",{className:"gn-media-scene-3d"},a().createElement(r.Suspense,{fallback:null},a().createElement(o.Xz,null,a().createElement(u.q,{files:m}),a().createElement(r.Suspense,{fallback:a().createElement(b,null)},a().createElement(E,{src:l,onChange:g})),a().createElement(s.z,{makeDefault:!0,enableDamping:!0,minDistance:0,maxDistance:8*y.radius,target:v(y.center)}),a().createElement(d.c,{makeDefault:!0,fov:65,far:12*y.radius,position:[y.center[0],y.center[1],2*y.radius]}))))}}}]);