(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7272],{96829:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(45697),o=r.n(n),i=r(24852),c=r.n(i),l=r(80681);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function b(e,t,r){return(t=y(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(y,e);var t,r,n,o,i=(n=y,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(n);if(o){var r=s(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function y(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(p(e=i.call.apply(i,[this].concat(r))),"onChange",(function(){e.props.onChange(!e.refs.input.props.checked)})),b(p(e),"isEnabled",(function(){return e.props.isEnabled?e.props.isEnabled(e.props.layouts):0===e.props.layouts.length||e.props.layouts.some((function(t){return t.name.match(e.props.enableRegex)}))})),e}return t=y,(r=[{key:"render",value:function(){return c().createElement(l.Checkbox,{disabled:!this.isEnabled(),ref:"input",checked:this.props.checked,onChange:this.onChange},this.props.label)}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),y}(c().Component);b(m,"propTypes",{layouts:o().array,enableRegex:o().oneOfType([o().object,o().string]),label:o().string,onChange:o().func,checked:o().bool,isEnabled:o().func}),b(m,"defaultProps",{layouts:[],enableRegex:/^.*$/,label:"Option",onChange:function(){},checked:!1});const d=m},32395:(e,t,r)=>{"use strict";r.d(t,{W:()=>m});var n=r(24852),o=r.n(n),i=r(45697),c=r.n(i),l=r(22843),a=r(86638),u=r(96829),f=r(27361),p=r.n(f);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e,t){var r=e.spec,i=e.property,c=e.label,f=e.onChangeParameter,s=e.enabled,m=void 0===s||s,d=e.actions,v=e.path,g=void 0===v?"params.":v,O=e.additionalProperty,h=void 0===O||O,P=g+i;return(0,n.useEffect)((function(){var e;h&&(null==d||d.addParameter(i,null!==(e=p()(r,P))&&void 0!==e&&e))}),[]),(0,l.CU)({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),"{"+m+"}")?o().createElement(u.Z,{checked:!!p()(r,P),label:(0,a.S$)(t.messages,c),onChange:function(e){return f(P,e)}}):null};m.contextTypes={messages:c().object}},1842:(e,t,r)=>{"use strict";r.r(t),r.d(t,{defaultFormat:()=>O,Scale:()=>P,default:()=>j});var n=r(24852),o=r.n(n),i=r(32395),c=r(22843),l=r(71703),a=r(86069),u=r(5346),f=r(34049),p=r(20289),s=r(45959),b=["map","scale","locale","label","optionLabel","actions","onAddParameter"];function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===y(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",r=new Intl.NumberFormat(t,{maximumFractionDigits:0}).format(e);return"1:".concat(r)}var h=function(e){var t,r,n,o,i,c;return{spec:null!==(t=null==e||null===(r=e.print)||void 0===r?void 0:r.spec)&&void 0!==t?t:{},scale:null==e||null===(n=e.print)||void 0===n||null===(o=n.map)||void 0===o?void 0:o.scale,locale:null!==(i=null==e||null===(c=e.locale)||void 0===c?void 0:c.current)&&void 0!==i?i:"en-US"}},P=function(e){var t,r=e.map,c=e.scale,l=e.locale,a=e.label,p=void 0===a?"print.scale":a,s=e.optionLabel,y=void 0===s?"print.includeScale":s,d=(e.actions,e.onAddParameter),g=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,b),P=e.format||O;return(0,n.useEffect)((function(){var e;(0,f.addTransformer)("scale",(e=P,function(t,r){var n,o,i=null==r||null===(n=r.pages)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.scale,c=h(t).locale;return Promise.resolve(v(v({},r),{},{mapScale:null!=r&&r.includeScale?"".concat(e(i,c,!0)):""}))}),4)}),[]),o().createElement("div",{id:"print-scale"},o().createElement("div",{style:{float:"left",marginRight:5}},o().createElement(u.Z,{msgId:p})," ",P(null!==(t=null==r?void 0:r.scale)&&void 0!==t?t:c,l)),o().createElement(i.W,m({},g,{actions:{addParameter:d},property:"includeScale",label:y})))};const j=(0,c.rx)("PrintScale",{component:(0,l.connect)(h,{onChangeParameter:a.d$,onAddParameter:a.eT})(P),reducers:{locale:p.Z,print:s.Z},containers:{Print:{priority:1,target:"left-panel",position:3}}})},8316:(e,t,r)=>{"use strict";r.d(t,{Pz:()=>c,Ps:()=>l,KV:()=>a});var n=r(22222),o=r(91175),i=r.n(o),c=function(e){return e.locale&&e.locale.current||"en-US"},l=function(e){return e.locale&&e.locale.messages||{}},a=(0,n.P1)([c],(function(e){return i()(e.split("-"))}))},31351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}}}]);