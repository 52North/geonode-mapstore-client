(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[78225],{807691:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>D});var n=r(989255),o=r(557579),i=r(555927),a=r(782904),s=r(95797),c=r(197395),u=r(807878),l=r(263516),d=r(367306),f=r(274621),p=r(401757),b=r(324684),v=r(291312),y=r(589919),g=r(275982),h=["data"],m=["status","statusText","data","message"];function O(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function w(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=function(e){var t=(0,p.JT)(e);return[t.search&&t.search.url,t.name]};const D={openDashboardWidgetEditor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,a=void 0===r?function(){}:r;return e.ofType(o.AE,o.dm).filter((function(){return(0,d.Wy)(a())})).switchMap((function(){return n.Observable.of((0,i.D_)(!0))}))},closeDashboardWidgetEditorOnFinish:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,a=void 0===r?function(){}:r;return e.ofType(o.Jm).filter((function(){return(0,d.Wy)(a())})).switchMap((function(){return n.Observable.of((0,i.D_)(!1))}))},initDashboardEditorOnNew:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,i=void 0===r?function(){}:r;return e.ofType(o.AE).filter((function(){return(0,d.Wy)(i())})).switchMap((function(e){return n.Observable.of((0,o.bS)(P(P({legend:!1,mapSync:!1,cartesian:!0,yAxis:!0},e),{},{type:void 0}),{step:0}))}))},closeDashboardEditorOnExit:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,o=void 0===r?function(){}:r;return e.ofType(g.nk).filter((function(){return(0,d.Wy)(o())})).filter((function(){return(0,d.i$)(o())})).switchMap((function(){return n.Observable.of((0,i.D_)(!1))}))},handleDashboardWidgetsFilterPanel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.getState,i=void 0===r?function(){}:r;return e.ofType(o.lG).filter((function(){return(0,d.Wy)(i())})).switchMap((function(){return n.Observable.of(s.gT.apply(void 0,w(k(i()))),(0,u.F)((0,p.um)(i())),(0,a.Xg)("queryPanel","enabled",!0)).concat(n.Observable.race(e.ofType(u.Wm).take(1),e.ofType(a.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"queryPanel"===t&&(!r||"enabled"===r)})).take(1)).switchMap((function(e){return(e.filterObj?n.Observable.of((0,o.Rz)("filter",e.filterObj)):n.Observable.empty()).merge(n.Observable.of((0,a.Xg)("widgetBuilder","enabled",!0)))}))).takeUntil(e.ofType(g.nk,o.dm).merge(e.ofType(a.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"widgetBuilder"===t&&0==!r})))).concat(n.Observable.of((0,a.Xg)("queryPanel","enabled",!1)))}))},filterAnonymousUsersForDashboard:function(e,t){return e.ofType(l.c8,l.Nv).filter((function(){return"/dashboard"===(0,b.F)(t.getState())})).switchMap((function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),(0,f.jl)(t.getState())?n.Observable.empty():n.Observable.of((0,i.AN)({status:403}))}))},loadDashboardStream:function(e,t){var r=t.getState,o=void 0===r?function(){}:r;return e.ofType(i.zX).switchMap((function(e){var t=e.id;return(0,v.RX)(t).map((function(e){var t=e.data,r=O(e,h);return(0,i.rR)(r,t)})).let((0,y.hP)((0,i.vM)(!0,"loading"),(0,i.vM)(!1,"loading"),(function(e){var t=window.location.href.match("dashboard-embedded")?"dashboardEmbedded":"dashboard",r=t+".errors.loading.unknownError";return 403===e.status&&(r=t+".errors.loading.pleaseLogin",(0,f.jl)(o())&&(r=t+".errors.loading.dashboardNotAccessible")),404===e.status&&(r=t+".errors.loading.dashboardDoesNotExist"),n.Observable.of((0,c.vU)({title:t+".errors.loading.title",message:r}),(0,i.AN)(P(P({},e),{},{messageId:r})))})))}))},reloadDashboardOnLoginLogout:function(e){return e.ofType(i.zX).switchMap((function(t){var r=t.id;return e.ofType(l.XP,l.Nv).switchMap((function(){return n.Observable.of((0,i.o2)(r)).delay(1e3)})).takeUntil(e.ofType(g.nk))}))},saveDashboard:function(e){return e.ofType(i.aR).exhaustMap((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.resource;return(t.id?(0,v.id)(t):(0,v.SN)(t)).switchMap((function(e){return n.Observable.of((0,i.sA)(e),t.id?(0,i.gE)(!1):(0,i.pB)(!1),t.id?(0,i.o2)(e):(0,g.VF)("/dashboard/".concat(e))).merge(n.Observable.of((0,c.$Z)({id:"DASHBOARD_SAVE_SUCCESS",title:"saveDialog.saveSuccessTitle",message:"saveDialog.saveSuccessMessage"})).delay(t.id?0:1e3))})).let((0,y.hP)((0,i.vM)(!0,"saving"),(0,i.vM)(!1,"saving"))).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.status,r=e.statusText,o=e.data,a=e.message,s=O(e,m);return n.Observable.of((0,i.GD)(t?{status:t,statusText:r,data:o}:a||s),(0,i.vM)(!1,"saving"))}))}))}}},868143:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N});var n=r(667294),o=r.n(n),i=r(418093),a=r(22222),s=r(533664),c=r(675263),u=r.n(c),l=r(322843),d=r(401757),f=r(367306),p=r(296311),b=r(557579),v=r(555927);const y=(0,i.compose)((0,s.connect)((function(){return{}}),{backFromWizard:function(){return(0,b.Rz)("layer",void 0)}}),(0,i.withProps)((function(e){var t=e.backFromWizard;return{exitButton:{onClick:void 0===t?function(){}:t,glyph:"arrow-left",tooltipId:"widgets.builder.wizard.backToLayerSelection"}}})));var g=r(975480),h=r(612736),m=r(807691),O=r(24412),w=r(80717);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function k(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=(0,i.compose)((0,s.connect)(p.Nb,{toggleConnection:b.w2,triggerShowConnections:v.G9}),(0,s.connect)(p.Tw),(0,i.withProps)((function(e){var t=e.availableDependencies;return{availableDependencies:(void 0===t?[]:t).filter((function(e){return"map"!==e}))}})),y)(h.Z),C=(0,i.compose)((0,s.connect)((0,a.P1)(f.P0,d.HU,f.DZ,d.ie,(function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return{showConnections:e,hasConnections:n.length>0,hasWidgets:t,canEdit:r}})),{onShowConnections:v.G9,onAddWidget:b.A4}),(0,i.withProps)((function(e){var t=e.onAddWidget,r=void 0===t?function(){}:t,n=e.hasWidgets,o=e.canEdit,i=e.hasConnections,a=e.showConnections,s=e.onShowConnections,c=void 0===s?function(){}:s;return{buttons:[{glyph:"plus",tooltipId:"dashboard.editor.addACardToTheDashboard",bsStyle:"primary",visible:o,id:"ms-add-card-dashboard",onClick:function(){return r()}},{glyph:a?"bulb-on":"bulb-off",tooltipId:a?"dashboard.editor.hideConnections":"dashboard.editor.showConnections",bsStyle:a?"success":"primary",visible:!!n&&!!i||!o,onClick:function(){return c(!a)}}]}})))(w.Z),A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(s,e);var t,r,n,i,a=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(n);if(i){var r=D(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return k(this,e)});function s(){return j(this,s),a.apply(this,arguments)}return t=s,(r=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var e=this,t=this.props.pluginCfg.selectedService||"",r=this.props.pluginCfg.services||{};return this.props.editing?o().createElement("div",{className:"dashboard-editor de-builder"},o().createElement(T,{disableEmptyMap:this.props.disableEmptyMap,defaultSelectedService:t,defaultServices:r,enabled:this.props.editing,onClose:function(){return e.props.setEditing(!1)},catalog:this.props.catalog})):o().createElement("div",{className:"ms-vertical-toolbar dashboard-editor de-toolbar",id:this.props.id},o().createElement(C,{transitionProps:!1,btnGroupProps:{vertical:!0},btnDefaultProps:{tooltipPosition:"right",className:"square-button-md",bsStyle:"primary"}}),this.props.loading?o().createElement(g.Z,{style:{position:"fixed",bottom:0}}):null)}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o().Component);M(A,"propTypes",{id:u().string,editing:u().bool,loading:u().bool,limitDockHeight:u().bool,fluid:u().bool,zIndex:u().number,dockSize:u().number,position:u().string,onMount:u().func,onUnmount:u().func,setEditing:u().func,dimMode:u().string,src:u().string,style:u().object,pluginCfg:u().object,catalog:u().object,disableEmptyMap:u().bool}),M(A,"defaultProps",{id:"dashboard-editor",editing:!1,dockSize:500,loading:!0,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:function(){},onUnmount:function(){},setEditing:function(){}});var _=(0,s.connect)((0,a.P1)(f.i$,f.MZ,(function(e,t){return{editing:e,loading:t}})),{setEditing:v.D_,onMount:function(){return(0,v.Nl)(!0)},onUnmount:function(){return(0,v.Nl)(!1)}})(A);const N=(0,l.rx)("DashboardEditor",{component:_,reducers:{dashboard:O.Z},epics:m.ZP})},24412:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(555927),o=r(557579),i=r(761868),a=r(984596),s=r.n(a);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showConnections:!0,services:null,saveServiceLoading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.BJ:return(0,i.t8)("editor.available",t.available,e);case n._y:case o.wb:case o.Jm:case o.yY:return(0,i.t8)("editing",t.editing,e);case n.vk:return(0,i.t8)("showConnections",t.show,e);case n.uI:return(0,i.t8)("showSaveModal",t.show,(0,i.t8)("saveErrors",void 0,e));case n.mg:return(0,i.t8)("showSaveAsModal",t.show,(0,i.t8)("saveErrors",void 0,e));case n.E9:var r;return u(u({},e),{},{originalData:t.data,resource:t.resource,services:null===(r=t.data)||void 0===r?void 0:r.catalogs});case n.R4:return u(u({},e),{},{originalData:void 0,resource:void 0,mode:"view",services:void 0});case n.SW:return(0,i.t8)("saveErrors",s()(t.error),e);case n.$l:return(0,i.t8)("saveErrors",void 0,e);case n.E5:var a;return u(u({},e),{},{services:e.services||t.services,selectedService:(null===(a=t.service)||void 0===a?void 0:a.key)||""});case n.s6:return(0,i.t8)("services",t.services,e);case n.B_:return u(u({},e),{},{mode:t.mode,isNew:t.isNew,saveServiceLoading:!1});case n.TA:return u(u({},e),{},{saveServiceLoading:t.loading});case n.CF:var c=t.services,l=t.service;l.isNew=!1,l.showAdvancedSettings=!1,delete l.old,c[l.key]=l;var d=l.key;return u(u({},e),{},{services:c,selectedService:d,mode:"view"});case n.js:var f,p,b=t.services,v=t.service;(b[v.key]||b[null===(f=v.old)||void 0===f?void 0:f.key])&&(delete b[v.key]||b[null===(p=v.old)||void 0===p?void 0:p.key]);var y=Object.keys(b)[0]||"";return u(u({},e),{},{services:b,mode:"view",selectedService:y});case n.CP:return(0,i.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,i.t8)("loading",t.value,e));default:return e}}}}]);