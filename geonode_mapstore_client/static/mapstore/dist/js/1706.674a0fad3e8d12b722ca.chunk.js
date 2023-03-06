(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1706],{86010:(e,t,r)=>{"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.r(t),r.d(t,{clsx:()=>o,default:()=>a});const a=o},22827:(e,t,r)=>{"use strict";t.__esModule=!0,t.default=void 0;var n,o=(n=r(24852))&&n.__esModule?n:{default:n},a=r(26422),i=r(59069),s=r(448);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return p(f(t=e.call.apply(e,[this].concat(n))||this),"state",void 0),p(f(t),"lastHandleRect",null),p(f(t),"slack",null),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var s=n.prototype;return s.componentWillUnmount=function(){this.resetData()},s.lockAspectRatio=function(e,t,r){return[e=(t=e/r)*r,t]},s.resetData=function(){this.lastHandleRect=this.slack=null},s.runConstraints=function(e,t){var r=[this.props.minConstraints,this.props.maxConstraints],n=r[0],o=r[1];if(!n&&!o)return[e,t];if(this.props.lockAspectRatio)if(t===this.props.height){var a=this.props.width/this.props.height;e=(t=e/a)*a}else{var i=this.props.height/this.props.width;t=(e=t/i)*i}var s=e,l=t,u=this.slack||[0,0],c=u[0],f=u[1];return e+=c,t+=f,n&&(e=Math.max(n[0],e),t=Math.max(n[1],t)),o&&(e=Math.min(o[0],e),t=Math.min(o[1],t)),this.slack=[c+(s-e),f+(l-t)],[e,t]},s.resizeHandler=function(e,t){var r=this;return function(n,o){var a=o.node,i=o.deltaX,s=o.deltaY;"onResizeStart"===e&&r.resetData();var l=("both"===r.props.axis||"x"===r.props.axis)&&"n"!==t&&"s"!==t,u=("both"===r.props.axis||"y"===r.props.axis)&&"e"!==t&&"w"!==t;if(l||u){var c=t[0],f=t[t.length-1],p=a.getBoundingClientRect();null!=r.lastHandleRect&&("w"===f&&(i+=p.left-r.lastHandleRect.left),"n"===c&&(s+=p.top-r.lastHandleRect.top)),r.lastHandleRect=p,"w"===f&&(i=-i),"n"===c&&(s=-s);var d=r.props.width+(l?i/r.props.transformScale:0),h=r.props.height+(u?s/r.props.transformScale:0),y=r.runConstraints(d,h);d=y[0],h=y[1];var g=d!==r.props.width||h!==r.props.height,b="function"==typeof r.props[e]?r.props[e]:null;b&&!("onResize"===e&&!g)&&("function"==typeof n.persist&&n.persist(),b(n,{node:a,size:{width:d,height:h},handle:t})),"onResizeStop"===e&&r.resetData()}}},s.renderResizeHandle=function(e){var t=this.props.handle;return t?"function"==typeof t?t(e):t:o.default.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+e})},s.render=function(){var e=this,t=this.props,r=t.children,n=t.className,s=t.draggableOpts,u=(t.width,t.height,t.handle,t.handleSize,t.lockAspectRatio,t.axis,t.minConstraints,t.maxConstraints,t.onResize,t.onResizeStop,t.onResizeStart,t.resizeHandles),f=(t.transformScale,function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"]));return(0,i.cloneElement)(r,c(c({},f),{},{className:(n?n+" ":"")+"react-resizable",children:[].concat(r.props.children,u.map((function(t){return o.default.createElement(a.DraggableCore,l({},s,{key:"resizableHandle-"+t,onStop:e.resizeHandler("onResizeStop",t),onStart:e.resizeHandler("onResizeStart",t),onDrag:e.resizeHandler("onResize",t)}),e.renderResizeHandle(t))})))}))},n}(o.default.Component);t.default=d,p(d,"propTypes",s.resizableProps),p(d,"defaultProps",{handleSize:[20,20],lockAspectRatio:!1,axis:"both",minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1})},8735:(e,t,r)=>{"use strict";t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}(r(24852)),o=s(r(45697)),a=s(r(22827)),i=r(448);function s(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){var t,r;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return d(p(t=e.call.apply(e,[this].concat(n))||this),"state",{width:t.props.width,height:t.props.height,propsWidth:t.props.width,propsHeight:t.props.height}),d(p(t),"onResize",(function(e,r){var n=r.size;t.props.onResize?(e.persist&&e.persist(),t.setState(n,(function(){return t.props.onResize&&t.props.onResize(e,r)}))):t.setState(n)})),t}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.getDerivedStateFromProps=function(e,t){return t.propsWidth!==e.width||t.propsHeight!==e.height?{width:e.width,height:e.height,propsWidth:e.width,propsHeight:e.height}:null},o.prototype.render=function(){var e=this.props,t=e.handle,r=e.handleSize,o=(e.onResize,e.onResizeStart),i=e.onResizeStop,s=e.draggableOpts,l=e.minConstraints,c=e.maxConstraints,p=e.lockAspectRatio,d=e.axis,h=(e.width,e.height,e.resizeHandles),y=e.style,g=e.transformScale,b=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"]);return n.createElement(a.default,{axis:d,draggableOpts:s,handle:t,handleSize:r,height:this.state.height,lockAspectRatio:p,maxConstraints:c,minConstraints:l,onResizeStart:o,onResize:this.onResize,onResizeStop:i,resizeHandles:h,transformScale:g,width:this.state.width},n.createElement("div",u({},b,{style:f(f({},y),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},o}(n.Component);t.default=h,d(h,"propTypes",f(f({},i.resizableProps),{},{children:o.default.element}))},448:(e,t,r)=>{"use strict";t.__esModule=!0,t.resizableProps=void 0;var n,o=(n=r(45697))&&n.__esModule?n:{default:n};r(26422);var a={axis:o.default.oneOf(["both","x","y","none"]),className:o.default.string,children:o.default.element.isRequired,draggableOpts:o.default.shape({allowAnyClick:o.default.bool,cancel:o.default.string,children:o.default.node,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:o.default.node,grid:o.default.arrayOf(o.default.number),handle:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number}),height:o.default.number.isRequired,handle:o.default.oneOfType([o.default.node,o.default.func]),handleSize:o.default.arrayOf(o.default.number),lockAspectRatio:o.default.bool,maxConstraints:o.default.arrayOf(o.default.number),minConstraints:o.default.arrayOf(o.default.number),onResizeStop:o.default.func,onResizeStart:o.default.func,onResize:o.default.func,resizeHandles:o.default.arrayOf(o.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:o.default.number,width:o.default.number.isRequired};t.resizableProps=a},59069:(e,t,r)=>{"use strict";t.__esModule=!0,t.cloneElement=function(e,t){return t.style&&e.props.style&&(t.style=i(i({},e.props.style),t.style)),t.className&&e.props.className&&(t.className=e.props.className+" "+t.className),o.default.cloneElement(e,t)};var n,o=(n=r(24852))&&n.__esModule?n:{default:n};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},1706:(e,t,r)=>{"use strict";e.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")},e.exports.Resizable=r(22827).default,e.exports.ResizableBox=r(8735).default},18385:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return f.default}}),t.default=void 0;var o=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=a?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}(r(24852)),a=h(r(8060)),i=h(r(80307)),s=h(r(86010)),l=r(75323),u=r(63669),c=r(16723),f=h(r(49285)),p=h(r(5042)),d=["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"];function h(e){return e&&e.__esModule?e:{default:e}}function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(b,e);var t,r,a,c,h,y=(c=b,h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(c);if(h){var r=D(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}(this,e)});function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),j(S(t=y.call(this,e)),"onDragStart",(function(e,r){if((0,p.default)("Draggable: onDragStart: %j",r),!1===t.props.onStart(e,(0,u.createDraggableData)(S(t),r)))return!1;t.setState({dragging:!0,dragged:!0})})),j(S(t),"onDrag",(function(e,r){if(!t.state.dragging)return!1;(0,p.default)("Draggable: onDrag: %j",r);var n,o,a=(0,u.createDraggableData)(S(t),r),i={x:a.x,y:a.y};if(t.props.bounds){var s=i.x,l=i.y;i.x+=t.state.slackX,i.y+=t.state.slackY;var c=(n=(0,u.getBoundPosition)(S(t),i.x,i.y),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(n,o)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=c[0],d=c[1];i.x=f,i.y=d,i.slackX=t.state.slackX+(s-i.x),i.slackY=t.state.slackY+(l-i.y),a.x=i.x,a.y=i.y,a.deltaX=i.x-t.state.x,a.deltaY=i.y-t.state.y}if(!1===t.props.onDrag(e,a))return!1;t.setState(i)})),j(S(t),"onDragStop",(function(e,r){if(!t.state.dragging)return!1;if(!1===t.props.onStop(e,(0,u.createDraggableData)(S(t),r)))return!1;(0,p.default)("Draggable: onDragStop: %j",r);var n={dragging:!1,slackX:0,slackY:0};if(Boolean(t.props.position)){var o=t.props.position,a=o.x,i=o.y;n.x=a,n.y=i}t.setState(n)})),t.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:m({},e.position),slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),t}return t=b,a=[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.position,n=t.prevPropsPosition;return!r||n&&r.x===n.x&&r.y===n.y?null:((0,p.default)("Draggable: getDerivedStateFromProps %j",{position:r,prevPropsPosition:n}),{x:r.x,y:r.y,prevPropsPosition:m({},r)})}}],(r=[{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){var e,t,r;return null!==(e=null===(t=this.props)||void 0===t||null===(r=t.nodeRef)||void 0===r?void 0:r.current)&&void 0!==e?e:i.default.findDOMNode(this)}},{key:"render",value:function(){var e,t=this.props,r=(t.axis,t.bounds,t.children),n=t.defaultPosition,a=t.defaultClassName,i=t.defaultClassNameDragging,c=t.defaultClassNameDragged,p=t.position,h=t.positionOffset,y=(t.scale,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,d)),b={},v=null,O=!Boolean(p)||this.state.dragging,w=p||n,S={x:(0,u.canDragX)(this)&&O?this.state.x:w.x,y:(0,u.canDragY)(this)&&O?this.state.y:w.y};this.state.isElementSVG?v=(0,l.createSVGTransform)(S,h):b=(0,l.createCSSTransform)(S,h);var D=(0,s.default)(r.props.className||"",a,(j(e={},i,this.state.dragging),j(e,c,this.state.dragged),e));return o.createElement(f.default,g({},y,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.cloneElement(o.Children.only(r),{className:D,style:m(m({},r.props.style),b),transform:v}))}}])&&O(t.prototype,r),a&&O(t,a),Object.defineProperty(t,"prototype",{writable:!1}),b}(o.Component);t.default=P,j(P,"displayName","Draggable"),j(P,"propTypes",m(m({},f.default.propTypes),{},{axis:a.default.oneOf(["both","x","y","none"]),bounds:a.default.oneOfType([a.default.shape({left:a.default.number,right:a.default.number,top:a.default.number,bottom:a.default.number}),a.default.string,a.default.oneOf([!1])]),defaultClassName:a.default.string,defaultClassNameDragging:a.default.string,defaultClassNameDragged:a.default.string,defaultPosition:a.default.shape({x:a.default.number,y:a.default.number}),positionOffset:a.default.shape({x:a.default.oneOfType([a.default.number,a.default.string]),y:a.default.oneOfType([a.default.number,a.default.string])}),position:a.default.shape({x:a.default.number,y:a.default.number}),className:c.dontSetMe,style:c.dontSetMe,transform:c.dontSetMe})),j(P,"defaultProps",m(m({},f.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))},49285:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=a?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}(r(24852)),a=f(r(8060)),i=f(r(80307)),s=r(75323),l=r(63669),u=r(16723),c=f(r(5042));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},w=O.mouse,S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(p,e);var t,r,a,u,f=(a=p,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(a);if(u){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,e)});function p(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return v(b(e=f.call.apply(f,[this].concat(r))),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),v(b(e),"mounted",!1),v(b(e),"handleDragStart",(function(t){if(e.props.onMouseDown(t),!e.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;var r=e.findDOMNode();if(!r||!r.ownerDocument||!r.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var n=r.ownerDocument;if(!(e.props.disabled||!(t.target instanceof n.defaultView.Node)||e.props.handle&&!(0,s.matchesSelectorAndParentsTo)(t.target,e.props.handle,r)||e.props.cancel&&(0,s.matchesSelectorAndParentsTo)(t.target,e.props.cancel,r))){"touchstart"===t.type&&t.preventDefault();var o=(0,s.getTouchIdentifier)(t);e.setState({touchIdentifier:o});var a=(0,l.getControlPosition)(t,o,b(e));if(null!=a){var i=a.x,u=a.y,f=(0,l.createCoreData)(b(e),i,u);(0,c.default)("DraggableCore: handleDragStart: %j",f),(0,c.default)("calling",e.props.onStart),!1!==e.props.onStart(t,f)&&!1!==e.mounted&&(e.props.enableUserSelectHack&&(0,s.addUserSelectStyles)(n),e.setState({dragging:!0,lastX:i,lastY:u}),(0,s.addEvent)(n,w.move,e.handleDrag),(0,s.addEvent)(n,w.stop,e.handleDragStop))}}})),v(b(e),"handleDrag",(function(t){var r=(0,l.getControlPosition)(t,e.state.touchIdentifier,b(e));if(null!=r){var n=r.x,o=r.y;if(Array.isArray(e.props.grid)){var a=n-e.state.lastX,i=o-e.state.lastY,s=d((0,l.snapToGrid)(e.props.grid,a,i),2);if(a=s[0],i=s[1],!a&&!i)return;n=e.state.lastX+a,o=e.state.lastY+i}var u=(0,l.createCoreData)(b(e),n,o);if((0,c.default)("DraggableCore: handleDrag: %j",u),!1!==e.props.onDrag(t,u)&&!1!==e.mounted)e.setState({lastX:n,lastY:o});else try{e.handleDragStop(new MouseEvent("mouseup"))}catch(t){var f=document.createEvent("MouseEvents");f.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.handleDragStop(f)}}})),v(b(e),"handleDragStop",(function(t){if(e.state.dragging){var r=(0,l.getControlPosition)(t,e.state.touchIdentifier,b(e));if(null!=r){var n=r.x,o=r.y;if(Array.isArray(e.props.grid)){var a=n-e.state.lastX||0,i=o-e.state.lastY||0,u=d((0,l.snapToGrid)(e.props.grid,a,i),2);a=u[0],i=u[1],n=e.state.lastX+a,o=e.state.lastY+i}var f=(0,l.createCoreData)(b(e),n,o);if(!1===e.props.onStop(t,f)||!1===e.mounted)return!1;var p=e.findDOMNode();p&&e.props.enableUserSelectHack&&(0,s.removeUserSelectStyles)(p.ownerDocument),(0,c.default)("DraggableCore: handleDragStop: %j",f),e.setState({dragging:!1,lastX:NaN,lastY:NaN}),p&&((0,c.default)("DraggableCore: Removing handlers"),(0,s.removeEvent)(p.ownerDocument,w.move,e.handleDrag),(0,s.removeEvent)(p.ownerDocument,w.stop,e.handleDragStop))}}})),v(b(e),"onMouseDown",(function(t){return w=O.mouse,e.handleDragStart(t)})),v(b(e),"onMouseUp",(function(t){return w=O.mouse,e.handleDragStop(t)})),v(b(e),"onTouchStart",(function(t){return w=O.touch,e.handleDragStart(t)})),v(b(e),"onTouchEnd",(function(t){return w=O.touch,e.handleDragStop(t)})),e}return t=p,(r=[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.findDOMNode();e&&(0,s.addEvent)(e,O.touch.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var e=this.findDOMNode();if(e){var t=e.ownerDocument;(0,s.removeEvent)(t,O.mouse.move,this.handleDrag),(0,s.removeEvent)(t,O.touch.move,this.handleDrag),(0,s.removeEvent)(t,O.mouse.stop,this.handleDragStop),(0,s.removeEvent)(t,O.touch.stop,this.handleDragStop),(0,s.removeEvent)(e,O.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,s.removeUserSelectStyles)(t)}}},{key:"findDOMNode",value:function(){var e,t,r;return null!==(e=this.props)&&void 0!==e&&e.nodeRef?null===(t=this.props)||void 0===t||null===(r=t.nodeRef)||void 0===r?void 0:r.current:i.default.findDOMNode(this)}},{key:"render",value:function(){return o.cloneElement(o.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),p}(o.Component);t.default=S,v(S,"displayName","DraggableCore"),v(S,"propTypes",{allowAnyClick:a.default.bool,disabled:a.default.bool,enableUserSelectHack:a.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:a.default.arrayOf(a.default.number),handle:a.default.string,cancel:a.default.string,nodeRef:a.default.object,onStart:a.default.func,onDrag:a.default.func,onStop:a.default.func,onMouseDown:a.default.func,scale:a.default.number,className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe}),v(S,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},26422:(e,t,r)=>{"use strict";var n=r(18385),o=n.default,a=n.DraggableCore;e.exports=o,e.exports.default=o,e.exports.DraggableCore=a},75323:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.addClassName=d,t.addEvent=function(e,t,r,n){if(e){var o=l({capture:!0},n);e.addEventListener?e.addEventListener(t,r,o):e.attachEvent?e.attachEvent("on"+t,r):e["on"+t]=r}},t.addUserSelectStyles=function(e){if(e){var t=e.getElementById("react-draggable-style-el");t||((t=e.createElement("style")).type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t)),e.body&&d(e.body,"react-draggable-transparent-selection")}},t.createCSSTransform=function(e,t){var r=p(e,t,"px");return u({},(0,a.browserPrefixToKey)("transform",a.default),r)},t.createSVGTransform=function(e,t){return p(e,t,"")},t.getTouch=function(e,t){return e.targetTouches&&(0,o.findInArray)(e.targetTouches,(function(e){return t===e.identifier}))||e.changedTouches&&(0,o.findInArray)(e.changedTouches,(function(e){return t===e.identifier}))},t.getTouchIdentifier=function(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0},t.getTranslation=p,t.innerHeight=function(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t-=(0,o.int)(r.paddingTop))-(0,o.int)(r.paddingBottom)},t.innerWidth=function(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t-=(0,o.int)(r.paddingLeft))-(0,o.int)(r.paddingRight)},t.matchesSelector=f,t.matchesSelectorAndParentsTo=function(e,t,r){var n=e;do{if(f(n,t))return!0;if(n===r)return!1;n=n.parentNode}while(n);return!1},t.offsetXYFromParent=function(e,t,r){var n=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:(e.clientX+t.scrollLeft-n.left)/r,y:(e.clientY+t.scrollTop-n.top)/r}},t.outerHeight=function(e){var t=e.clientHeight,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t+=(0,o.int)(r.borderTopWidth))+(0,o.int)(r.borderBottomWidth)},t.outerWidth=function(e){var t=e.clientWidth,r=e.ownerDocument.defaultView.getComputedStyle(e);return(t+=(0,o.int)(r.borderLeftWidth))+(0,o.int)(r.borderRightWidth)},t.removeClassName=h,t.removeEvent=function(e,t,r,n){if(e){var o=l({capture:!0},n);e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent?e.detachEvent("on"+t,r):e["on"+t]=null}},t.removeUserSelectStyles=function(e){if(e)try{if(e.body&&h(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{var t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(e){}};var o=r(16723),a=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=a?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}return o.default=e,r&&r.set(e,o),o}(r(21227));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c="";function f(e,t){return c||(c=(0,o.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,o.isFunction)(e[t])}))),!!(0,o.isFunction)(e[c])&&e[c](t)}function p(e,t,r){var n=e.x,o=e.y,a="translate(".concat(n).concat(r,",").concat(o).concat(r,")");if(t){var i="".concat("string"==typeof t.x?t.x:t.x+r),s="".concat("string"==typeof t.y?t.y:t.y+r);a="translate(".concat(i,", ").concat(s,")")+a}return a}function d(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function h(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},21227:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.browserPrefixToKey=o,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0,t.getPrefix=n;var r=["Moz","Webkit","O","ms"];function n(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";var a=null===(e=window.document)||void 0===e||null===(t=e.documentElement)||void 0===t?void 0:t.style;if(!a)return"";if(n in a)return"";for(var i=0;i<r.length;i++)if(o(n,r[i])in a)return r[i];return""}function o(e,t){return t?"".concat(t).concat(function(e){for(var t="",r=!0,n=0;n<e.length;n++)r?(t+=e[n].toUpperCase(),r=!1):"-"===e[n]?r=!0:t+=e[n];return t}(e)):e}var a=n();t.default=a},5042:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},63669:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.createCoreData=function(e,t,r){var o=e.state,i=!(0,n.isNum)(o.lastX),s=a(e);return i?{node:s,deltaX:0,deltaY:0,lastX:t,lastY:r,x:t,y:r}:{node:s,deltaX:t-o.lastX,deltaY:r-o.lastY,lastX:o.lastX,lastY:o.lastY,x:t,y:r}},t.createDraggableData=function(e,t){var r=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/r,y:e.state.y+t.deltaY/r,deltaX:t.deltaX/r,deltaY:t.deltaY/r,lastX:e.state.x,lastY:e.state.y}},t.getBoundPosition=function(e,t,r){if(!e.props.bounds)return[t,r];var i=e.props.bounds;i="string"==typeof i?i:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(i);var s=a(e);if("string"==typeof i){var l,u=s.ownerDocument,c=u.defaultView;if(!((l="parent"===i?s.parentNode:u.querySelector(i))instanceof c.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');var f=l,p=c.getComputedStyle(s),d=c.getComputedStyle(f);i={left:-s.offsetLeft+(0,n.int)(d.paddingLeft)+(0,n.int)(p.marginLeft),top:-s.offsetTop+(0,n.int)(d.paddingTop)+(0,n.int)(p.marginTop),right:(0,o.innerWidth)(f)-(0,o.outerWidth)(s)-s.offsetLeft+(0,n.int)(d.paddingRight)-(0,n.int)(p.marginRight),bottom:(0,o.innerHeight)(f)-(0,o.outerHeight)(s)-s.offsetTop+(0,n.int)(d.paddingBottom)-(0,n.int)(p.marginBottom)}}return(0,n.isNum)(i.right)&&(t=Math.min(t,i.right)),(0,n.isNum)(i.bottom)&&(r=Math.min(r,i.bottom)),(0,n.isNum)(i.left)&&(t=Math.max(t,i.left)),(0,n.isNum)(i.top)&&(r=Math.max(r,i.top)),[t,r]},t.getControlPosition=function(e,t,r){var n="number"==typeof t?(0,o.getTouch)(e,t):null;if("number"==typeof t&&!n)return null;var i=a(r),s=r.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(n||e,s,r.props.scale)},t.snapToGrid=function(e,t,r){return[Math.round(t/e[0])*e[0],Math.round(r/e[1])*e[1]]};var n=r(16723),o=r(75323);function a(e){var t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},16723:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dontSetMe=function(e,t,r){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(r," - do not set this, set it on the child."))},t.findInArray=function(e,t){for(var r=0,n=e.length;r<n;r++)if(t.apply(t,[e[r],r,e]))return e[r]},t.int=function(e){return parseInt(e,10)},t.isFunction=function(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"==typeof e&&!isNaN(e)}},22536:(e,t,r)=>{"use strict";var n=r(349);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},8060:(e,t,r)=>{e.exports=r(22536)()},349:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);