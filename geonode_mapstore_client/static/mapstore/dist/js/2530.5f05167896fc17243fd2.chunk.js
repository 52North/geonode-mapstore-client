(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2530],{57604:(t,e,r)=>{"use strict";r.d(e,{XV:()=>n,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>c,yR:()=>u,pF:()=>s,PZ:()=>l});var n="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",c=function(t,e,r){return{type:n,dimension:e,layerId:t,data:r}},u=function(t){return{type:o,time:t}},s=function(t){return{type:i,offsetTime:t}},l=function(t){return{type:a,time:t}}},62187:(t,e,r)=>{"use strict";r.d(e,{NH:()=>n,E7:()=>o,N7:()=>i,L9:()=>a,hQ:()=>c,NC:()=>u,c9:()=>s,up:()=>l,FZ:()=>p,Fi:()=>f,KB:()=>y,E0:()=>d,Q_:()=>m,hY:()=>v,wO:()=>b,sT:()=>h,wR:()=>E,h1:()=>g,hS:()=>O,zK:()=>T,VS:()=>A,oz:()=>S,FH:()=>w,XN:()=>P,Ym:()=>I});var n="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:SET_FRAMES",c="PLAYBACK:APPEND_FRAMES",u="PLAYBACK:FRAMES_LOADING",s="PLAYBACK:SET_CURRENT_FRAME",l="PLAYBACK:SELECT_PLAYBACK_RANGE",p="PLAYBACK:SETTINGS_CHANGE",f="PLAYBACK:TOGGLE_ANIMATION_MODE",y="PLAYBACK:ANIMATION_STEP_MOVE",d="PLAYBACK:UPDATE_METADATA",m={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},v=function(){return{type:n}},b=function(){return{type:o}},h=function(){return{type:i}},E=function(t){return{type:a,frames:t}},g=function(t){return{type:s,frame:t}},O=function(t){return{type:c,frames:t}},T=function(t){return{type:u,loading:t}},A=function(t){return{type:l,range:t}},S=function(t,e){return{type:p,name:t,value:e}},w=function(){return{type:f}},P=function(t){return{type:y,direction:t}},I=function(t){var e=t.next,r=t.previous,n=t.forTime;return{type:d,forTime:n,next:e,previous:r}}},57676:(t,e,r)=>{"use strict";r.d(e,{qx:()=>n,HM:()=>o,Lv:()=>i,y3:()=>a,iv:()=>c,cO:()=>u,br:()=>s,aA:()=>l,Xe:()=>p,Nb:()=>f,_V:()=>y,kq:()=>d,JU:()=>m,PQ:()=>v,cb:()=>b,KI:()=>h,M5:()=>E,w2:()=>g,w:()=>O,Z7:()=>T,p:()=>A,_e:()=>S});var n="TIMELINE:SELECT_TIME",o=function(t,e,r,o){return{type:n,time:t,group:e,what:r,item:o}},i="TIMELINE:RANGE_CHANGE",a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,r=t.end;return{type:i,start:e,end:r}},c="TIMELINE:RANGE_DATA_LOADED",u=function(t,e,r,n){return{type:c,layerId:t,range:e,histogram:r,domain:n}},s="TIMELINE:LOADING",l=function(t,e){return{type:s,layerId:t,loading:e}},p="TIMELINE:INIT_SELECT_LAYER",f=function(t){return{type:p,layerId:t}},y="TIMELINE:SELECT_LAYER",d=function(t){return{type:y,layerId:t}},m="TIMELINE:ENABLE_OFFSET",v=function(t){return{type:m,enabled:t}},b="TIMELINE:AUTOSELECT",h=function(){return{type:b}},E="TIMELINE:SET_COLLAPSED",g=function(t){return{type:E,collapsed:t}},O="TIMELINE:SET_MAP_SYNC",T=function(t){return{type:O,mapSync:t}},A="TIMELINE:INIT_TIMELINE",S=function(t){return{type:A,showHiddenLayers:t}}},96361:(t,e,r)=>{"use strict";r.d(e,{i8:()=>m,ot:()=>v,Ci:()=>b,CX:()=>h});var n=r(66654),o=r.n(n),i=r(13880),a=r.n(i),c=r(89255),u=r(75875),s=r.n(u),l=r(10284);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){return Object.keys(t).reduce((function(e,r){return void 0!==t[r]&&null!==t[r]?f(f({},e),{},y({},r,t[r])):e}),{})},m=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.service,i=void 0===o?"WMTS":o,a=n.version,u=void 0===a?"1.0.0":a,p=n.tileMatrixSet,y=void 0===p?"EPSG:4326":p,m=n.bbox,v=n.domains,b=n.expandLimit;return c.Observable.defer((function(){return s().get(t,{params:d(f({service:i,REQUEST:"DescribeDomains",version:u,layer:e,tileMatrixSet:y,bbox:m,domains:v,expandLimit:b},r))})})).let(l.oB).switchMap((function(t){return(0,l.sw)(t.data)}))},v=function(t,e,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=i.service,u=void 0===a?"WMTS":a,p=i.version,y=void 0===p?"1.1.0":p,m=i.tileMatrixSet,v=void 0===m?"EPSG:4326":m,b=i.bbox;return c.Observable.defer((function(){return s().get(t,{params:d(f({service:u,REQUEST:"GetHistogram",resolution:o,histogram:r,version:y,layer:e,tileMatrixSet:v,bbox:b},n))})})).let(l.oB).switchMap((function(t){return(0,l.sw)(t.data)}))},b=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.time,i=n.fromValue,a=n.sort,u=void 0===a?"asc":a,p=n.limit,f=void 0===p?20:p,y=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},m=y.bbox,v=y.tileMatrixSet,b=void 0===v?"EPSG:4326":v,h=y.service,E=void 0===h?"WMTS":h,g=y.version,O=void 0===g?"1.0.0":g;return c.Observable.defer((function(){return s().get(t,{params:d({service:E,version:O,request:"GetDomainValues",tileMatrixSet:b,bbox:m,layer:e,domain:r,fromValue:i,sort:u,limit:f,time:o})})})).let(l.oB).switchMap((function(t){return(0,l.sw)(t.data)}))},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.url;return o()(e,"/wms")?a()(e,/\/wms$/,"/gwc/service/wmts"):o()(e,"/ows")?a()(e,/\/ows$/,"/gwc/service/wmts"):e}},52595:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=(0,r(61365).Z)(r(80681).Overlay)},65295:(t,e,r)=>{"use strict";r.d(e,{Z:()=>P});var n=r(67294),o=r.n(n),i=r(32475),a=r.n(i),c=r(14293),u=r.n(c),s=r(45697),l=r.n(s),p=r(5582),f=r.n(p),y=r(80681),d=r(15135),m=r(38560);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function E(t,e){return E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},E(t,e)}function g(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}function A(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var S=(0,d.Z)(y.Glyphicon),w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(s,t);var e,r,n,i,c=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(n);if(i){var r=T(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return g(this,t)});function s(){var t;b(this,s);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return A(O(t=c.call.apply(c,[this].concat(r))),"onUpdate",(function(e,r){var n=f()(t.props.date).utc(),o=r?f()(n).add(1,e):f()(n).subtract(1,e);o.isValid()&&!isNaN(o.toDate().getTime())&&t.props.onUpdate(o.toISOString())})),A(O(t),"onChange",(function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(""!==r){var o=f()(t.props.date).utc(),i=o["day"===e?"date":e]&&f()(o)["day"===e?"date":e](n(r));i.isValid()&&!isNaN(i.toDate().getTime())&&t.props.onUpdate(i.toISOString())}})),A(O(t),"getForm",(function(){var e=t.props.date&&f()(t.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:e&&e.date()},{name:"month",placeholder:"MM",readOnly:!0,value:e&&e.month(),format:function(t){return!u()(t)&&""!==t&&f().monthsShort(t)},parseValue:function(t){return t-1}},{name:"year",placeholder:"YYYY",value:e&&e.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:e&&e.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:e&&e.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:e&&e.seconds()},{name:"separator",value:e&&e.utcOffset(),type:"separator",format:function(t){return"UTC "+(t>=0?"+":"-")+a()(t/60,2,0)}}]})),t}return e=s,(r=[{key:"render",value:function(){var t=this,e=this.getForm();return o().createElement(y.Form,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(y.FormGroup,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return t.props.clickable&&t.props.onIconClick(t.props.date,t.props.glyph)}},o().createElement(S,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),e.map((function(e){return"icon"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},o().createElement(S,{glyph:e.value}))||"separator"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},e.format&&e.format(e.value)||e.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},t.props.showButtons&&o().createElement(m.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name,!0)}},o().createElement(S,{glyph:"chevron-up"})),o().createElement(y.FormControl,{type:"text",readOnly:e.readOnly,placeholder:e.placeholder||e.name,disabled:!t.props.date,value:e.format&&e.format(e.value)||e.value,onChange:function(r){return t.onChange(e.name,r.target.value,e.parseValue)}}),t.props.showButtons&&o().createElement(m.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name)}},o().createElement(S,{glyph:"chevron-down"})))}))))}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),s}(o().Component);A(w,"propTypes",{date:l().string,clickable:l().bool,onUpdate:l().func,onIconClick:l().func,glyph:l().string,style:l().object,className:l().string,tooltip:l().string,tooltipId:l().string,showButtons:l().bool}),A(w,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const P=w},89919:(t,e,r)=>{"use strict";r.d(e,{hP:()=>s});var n=r(84596),o=r.n(n),i=r(89255);function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,a(e))},s=function(t,e,r){return function(n){return(r?u(n,o()(t)).catch(r):u(n,o()(t))).concat(i.Observable.from(o()(e)))}}},37307:(t,e,r)=>{"use strict";r.d(e,{Z:()=>y});var n=r(57604),o=r(80416),i=r(82904),a=r(61868),c=r(5582),u=r.n(c),s=r(66604),l=r.n(s),p=r(35937),f=r.n(p);const y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.XV:return(0,a.t8)("data[".concat(e.dimension,"][").concat(e.layerId,"]"),e.data,t);case n.mE:return(0,a.t8)("currentTime",e.time,t);case n.at:return(0,a.t8)("offsetTime",e.offsetTime,t);case n.mD:if(t.offsetTime&&t.currentTime){var r=u()(t.offsetTime).diff(t.currentTime),c=u()(e.time).add(r);return(0,a.t8)("currentTime",e.time,(0,a.t8)("offsetTime",c.toISOString(),t))}return(0,a.t8)("currentTime",e.time,t);case o.sb:var s=l()(t.data,(function(t){return f()(t,(function(t,r){return r!==e.node}))}));return(0,a.t8)("data",s,t);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,t)));default:return t}}},76843:(t,e,r)=>{"use strict";r.d(e,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>u,E2:()=>s,Np:()=>l,KC:()=>p,Wq:()=>f,rp:()=>y,PF:()=>d});var n=r(22222),o=function(t){return t&&t.playback&&t.playback.settings},i=function(t){return(o(t)||{}).frameDuration||5},a=function(t){return t&&t.playback&&t.playback.status},c=function(t){return t&&t.playback&&t.playback.frames},u=function(t){var e=c(t)||[];return e[e.length-1]},s=function(t){return t&&t.playback&&t.playback.framesLoading},l=function(t){return t&&t.playback&&t.playback.currentFrame},p=function(t){return function(t){return t&&t.playback&&t.playback.playbackRange}(t)},f=function(t){return(c(t)||[])[l(t)]},y=function(t){return t&&t.playback&&t.playback.metadata},d=(0,n.P1)(c,l,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return{hasNext:t[e+1],hasPrevious:t[e-1]}}))},10284:(t,e,r)=>{"use strict";r.d(e,{sw:()=>v,oB:()=>b});var n=r(89255),o=r(27361),i=r.n(o),a=r(5055),c=r(7526);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){var e="function"==typeof Map?new Map:void 0;return l=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return p(t,arguments,d(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,t)},l(t)}function p(t,e,r){return p=f()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&y(o,r.prototype),o},p.apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}r(24384);var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(i,t);var e,r,n,o=(e=i,r=f(),function(){var t,n=d(e);if(r){var o=d(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return s(this,t)});function i(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,t)).name="OGCError",r.code=e,r}return n=i,Object.defineProperty(n,"prototype",{writable:!1}),n}(l(Error)),v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0};return n.Observable.bindNodeCallback((function(t,r){return(0,a.parseString)(t,e,r)}))(t)},b=function(t){return t.switchMap((function(t){return"string"==typeof t.data&&t.data.indexOf("ExceptionReport")>0?n.Observable.bindNodeCallback((function(t,e){return(0,a.parseString)(t,{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data).map((function(t){var e=i()(t,"ExceptionReport.Exception.ExceptionText");throw new m(e||"Undefined OGC Service Error",i()(t,"ExceptionReport.Exception.exceptionCode"))})):n.Observable.of(t)}))}},84715:(t,e,r)=>{"use strict";r.d(e,{y:()=>l,o:()=>p});var n=r(28368),o=r.n(n),i=r(13218),a=r.n(i),c=r(22222),u=function(t,e){return t===e},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return function(e,r){return Array.isArray(e)&&Array.isArray(r)?e===r||e.length===r.length&&e.reduce((function(e,n,o){return e&&t(n,r[o])}),!0):a()(e)&&a()(r)?e===r||Object.keys(e).length===Object.keys(r).length&&Object.keys(e).reduce((function(n,o){return n&&t(e[o],r[o])}),!0):e===r}},l=(0,c.wN)(c.PW,(function(t,e){return o()(t,e,s())})),p=function(t){return(0,c.wN)(c.PW,(function(e,r){return o()(e,r,s(t))}))}}}]);