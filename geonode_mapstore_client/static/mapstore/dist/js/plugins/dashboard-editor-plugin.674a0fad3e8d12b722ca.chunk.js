(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8225],{7691:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>T});var n=r(49977),o=r.n(n),i=r(57579),a=r(55927),c=r(82904),s=r(95797),u=r(97395),l=r(7878),f=r(63516),d=r(67306),b=r(74621),p=r(1757),v=r(24684),y=r(91312),g=r(89919),m=r(75982),h=["data"],w=["status","statusText","data","message"];function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function S(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===O(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D=function(e){var t=(0,p.JT)(e);return[t.search&&t.search.url,t.name]};const T={openDashboardWidgetEditor:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(i.AE,i.dm).filter((function(){return(0,d.Wy)(r())})).switchMap((function(){return o().Observable.of((0,a.D_)(!0))}))},closeDashboardWidgetEditorOnFinish:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(i.Jm).filter((function(){return(0,d.Wy)(r())})).switchMap((function(){return o().Observable.of((0,a.D_)(!1))}))},initDashboardEditorOnNew:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(i.AE).filter((function(){return(0,d.Wy)(r())})).switchMap((function(e){return o().Observable.of((0,i.bS)(E(E({legend:!1,mapSync:!1,cartesian:!0,yAxis:!0},e),{},{type:void 0}),{step:0}))}))},closeDashboardEditorOnExit:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(m.nk).filter((function(){return(0,d.Wy)(r())})).filter((function(){return(0,d.i$)(r())})).switchMap((function(){return o().Observable.of((0,a.D_)(!1))}))},handleDashboardWidgetsFilterPanel:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===t?function(){}:t;return e.ofType(i.lG).filter((function(){return(0,d.Wy)(r())})).switchMap((function(){return o().Observable.of(s.gT.apply(void 0,(t=D(r()),function(e){if(Array.isArray(e))return j(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),(0,l.F)((0,p.um)(r())),(0,c.Xg)("queryPanel","enabled",!0)).concat(o().Observable.race(e.ofType(l.Wm).take(1),e.ofType(c.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"queryPanel"===t&&(!r||"enabled"===r)})).take(1)).switchMap((function(e){return(e.filterObj?o().Observable.of((0,i.Rz)("filter",e.filterObj)):o().Observable.empty()).merge(o().Observable.of((0,c.Xg)("widgetBuilder","enabled",!0)))}))).takeUntil(e.ofType(m.nk,i.dm).merge(e.ofType(c.kM).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.control,r=e.property;return"widgetBuilder"===t&&0==!r})))).concat(o().Observable.of((0,c.Xg)("queryPanel","enabled",!1)));var t}))},filterAnonymousUsersForDashboard:function(e,t){return e.ofType(f.c8,f.Nv).filter((function(){return"/dashboard"===(0,v.F)(t.getState())})).switchMap((function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),(0,b.jl)(t.getState())?o().Observable.empty():o().Observable.of((0,a.AN)({status:403}))}))},loadDashboardStream:function(e,t){var r=t.getState,n=void 0===r?function(){}:r;return e.ofType(a.zX).switchMap((function(e){var t=e.id;return(0,y.RX)(t).map((function(e){var t=e.data,r=S(e,h);return(0,a.rR)(r,t)})).let((0,g.hP)((0,a.vM)(!0,"loading"),(0,a.vM)(!1,"loading"),(function(e){var t=window.location.href.match("dashboard-embedded")?"dashboardEmbedded":"dashboard",r=t+".errors.loading.unknownError";return 403===e.status&&(r=t+".errors.loading.pleaseLogin",(0,b.jl)(n())&&(r=t+".errors.loading.dashboardNotAccessible")),404===e.status&&(r=t+".errors.loading.dashboardDoesNotExist"),o().Observable.of((0,u.vU)({title:t+".errors.loading.title",message:r}),(0,a.AN)(E(E({},e),{},{messageId:r})))})))}))},reloadDashboardOnLoginLogout:function(e){return e.ofType(a.zX).switchMap((function(t){var r=t.id;return e.ofType(f.XP,f.Nv).switchMap((function(){return o().Observable.of((0,a.o2)(r)).delay(1e3)})).takeUntil(e.ofType(m.nk))}))},saveDashboard:function(e){return e.ofType(a.aR).exhaustMap((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).resource;return(e.id?(0,y.id)(e):(0,y.SN)(e)).switchMap((function(t){return o().Observable.of((0,a.sA)(t),e.id?(0,a.gE)(!1):(0,a.pB)(!1),e.id?(0,a.o2)(t):(0,m.VF)("/dashboard/".concat(t))).merge(o().Observable.of((0,u.$Z)({id:"DASHBOARD_SAVE_SUCCESS",title:"saveDialog.saveSuccessTitle",message:"saveDialog.saveSuccessMessage"})).delay(e.id?0:1e3))})).let((0,g.hP)((0,a.vM)(!0,"saving"),(0,a.vM)(!1,"saving"))).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.status,r=e.statusText,n=e.data,i=e.message,c=S(e,w);return o().Observable.of((0,a.GD)(t?{status:t,statusText:r,data:n}:i||c),(0,a.vM)(!1,"saving"))}))}))}}},68143:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var n=r(24852),o=r.n(n),i=r(67076),a=r(22222),c=r(71703),s=r(45697),u=r.n(s),l=r(22843),f=r(1757),d=r(67306),b=r(96311),p=r(57579),v=r(55927);const y=(0,i.compose)((0,c.connect)((function(){return{}}),{backFromWizard:function(){return(0,p.Rz)("layer",void 0)}}),(0,i.withProps)((function(e){var t=e.backFromWizard;return{exitButton:{onClick:void 0===t?function(){}:t,glyph:"arrow-left",tooltipId:"widgets.builder.wizard.backToLayerSelection"}}})));var g=r(75480),m=r(4876),h=r(7691),w=r(24412),O=r(80717);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,D(n.key),n)}}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function k(e,t,r){return(t=D(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e){var t=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===S(t)?t:String(t)}var T=(0,i.compose)((0,c.connect)(b.Nb,{toggleConnection:p.w2,triggerShowConnections:v.G9}),(0,c.connect)(b.Tw),(0,i.withProps)((function(e){var t=e.availableDependencies;return{availableDependencies:(void 0===t?[]:t).filter((function(e){return"map"!==e}))}})),y)(m.Z),M=(0,i.compose)((0,c.connect)((0,a.P1)(d.P0,f.HU,d.DZ,f.ie,(function(e,t,r){return{showConnections:e,hasConnections:(arguments.length>3&&void 0!==arguments[3]?arguments[3]:[]).length>0,hasWidgets:t,canEdit:r}})),{onShowConnections:v.G9,onAddWidget:p.A4}),(0,i.withProps)((function(e){var t=e.onAddWidget,r=void 0===t?function(){}:t,n=e.hasWidgets,o=e.canEdit,i=e.hasConnections,a=e.showConnections,c=e.onShowConnections,s=void 0===c?function(){}:c;return{buttons:[{glyph:"plus",tooltipId:"dashboard.editor.addACardToTheDashboard",bsStyle:"primary",visible:o,id:"ms-add-card-dashboard",onClick:function(){return r()}},{glyph:a?"bulb-on":"bulb-off",tooltipId:a?"dashboard.editor.hideConnections":"dashboard.editor.showConnections",bsStyle:a?"success":"primary",visible:!!n&&!!i||!o,onClick:function(){return s(!a)}}]}})))(O.Z),C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(c,e);var t,r,n,i,a=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(n);if(i){var r=E(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),a.apply(this,arguments)}return t=c,(r=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var e=this,t=this.props.pluginCfg.selectedService||"",r=this.props.pluginCfg.services||{};return this.props.editing?o().createElement("div",{className:"dashboard-editor de-builder"},o().createElement(T,{disableEmptyMap:this.props.disableEmptyMap,defaultSelectedService:t,defaultServices:r,enabled:this.props.editing,onClose:function(){return e.props.setEditing(!1)},catalog:this.props.catalog})):o().createElement("div",{className:"ms-vertical-toolbar dashboard-editor de-toolbar",id:this.props.id},o().createElement(M,{transitionProps:!1,btnGroupProps:{vertical:!0},btnDefaultProps:{tooltipPosition:"right",className:"square-button-md",bsStyle:"primary"}}),this.props.loading?o().createElement(g.Z,{style:{position:"fixed",bottom:0}}):null)}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);k(C,"propTypes",{id:u().string,editing:u().bool,loading:u().bool,limitDockHeight:u().bool,fluid:u().bool,zIndex:u().number,dockSize:u().number,position:u().string,onMount:u().func,onUnmount:u().func,setEditing:u().func,dimMode:u().string,src:u().string,style:u().object,pluginCfg:u().object,catalog:u().object,disableEmptyMap:u().bool}),k(C,"defaultProps",{id:"dashboard-editor",editing:!1,dockSize:500,loading:!0,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:function(){},onUnmount:function(){},setEditing:function(){}});var A=(0,c.connect)((0,a.P1)(d.i$,d.MZ,(function(e,t){return{editing:e,loading:t}})),{setEditing:v.D_,onMount:function(){return(0,v.Nl)(!0)},onUnmount:function(){return(0,v.Nl)(!1)}})(C);const _=(0,l.rx)("DashboardEditor",{component:A,reducers:{dashboard:w.Z},epics:h.ZP})},24412:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(55927),o=r(57579),i=r(61868),a=r(84596),c=r.n(a);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showConnections:!0,services:null,saveServiceLoading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.BJ:return(0,i.t8)("editor.available",t.available,e);case n._y:case o.wb:case o.Jm:case o.yY:return(0,i.t8)("editing",t.editing,e);case n.vk:return(0,i.t8)("showConnections",t.show,e);case n.uI:return(0,i.t8)("showSaveModal",t.show,(0,i.t8)("saveErrors",void 0,e));case n.mg:return(0,i.t8)("showSaveAsModal",t.show,(0,i.t8)("saveErrors",void 0,e));case n.E9:var r;return l(l({},e),{},{originalData:t.data,resource:t.resource,services:null===(r=t.data)||void 0===r?void 0:r.catalogs});case n.R4:return l(l({},e),{},{originalData:void 0,resource:void 0,mode:"view",services:void 0});case n.SW:return(0,i.t8)("saveErrors",c()(t.error),e);case n.$l:return(0,i.t8)("saveErrors",void 0,e);case n.E5:var a;return l(l({},e),{},{services:e.services||t.services,selectedService:(null===(a=t.service)||void 0===a?void 0:a.key)||""});case n.s6:return(0,i.t8)("services",t.services,e);case n.B_:return l(l({},e),{},{mode:t.mode,isNew:t.isNew,saveServiceLoading:!1});case n.TA:return l(l({},e),{},{saveServiceLoading:t.loading});case n.CF:var s=t.services,u=t.service;u.isNew=!1,u.showAdvancedSettings=!1,delete u.old,s[u.key]=u;var f=u.key;return l(l({},e),{},{services:s,selectedService:f,mode:"view"});case n.js:var d,b,p=t.services,v=t.service;(p[v.key]||p[null===(d=v.old)||void 0===d?void 0:d.key])&&(delete p[v.key]||p[null===(b=v.old)||void 0===b?void 0:b.key]);var y=Object.keys(p)[0]||"";return l(l({},e),{},{services:p,mode:"view",selectedService:y});case n.CP:return(0,i.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,i.t8)("loading",t.value,e));default:return e}}}}]);