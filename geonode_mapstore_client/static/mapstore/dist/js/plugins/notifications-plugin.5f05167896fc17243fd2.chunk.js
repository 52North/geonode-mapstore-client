(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[940],{99534:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var o=i(61365),n=i(56936);const r=(0,o.Z)(n.h_)},61365:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var o=i(67294),n=i.n(o),r=i(63202);function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},s.apply(this,arguments)}const a=function(t){return function(e){return n().createElement(t,s({},e,{container:document.querySelector("."+(r.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},17619:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>M});var o=i(33664),n=i(97395),r=i(67294),s=i.n(r),a=i(26656),c=i.n(a),l=i(45697),f=i.n(l),u=i(37101),p=i(86638),d=i(99534);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}var b=["notifications","onRemove"];function m(){return m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},m.apply(this,arguments)}function y(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?y(Object(i),!0).forEach((function(e){j(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function x(t,e){return x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},x(t,e)}function O(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return S(t)}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}function j(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(a,t);var e,i,o,n,r=(o=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(o);if(n){var i=_(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return O(this,t)});function a(){var t;g(this,a);for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return j(S(t=r.call.apply(r,[this].concat(i))),"system",(function(){return t.refs.notify})),j(S(t),"updateNotifications",(function(e){var i=e.map((function(t){return t.uid})),o=t.system().state.notifications||[];o.forEach((function(e){i.indexOf(e.uid)<0&&t.system().removeNotification(e.uid)})),e.forEach((function(e){if(o.indexOf(e.uid)<0){var i,n=e.message,r=(0,p.S$)(t.context.messages,n);i=e.values?(0,t.props.intl.formatMessage)(i=(0,u.defineMessages)({id:n,defaultMessage:r}),e.values):r||n,t.system().addNotification(v(v({},e),{},{title:(0,p.S$)(t.context.messages,e.title)||e.title,message:i,action:e.action&&{label:(0,p.S$)(t.context.messages,e.action.label)||e.action.label,callback:e.action.dispatch?function(){t.props.onDispatch(e.action.dispatch)}:e.action.callback},onRemove:function(){t.props.onRemove(e.uid),e.onRemove&&e.onRemove()}}))}}))})),t}return e=a,i=[{key:"componentDidMount",value:function(){this.updateNotifications(this.props.notifications)}},{key:"componentDidUpdate",value:function(){var t=(this.props||[]).notifications;this.updateNotifications(t)}},{key:"render",value:function(){var t=this.props,e=(t.notifications,t.onRemove,function(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}(t,b));return s().createElement(d.Z,null,s().createElement(c(),m({ref:"notify"},e)))}}],i&&w(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),a}(s().Component);j(k,"propTypes",{notifications:f().array,intl:u.intlShape.isRequired,onRemove:f().func,onDispatch:f().func}),j(k,"contextTypes",{messages:f().object}),j(k,"defaultProps",{notifications:[],onRemove:function(){},onDispatch:function(){}});const T=(0,u.injectIntl)(k);var E=i(89255),D=i(75982);const M={NotificationsPlugin:(0,o.connect)((function(t){return{notifications:t&&t.notifications}}),{onRemove:n.Cp,onDispatch:n.Ce})(T),reducers:{notifications:i(97080).Z},epics:{clearNotificationOnLocationChange:function(t){return t.ofType(D.nk).switchMap((function(){return E.Observable.of((0,n.ZH)())}))}}}},97080:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var o=i(97395),n=["type"];function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function f(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}const u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case o.e2:e.type;var i=f(e,n);return[].concat(c(t),[s({},i)]);case o.Zz:return t.filter((function(t){return t.uid!==e.uid}));case o.wt:return[];default:return t}}},90874:(t,e,i)=>{"use strict";var o=i(95318);e.__esModule=!0,e.default=void 0;var n,r=o(i(50139)),s="clearTimeout",a=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-l)),o=setTimeout(t,i);return l=e,o},c=function(t,e){return t+(t?e[0].toUpperCase()+e.substr(1):e)+"AnimationFrame"};r.default&&["","webkit","moz","o","ms"].some((function(t){var e=c(t,"request");if(e in window)return s=c(t,"cancel"),a=function(t){return window[e](t)}}));var l=(new Date).getTime();(n=function(t){return a(t)}).cancel=function(t){window[s]&&"function"==typeof window[s]&&window[s](t)};var f=n;e.default=f,t.exports=e.default},1431:(t,e,i)=>{var o=i(67294),n=i(72555),r=i(45697),s=i(93958),a=i(77642),c=n({propTypes:{position:r.string.isRequired,notifications:r.array.isRequired,getStyles:r.object},_style:{},componentWillMount:function(){this._style=this.props.getStyles.container(this.props.position),!this.props.getStyles.overrideWidth||this.props.position!==a.positions.tc&&this.props.position!==a.positions.bc||(this._style.marginLeft=-this.props.getStyles.overrideWidth/2)},render:function(){var t,e=this;return[a.positions.bl,a.positions.br,a.positions.bc].indexOf(this.props.position)>-1&&this.props.notifications.reverse(),t=this.props.notifications.map((function(t){return o.createElement(s,{ref:"notification-"+t.uid,key:t.uid,notification:t,getStyles:e.props.getStyles,onRemove:e.props.onRemove,noAnimation:e.props.noAnimation,allowHTML:e.props.allowHTML,children:e.props.children})})),o.createElement("div",{className:"notifications-"+this.props.position,style:this._style},t)}});t.exports=c},93958:(t,e,i)=>{var o=i(67294),n=i(72555),r=i(45697),s=i(73935),a=i(77642),c=i(37325),l=i(27418),f=function(){var t,e=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};return Object.keys(i).forEach((function(o){void 0!==e.style[o]&&(t=i[o])})),t},u=n({propTypes:{notification:r.object,getStyles:r.object,onRemove:r.func,allowHTML:r.bool,noAnimation:r.bool,children:r.oneOfType([r.string,r.element])},getDefaultProps:function(){return{noAnimation:!1,onRemove:function(){},allowHTML:!1}},getInitialState:function(){return{visible:void 0,removed:!1}},componentWillMount:function(){var t=this.props.getStyles,e=this.props.notification.level;this._noAnimation=this.props.noAnimation,this._styles={notification:t.byElement("notification")(e),title:t.byElement("title")(e),dismiss:t.byElement("dismiss")(e),messageWrapper:t.byElement("messageWrapper")(e),actionWrapper:t.byElement("actionWrapper")(e),action:t.byElement("action")(e)},this.props.notification.dismissible||(this._styles.notification.cursor="default")},_styles:{},_notificationTimer:null,_height:0,_noAnimation:null,_isMounted:!1,_removeCount:0,_getCssPropertyByPosition:function(){var t={};switch(this.props.notification.position){case a.positions.tl:case a.positions.bl:t={property:"left",value:-200};break;case a.positions.tr:case a.positions.br:t={property:"right",value:-200};break;case a.positions.tc:t={property:"top",value:-100};break;case a.positions.bc:t={property:"bottom",value:-100}}return t},_defaultAction:function(t){var e=this.props.notification;t.preventDefault(),this._hideNotification(),"function"==typeof e.action.callback&&e.action.callback()},_hideNotification:function(){this._notificationTimer&&this._notificationTimer.clear(),this._isMounted&&this.setState({visible:!1,removed:!0}),this._noAnimation&&this._removeNotification()},_removeNotification:function(){this.props.onRemove(this.props.notification.uid)},_dismiss:function(){this.props.notification.dismissible&&this._hideNotification()},_showNotification:function(){var t=this;setTimeout((function(){t._isMounted&&t.setState({visible:!0})}),50)},_onTransitionEnd:function(){this._removeCount>0||this.state.removed&&(this._removeCount++,this._removeNotification())},componentDidMount:function(){var t=this,e=f(),i=this.props.notification,o=s.findDOMNode(this);this._height=o.offsetHeight,this._isMounted=!0,this._noAnimation||(e?o.addEventListener(e,this._onTransitionEnd):this._noAnimation=!0),i.autoDismiss&&(this._notificationTimer=new c.Timer((function(){t._hideNotification()}),1e3*i.autoDismiss)),this._showNotification()},_handleMouseEnter:function(){this.props.notification.autoDismiss&&this._notificationTimer.pause()},_handleMouseLeave:function(){this.props.notification.autoDismiss&&this._notificationTimer.resume()},componentWillUnmount:function(){var t=s.findDOMNode(this),e=f();t.removeEventListener(e,this._onTransitionEnd),this._isMounted=!1},_allowHTML:function(t){return{__html:t}},render:function(){var t=this.props.notification,e="notification notification-"+t.level,i=l({},this._styles.notification),n=this._getCssPropertyByPosition(),r=null,s=null,a=null,c=null;return this.state.visible?e+=" notification-visible":!1===this.state.visible&&(e+=" notification-hidden"),t.dismissible||(e+=" notification-not-dismissible"),this.props.getStyles.overrideStyle&&(this.state.visible||this.state.removed||(i[n.property]=n.value),this.state.visible&&!this.state.removed&&(i.height=this._height,i[n.property]=0),this.state.removed&&(i.overlay="hidden",i.height=0,i.marginTop=0,i.paddingTop=0,i.paddingBottom=0),i.opacity=this.state.visible?this._styles.notification.isVisible.opacity:this._styles.notification.isHidden.opacity),t.title&&(a=o.createElement("h4",{className:"notification-title",style:this._styles.title},t.title)),t.message&&(c=this.props.allowHTML?o.createElement("div",{className:"notification-message",style:this._styles.messageWrapper,dangerouslySetInnerHTML:this._allowHTML(t.message)}):o.createElement("div",{className:"notification-message",style:this._styles.messageWrapper},t.message)),t.dismissible&&(r=o.createElement("span",{className:"notification-dismiss",style:this._styles.dismiss},"×")),t.action&&(s=o.createElement("div",{className:"notification-action-wrapper",style:this._styles.actionWrapper},o.createElement("button",{className:"notification-action-button",onClick:this._defaultAction,style:this._styles.action},t.action.label))),t.children&&(s=t.children),o.createElement("div",{className:e,onClick:this._dismiss,onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave,style:i},a,c,r,s)}});t.exports=u},26656:(t,e,i)=>{var o=i(67294),n=i(72555),r=i(45697),s=i(27418),a=i(1431),c=i(77642),l=i(16470),f=n({uid:3400,_isMounted:!1,_getStyles:{overrideStyle:{},overrideWidth:null,setOverrideStyle:function(t){this.overrideStyle=t},wrapper:function(){return this.overrideStyle?s({},l.Wrapper,this.overrideStyle.Wrapper):{}},container:function(t){var e=this.overrideStyle.Containers||{};return this.overrideStyle?(this.overrideWidth=l.Containers.DefaultStyle.width,e.DefaultStyle&&e.DefaultStyle.width&&(this.overrideWidth=e.DefaultStyle.width),e[t]&&e[t].width&&(this.overrideWidth=e[t].width),s({},l.Containers.DefaultStyle,l.Containers[t],e.DefaultStyle,e[t])):{}},elements:{notification:"NotificationItem",title:"Title",messageWrapper:"MessageWrapper",dismiss:"Dismiss",action:"Action",actionWrapper:"ActionWrapper"},byElement:function(t){var e=this;return function(i){var o=e.elements[t],n=e.overrideStyle[o]||{};return e.overrideStyle?s({},l[o].DefaultStyle,l[o][i],n.DefaultStyle,n[i]):{}}}},_didNotificationRemoved:function(t){var e,i=this.state.notifications.filter((function(i){return i.uid!==t||(e=i,!1)}));this._isMounted&&this.setState({notifications:i}),e&&e.onRemove&&e.onRemove(e)},getInitialState:function(){return{notifications:[]}},propTypes:{style:r.oneOfType([r.bool,r.object]),noAnimation:r.bool,allowHTML:r.bool},getDefaultProps:function(){return{style:{},noAnimation:!1,allowHTML:!1}},addNotification:function(t){var e,i=s({},c.notification,t),o=this.state.notifications;if(!i.level)throw new Error("notification level is required.");if(-1===Object.keys(c.levels).indexOf(i.level))throw new Error("'"+i.level+"' is not a valid level.");if(isNaN(i.autoDismiss))throw new Error("'autoDismiss' must be a number.");if(-1===Object.keys(c.positions).indexOf(i.position))throw new Error("'"+i.position+"' is not a valid position.");for(i.position=i.position.toLowerCase(),i.level=i.level.toLowerCase(),i.autoDismiss=parseInt(i.autoDismiss,10),i.uid=i.uid||this.uid,i.ref="notification-"+i.uid,this.uid+=1,e=0;e<o.length;e++)if(o[e].uid===i.uid)return!1;return o.push(i),"function"==typeof i.onAdd&&t.onAdd(i),this.setState({notifications:o}),i},getNotificationRef:function(t){var e=this,i=null;return Object.keys(this.refs).forEach((function(o){o.indexOf("container")>-1&&Object.keys(e.refs[o].refs).forEach((function(n){n!=="notification-"+(t.uid?t.uid:t)||(i=e.refs[o].refs[n])}))})),i},removeNotification:function(t){var e=this.getNotificationRef(t);return e&&e._hideNotification()},editNotification:function(t,e){var i=null,o=t.uid?t.uid:t,n=this.state.notifications.filter((function(t){return o!==t.uid||(i=t,!1)}));i&&(n.push(s({},i,e)),this.setState({notifications:n}))},clearNotifications:function(){var t=this;Object.keys(this.refs).forEach((function(e){e.indexOf("container")>-1&&Object.keys(t.refs[e].refs).forEach((function(i){t.refs[e].refs[i]._hideNotification()}))}))},componentDidMount:function(){this._getStyles.setOverrideStyle(this.props.style),this._isMounted=!0},componentWillUnmount:function(){this._isMounted=!1},render:function(){var t=this,e=null,i=this.state.notifications;return i.length&&(e=Object.keys(c.positions).map((function(e){var n=i.filter((function(t){return e===t.position}));return n.length?o.createElement(a,{ref:"container-"+e,key:e,position:e,notifications:n,getStyles:t._getStyles,onRemove:t._didNotificationRemoved,noAnimation:t.props.noAnimation,allowHTML:t.props.allowHTML}):null}))),o.createElement("div",{className:"notifications-wrapper",style:this._getStyles.wrapper()},e)}});t.exports=f},77642:t=>{t.exports={positions:{tl:"tl",tr:"tr",tc:"tc",bl:"bl",br:"br",bc:"bc"},levels:{success:"success",error:"error",warning:"warning",info:"info"},notification:{title:null,message:null,level:null,position:"tr",autoDismiss:5,dismissible:!0,action:null}}},37325:t=>{var e={Timer:function(t,e){var i,o,n=e;this.pause=function(){clearTimeout(i),n-=new Date-o},this.resume=function(){o=new Date,clearTimeout(i),i=setTimeout(t,n)},this.clear=function(){clearTimeout(i)},this.resume()}};t.exports=e},16470:t=>{var e="94, 164, 0",i="#5ea400",o="236, 61, 61",n="#ec3d3d",r="235, 173, 23",s="#ebad1a",a="54, 156, 199",c="#369cc7",l={Wrapper:{},Containers:{DefaultStyle:{fontFamily:"inherit",position:"fixed",width:320,padding:"0 10px 10px 10px",zIndex:9998,WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",height:"auto"},tl:{top:"0px",bottom:"auto",left:"0px",right:"auto"},tr:{top:"0px",bottom:"auto",left:"auto",right:"0px"},tc:{top:"0px",bottom:"auto",margin:"0 auto",left:"50%",marginLeft:-160},bl:{top:"auto",bottom:"0px",left:"0px",right:"auto"},br:{top:"auto",bottom:"0px",left:"auto",right:"0px"},bc:{top:"auto",bottom:"0px",margin:"0 auto",left:"50%",marginLeft:-160}},NotificationItem:{DefaultStyle:{position:"relative",width:"100%",cursor:"pointer",borderRadius:"2px",fontSize:"13px",margin:"10px 0 0",padding:"10px",display:"block",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box",opacity:0,transition:"0.3s ease-in-out",WebkitTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)",willChange:"transform, opacity",isHidden:{opacity:0},isVisible:{opacity:1}},success:{borderTop:"2px solid "+i,backgroundColor:"#f0f5ea",color:"#4b583a",WebkitBoxShadow:"0 0 1px rgba("+e+",0.9)",MozBoxShadow:"0 0 1px rgba("+e+",0.9)",boxShadow:"0 0 1px rgba("+e+",0.9)"},error:{borderTop:"2px solid "+n,backgroundColor:"#f4e9e9",color:"#412f2f",WebkitBoxShadow:"0 0 1px rgba("+o+",0.9)",MozBoxShadow:"0 0 1px rgba("+o+",0.9)",boxShadow:"0 0 1px rgba("+o+",0.9)"},warning:{borderTop:"2px solid "+s,backgroundColor:"#f9f6f0",color:"#5a5343",WebkitBoxShadow:"0 0 1px rgba("+r+",0.9)",MozBoxShadow:"0 0 1px rgba("+r+",0.9)",boxShadow:"0 0 1px rgba("+r+",0.9)"},info:{borderTop:"2px solid "+c,backgroundColor:"#e8f0f4",color:"#41555d",WebkitBoxShadow:"0 0 1px rgba("+a+",0.9)",MozBoxShadow:"0 0 1px rgba("+a+",0.9)",boxShadow:"0 0 1px rgba("+a+",0.9)"}},Title:{DefaultStyle:{fontSize:"14px",margin:"0 0 5px 0",padding:0,fontWeight:"bold"},success:{color:i},error:{color:n},warning:{color:s},info:{color:c}},MessageWrapper:{DefaultStyle:{margin:0,padding:0}},Dismiss:{DefaultStyle:{fontFamily:"Arial",fontSize:"17px",position:"absolute",top:"4px",right:"5px",lineHeight:"15px",backgroundColor:"#dededf",color:"#ffffff",borderRadius:"50%",width:"14px",height:"14px",fontWeight:"bold",textAlign:"center"},success:{color:"#f0f5ea",backgroundColor:"#b0ca92"},error:{color:"#f4e9e9",backgroundColor:"#e4bebe"},warning:{color:"#f9f6f0",backgroundColor:"#e1cfac"},info:{color:"#e8f0f4",backgroundColor:"#a4becb"}},Action:{DefaultStyle:{background:"#ffffff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:i,color:"#ffffff"},error:{backgroundColor:n,color:"#ffffff"},warning:{backgroundColor:s,color:"#ffffff"},info:{backgroundColor:c,color:"#ffffff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}};t.exports=l}}]);