(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[17489],{868004:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>S});var r=t(124852),o=t.n(r),a=t(675263),i=t.n(a),c=t(893379),s=t.n(c),l=t(699410);s()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var u=t(658252),p=t(322843);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,w(r.key),r)}}function m(e,n,t){return n=b(n),function(e,n){if(n&&("object"===f(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(e,v()?Reflect.construct(n,t||[],b(e).constructor):n.apply(e,t))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,n){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},y(e,n)}function g(e,n,t){return(n=w(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){var n=function(e,n){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(n)?n:String(n)}var x=function(e){function n(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return g(h(e=m(this,n,[].concat(r))),"getPanels",(function(){return e.props.items.filter((function(e){return e.tools})).reduce((function(e,n){return e.concat(n.tools.map((function(e,t){var r,o;return{name:n.name+t,panel:e,cfg:(null==n||null===(r=n.cfg)||void 0===r||null===(o=r.toolsCfg)||void 0===o?void 0:o[t])||{}}})))}),[])})),g(h(e),"getTools",(function(){return e.props.items.sort((function(e,n){return e.position-n.position}))})),e}var t,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&y(e,n)}(n,e),t=n,(r=[{key:"render",value:function(){return o().createElement(u.Z,{id:this.props.id,style:this.props.style,containerWrapperStyle:this.props.containerWrapperStyle,className:this.props.className,mapType:this.props.mapType,container:function(e){return o().createElement("div",e,e.children)},toolStyle:"primary",activeStyle:"default",stateSelector:"omnibar",tool:function(e){return o().createElement("div",null,e.children)},tools:this.getTools(),panels:this.getPanels()})}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),n}(o().Component);g(x,"propTypes",{className:i().string,style:i().object,containerWrapperStyle:i().object,items:i().array,id:i().string,mapType:i().string}),g(x,"defaultProps",{items:[],className:"navbar-dx shadow",style:{},containerWrapperStyle:{},id:"mapstore-navbar",mapType:"leaflet"});const S=(0,p.rx)("OmniBar",{component:x,options:{disablePluginIf:"{state('featuregridmode') === 'EDIT' || (state('router') && state('router').includes('/geostory/shared') && state('geostorymode') !== 'edit')}"}})},699410:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r=t(923645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"/*viewer navbar */\n.msgapi .navbar-dx {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n.msgapi .navbar-dx>ul {\n    padding: 0;\n}\n\n.msgapi .navbar-dx>ul>li {\n    float: left;\n    list-style: none;\n}\n\n.msgapi .navbar-dx .search-wrap .MapSearchBar {\n    right: 0;\n    top: 0;\n    left: 0;\n}\n\n.msgapi .navbar-dx .search-wrap .form-control,\n.msgapi .navbar-dx .search-wrap .form-control:focus {\n    border-right: 0;\n    box-shadow: none;\n}\n\n.msgapi .navbar-dx .search-wrap .MapSearchBar .input-group-addon {\n    border: 0;\n}\n\n.msgapi .navbar-dx .search-result-list {\n    left: 0;\n    max-height: none;\n}\n\n.msgapi .navbar-dx .dropdown-menu {\n    margin: 0;\n    padding-top: 0;\n}\n\n@media (min-width: 1200px) {\n    .msgapi .navbar-dx .search-wrap {\n        width: 500px;\n        height: 50px;\n    }\n}\n\n.msgapi .navbar-dx>* {\n    display: inline-block;\n}\n\n/* Page Navbar */\n.msgapi .navbar-home .dropdown {\n    float: right;\n}\n\n.msgapi .navbar-home .navbar-header {\n    margin-top: 7px;\n    margin-left: 10px;\n    margin-right: 10px;\n    display: inline-block;\n}\n",""]);const a=o},923645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},893379:(e,n,t)=>{"use strict";var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var p=i(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:u,updater:v(f,n),references:1}),r.push(u)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,m=0;function v(e,n){var t,r,o;if(n.singleton){var a=m++;t=d||(d=s(n)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=s(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var s=c(e,n),l=0;l<t.length;l++){var u=i(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=s}}}}}]);