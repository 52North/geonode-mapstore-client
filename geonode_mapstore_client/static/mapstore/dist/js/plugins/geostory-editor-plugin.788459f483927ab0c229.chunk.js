(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[57094],{615402:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var o=n(675263),r=n.n(o),i=n(667294),c=n.n(i);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=n(837101).FormattedHTMLMessage,y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(l,e);var t,n,o,r,i=(o=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(o);if(r){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function l(){return a(this,l),i.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){return this.context.intl?c().createElement(f,{id:this.props.msgId,values:this.props.msgParams}):c().createElement("span",null,this.props.msgId||"")}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(c().Component);p(y,"propTypes",{msgId:r().string.isRequired,msgParams:r().object}),p(y,"contextTypes",{intl:r().object});const g=y},532425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var o=n(675263),r=n.n(o),i=n(667294),c=n.n(i);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){return e>100?"full":e>40?"medium":"small"},d=function(e){var t=e.size,n=e.style,o=void 0===n?{}:n,r=e.className,i=e.hidden;return c().createElement("div",{className:r,style:a({width:t,height:t,overflow:"hidden"},o)},!i&&c().createElement("div",{className:"mapstore-".concat(u(t),"-size-loader")}))};d.propTypes={size:r().number,className:r().string,style:r().object};const m=d},876424:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(667294),r=n.n(o),i=n(513218),c=n.n(i),l=n(532425),a=["body","caption","infoExtra","className","description","fullText","onClick","onMouseEnter","onMouseLeave","preview","selected","size","style","stylePreview","styleTools","title","loading","dragSymbol","tools"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.body,n=e.caption,o=e.infoExtra,i=e.className,s=void 0===i?"":i,d=e.description,p=e.fullText,f=e.onClick,y=void 0===f?function(){}:f,g=e.onMouseEnter,b=void 0===g?function(){}:g,v=e.onMouseLeave,h=void 0===v?function(){}:v,E=e.preview,O=e.selected,S=e.size,w=e.style,P=void 0===w?{}:w,j=e.stylePreview,C=void 0===j?{}:j,T=e.styleTools,I=void 0===T?{}:T,k=e.title,N=e.loading,x=e.dragSymbol,Z=void 0===x?"+":x,D=e.tools,_=m(e,a);return r().createElement("div",{className:"mapstore-side-card".concat(O?" selected":"").concat(S?" ms-"+S:"").concat(s?" ".concat(s):"").concat(p?" full-text":""),onClick:function(e){return y(u({title:k,preview:E,description:d,caption:n,tools:D},_),e)},onMouseEnter:b,onMouseLeave:h,style:P},r().createElement("div",{className:"ms-head"},_.isDraggable&&_.connectDragSource&&_.connectDragSource(r().createElement("div",{className:"mapstore-side-card-tool text-center"},r().createElement("div",{style:{width:10,overflow:"hidden"}},Z))),E&&r().createElement("div",{className:"mapstore-side-preview",style:C},E),r().createElement("div",{className:"mapstore-side-card-container"},r().createElement("div",{className:"mapstore-side-card-inner"},r().createElement("div",{className:"mapstore-side-card-left-container"},r().createElement("div",{className:"mapstore-side-card-info"},k&&r().createElement("div",{className:"mapstore-side-card-title"},r().createElement("span",null,k)),d&&r().createElement("div",{className:"mapstore-side-card-desc"},c()(d)?d:r().createElement("span",null,d)),n&&r().createElement("div",{className:"mapstore-side-card-caption"},r().createElement("span",null,n))),o),r().createElement("div",{className:"mapstore-side-card-right-container"},r().createElement("div",{className:"mapstore-side-card-tool text-center",style:I},D),"sm"!==S&&r().createElement("div",{className:"mapstore-side-card-loading"},r().createElement(l.Z,{className:"mapstore-side-card-loader",size:12,hidden:!N})))))),t&&r().createElement("div",{className:"ms-body"},t))}},638064:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var o=n(675263),r=n.n(o),i=n(667294),c=n.n(i),l=n(757588),a=n(876424);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(s,e);var t,n,o,r,i=(o=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(o);if(r){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function s(){return d(this,s),i.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.cardComponent,n=e.items,o=e.colProps,r=e.onItemClick,i=e.size,s=t||a.Z;return c().createElement("div",{className:"msSideGrid"+(this.props.className?" "+this.props.className:"")},c().createElement(l.Row,{className:"items-list"},n.map((function(e,t){return c().createElement(l.Col,u({key:e.id||t},o),c().createElement(s,u({onClick:function(){return r(e)},size:i},e)))}))))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(c().Component);g(b,"propTypes",{size:r().string,onItemClick:r().func,colProps:r().object,items:r().array,cardComponent:r().oneOfType([r().string,r().func]),className:r().string}),g(b,"defaultProps",{size:"",onItemClick:function(){},colProps:{xs:12},className:"",items:[]});const v=b},775105:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ne});var o=n(667294),r=n.n(o),i=n(533664),c=n(22222),l=n(866113),a=n(166190),s=n(134990),u=n(675263),d=n.n(u),m=n(192579),p=n(805346),f=n(965539),y=n(80717),g=n(90085),b=n(312122),v=n(548403),h=n.n(v),E=n(313311),O=n.n(E),S=n(227361),w=n.n(S),P=n(757588),j=n(418093),C=n(455877),T=n.n(C),I=n(876424),k=n(638064),N=n(625311),x=n(245567),Z=n(561512),D=n.n(Z);const _=(0,j.compose)((0,j.withState)("text","setText",(function(e){return e.title})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.text,n=e.className,o=void 0===n?"ms-story-title-editable":n,i=e.onUpdate,c=void 0===i?function(){}:i,l=e.setText,a=void 0===l?function(){}:l;return r().createElement(D(),{className:o,html:t,onClick:function(e){e.stopPropagation()},onChange:function(e){a(e.target.value)},onBlur:function(e){c(e.target.innerText)}})}));function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},U.apply(this,arguments)}var R=(0,x.Z)(k.Z),F=(0,N.Z)((function(e){return r().createElement(I.Z,U({},e,{dragSymbol:r().createElement(P.Glyphicon,{glyph:"menu-hamburger"})}))})),z=function(e,t){return function(n){n.stopPropagation(),t(e)}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,n=e.src,o=e.thumbnail,i={text:"sheet",image:"picture",title:"story-title-section",banner:"story-banner-section",paragraph:"story-paragraph-section",immersive:"story-immersive-section",carousel:"story-carousel-section",media:"story-media-section",map:"1-map",columnleft:"align-left",columnright:"align-right",columncenter:"align-center",webPage:"story-webpage-section",video:"play"},c=o||"image"===t&&n;return c?r().createElement("img",{src:c}):r().createElement(P.Glyphicon,{glyph:i[t]||"picture"})},L=(0,j.compose)((0,i.connect)((0,c.P1)(l.jq,(function(e){return{resources:e}}))),(0,j.withProps)((function(e){var t=e.resources,n=e.resourceId;return(O()(t,{id:n})||{}).data})))(B),M={title:function(){return null},paragraph:function(e){var t=e.id,n=e.contents,o=e.isCollapsed,i=e.scrollTo,c=e.onSort,l=e.sectionId,a=e.onUpdate;return r().createElement("div",{style:{position:"relative"}},r().createElement(R,{containerId:t,isDraggable:!0,onSort:function(e,o,r,i){if(r.containerId===i.containerId){var l='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n[0].id,'"}].contents[{"id":"').concat(i.id,'"}]'),a='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n[0].id,'"}].contents'),s=e,u=T()();c(l,a,s,u,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n[0].id,'"}].contents[{"id":"').concat(u,'"}]'))}},cardComponent:F,items:n[0].contents.map((function(e){var s="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,u=M[e.type];return{id:e.id,preview:r().createElement(L,{type:s,resourceId:e.resourceId}),tools:r().createElement(y.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",tooltipId:"geostory.zoomToContent",onClick:z(e.id,i)}]}),title:r().createElement(_,{title:e.title||h()(e.type),onUpdate:function(t){return a('sections[{"id": "'.concat(l,'"}].contents[{"id": "').concat(n[0].id,'"}].contents[{"id": "').concat(e.id,'"}]'),{title:t},"merge")}}),description:"type: ".concat(e.type),body:u&&r().createElement(u,{id:t,onSort:c,scrollTo:i,isCollapsed:o,contents:e.contents})}}))}))},column:function(e){var t=e.sectionId,n=e.id,o=e.contents,i=e.isCollapsed,c=e.scrollTo,l=e.onSort,a=e.onUpdate,s=e.sectionType;return r().createElement("div",{style:{position:"relative"}},r().createElement(R,{containerId:n,isDraggable:!0,onSort:function(e,o,r,i){if(r.containerId===i.containerId){var c='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n,'"}].contents[{"id":"').concat(i.id,'"}]'),a='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n,'"}].contents'),s=e,u=T()();l(c,a,s,u,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n,'"}].contents[{"id":"').concat(u,'"}]'))}},cardComponent:F,items:o.map((function(e){var o="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,u=M[e.type];return{id:e.id,preview:r().createElement(L,{type:o,resourceId:e.resourceId}),tools:r().createElement(y.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",visible:s!==m.ID.CAROUSEL,tooltipId:"geostory.zoomToContent",onClick:z(e.id,c)}]}),title:r().createElement(_,{title:e.title||h()(e.type),onUpdate:function(o){return a('sections[{"id": "'.concat(t,'"}].contents[{"id": "').concat(n,'"}].contents[{"id": "').concat(e.id,'"}]'),{title:o},"merge")}}),description:"type: ".concat(e.type),body:!i&&u&&r().createElement(u,{id:n,onSort:l})}}))}))},immersive:function(e){var t=e.id,n=e.contents,o=e.isCollapsed,i=e.scrollTo,c=e.onUpdate,l=e.onSort,a=e.currentPage;return r().createElement("div",{style:{position:"relative"}},r().createElement(R,{containerId:t,isDraggable:!0,onSort:function(e,n,o,r){if(o.containerId===r.containerId){var i='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(r.id,'"}]'),c='sections[{ "id": "'.concat(t,'" }].contents'),a=e,s=T()();l(i,c,a,s,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(s,'"}]'))}},cardComponent:F,items:n.map((function(e){var n="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,s=M[e.type];return{className:a&&a.columns&&a.columns[t]&&a.columns[t]===e.id&&a.sectionId===t?"ms-highlight":"",id:e.id,preview:r().createElement(B,{type:n}),tools:r().createElement(y.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",tooltipId:"geostory.zoomToContent",onClick:z(e.id,i)}]}),title:r().createElement(_,{title:e.title||h()(e.type),onUpdate:function(n){return c('sections[{"id": "'.concat(t,'"}].contents[{"id":"').concat(e.id,'"}]'),{title:n},"merge")}}),description:"type: ".concat(e.type),body:s&&r().createElement(s,{id:e.id,sectionId:t,onSort:l,onUpdate:c,scrollTo:i,isCollapsed:o,contents:e.contents})}}))}))},carousel:function(e){var t=e.id,n=e.contents,o=e.isCollapsed,i=e.scrollTo,c=e.onUpdate,l=e.onSort,a=e.currentPage;return r().createElement("div",{style:{position:"relative"}},r().createElement(R,{containerId:t,isDraggable:!0,onSort:function(e,n,o,r){if(o.containerId===r.containerId){var i='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(r.id,'"}]'),c='sections[{ "id": "'.concat(t,'" }].contents'),a=e,s=T()();l(i,c,a,s,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(s,'"}]'))}},cardComponent:F,items:n.map((function(e){var n,s="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,u=M[e.type];return{className:a&&a.columns&&a.columns[t]&&a.columns[t]===e.id&&a.sectionId===t?"ms-highlight":"",id:e.id,preview:r().createElement(B,{type:s,thumbnail:null==e||null===(n=e.thumbnail)||void 0===n?void 0:n.image}),tools:null,title:r().createElement(_,{key:e.title,title:e.title||h()(e.type),onUpdate:function(n){return c('sections[{"id": "'.concat(t,'"}].contents[{"id":"').concat(e.id,'"}]'),{title:n},"merge")}}),description:"type: ".concat(e.type),body:u&&r().createElement(u,{id:e.id,sectionId:t,onSort:l,onUpdate:c,scrollTo:i,isCollapsed:o,sectionType:m.ID.CAROUSEL,contents:e.contents})}}))}))}},A=function(e){var t=e.scrollTo,n=e.isCollapsed,o=void 0!==n&&n,i=e.currentPage,c=e.onSort,l=e.onSelect,a=e.onUpdate,s=e.selected,u=void 0===s?"title_section_id1":s;return function(e){var n=e.contents,s=e.type,d=e.title,m=e.id,p=M[s];return{id:m,preview:r().createElement(L,{type:s,resourceId:w()(n[0],"background.resourceId")}),className:i&&i.sectionId===m?"ms-highlight":"",onClick:function(){return l(m)},selected:m===u,tools:r().createElement(y.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{onClick:z(m,t),glyph:"zoom-to",tooltipId:"geostory.zoomToContent"}]}),title:r().createElement(_,{title:d,onUpdate:function(e){return a('sections[{"id": "'.concat(m,'"}]'),{title:e},"merge")}}),description:"type: ".concat(s),body:o?null:p&&r().createElement(p,{id:m,sectionId:m,onSort:c,onUpdate:a,onSelect:l,currentPage:i,selected:u,scrollTo:t,isCollapsed:o,contents:n})}}};const G=function(e){var t=e.sections,n=void 0===t?[]:t,o=e.scrollTo,i=e.onSelect,c=void 0===i?function(){}:i,l=e.isCollapsed,a=e.currentPage,s=e.selected,u=e.onSort,d=e.onUpdate;return r().createElement(R,{isDraggable:!0,onSort:function(e,t,n,o){if("story-sections"===n.containerId&&"story-sections"===o.containerId){var r=T()(),i='sections[{ "id": "'.concat(o.id,'" }]');u(i,"sections",e,r,'sections[{ "id": "'.concat(r,'" }]'))}},containerId:"story-sections",cardComponent:F,size:"sm",items:n.map(A({currentPage:a,onSelect:c,isCollapsed:l,scrollTo:o,selected:s,onUpdate:d,onSort:u}))})};var q=n(145869),K=n(314068),V=n(228388),W=n.n(V),Y=(n(750288),n(993451)),H=n(911766),Q=n(743129);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var ne=(0,Y.Z)("placeholder")(P.FormControl),oe=[{value:"14px",label:"14px"},{value:"16px",label:"16px"},{value:"18px",label:"18px"},{value:"24px",label:"24px"},{value:"28px",label:"28px"}];const re=function(e){var t,n,i,c,l,a,s,u,d=e.items,f=void 0===d?[]:d,y=e.settings,g=e.storyFonts,b=e.onToggleSettings,v=void 0===b?function(){}:b,h=e.onUpdateSettings,E=void 0===h?function(){}:h,O=ee((0,o.useState)(y.storyTitle),2),S=O[0],w=O[1],j=ee((0,o.useState)(y.expanded||[]),2),C=j[0],T=j[1],I=g.length>0?g:m.Km;return r().createElement(P.Form,{className:"ms-geostory-settings"},r().createElement("div",null,r().createElement("h4",null,r().createElement(p.Z,{msgId:"geostory.builder.settings.storyTheme"})),r().createElement("hr",null)),r().createElement(P.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(P.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.theme"}))),r().createElement(H.Z,{themeStyle:null==y||null===(t=y.theme)||void 0===t?void 0:t.general,placement:"right",disableBackgroundAlpha:!0,disableShadow:!0,onChange:function(e){return E("theme",$($({},null==y?void 0:y.theme),{},{general:e}))}})),r().createElement(P.FormGroup,null,r().createElement("div",{className:"ms-font-select"},r().createElement("div",null,r().createElement(p.Z,{msgId:"geostory.builder.settings.fontFamily"})),r().createElement("div",null,r().createElement(Q.ZP,{value:null==y||null===(n=y.theme)||void 0===n||null===(i=n.general)||void 0===i?void 0:i.fontFamily,onChange:function(e){var t;return E("theme",$($({},null==y?void 0:y.theme),{},{general:$($({},null==y||null===(t=y.theme)||void 0===t?void 0:t.general),{},{fontFamily:e.value})}))},options:(u=I,u.map((function(e){return{label:e,value:e}})))})))),r().createElement(P.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(P.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.overlay"}))),r().createElement(H.Z,{themeStyle:null==y||null===(c=y.theme)||void 0===c?void 0:c.overlay,placement:"right",onChange:function(e){return E("theme",$($({},null==y?void 0:y.theme),{},{overlay:e}))}})),r().createElement(P.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(P.ControlLabel,null,r().createElement(p.Z,{msgId:"Links"}))),r().createElement(H.Z,{disableBackgroundPicker:!0,disableShadow:!0,themeStyle:null==y||null===(l=y.theme)||void 0===l?void 0:l.link,placement:"right",onChange:function(e){return E("theme",$($({},null==y?void 0:y.theme),{},{link:e}))}})),r().createElement("div",null,r().createElement("h4",null,r().createElement(p.Z,{msgId:"geostory.builder.settings.storyHeader"})),r().createElement("hr",null)),r().createElement(P.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(P.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.title"})),r().createElement(q.Z,{onChange:function(){return v("isTitleEnabled")},className:"ms-geostory-settings-switch",checked:y.isTitleEnabled})),r().createElement(ne,{disabled:!y.isTitleEnabled,value:S,onChange:function(e){return w(e.target.value)},onBlur:function(e){return E("storyTitle",e.target.value)},placeholder:"geostory.builder.settings.titlePlaceholder",style:{marginTop:"10px"}})),r().createElement(P.FormGroup,null,r().createElement("div",{className:"ms-font-select"},r().createElement("div",null,r().createElement(p.Z,{msgId:"geostory.builder.settings.fontSize"})),r().createElement("div",null,r().createElement(Q.ZP,{disabled:!y.isTitleEnabled,value:y.storyTitleFontSize,onChange:function(e){return E("storyTitleFontSize",e.value)},options:oe,clearable:!1})))),r().createElement(P.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(P.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.logo"})),r().createElement(q.Z,{onChange:function(){return v("isLogoEnabled")},className:"ms-geostory-settings-switch",checked:y.isLogoEnabled})),y.isLogoEnabled&&r().createElement(r().Fragment,null,r().createElement(K.Z,{thumbnail:(null==y||null===(a=y.thumbnail)||void 0===a?void 0:a.data)||(null==y||null===(s=y.thumbnail)||void 0===s?void 0:s.url),onUpdate:function(e,t){var n;E("thumbnail",{data:e,url:null==t||null===(n=t[0])||void 0===n?void 0:n.preview}),E("thumbnailErrors",void 0)},onRemove:function(){E("thumbnail",void 0),E("thumbnailErrors",void 0)},onError:function(e){return E("thumbnailErrors",e)},message:r().createElement(p.Z,{msgId:"geostory.builder.settings.logoPlaceholder"}),thumbnailOptions:{width:300,height:150,type:"image/png",contain:!0}}),y.thumbnailErrors&&y.thumbnailErrors.length>0&&r().createElement(P.Alert,{bsStyle:"danger",className:"text-center"},r().createElement("div",null,r().createElement(p.Z,{msgId:"map.error"})),-1!==y.thumbnailErrors.indexOf("FORMAT")&&r().createElement("div",null,r().createElement(p.Z,{msgId:"map.errorFormat"})),-1!==y.thumbnailErrors.indexOf("SIZE")&&r().createElement("div",null,r().createElement(p.Z,{msgId:"map.errorSize"}))))),r().createElement(P.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(P.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.navbar"})),r().createElement(q.Z,{onChange:function(){return v("isNavbarEnabled")},className:"ms-geostory-settings-switch",checked:y.isNavbarEnabled})),y.isNavbarEnabled&&r().createElement(W(),{showNodeIcon:!1,nativeCheckboxes:!0,nodes:f,checked:y.checked||[],expanded:C,onCheck:function(e){return E("checked",e)},onExpand:function(e){return T(e)}})))};function ie(e){return ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(e)}function ce(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function le(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ae(e,t){return ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ae(e,t)}function se(e,t){if(t&&("object"===ie(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ue(e){return ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ue(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var me=(0,b.Z)(g.Z),pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ae(e,t)}(l,e);var t,n,o,i,c=(o=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ue(o);if(i){var n=ue(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return se(this,e)});function l(){return ce(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.story,n=e.settings,o=e.scrollTo,i=e.setEditing,c=e.mode,l=e.isCollapsed,a=e.isToolbarEnabled,s=e.isSettingsEnabled,u=e.isSettingsChanged,d=e.settingsItems,b=e.onToggleCardPreview,v=e.onToggleSettingsPanel,h=e.onToggleSettings,E=e.onUpdateSettings,O=e.currentPage,S=e.selected,w=e.onRemove,P=e.onSort,j=e.onUpdate,C=e.onSelect,T=e.storyFonts,I=u?me:g.Z;return r().createElement(f.Z,{className:"ms-geostory-builder",header:r().createElement("div",{className:"text-center ms-geostory-builder-header"},r().createElement(y.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},transitionProps:!1,buttons:[{visible:!s,Element:function(){return r().createElement(me,{glyph:"trash",bsStyle:"primary",className:"square-button-md no-border",tooltipId:"geostory.builder.delete",confirmTitle:r().createElement(p.Z,{msgId:"geostory.contentToolbar.removeConfirmTitle"}),disabled:!a||!S,confirmContent:r().createElement(p.Z,{msgId:"geostory.contentToolbar.removeConfirmContent"}),onClick:function(){w(S&&'sections[{ "id": "'.concat(S,'" }]')||"")}})}},{tooltipId:"geostory.builder.preview",glyph:"preview",visible:!s,disabled:!a,onClick:function(){return i(c===m.nl.VIEW)}},{tooltipId:"geostory.builder.settings.tooltip",glyph:"cog",id:"geostory-builder-settings-button",visible:!s,onClick:function(){return v()}},{tooltipId:"geostory.builder.".concat(l?"expandAll":"collapseAll"),glyph:l?"chevron-left":"chevron-down",bsStyle:"primary",disabled:!a,visible:!s,onClick:function(){return b()}},{visible:s,Element:function(){return r().createElement(I,{bsStyle:"primary",glyph:"arrow-left",className:"square-button-md no-border",tooltipId:"geostory.builder.settings.back",confirmTitle:r().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmTitle"}),confirmContent:r().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmBody"}),confirmNo:r().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmNo"}),confirmYes:r().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmYes"}),onClick:function(){v()}})}},{tooltipId:"geostory.builder.settings.save",glyph:"floppy-disk",visible:s,onClick:function(){return v(!0)}}]}))},s&&r().createElement(re,{items:d,settings:n,onToggleSettings:h,onUpdateSettings:E,storyFonts:T}),a&&!s?r().createElement(G,{currentPage:O,scrollTo:o,onSelect:C,selected:S,onUpdate:j,isCollapsed:l,sections:t&&t.sections,onSort:P}):s?null:r().createElement("div",{className:"ms-story-empty-content-parent"},r().createElement("div",{className:"ms-story-empty-content-child"},r().createElement(p.Z,{msgId:"geostory.builder.noContents"}))))}}])&&le(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(r().Component);de(pe,"propTypes",{currentPage:d().object,settingsItems:d().array,story:d().object,settings:d().object,mode:d().oneOf(m.lg.Modes),onToggleCardPreview:d().func,onToggleSettingsPanel:d().func,onToggleSettings:d().func,onUpdateSettings:d().func,isCollapsed:d().bool,isToolbarEnabled:d().bool,isSettingsEnabled:d().bool,isSettingsChanged:d().bool,scrollTo:d().func,setEditing:d().func,onSort:d().func,onSelect:d().func,onRemove:d().func,onUpdate:d().func,selected:d().string,storyFonts:d().array}),de(pe,"defaultProps",{mode:m.nl.VIEW,setEditing:function(){},onToggleCardPreview:function(){},onToggleSettingsPanel:function(){},story:{},settings:{},isCollapsed:!0,isToolbarEnabled:!0,isSettingsEnabled:!1,onSort:function(){}});const fe=pe;var ye=n(531398),ge=n(322843),be=n(815135),ve=n(805803),he=n(608575),Ee=n(395659),Oe=n.n(Ee),Se=(n(313880),["hash"]);function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){je(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ce(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Te=n(282467),Ie=(0,be.Z)(Te.Z),ke=(0,i.connect)((0,c.zB)({isEditAllowed:l.pu}),{setEditingMode:s.D_})((function(e){var t=e.isEditAllowed,n=e.setEditingMode,o=void 0===n?function(){}:n,i=e.location,c=e.history;return t?r().createElement(Ie,{id:"edit-story",className:"square-button-md no-border",onClick:function(){o(!0);var e=i.pathname;if(e.includes("/geostory/shared")){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=he.parse(e),n=t.hash,o=void 0===n?"":n,r=Ce(t,Se),i=he.parse(o&&Oe()(o,"#")||""),c=he.format(Pe(Pe({},i),{},{query:null,search:null}));return he.format(Pe(Pe({},r),{},{query:null,search:null,hash:c?"#".concat(c):null}))}(e.replace("/geostory/shared","/geostory"));c.push(t)}},tooltipId:"geostory.navigation.edit",tooltipPosition:"bottom"},r().createElement(P.Glyphicon,{glyph:"pencil"})):null}));const Ne=(0,ge.rx)("GeoStoryEditor",{component:(0,i.connect)((0,c.zB)({isCollapsed:l.eg,mode:l.eK,story:l.Kg,currentPage:l.PR,settingsItems:l.yL,settings:l.TQ,isSettingsChanged:l.KR,isToolbarEnabled:l.Lu,selected:l.sY,isSettingsEnabled:l.W5,isFocused:l.z7,storyFonts:l.mm}),{setEditingMode:s.D_,onUpdateSettings:s.m7,onToggleCardPreview:s.kB,onToggleSettingsPanel:s.G5,onToggleSettings:s.Xn,onRemove:s.Od,onSelect:s._e,onSort:s.pB,onUpdate:s.Vx,onBasicError:ye.d})((function(e){var t=e.currentPage,n=e.isCollapsed,o=e.isSettingsChanged,i=void 0!==o&&o,c=e.isSettingsEnabled,l=e.isToolbarEnabled,a=e.isFocused,s=void 0!==a&&a,u=e.mode,d=void 0===u?m.nl.VIEW:u,p=e.story,f=void 0===p?{}:p,y=e.settings,g=void 0===y?{}:y,b=e.settingsItems,v=e.selected,h=e.storyFonts,E=void 0===h?[]:h,O=e.setEditingMode,S=void 0===O?function(){}:O,w=e.onToggleCardPreview,P=void 0===w?function(){}:w,j=e.onToggleSettingsPanel,C=void 0===j?function(){}:j,T=e.onToggleSettings,I=void 0===T?function(){}:T,k=e.onUpdateSettings,N=void 0===k?function(){}:k,x=e.onSelect,Z=void 0===x?function(){}:x,D=e.onRemove,_=void 0===D?function(){}:D,U=e.onUpdate,R=void 0===U?function(){}:U,F=e.onSort,z=void 0===F?function(){}:F;return d!==m.nl.EDIT||s?null:r().createElement("div",{key:"left-column",className:"ms-geostory-editor",style:{order:-1,width:400,position:"relative"}},r().createElement(fe,{currentPage:t,isCollapsed:n,isSettingsChanged:i,isSettingsEnabled:c,isToolbarEnabled:l,mode:d,scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{behavior:"smooth"};(0,m.M1)(e,t)},selected:v,settings:g,settingsItems:b,story:f,storyFonts:(0,m._R)(E),setEditing:S,onRemove:_,onSelect:Z,onSort:z,onToggleCardPreview:P,onToggleSettings:I,onToggleSettingsPanel:C,onUpdate:R,onUpdateSettings:N}))})),containers:{GeoStoryNavigation:{tool:(0,ve.EN)(ke)}},reducers:{geostory:a.Z}})}}]);