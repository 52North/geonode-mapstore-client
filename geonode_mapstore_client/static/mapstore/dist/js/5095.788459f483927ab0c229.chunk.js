/*! For license information please see 5095.788459f483927ab0c229.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5095,23279],{556307:t=>{t.exports=window.L},705095:(t,i,o)=>{"use strict";o.r(i),o.d(i,{default:()=>C});var e=o(556307),n=o.n(e),s=(o(880687),o(893379)),r=o.n(s),a=o(523928);r()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,o(932818);var c=o(823493),l=o.n(c),h=o(414293),p=o.n(h),u=o(199405),f=o(611847);function d(t,i){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),o.push.apply(o,e)}return o}function _(t){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?d(Object(o),!0).forEach((function(i){v(t,i,o[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(o,i))}))}return t}function v(t,i,o){return i in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,t}n().Control.MSLocate=n().Control.Locate.extend({setMap:function(t){this._map=t,this._layer=this.options.layer||new(n().LayerGroup),this._layer.addTo(t),this._event=void 0,this._prevBounds=null;var i={};n().extend(i,this.options.circleStyle,this.options.followCircleStyle),this.options.followCircleStyle=i,this._resetVariables(),this._map.on("unload",this._unload,this)},setLocateOptions:function(t){this.options.locateOptions=_({},t)},_activate:function(){this._active||(this._map.locate(this.options.locateOptions),this._active=!0,this._map.on("locationfound",this.onLocationChange(),this),this._map.on("locationerror",this._onLocationError,this),this._map.on("dragstart",this._onDrag,this))},onLocationChange:function(){return this.options.locateOptions.rateControl?l()(this._onLocationFound,this.options.locateOptions.rateControl):this._onLocationFound},_drawMarker:function(){var t,i,o=this._event||{},e=o.accuracy,s=o.latlng,r=o.heading,a=o.speed;void 0===e&&(e=0);var c,l,h=this._isFollowing();if(this.options.drawCircle){var p=h?this.options.followCircleStyle:this.options.circleStyle;this._circle?this._circle.setLatLng(s).setRadius(e).setStyle(p):this._circle=n().circle(s,e,p).addTo(this._layer)}this.options.metric?(c=e.toFixed(0),l=this.options.strings.metersUnit):(c=(3.2808399*e).toFixed(0),l=this.options.strings.feetUnit),this.options.drawMarker&&(this._marker&&this._map.removeLayer(this._marker),this.setFollowMarkerStyle(s,r,a));var u=null===(t=this.options)||void 0===t||null===(i=t.strings)||void 0===i?void 0:i.popup;if(this.options.showPopup&&u&&this._marker&&this._marker.bindPopup(n().Util.template(u,{distance:c,unit:l}))._popup.setLatLng(s),"true"===(0,f.vl)(window.location.search).locateDebug){var d=document.getElementById("LEAFLET_LOCATION_DEBUG");d||((d=document.createElement("div")).setAttribute("id","LEAFLET_LOCATION_DEBUG"),d.setAttribute("style","position: absolute; bottom: 0; width: 100%; height: 200px; z-index:100000; background: rgba(5,5,5,.5)"),document.body.appendChild(d)),d.innerHTML="<pre>\n                Position: ".concat(s,",\n                Heading: ").concat(r,"\n                speed: ").concat(a,"\n            </pre>")}},_setClasses:function(t){return this._map.fire("locatestatus",{state:t}),t},_updateContainerStyle:function(){this._isFollowing()?this._setClasses("following"):this._active&&this._setClasses("active")},_cleanClasses:function(){return null},setStrings:function(t){this.options.strings=_(_({},this.options.strings),t)},removeMarker:function(){this._marker&&this._map.removeLayer(this._marker)},setFollowMarkerStyle:function(t,i,o){var e="#2A93EE";this.removeMarker();var s={icon:n().divIcon({className:"div-heading-icon",opacity:1,iconSize:70,fillOpacity:1,html:!p()(i)&&o>this.options.locateOptions.speedThreshold?(0,u.w)({color:e,strokeWidth:2}):(0,u.B)({color:e,strokeWidth:2})}),rotationOrigin:"center center"};this._marker=n().marker(t,_(_({},s),{},{rotationAngle:i})).addTo(this._layer)}});const g=n().Control.MSLocate;function m(t,i){for(var o=0;o<i.length;o++){var e=i[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function y(t,i){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),o.push.apply(o,e)}return o}function w(t){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?y(Object(o),!0).forEach((function(i){k(t,i,o[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):y(Object(o)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(o,i))}))}return t}function k(t,i,o){return i in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,t}var b={follow:!0,remainActive:!0,stopFollowingOnDrag:!0,locateOptions:{speedThreshold:.8,maximumAge:2e3,enableHighAccuracy:!0,timeout:1e4,maxZoom:18,watch:!0}};function O(t){return w(w(w({},b),t),{},{locateOptions:w(w({},b.locateOptions),t.locateOptions)})}var L=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t)}var i,o;return i=t,o=[{key:"start",value:function(t){var i=this,o=t.map,e=t.options,n=t.status,s=t.onStateChange,r=t.onLocationError;o&&(this.locate=new g(O(e)),this.locate.setMap(o),o.on("locatestatus",(function(t){return i.locateControlState(t,{onStateChange:s})})),this.locate.options.onLocationError=r,this.locate.options.onLocationOutsideMapBounds=r),n.enabled&&this.locate.start(),this.status=n}},{key:"update",value:function(t){var i=t.status,o=t.messages,e=t.options;this.fol=!1,"ENABLED"!==i||this.locate._active?"FOLLOWING"===i&&this.locate._active&&!this.locate._following?(this.fol=!0,this.locate.stop(),this.locate.start()):"DISABLED"===i&&(this.locate._following=!1,this.locate.stop()):this.locate.start(),this.locate.setStrings(o),"DISABLED"!==i&&this.locate.drawMarker&&this.locate.drawMarker(this.locate._map),this.locate.setLocateOptions(O(e).locateOptions),this.status=i}},{key:"clear",value:function(){}},{key:"locateControlState",value:function(t,i){var o=i.onStateChange;"requesting"===t.state&&"LOCATING"!==this.status?o("LOCATING"):"following"!==t.state||this.fol?"active"===t.state&&"ENABLED"!==this.status&&o("ENABLED"):o("FOLLOWING")}}],o&&m(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}();const C=L},199405:(t,i,o)=>{"use strict";function e(t){var i=t.color,o=void 0===i?"#2A93EE":i,e=t.svgAttributes,n=t.strokeWidth,s=void 0===n?8:n;return'<svg xmlns="http://www.w3.org/2000/svg" '.concat(e,' viewBox="0 0 100 100" xml:space="preserve">\n\t\t<g transform="matrix(0.2 0 0 0.2 49.8 50.19)">\n            <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -65 -65)" x1="65" y1="130" x2="65" y2="0">\n                <stop offset="100%" style="stop-color:rgba(0, 132, 202, 1);"/>\n                <stop offset="100%" style="stop-color:rgba(0, 0, 255, 1);"/>\n            </linearGradient>\n            <circle style="stroke: rgb(255,255,255); stroke-width: ').concat(s,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(o,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" cx="0" cy="0" r="65"/>\n        </g>\n        <g transform="matrix(-0.12 -0.22 0.22 -0.12 47.11 20.53)">\n            <polygon style="stroke: rgb(255,255,255); stroke-width: ').concat(s,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(o,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" points="0,-42.5 50,42.5 -50,42.5 "/>\n        </g>\n    </svg>')}function n(t){var i=t.color,o=void 0===i?"#2A93EE":i,e=t.svgAttributes,n=t.strokeWidth,s=void 0===n?8:n;return'<svg xmlns="http://www.w3.org/2000/svg" '.concat(e,' viewBox="0 0 100 100" xml:space="preserve">\n\t\t<g transform="matrix(0.2 0 0 0.2 49.8 50.19)">\n            <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -65 -65)" x1="65" y1="130" x2="65" y2="0">\n                <stop offset="100%" style="stop-color:rgba(0, 132, 202, 1);"/>\n                <stop offset="100%" style="stop-color:rgba(0, 0, 255, 1);"/>\n            </linearGradient>\n            <circle style="stroke: rgb(255,255,255); stroke-width: ').concat(s,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(o,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" cx="0" cy="0" r="65"/>\n        </g>\n    </svg>')}o.d(i,{w:()=>e,B:()=>n})},523928:(t,i,o)=>{"use strict";o.d(i,{Z:()=>s});var e=o(923645),n=o.n(e)()((function(t){return t[1]}));n.push([t.id,"/* Compatible with Leaflet 0.7 */\n.msgapi .leaflet-control-locate a {\n  font-size: 1.4em;\n  color: #444;\n  cursor: pointer;\n}\n.msgapi .leaflet-control-locate.active a {\n  color: #2074B6;\n}\n.msgapi .leaflet-control-locate.active.following a {\n  color: #FC8428;\n}\n",""]);const s=n},932818:()=>{var t,i,o;t=L.Marker.prototype._initIcon,i=L.Marker.prototype._setPos,o="msTransform"===L.DomUtil.TRANSFORM,L.Marker.addInitHook((function(){var t=this.options.icon&&this.options.icon.options&&this.options.icon.options.iconAnchor;t&&(t=t[0]+"px "+t[1]+"px"),this.options.rotationOrigin=this.options.rotationOrigin||t||"center bottom",this.options.rotationAngle=this.options.rotationAngle||0,this.on("drag",(function(t){t.target._applyRotation()}))})),L.Marker.include({_initIcon:function(){t.call(this)},_setPos:function(t){i.call(this,t),this._applyRotation()},_applyRotation:function(){this.options.rotationAngle&&(this._icon.style[L.DomUtil.TRANSFORM+"Origin"]=this.options.rotationOrigin,o?this._icon.style[L.DomUtil.TRANSFORM]="rotate("+this.options.rotationAngle+"deg)":this._icon.style[L.DomUtil.TRANSFORM]+=" rotateZ("+this.options.rotationAngle+"deg)")},setRotationAngle:function(t){return this.options.rotationAngle=t,this.update(),this},setRotationOrigin:function(t){return this.options.rotationOrigin=t,this.update(),this}})},880687:(t,i,o)=>{var e,n,s;!function(r,a){n=[o(556307)],void 0===(s="function"==typeof(e=r)?e.apply(i,n):e)||(t.exports=s),void 0!==a&&a.L&&(a.L.Control.Locate=r(L))}((function(t){var i=function(i,o,e){(e=e.split(" ")).forEach((function(e){t.DomUtil[i].call(this,o,e)}))},o=function(t,o){i("addClass",t,o)},e=function(t,o){i("removeClass",t,o)},n=t.Control.extend({options:{position:"topleft",layer:void 0,setView:"untilPan",keepCurrentZoomLevel:!1,flyTo:!1,clickBehavior:{inView:"stop",outOfView:"setView"},returnToPrevBounds:!1,cacheLocation:!0,drawCircle:!0,drawMarker:!0,markerClass:t.CircleMarker,circleStyle:{color:"#136AEC",fillColor:"#136AEC",fillOpacity:.15,weight:2,opacity:.5},markerStyle:{color:"#136AEC",fillColor:"#2A93EE",fillOpacity:.7,weight:2,opacity:.9,radius:5},followCircleStyle:{},followMarkerStyle:{},icon:"fa fa-map-marker",iconLoading:"fa fa-spinner fa-spin",iconElementTag:"span",circlePadding:[0,0],metric:!0,createButtonCallback:function(i,o){var e=t.DomUtil.create("a","leaflet-bar-part leaflet-bar-part-single",i);return e.title=o.strings.title,{link:e,icon:t.DomUtil.create(o.iconElementTag,o.icon,e)}},onLocationError:function(t,i){alert(t.message)},onLocationOutsideMapBounds:function(t){t.stop(),alert(t.options.strings.outsideMapBoundsMsg)},showPopup:!0,strings:{title:"Show me where I am",metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point",outsideMapBoundsMsg:"You seem located outside the boundaries of the map"},locateOptions:{maxZoom:1/0,watch:!0,setView:!1}},initialize:function(i){for(var o in i)"object"==typeof this.options[o]?t.extend(this.options[o],i[o]):this.options[o]=i[o];this.options.followMarkerStyle=t.extend({},this.options.markerStyle,this.options.followMarkerStyle),this.options.followCircleStyle=t.extend({},this.options.circleStyle,this.options.followCircleStyle)},onAdd:function(i){var o=t.DomUtil.create("div","leaflet-control-locate leaflet-bar leaflet-control");this._layer=this.options.layer||new t.LayerGroup,this._layer.addTo(i),this._event=void 0,this._prevBounds=null;var e=this.options.createButtonCallback(o,this.options);return this._link=e.link,this._icon=e.icon,t.DomEvent.on(this._link,"click",t.DomEvent.stopPropagation).on(this._link,"click",t.DomEvent.preventDefault).on(this._link,"click",this._onClick,this).on(this._link,"dblclick",t.DomEvent.stopPropagation),this._resetVariables(),this._map.on("unload",this._unload,this),o},_onClick:function(){if(this._justClicked=!0,this._userPanned=!1,this._active&&!this._event)this.stop();else if(this._active&&void 0!==this._event)switch(this._map.getBounds().contains(this._event.latlng)?this.options.clickBehavior.inView:this.options.clickBehavior.outOfView){case"setView":this.setView();break;case"stop":this.stop(),this.options.returnToPrevBounds&&(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._prevBounds)}else this.options.returnToPrevBounds&&(this._prevBounds=this._map.getBounds()),this.start();this._updateContainerStyle()},start:function(){this._activate(),this._event&&(this._drawMarker(this._map),this.options.setView&&this.setView()),this._updateContainerStyle()},stop:function(){this._deactivate(),this._cleanClasses(),this._resetVariables(),this._removeMarker()},_activate:function(){this._active||(this._map.locate(this.options.locateOptions),this._active=!0,this._map.on("locationfound",this._onLocationFound,this),this._map.on("locationerror",this._onLocationError,this),this._map.on("dragstart",this._onDrag,this))},_deactivate:function(){this._map.stopLocate(),this._active=!1,this.options.cacheLocation||(this._event=void 0),this._map.off("locationfound",this._onLocationFound,this),this._map.off("locationerror",this._onLocationError,this),this._map.off("dragstart",this._onDrag,this)},setView:function(){this._drawMarker(),this._isOutsideMapBounds()?(this._event=void 0,this.options.onLocationOutsideMapBounds(this)):this.options.keepCurrentZoomLevel?(this.options.flyTo?this._map.flyTo:this._map.panTo).bind(this._map)([this._event.latitude,this._event.longitude]):(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._event.bounds,{padding:this.options.circlePadding,maxZoom:this.options.locateOptions.maxZoom})},_drawMarker:function(){void 0===this._event.accuracy&&(this._event.accuracy=0);var i,o,e=this._event.accuracy,n=this._event.latlng;if(this.options.drawCircle){var s=this._isFollowing()?this.options.followCircleStyle:this.options.circleStyle;this._circle?this._circle.setLatLng(n).setRadius(e).setStyle(s):this._circle=t.circle(n,e,s).addTo(this._layer)}if(this.options.metric?(i=e.toFixed(0),o=this.options.strings.metersUnit):(i=(3.2808399*e).toFixed(0),o=this.options.strings.feetUnit),this.options.drawMarker){var r=this._isFollowing()?this.options.followMarkerStyle:this.options.markerStyle;this._marker?(this._marker.setLatLng(n),this._marker.setStyle&&this._marker.setStyle(r)):this._marker=new this.options.markerClass(n,r).addTo(this._layer)}var a=this.options.strings.popup;this.options.showPopup&&a&&this._marker&&this._marker.bindPopup(t.Util.template(a,{distance:i,unit:o}))._popup.setLatLng(n)},_removeMarker:function(){this._layer.clearLayers(),this._marker=void 0,this._circle=void 0},_unload:function(){this.stop(),this._map.off("unload",this._unload,this)},_onLocationError:function(t){3==t.code&&this.options.locateOptions.watch||(this.stop(),this.options.onLocationError(t,this))},_onLocationFound:function(t){if((!this._event||this._event.latlng.lat!==t.latlng.lat||this._event.latlng.lng!==t.latlng.lng||this._event.accuracy!==t.accuracy)&&this._active){switch(this._event=t,this._drawMarker(),this._updateContainerStyle(),this.options.setView){case"once":this._justClicked&&this.setView();break;case"untilPan":this._userPanned||this.setView();break;case"always":this.setView()}this._justClicked=!1}},_onDrag:function(){this._event&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_isFollowing:function(){return!!this._active&&("always"===this.options.setView||("untilPan"===this.options.setView?!this._userPanned:void 0))},_isOutsideMapBounds:function(){return void 0!==this._event&&this._map.options.maxBounds&&!this._map.options.maxBounds.contains(this._event.latlng)},_updateContainerStyle:function(){this._container&&(this._active&&!this._event?this._setClasses("requesting"):this._isFollowing()?this._setClasses("following"):this._active?this._setClasses("active"):this._cleanClasses())},_setClasses:function(t){"requesting"==t?(e(this._container,"active following"),o(this._container,"requesting"),e(this._icon,this.options.icon),o(this._icon,this.options.iconLoading)):"active"==t?(e(this._container,"requesting following"),o(this._container,"active"),e(this._icon,this.options.iconLoading),o(this._icon,this.options.icon)):"following"==t&&(e(this._container,"requesting"),o(this._container,"active following"),e(this._icon,this.options.iconLoading),o(this._icon,this.options.icon))},_cleanClasses:function(){t.DomUtil.removeClass(this._container,"requesting"),t.DomUtil.removeClass(this._container,"active"),t.DomUtil.removeClass(this._container,"following"),e(this._icon,this.options.iconLoading),o(this._icon,this.options.icon)},_resetVariables:function(){this._active=!1,this._justClicked=!1,this._userPanned=!1}});return t.control.locate=function(i){return new t.Control.Locate(i)},n}),window)},23279:(t,i,o)=>{var e=o(513218),n=o(707771),s=o(14841),r=Math.max,a=Math.min;t.exports=function(t,i,o){var c,l,h,p,u,f,d=0,_=!1,v=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(i){var o=c,e=l;return c=l=void 0,d=i,p=t.apply(e,o)}function y(t){return d=t,u=setTimeout(k,i),_?m(t):p}function w(t){var o=t-f;return void 0===f||o>=i||o<0||v&&t-d>=h}function k(){var t=n();if(w(t))return b(t);u=setTimeout(k,function(t){var o=i-(t-f);return v?a(o,h-(t-d)):o}(t))}function b(t){return u=void 0,g&&c?m(t):(c=l=void 0,p)}function O(){var t=n(),o=w(t);if(c=arguments,l=this,f=t,o){if(void 0===u)return y(f);if(v)return clearTimeout(u),u=setTimeout(k,i),m(f)}return void 0===u&&(u=setTimeout(k,i)),p}return i=s(i)||0,e(o)&&(_=!!o.leading,h=(v="maxWait"in o)?r(s(o.maxWait)||0,i):h,g="trailing"in o?!!o.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),d=0,c=f=l=u=void 0},O.flush=function(){return void 0===u?p:b(n())},O}},707771:(t,i,o)=>{var e=o(555639);t.exports=function(){return e.Date.now()}},823493:(t,i,o)=>{var e=o(23279),n=o(513218);t.exports=function(t,i,o){var s=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return n(o)&&(s="leading"in o?!!o.leading:s,r="trailing"in o?!!o.trailing:r),e(t,i,{leading:s,maxWait:i,trailing:r})}}}]);