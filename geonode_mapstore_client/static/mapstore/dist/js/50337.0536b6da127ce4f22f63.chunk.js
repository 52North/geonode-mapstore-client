(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[50337],{306504:(t,e,r)=>{"use strict";r.d(e,{Z:()=>d});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(null,arguments)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,b(n.key),n)}}function f(t,e,r){return e=p(e),function(t,e){if(e&&("object"==a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,s()?Reflect.construct(e,r||[],p(t).constructor):e.apply(t,r))}function s(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(s=function(){return!!t})()}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function m(t,e,r){return(e=b(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t){var e=function(t,e){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==a(e)?e:e+""}var d=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),m(r=f(this,e,[t]),"state",{inputText:""}),m(r,"validateValue",(function(t){return!r.props.formatRegex||new RegExp(r.props.formatRegex).test(t)})),r.state={inputText:t.value},r.inputRef=o().createRef(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(e,t),r=e,n=[{key:"componentDidMount",value:function(){var t,e;null===(t=(e=this.props).onTemporaryChanges)||void 0===t||t.call(e,!0)}},{key:"componentWillUnmount",value:function(){var t,e;null===(t=(e=this.props).onTemporaryChanges)||void 0===t||t.call(e,!1)}},{key:"getValue",value:function(){return m({},this.props.column.key,this.validateValue(this.state.inputText)?this.state.inputText:this.props.value)}},{key:"getInputNode",value:function(){return this.inputRef.current}},{key:"render",value:function(){var t=this;return o().createElement("input",l({},this.props.inputProps,{style:!this.state.validated||this.state.isValid?{}:{borderColor:"red"},value:this.state.inputText,ref:this.inputRef,className:"form-control",defaultValue:this.props.value,onChange:function(e){t.setState({inputText:e.target.value,isValid:t.validateValue(e.target.value),validated:!0})}}))}}],n&&c(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);m(d,"propTypes",{value:u().string,inputProps:u().object,dataType:u().string,column:u().object,formatRegex:u().string,onTemporaryChanges:u().func}),m(d,"defaultProps",{dataType:"string",column:{}})},750337:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>G});var n=r(124852),o=r.n(n),i=r(480681),u=r(867076),a=r(378889),l=r(753370),c=r.n(l),f=r(984596),s=r.n(f),p=r(264721),y=r.n(p),m=r(545578),b=r.n(m),d=r(441609),v=r.n(d),h=r(805346),g=r(993451),w=r(306504);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){P(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=O(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==O(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function E(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||T(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){if(t){if("string"==typeof t)return C(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(t,e):void 0}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var x=(0,g.Z)("columns","name")(c()),k=function(t){return o().createElement(w.Z,{dataType:"string",formatRegex:t})},R=[{name:"widgets.builder.wizard.attributeEditorColumns.name",key:"label",width:120},{name:"widgets.builder.wizard.attributeEditorColumns.title",key:"title",editor:k("^[-@.\\/#&+\\w\\s*]{0,100}$"),width:120,editable:function(t){return!(null!=t&&t.hide)}},{name:"widgets.builder.wizard.attributeEditorColumns.tooltip",key:"description",editor:k("^[-@.,\\/#&+\\w\\s*]{0,200}$"),width:150,editable:function(t){return!(null!=t&&t.hide)}}],N=r(285547),_=r(327605),D=r(142778),I=r(38560);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function Z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(r),!0).forEach((function(e){V(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function V(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=A(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==A(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var B=(0,u.compose)((0,u.withProps)((function(t){var e,r=t.options,n=void 0===r?{}:r;return{options:{propertyName:null===(e=(null==n?void 0:n.propertyName)||[])||void 0===e?void 0:e.map((function(t){return"string"==typeof t?{name:t}:t}))}}})),(0,u.withProps)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.attributes,r=void 0===e?[]:e,n=t.options,o=void 0===n?{}:n,i=t.layer,u=void 0===i?{}:i;return{attributes:r.filter((function(t){return!(0,a.isGeometryType)(t)})).map((function(t){var e,r,n,i=null==o||null===(e=o.propertyName)||void 0===e?void 0:e.map((function(t){return t.name})),a=null==o||null===(r=o.propertyName)||void 0===r?void 0:r.find((function(e){return e.name===t.name})),l=null===(n=u.fields)||void 0===n?void 0:n.find((function(e){return e.name===t.name}));return z(z({},t),{},{label:(0,N.s8)(null==l?void 0:l.alias,t.name),attribute:t.name,hide:(null==i?void 0:i.indexOf(t.name))<0,title:(null==a?void 0:a.title)||"",description:(null==a?void 0:a.description)||""})}))}})),(0,g.Z)("attributes","label","object"),(0,D.Z)((function(t){var e=t.attributes;return 0===(void 0===e?[]:e).length})))((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.style,r=void 0===e?{}:e,n=t.titleMsg,i=void 0===n?"featuregrid.columns":n,u=t.onChange,a=void 0===u?function(){}:u,l=t.attributes,c=void 0===l?[]:l,f=t.options,p=void 0===f?{}:f,m=function(t){return c[t]},d=function(t,e){a("options.propertyName",function(t,e,r){var n=s()(e);return r?t.filter((function(t){return!y()(n,t.name)})):b()([].concat(E(t),E(n.map((function(t){return{name:t}})))),"name")}(p&&p.propertyName||[],t,e))};return o().createElement("div",{className:"bg-body data-attribute-selector",style:r},o().createElement("h4",{className:"text-center"},o().createElement("strong",null,o().createElement(h.Z,{msgId:i}))),o().createElement(x,{rowKey:"id",columns:R,enableCellSelect:!0,rowGetter:m,rowsCount:c.length,onGridRowsUpdated:function(t){var e,r,n,o,i=t.fromRow,u=t.toRow,l=t.updated,c=(n=(e=i,r=u,Array.from({length:r+1-e},(function(t,r){return r+e}))).map((function(t){return m(t)})).filter((function(t){return Object.keys(l||{}).filter((function(e){return t[e]!==l[e]})).length>0})),o=1,function(t){if(Array.isArray(t))return t}(n)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(n,o)||T(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],f=(void 0===c?{}:c).name;!v()(f)&&a("options.propertyName",p.propertyName.map((function(t){return f===t.name?S(S({},t),l):t})))},rowSelection:{showCheckbox:!0,enableShiftSelect:!0,onRowsSelected:function(t){return d(t.map((function(t){return c[t.rowIdx].name})),!1)},onRowsDeselected:function(t){return d(t.map((function(t){return c[t.rowIdx].name})),!0)},selectBy:{indexes:c.reduce((function(t,e,r){return[].concat(E(t),E(e.hide?[]:[r]))}),[])}}}))}));const G=function(t){var e=t.data,r=void 0===e?{options:{}}:e,n=t.onChange,u=void 0===n?function(){}:n,a=t.featureTypeProperties,l=t.sampleChart,c=t.layer;return o().createElement(i.X2,null,o().createElement(_.Z,{title:o().createElement(h.Z,{msgId:"widgets.builder.wizard.configureTableOptions"})}),o().createElement(i.JX,{xs:12},o().createElement("div",null,l)),o().createElement(i.JX,{xs:12},o().createElement(i.l0,{className:"chart-options-form",horizontal:!0},o().createElement(B,{layer:c,options:r.options,onChange:u,attributes:a}),r.options&&r.options.columnSettings?o().createElement(I.Z,{style:{float:"right"},onClick:function(){return u("options.columnSettings",void 0)}},o().createElement(h.Z,{msgId:"widgets.builder.wizard.resetColumnsSizes"})):null)))}}}]);