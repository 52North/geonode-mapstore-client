(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[23794,2095],{643892:(e,n,t)=>{"use strict";t.d(n,{W:()=>r,Zf:()=>E,Eu:()=>o,Vy:()=>u,YB:()=>O,xm:()=>i,_f:()=>c,ek:()=>a,cd:()=>s,pt:()=>p,ww:()=>R,tR:()=>_,Js:()=>l,p2:()=>S,ZH:()=>f,eQ:()=>d,ql:()=>D,$X:()=>N,nS:()=>T,ih:()=>C,J5:()=>v,uA:()=>y,Pv:()=>G,_Z:()=>I,dh:()=>U,IH:()=>m,e3:()=>A,Oq:()=>w,Q$:()=>P,DF:()=>h,id:()=>g,Br:()=>M,bI:()=>b,U5:()=>L,e5:()=>x,b3:()=>k,mN:()=>Z,QN:()=>B,HV:()=>F,xe:()=>H,vA:()=>Q,gw:()=>W,qs:()=>V,CB:()=>j,vg:()=>q,Z0:()=>z,lf:()=>J,jQ:()=>X,nk:()=>Y,X7:()=>$,nO:()=>K,F4:()=>ee,EU:()=>ne,Rk:()=>te,V1:()=>re});var r="GEONODE:RESOURCE_LOADING",E="GEONODE:SET_RESOURCE",o="GEONODE:RESOURCE_ERROR",u="GEONODE:UPDATE_RESOURCE_PROPERTIES",O="GEONODE:SET_RESOURCE_TYPE",i="GEONODE:SET_NEW_RESOURCE",c="GEONODE:SET_RESOURCE_ID",a="GEONODE:SET_RESOURCE_PERMISSIONS",s="GEONODE:EDIT_TITLE_RESOURCE",p="GEONODE:EDIT_ABSTRACT_RESOURCE",R="GEONODE:EDIT_THUMBNAIL_RESOURCE",_="GEONODE:SET_FAVORITE_RESOURCE",l="GEONODE:SET_MAP_THUMBNAIL",S="GEONODE:SET_SELECTED_DATASET_PERMISSIONS",f="GEONODE:REQUEST_RESOURCE_CONFIG",d="GEONODE:REQUEST_NEW_RESOURCE_CONFIG",D="GEONODE:LOADING_RESOURCE_CONFIG",N="GEONODE:RESET_RESOURCE_STATE",T="GEONODE:RESOURCE_CONFIG_ERROR",C="GEONODE:SET_RESOURCE_COMPACT_PERMISSIONS",v="GEONODE:UPDATE_RESOURCE_COMPACT_PERMISSIONS",y="GEONODE:RESET_GEO_LIMITS",G="GEONODE:PROCESS_RESOURCES",I="GEONODE_SET_RESOURCE_THUMBNAIL",U="GEONODE_ENABLE_MAP_THUMBNAIL_VIEWER",m="GEONODE_DOWNLOAD_RESOURCE",A="GEONODE_DOWNLOAD_COMPLETE",w="GEONODE_UPDATE_SINGLE_RESOURCE";function P(){return{type:r}}function h(e){return{type:E,data:e}}function g(e){return{type:w,data:e}}function M(e){return{type:s,title:e}}function b(e){return{type:p,abstract:e}}function L(e){return{type:R,thumbnailUrl:e,thumbnailChanged:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"}}function x(){return{type:I}}function k(e){return{type:O,resourceType:e}}function Z(e){return{type:o,error:e}}function B(e){return{type:u,properties:e}}function F(){return{type:i}}function H(e){return{type:c,id:e}}function Q(e){return{type:S,permissions:e}}function W(e){return{type:_,favorite:e}}function V(e){return{type:U,enabled:e}}function j(e){return{type:l,bbox:e}}function q(e,n,t){return{type:f,resourceType:e,pk:n,options:t}}function z(e){return{type:d,resourceType:e}}function J(e){return{type:D,loading:e}}function X(e){return{type:T,message:e}}function Y(){return{type:N}}function $(e){return{type:C,compactPermissions:e}}function K(e){return{type:v,compactPermissions:e}}function ee(){return{type:y}}function ne(e,n,t){return{type:G,processType:e,resources:n,redirectTo:t}}function te(e){return{type:m,resource:e}}function re(e){return{type:A,resource:e}}},793520:(e,n,t)=>{"use strict";t.d(n,{Z:()=>O});var r=t(124852),E=t.n(r),o=t(480681);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}o.Dropdown.Item=o.MenuItem,o.Dropdown.Divider=function(e){return E().createElement(o.MenuItem,u({},e,{divider:!0}))};const O=o.Dropdown},539236:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>S});var r=t(124852),E=t.n(r),o=t(171703),u=t(22222),O=t(322843),i=t(805346),c=t(303744),a=t(793520),s=t(507412),p=t(76907),R=t(643892),_=(0,o.connect)((0,u.P1)([p.yK],(function(e){return{resource:e}})),{})((function(e){var n=e.resource,t=e.variant,r=e.size;return n?E().createElement(c.Z,{download:"".concat(null==n?void 0:n.title,".").concat(null==n?void 0:n.extension),href:null==n?void 0:n.href,variant:t,size:r},E().createElement(i.Z,{msgId:"gnviewer.download"})):null})),l=(0,o.connect)((0,u.P1)([],(function(){return{}})),{onDownload:R.Rk})((function(e){var n,t=e.resource,r=e.onDownload;return null!=t&&t.download_url&&null!=t&&null!==(n=t.perms)&&void 0!==n&&n.includes("download_resourcebase")?E().createElement(a.Z.Item,{onClick:function(){return r(t)}},E().createElement(s.Z,{name:"download"})," ",E().createElement(i.Z,{msgId:"gnviewer.download"})):null}));const S=(0,O.rx)("DownloadResource",{component:_,containers:{ActionNavbar:{name:"DownloadResource",Component:_,priority:1},ResourcesGrid:{name:"downloadResource",target:"cardOptions",Component:l,priority:1}},epics:{},reducers:{}})},887157:(e,n,t)=>{var r=t(640554),E=t(588958);e.exports=function(e,n,t,o){var u=e.length;for((t=r(t))<0&&(t=-t>u?0:u+t),(o=void 0===o||o>u?u:r(o))<0&&(o+=u),o=t>o?0:E(o);t<o;)e[t++]=n;return e}},580760:(e,n,t)=>{var r=t(989881);e.exports=function(e,n){var t=[];return r(e,(function(e,r,E){n(e,r,E)&&t.push(e)})),t}},389179:(e,n,t)=>{var r=t(555639),E=t(640554),o=t(14841),u=t(479833),O=r.isFinite,i=Math.min;e.exports=function(e){var n=Math[e];return function(e,t){if(e=o(e),(t=null==t?0:i(E(t),292))&&O(e)){var r=(u(e)+"e").split("e"),c=n(r[0]+"e"+(+r[1]+t));return+((r=(u(c)+"e").split("e"))[0]+"e"+(+r[1]-t))}return n(e)}}},819873:(e,n,t)=>{var r=t(887157),E=t(816612);e.exports=function(e,n,t,o){var u=null==e?0:e.length;return u?(t&&"number"!=typeof t&&E(e,n,t)&&(t=0,o=u),r(e,n,t,o)):[]}},763105:(e,n,t)=>{var r=t(234963),E=t(580760),o=t(267206),u=t(701469);e.exports=function(e,n){return(u(e)?r:E)(e,o(n,3))}},313880:(e,n,t)=>{var r=t(479833);e.exports=function(){var e=arguments,n=r(e[0]);return e.length<3?n:n.replace(e[1],e[2])}},59854:(e,n,t)=>{var r=t(389179)("round");e.exports=r},588958:(e,n,t)=>{var r=t(829750),E=t(640554);e.exports=function(e){return e?r(E(e),0,4294967295):0}}}]);