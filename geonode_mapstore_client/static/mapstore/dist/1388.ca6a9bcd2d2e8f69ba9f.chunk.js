(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1388],{33528:(e,t,r)=>{"use strict";r.d(t,{gJ:()=>n,Oj:()=>i,jp:()=>a,CM:()=>o,DU:()=>u,aO:()=>l,v6:()=>s,K8:()=>c,IN:()=>f,zh:()=>p,AH:()=>E,Ub:()=>d,_9:()=>y,JB:()=>m,oh:()=>R,AY:()=>T,yi:()=>A,SW:()=>S,Hk:()=>g,iQ:()=>v,dY:()=>O,$:()=>I,_u:()=>h,gG:()=>b,DI:()=>G,dZ:()=>x,qw:()=>U,f$:()=>D,bZ:()=>_,$O:()=>F,sF:()=>C,Gk:()=>L,vO:()=>M,ut:()=>w,MK:()=>W,VV:()=>N,B8:()=>P,VM:()=>B,a3:()=>j,Xp:()=>k,DA:()=>Y,sK:()=>V,yA:()=>H,r:()=>q,iB:()=>$,EH:()=>z,Yd:()=>Z,Hg:()=>K,Lz:()=>J,ye:()=>Q,Jb:()=>X,d:()=>ee,fT:()=>te,Ib:()=>re,Pl:()=>ne,UB:()=>ie,Uh:()=>ae,QT:()=>oe,oL:()=>ue,Ap:()=>le,KD:()=>se,Z_:()=>ce,Vw:()=>fe,sY:()=>pe,kA:()=>Ee,gr:()=>de,pX:()=>ye,F5:()=>me,MO:()=>Re,dq:()=>Te,DY:()=>Ae,oO:()=>Se,uF:()=>ge,a8:()=>ve,Pv:()=>Oe,an:()=>Ie,lg:()=>he,nY:()=>be,nG:()=>Ge,lx:()=>xe,$S:()=>Ue,gc:()=>De,Uz:()=>_e,fO:()=>Fe,$E:()=>Ce,cE:()=>Le,JK:()=>Me,YV:()=>we,t9:()=>We,YG:()=>Ne,HT:()=>Pe,MY:()=>Be,ve:()=>je,hB:()=>ke,Ox:()=>Ye,zd:()=>Ve,aT:()=>He,VH:()=>qe,Yb:()=>$e,Jr:()=>ze,pP:()=>Ze});var n="FEATUREGRID:SET_UP",i="FEATUREGRID:SELECT_FEATURES",a="FEATUREGRID:DESELECT_FEATURES",o="FEATUREGRID:CLEAR_SELECTION",u="FEATUREGRID:SET_SELECTION_OPTIONS",l="FEATUREGRID:TOGGLE_MODE",s="FEATUREGRID:TOGGLE_FEATURES_SELECTION",c="FEATUREGRID:FEATURES_MODIFIED",f="FEATUREGRID:NEW_FEATURE",p="FEATUREGRID:SAVE_CHANGES",E="FEATUREGRID:SAVING",d="FEATUREGRID:START_EDITING_FEATURE",y="FEATUREGRID:START_DRAWING_FEATURE",m="FEATUREGRID:DELETE_GEOMETRY",R="FEATUREGRID:DELETE_GEOMETRY_FEATURE",T="FEATUREGRID:SAVE_SUCCESS",A="FEATUREGRID:CLEAR_CHANGES",S="FEATUREGRID:SAVE_ERROR",g="FEATUREGRID:DELETE_SELECTED_FEATURES",v="SET_FEATURES",O="FEATUREGRID:SORT_BY",I="FEATUREGRID:SET_LAYER",h="QUERY:UPDATE_FILTER",b="FEATUREGRID:CHANGE_PAGE",G="FEATUREGRID:GEOMETRY_CHANGED",x="DOCK_SIZE_FEATURES",U="FEATUREGRID:TOGGLE_TOOL",D="FEATUREGRID:CUSTOMIZE_ATTRIBUTE",_="ASK_CLOSE_FEATURE_GRID_CONFIRM",F="FEATUREGRID:OPEN_GRID",C="FEATUREGRID:CLOSE_GRID",L="FEATUREGRID:CLEAR_CHANGES_CONFIRMED",M="FEATUREGRID:FEATURE_GRID_CLOSE_CONFIRMED",w="FEATUREGRID:SET_PERMISSION",W="FEATUREGRID:DISABLE_TOOLBAR",N="FEATUREGRID:ACTIVATE_TEMPORARY_CHANGES",P="FEATUREGRID:DEACTIVATE_GEOMETRY_FILTER",B="FEATUREGRID:ADVANCED_SEARCH",j="FEATUREGRID:ZOOM_ALL",k="FEATUREGRID:INIT_PLUGIN",Y="FEATUREGRID:SIZE_CHANGE",V="FEATUREGRID:TOGGLE_SHOW_AGAIN_FLAG",H="FEATUREGRID:HIDE_SYNC_POPOVER",q="FEATUREGRID:UPDATE_EDITORS_OPTIONS",$="FEATUREGRID:LAUNCH_UPDATE_FILTER_FUNC",z={EDIT:"EDIT",VIEW:"VIEW"},Z="FEATUREGRID:START_SYNC_WMS",K="FEATUREGRID:STOP_SYNC_WMS",J="STORE_ADVANCED_SEARCH_FILTER",Q="LOAD_MORE_FEATURES",X="FEATUREGRID:QUERY_RESULT",ee="FEATUREGRID:SET_TIME_SYNC",te="FEATUREGRID:SET_PAGINATION";function re(){return{type:V}}function ne(){return{type:H}}function ie(e,t){return{type:X,features:e,pages:t}}function ae(e){return{type:J,filterObj:e}}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:k,options:e}}function ue(){return{type:L}}function le(){return{type:M}}function se(e,t){return{type:i,features:e,append:t}}function ce(e){return{type:n,options:e}}function fe(e){return{type:G,features:e}}function pe(){return{type:d}}function Ee(){return{type:y}}function de(e){return{type:a,features:e}}function ye(){return{type:m}}function me(e){return{type:R,features:e}}function Re(){return{type:o}}function Te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.multiselect,r=void 0!==t&&t;return{type:u,multiselect:r}}function Ae(e,t){return{type:O,sortBy:e,sortOrder:t}}function Se(e,t){return{type:b,page:e,size:t}}function ge(e){return{type:I,id:e}}function ve(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:h,update:e,append:t}}function Oe(e,t){return{type:U,tool:e,value:t}}function Ie(e,t,r){return{type:D,name:e,key:t,value:r}}function he(){return{type:l,mode:z.EDIT}}function be(){return{type:l,mode:z.VIEW}}function Ge(e,t){return{type:c,features:e,updated:t}}function xe(e){return{type:f,features:e}}function Ue(){return{type:p}}function De(){return{type:T}}function _e(){return{type:g}}function Fe(){return{type:E}}function Ce(){return{type:A}}function Le(){return{type:S}}function Me(){return{type:_}}function we(){return{type:C}}function We(){return{type:F}}function Ne(e){return{type:W,disabled:e}}function Pe(e){return{type:w,permission:e}}function Be(){return{type:B}}function je(){return{type:j}}function ke(){return{type:Z}}function Ye(e,t){return{type:Y,size:e,dockProps:t}}var Ve=function(e){return{type:Q,pages:e}},He=function(e){return{type:N,activated:e}},qe=function(e){return{type:P,deactivated:e}},$e=function(e){return{type:ee,value:e}},ze=function(e){return{type:te,size:e}},Ze=function(e){return{type:$,updateFilterAction:e}}},38842:(e,t,r)=>{"use strict";r.d(t,{wk:()=>o,Yf:()=>u,c3:()=>l,fY:()=>s});var n=r(86494),i=r(22222),a=r(8316),o=function(e){return(0,n.has)(e,"localConfig.localizedLayerStyles")},u=function(e){var t=(0,n.get)(e,"localConfig.plugins.dashboard",[]),r=(0,n.find)(t,(function(e){return"DashboardEditor"===e.name}))||{};return(0,n.get)(r,"cfg.catalog.localizedLayerStyles",!1)},l=function(e){return(0,n.get)(e,"localConfig.localizedLayerStyles.name","mapstore_language")},s=(0,i.P1)(o,l,a.KV,(function(e,t,r){var n=[];return e&&n.push({name:t,value:r}),n}))},76712:(e,t,r)=>{"use strict";r.d(t,{n0:()=>O,tW:()=>h,FJ:()=>b,F8:()=>G,ll:()=>U,eL:()=>D,AD:()=>_,oR:()=>F,LZ:()=>C,eX:()=>L});var n=r(27418),i=r.n(n),a=r(86494),o=r(72500),u=r.n(o),l=r(86267),s=r(37275),c=r(24262),f=r(86638),p=r(7294),E=r(33044),d=r(67007);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=function(e){return e&&e.replace(/\/csw$/,"/")},A=function(e){return(0,a.isObject)(e)&&e._||e},S=function(e,t){return e.filter((function(r){return p.getTileMatrixSet(t,r,e,t,null)}))},g=function(e){var t=Array.isArray(e.references)?e.references:[e.references];return(0,a.head)([].filter.call(t,(function(t){return"WWW:LINK-1.0-http--image-thumbnail"===t.scheme||"thumbnail"===t.scheme||"WWW:DOWNLOAD-1.0-http--download"===t.scheme&&-1!==(t.value||"").indexOf("".concat(e.identifier||"","-thumb"))||"WWW:DOWNLOAD-REST_MAP"===t.scheme&&-1!==(t.value||"").indexOf("".concat(e.identifier||"","-thumb"))})))},v={csw:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e;return n&&n.records?n.records.map((function(e){var n,o,l,s=e.dc;if(s&&s.URI){var c=(0,a.isArray)(s.URI)?s.URI:s.URI&&[s.URI]||[],p=(0,a.head)([].filter.call(c,(function(e){return"thumbnail"===e.name})))||(0,a.head)([].filter.call(c,(function(e){var t;return!e.name&&(null===(t=e.protocol)||void 0===t?void 0:t.indexOf("image/"))>-1})));n=p?p.value:null,o=(0,a.head)([].filter.call(c,(function(e){return e.protocol&&(e.protocol.match(/^OGC:WMS-(.*)-http-get-map/g)||e.protocol.match(/^OGC:WMS/g))})))}if(!o&&s&&s.references&&s.references.length){var E=Array.isArray(s.references)?s.references:[s.references];if(o=(0,a.head)([].filter.call(E,(function(e){return e.scheme&&(e.scheme.match(/^OGC:WMS-(.*)-http-get-map/g)||"OGC:WMS"===e.scheme)})))){var d=u().parse(o.value,!0),y=d.query&&d.query.layers||s.alternative;o=i()({},o,{name:y})}}if(!o&&s&&s.references&&s.references.length){var A=Array.isArray(s.references)?s.references:[s.references];if(l=(0,a.head)([].filter.call(A,(function(e){return e.scheme&&"WWW:DOWNLOAD-REST_MAP"===e.scheme})))){var S=s.alternative;l=i()({},l,{name:S})}}if(!n&&s&&s.references){var v=g(s);v&&(n=v.value)}var O=[];if(s&&s.references&&(Array.isArray(s.references)?s.references:[s.references]).filter((function(e){return e.scheme.indexOf("http-get-capabilities")>-1})).forEach((function(e){var r=0===e.value.indexOf("http")?e.value:(t&&t.catalogURL||"")+"/"+e.value;O.push({type:e.scheme,url:r})})),o&&o.name){0===o.value.indexOf("http")||i()({},o,{value:(t&&t.catalogURL||"")+"/"+o.value});var I={type:o.protocol||o.scheme,url:o.value,SRS:[],params:{name:o.name}};O.push(I)}if(l&&l.name){var h={type:"arcgis",url:l.value,SRS:[],params:{name:l.name}};O.push(h)}n&&(0===n.indexOf("http")||(n=(T(t&&t.url)||"")+n));var b={boundingBox:e.boundingBox&&e.boundingBox.extent&&(0,a.castArray)(e.boundingBox.extent.join(","))};if(s&&(b=m(m({},b),(0,a.sortBy)(Object.keys(s)).reduce((function(e,t){return m(m({},e),{},R({},t,(0,a.uniq)((0,a.castArray)(s[t]))))}),{}))),s&&s.URI&&(0,a.castArray)(s.URI)&&(0,a.castArray)(s.URI).length&&(b=m(m({},b),{},{uri:["<ul>"+(0,a.castArray)(s.URI).map((function(e){return'<li><a target="_blank" href="'.concat(e.value,'">').concat(e.name,"</a></li>")})).join("")+"</ul>"]})),s&&s.subject&&(0,a.castArray)(s.subject)&&(0,a.castArray)(s.subject).length&&(b=m(m({},b),{},{subject:["<ul>"+(0,a.castArray)(s.subject).map((function(e){return"<li>".concat(e,"</li>")})).join("")+"</ul>"]})),O&&(0,a.castArray)(O).length?b=m(m({},b),{},{references:["<ul>"+(0,a.castArray)(O).map((function(e){return'<li><a target="_blank" href="'.concat(e.url,'">').concat(e.params&&e.params.name||e.url,"</a></li>")})).join("")+"</ul>"]}):delete b.references,s&&s.temporal){var G=s.temporal.split("; ");if(G.length){var x=G.filter((function(e){return-1!==e.indexOf("scheme=")})).map((function(e){var t=e.indexOf("=");return e.substr(t+1,e.length-1)}));x=x.length?x[0]:"W3C-DTF";var U=G.filter((function(e){return-1!==e.indexOf("start=")||-1!==e.indexOf("end=")})).map((function(e){var t=e.indexOf("="),n=e.substr(0,t),i=e.substr(t+1,e.length-1),o=e.length-t-1<=10;return(0,a.includes)(["start","end"],n)&&"W3C-DTF"===x&&!o?(0,f.S$)(r,"catalog.".concat(n))+new Date(i).toLocaleString():(0,a.includes)(["start","end"],n)?(0,f.S$)(r,"catalog.".concat(n))+i:""}));b=m(m({},b),{},{temporal:["<ul>"+U.map((function(e){return"<li>".concat(e,"</li>")})).join("")+"</ul>"]})}}return{boundingBox:e.boundingBox,description:s&&(0,a.isString)(s.abstract)&&s.abstract||"",layerOptions:t&&t.layerOptions||{},identifier:s&&(0,a.isString)(s.identifier)&&s.identifier||"",references:O,thumbnail:n,title:s&&(0,a.isString)(s.title)&&s.title||"",tags:s&&s.tags||"",metadata:b}})):null},wms:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&e.records?e.records.map((function(r){return{capabilities:r,credits:r.credits,boundingBox:d.ZP.getBBox(r),description:r.Abstract||r.Title||r.Name,identifier:r.Name,service:e.service,tags:"",layerOptions:m(m({},(null==t?void 0:t.layerOptions)||{}),(null==e?void 0:e.layerOptions)||{}),title:(0,c.getLayerTitleTranslations)(r)||r.Name,formats:(0,a.castArray)(r.formats||[]),dimensions:(r.Dimension&&(0,a.castArray)(r.Dimension)||[]).map((function(e){return i()({},{values:e._&&e._.split(",")||[]},e.$||{})})).filter((function(e){return e&&"time"!==e.name})),references:[{type:"OGC:WMS",url:t&&t.url,SRS:r.SRS&&((0,a.isArray)(r.SRS)?r.SRS:[r.SRS])||[],params:{name:r.Name}}]}})):null},wmts:function(e,t){return e&&e.records?e.records.map((function(e){var r=(0,a.castArray)(p.getGetTileURL(e)||t&&t.url);1===r.length&&(r=r[0]);var n=p.getCapabilitiesURL(e),o=(0,a.castArray)(e.TileMatrixSetLink||[]).reduce((function(t,r){var n,o=(0,a.head)((e.TileMatrixSet&&(0,a.castArray)(e.TileMatrixSet)||[]).filter((function(e){return e["ows:Identifier"]===r.TileMatrixSet}))),u=o&&l.default.getEPSGCode(o["ows:SupportedCRS"]),s=r.TileMatrixSetLimits&&(r.TileMatrixSetLimits.TileMatrixLimits||[]).map((function(e){return{identifier:e.TileMatrix,ranges:{cols:{min:e.MinTileCol,max:e.MaxTileCol},rows:{min:e.MinTileRow,max:e.MaxTileRow}}}}))||o.TileMatrix.map((function(e){return{identifier:e["ows:Identifier"]}}));return i()(t,(R(n={},o["ows:Identifier"],s),R(n,u,s),n))}),{}),u=function(e){var t=e["ows:WGS84BoundingBox"];return t||(t={"ows:LowerCorner":"-180.0 -90.0","ows:UpperCorner":"180.0 90.0"}),t}(e);return{title:A(e["ows:Title"]||e["ows:Identifier"]),description:A(e["ows:Abstract"]||e["ows:Title"]||e["ows:Identifier"]),identifier:A(e["ows:Identifier"]),tags:"",layerOptions:t&&t.layerOptions||{},style:e.style,capabilitiesURL:n,queryable:e.queryable,requestEncoding:e.requestEncoding,tileMatrixSet:e.TileMatrixSet,matrixIds:o,format:e.format,TileMatrixSetLink:(0,a.castArray)(e.TileMatrixSetLink),boundingBox:{extent:[u["ows:LowerCorner"].split(" ")[0],u["ows:LowerCorner"].split(" ")[1],u["ows:UpperCorner"].split(" ")[0],u["ows:UpperCorner"].split(" ")[1]],crs:"EPSG:4326"},references:[{type:"OGC:WMTS",url:r,SRS:S(e.SRS||[],o),params:{name:e["ows:Identifier"]}}]}})):null},tms:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.records){var r=t.service&&"tms"===t.service.provider;return r?e.records.map((function(e){return{title:e.title,tileMapUrl:e.href,description:"".concat(e.srs).concat(e.format?", "+e.format:""),tmsUrl:t.tmsUrl,references:[{type:"OGC:TMS",version:"1.0.0",url:t.url}]}})):e.records.map((function(e){return{title:e.title||e.provider,url:e.url,attribution:e.attribution,options:e.options,provider:e.provider,type:"tileprovider",references:[]}}))}return null},wfs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.records;return t?t.map((function(e){return m(m({},e),{},{references:[{type:"OGC:WFS-1.1.0-http-get-capabilities",url:e.url},{type:"OGC:WFS-1.1.0-http-get-feature",url:e.url}]})})):null},backgrounds:function(e){return e&&e.records?e.records.map((function(e){return{description:e.title,title:e.title,identifier:e.name,thumbnail:e.thumbURL,references:[],background:e}})):null}},O=function(e){return e.filter((function(e){return l.default.isSRSAllowed(e)})).reduce((function(e,t){return i()(e,R({},t,!0))}),{})},I=function(e,t){var r=e.split("?"),n={};return r.length>=2&&r[1]&&r[1].split(/[&;]/g).forEach((function(e){var r=e.split("=");-1===t.indexOf(r[0].toLowerCase())&&(n[r[0]]=r[1])})),{url:r[0],params:n}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.references,r=void 0===t?[]:t;return{wfs:(0,a.head)(r.filter((function(e){return e.type&&("OGC:WFS"===e.type||e.type.indexOf("OGC:WFS")>-1&&e.type.indexOf("http-get-feature")>-1)}))),wms:(0,a.head)(r.filter((function(e){return e.type&&("OGC:WMS"===e.type||e.type.indexOf("OGC:WMS")>-1&&e.type.indexOf("http-get-map")>-1)}))),wmts:(0,a.head)(r.filter((function(e){return e.type&&("OGC:WMTS"===e.type||e.type.indexOf("OGC:WMTS")>-1&&e.type.indexOf("http-get-map")>-1)}))),tms:(0,a.head)(r.filter((function(e){return e.type&&("OGC:TMS"===e.type||e.type.indexOf("OGC:TMS")>-1)})))}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{references:[]};return{esri:(0,a.head)(e.references.filter((function(e){return e.type&&("ESRI:SERVER"===e.type||"arcgis"===e.type)})))}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.references,r=void 0===t?[]:t,n=(0,a.head)(r.filter((function(e){return e.type&&e.type.indexOf("OGC:WMS")>-1&&e.type.indexOf("http-get-capabilities")>-1}))),i=(0,a.head)(r.filter((function(e){return e.type&&e.type.indexOf("OGC:WFS")>-1&&e.type.indexOf("http-get-capabilities")>-1}))),o=(0,a.head)(r.filter((function(e){return e.type&&e.type.indexOf("OGC:WMTS")>-1&&e.type.indexOf("http-get-capabilities")>-1}))),u=[];return n&&u.push({type:"WMS_GET_CAPABILITIES",url:n.url,labelId:"catalog.wmsGetCapLink"}),o&&u.push({type:"WMTS_GET_CAPABILITIES",url:o.url,labelId:"catalog.wmtsGetCapLink"}),i&&u.push({type:"WFS_GET_CAPABILITIES",url:i.url,labelId:"catalog.wfsGetCapLink"}),u},x=function(e){return e&&!(0,a.isArray)(e)&&-1!==e.indexOf(",")?e.split(",").map((function(e){return e.trim()})):e},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wms",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.removeParams,i=void 0===n?[]:n,o=r.format,u=r.catalogURL,l=r.url,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},f=arguments.length>4?arguments[4]:void 0;if(!e||!e.references)return null;var p,E,d=h(e),y=d.wms,R=d.wmts,T=y||R,A=function(e){return I(s.ZP.cleanDuplicatedQuestionMarks(e),["request","layer","layers","service","version"].concat(i))},S=x(T.url);if(S&&(0,a.isArray)(S))p=S.map((function(e){return A(e)})).map((function(e){return e.url})),E=S.map((function(e){return A(e)})).map((function(e){return e.params})).reduce((function(e,t){return m(m({},e),t)}),{});else{var g=A(S||u),v=g.url,b=g.params;p=v,E=b}var U=function(e){return(0,a.isArray)(e)&&1===e.length?e[0]:e},D=U(l||p),_=O(T.SRS);return m(m(m({type:t,requestEncoding:e.requestEncoding,style:e.style,format:o,url:D,capabilitiesURL:e.capabilitiesURL,queryable:e.queryable,visibility:!0,dimensions:e.dimensions||[],name:T.params&&T.params.name,title:e.title||T.params&&T.params.name,matrixIds:"wmts"===t?e.matrixIds||[]:void 0,description:e.description||"",tileMatrixSet:"wmts"===t?e.tileMatrixSet||[]:void 0,credits:!s.ZP.getConfigProp("noCreditsFromCatalog")&&e.credits,bbox:{crs:e.boundingBox.crs,bounds:{minx:e.boundingBox.extent[0],miny:e.boundingBox.extent[1],maxx:e.boundingBox.extent[2],maxy:e.boundingBox.extent[3]}},links:G(e),params:E,allowedSRS:_,catalogURL:u},c),e.layerOptions),{},{localizedLayerStyles:(0,a.isNil)(f)?void 0:f})},D=function(e,t,r,n){return v[e]&&v[e](t,r,n)||null},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||!e.references)return null;var r=b(e),n=r.esri;return m({type:n.type,url:n.url,visibility:!0,dimensions:e.dimensions||[],name:n.params&&n.params.name,bbox:{crs:e.boundingBox.crs,bounds:{minx:e.boundingBox.extent[0],miny:e.boundingBox.extent[1],maxx:e.boundingBox.extent[2],maxy:e.boundingBox.extent[3]}}},t)},F=function(e,t,r){var n=e.tileMapUrl,i=t.TileMap,o=void 0===i?{}:i,u=r.forceDefaultTileGrid,l=o.Title,s=o.Abstract,c=o.SRS,f=o.BoundingBox,p=void 0===f?{}:f,d=o.Origin,y=o.TileFormat,m=void 0===y?{}:y,T=o.TileSets,A=o.$,S=A.version,g=A.tilemapservice,v=(0,a.get)(p,"$",{}),O=v.minx,I=v.miny,h=v.maxx,b=v.maxy,G=(0,a.get)(d,"$"),x=G.x,U=G.y,D=(0,a.get)(m,"$",{}),_=D.width,F=D.height,C=D["mime-type"],L=D.extension,M=[parseFloat(_),parseFloat(F,10)],w=(0,a.castArray)((0,a.get)(T,"TileSet",[]).map((function(e){return e.$}))).map((function(e){var t=e.href,r=e.order,n=e["units-per-pixel"];return{href:(0,E.cleanAuthParamsFromURL)(t),order:parseFloat(r),resolution:parseFloat(n)}})),W=(0,a.get)(T,"profile");return{title:l,visibility:!0,hideErrors:!0,name:l,allowedSRS:R({},c,!0),description:s,srs:c,version:S,tileMapService:g?(0,E.cleanAuthParamsFromURL)(g):void 0,type:"tms",profile:W,tileMapUrl:n,forceDefaultTileGrid:u,bbox:p&&{crs:c,bounds:{minx:parseFloat(O),miny:parseFloat(I),maxx:parseFloat(h),maxy:parseFloat(b)}},tileSets:w,origin:{x:parseFloat(x),y:parseFloat(U)},format:C,tileSize:M,extension:L}},C=function(e){return m({type:e.type||"wfs",search:{url:e.url,type:"wfs"},url:e.url,queryable:e.queryable,visibility:!0,name:e.name,title:e.title||e.name,description:e.description||"",bbox:e.boundingBox,links:G(e),style:{weight:1,color:"rgba(0, 0, 255, 1)",opacity:1,fillColor:"rgba(0, 0, 255, 0.1)",fillOpacity:.1,radius:10}},e.layerOptions)},L=function(e){return{type:"tileprovider",visibility:!0,url:e.url,title:e.title,attribution:e.attribution,options:e.options,provider:e.provider,name:e.provider}}}}]);