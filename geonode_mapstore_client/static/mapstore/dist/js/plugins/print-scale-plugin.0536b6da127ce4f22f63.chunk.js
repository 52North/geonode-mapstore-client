(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[77272],{496829:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(675263),o=r.n(n),i=r(124852),c=r.n(i),l=r(480681);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function f(e,t,r){return t=s(t),function(e,t){if(t&&("object"==a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function y(e,t,r){return(t=m(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}var d=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return y(e=f(this,t,[].concat(n)),"onChange",(function(){e.props.onChange(!e.refs.input.props.checked)})),y(e,"isEnabled",(function(){return e.props.isEnabled?e.props.isEnabled(e.props.layouts):0===e.props.layouts.length||e.props.layouts.some((function(t){return t.name.match(e.props.enableRegex)}))})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return c().createElement(l.XZ,{disabled:!this.isEnabled(),ref:"input",checked:this.props.checked,onChange:this.onChange},this.props.label)}}])&&u(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(c().Component);y(d,"propTypes",{layouts:o().array,enableRegex:o().oneOfType([o().object,o().string]),label:o().string,onChange:o().func,checked:o().bool,isEnabled:o().func}),y(d,"defaultProps",{layouts:[],enableRegex:/^.*$/,label:"Option",onChange:function(){},checked:!1});const v=d},832395:(e,t,r)=>{"use strict";r.d(t,{W:()=>m});var n=r(124852),o=r.n(n),i=r(675263),c=r.n(i),l=r(322843),a=r(86638),u=r(496829),f=r(227361),p=r.n(f);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e,t){var r=e.spec,i=e.property,c=e.label,f=e.onChangeParameter,s=e.enabled,m=void 0===s||s,d=e.actions,v=e.path,O=void 0===v?"params.":v,g=e.additionalProperty,h=void 0===g||g,P=O+i;return(0,n.useEffect)((function(){var e;h&&(null==d||d.addParameter(i,null!==(e=p()(r,P))&&void 0!==e&&e))}),[]),(0,l.CU)({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),"{"+m+"}")?o().createElement(u.Z,{checked:!!p()(r,P),label:(0,a.S$)(t.messages,c),onChange:function(e){return f(P,e)}}):null};m.contextTypes={messages:c().object}},1842:(e,t,r)=>{"use strict";r.r(t),r.d(t,{defaultFormat:()=>g,Scale:()=>P,default:()=>j});var n=r(124852),o=r.n(n),i=r(832395),c=r(322843),l=r(171703),a=r(986069),u=r(805346),f=r(699573),p=r(720289),s=r(145959),b=["map","scale","locale","label","optionLabel","actions","onAddParameter"];function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(null,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=y(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US",r=new Intl.NumberFormat(t,{maximumFractionDigits:0}).format(e);return"1:".concat(r)}var h=function(e){var t,r,n,o,i,c;return{spec:null!==(t=null==e||null===(r=e.print)||void 0===r?void 0:r.spec)&&void 0!==t?t:{},scale:null==e||null===(n=e.print)||void 0===n||null===(o=n.map)||void 0===o?void 0:o.scale,locale:null!==(i=null==e||null===(c=e.locale)||void 0===c?void 0:c.current)&&void 0!==i?i:"en-US"}},P=function(e){var t,r=e.map,c=e.scale,l=e.locale,a=e.label,p=void 0===a?"print.scale":a,s=e.optionLabel,y=void 0===s?"print.includeScale":s,d=(e.actions,e.onAddParameter),O=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,b),P=e.format||g;return(0,n.useEffect)((function(){var e;(0,f.addTransformer)("scale",(e=P,function(t,r){var n,o,i=null==r||null===(n=r.pages)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.scale,c=h(t).locale;return Promise.resolve(v(v({},r),{},{mapScale:null!=r&&r.includeScale?"".concat(e(i,c,!0)):""}))}),4)}),[]),o().createElement("div",{id:"print-scale"},o().createElement("div",{style:{float:"left",marginRight:5}},o().createElement(u.Z,{msgId:p})," ",P(null!==(t=null==r?void 0:r.scale)&&void 0!==t?t:c,l)),o().createElement(i.W,m({},O,{actions:{addParameter:d},property:"includeScale",label:y})))};const j=(0,c.rx)("PrintScale",{component:(0,l.connect)(h,{onChangeParameter:a.d$,onAddParameter:a.eT})(P),reducers:{locale:p.Z,print:s.Z},containers:{Print:{priority:1,target:"left-panel",position:3}}})}}]);