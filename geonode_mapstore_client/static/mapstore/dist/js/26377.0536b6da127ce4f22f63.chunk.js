(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[26377],{495397:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var i=n(726659);const r={SINGLECLICK:"singleclick",CLICK:i.Z.CLICK,DBLCLICK:i.Z.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}},236949:(t,e,n)=>{"use strict";function i(t){return Math.pow(t,3)}function r(t){return 1-i(1-t)}function s(t){return 3*t*t-2*t*t*t}function o(t){return t}n.d(e,{YQ:()=>i,Vv:()=>r,rd:()=>s,GE:()=>o})},682980:(t,e,n)=>{"use strict";n.d(e,{$6:()=>a,Ko:()=>h,aj:()=>c,yZ:()=>u,Bx:()=>l,V4:()=>d,v8:()=>v,Fi:()=>E,Kf:()=>f,rM:()=>g,QC:()=>p,vY:()=>C,TN:()=>y,QL:()=>K,Xp:()=>P});var i=n(495397),r=n(324919),s=n(183262),o=n(61351);function a(t){const e=arguments;return function(t){let n=!0;for(let i=0,r=e.length;i<r&&(n=n&&e[i](t),n);++i);return n}}const h=function(t){const e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},c=function(t){const e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},u=function(t){return!t.map.getTargetElement().hasAttribute("tabindex")||function(t){const e=t.map.getTargetElement(),n=t.map.getOwnerDocument().activeElement;return e.contains(n)}(t)},l=r.uX,d=function(t){return t.type==i.Z.CLICK},v=function(t){const e=t.originalEvent;return 0==e.button&&!(s.G$&&s.tK&&e.ctrlKey)},E=r.Dv,f=function(t){return t.type==i.Z.SINGLECLICK},g=function(t){const e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},p=function(t){const e=t.originalEvent;return!e.altKey&&(s.tK?e.metaKey:e.ctrlKey)&&!e.shiftKey},C=function(t){const e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},y=function(t){const e=t.originalEvent,n=e.target.tagName;return"INPUT"!==n&&"SELECT"!==n&&"TEXTAREA"!==n&&!e.target.isContentEditable},K=function(t){const e=t.originalEvent;return(0,o.h)(void 0!==e,56),"mouse"==e.pointerType},P=function(t){const e=t.originalEvent;return(0,o.h)(void 0!==e,56),e.isPrimary&&0===e.button}},39480:(t,e,n)=>{"use strict";n.d(e,{Z:()=>h});var i=n(190109),r=n(187982),s=n(63190),o=n(561733);class a extends i.ZP{constructor(t,e,n){super(),void 0!==n&&void 0===e?this.setFlatCoordinates(n,t):(e=e||0,this.setCenterAndRadius(t,e,n))}clone(){const t=new a(this.flatCoordinates.slice(),void 0,this.layout);return t.applyProperties(this),t}closestPointXY(t,e,n,i){const r=this.flatCoordinates,s=t-r[0],o=e-r[1],a=s*s+o*o;if(a<i){if(0===a)for(let t=0;t<this.stride;++t)n[t]=r[t];else{const t=this.getRadius()/Math.sqrt(a);n[0]=r[0]+t*s,n[1]=r[1]+t*o;for(let t=2;t<this.stride;++t)n[t]=r[t]}return n.length=this.stride,a}return i}containsXY(t,e){const n=this.flatCoordinates,i=t-n[0],r=e-n[1];return i*i+r*r<=this.getRadiusSquared_()}getCenter(){return this.flatCoordinates.slice(0,this.stride)}computeExtent(t){const e=this.flatCoordinates,n=e[this.stride]-e[0];return(0,r.T9)(e[0]-n,e[1]-n,e[0]+n,e[1]+n,t)}getRadius(){return Math.sqrt(this.getRadiusSquared_())}getRadiusSquared_(){const t=this.flatCoordinates[this.stride]-this.flatCoordinates[0],e=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return t*t+e*e}getType(){return"Circle"}intersectsExtent(t){const e=this.getExtent();if((0,r.kK)(t,e)){const e=this.getCenter();return t[0]<=e[0]&&t[2]>=e[0]||t[1]<=e[1]&&t[3]>=e[1]||(0,r.H6)(t,this.intersectsCoordinate.bind(this))}return!1}setCenter(t){const e=this.stride,n=this.flatCoordinates[e]-this.flatCoordinates[0],i=t.slice();i[e]=i[0]+n;for(let n=1;n<e;++n)i[e+n]=t[n];this.setFlatCoordinates(this.layout,i),this.changed()}setCenterAndRadius(t,e,n){this.setLayout(n,t,0),this.flatCoordinates||(this.flatCoordinates=[]);const i=this.flatCoordinates;let r=(0,s.IG)(i,0,t,this.stride);i[r++]=i[0]+e;for(let t=1,e=this.stride;t<e;++t)i[r++]=i[t];i.length=r,this.changed()}getCoordinates(){return null}setCoordinates(t,e){}setRadius(t){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+t,this.changed()}rotate(t,e){const n=this.getCenter(),i=this.getStride();this.setCenter((0,o.U1)(n,0,n.length,i,t,e,n)),this.changed()}}a.prototype.transform;const h=a},463332:(t,e,n)=>{"use strict";n.d(e,{Cv:()=>a,FW:()=>h,ZP:()=>c});var i=n(149232),r=n(673751),s=n(236949);class o extends i.Z{constructor(t){super(),this.on,this.once,this.un,t&&t.handleEvent&&(this.handleEvent=t.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get(r.Z.ACTIVE)}getMap(){return this.map_}handleEvent(t){return!0}setActive(t){this.set(r.Z.ACTIVE,t)}setMap(t){this.map_=t}}function a(t,e,n){const i=t.getCenterInternal();if(i){const r=[i[0]+e[0],i[1]+e[1]];t.animateInternal({duration:void 0!==n?n:250,easing:s.GE,center:t.getConstrainedCenter(r)})}}function h(t,e,n,i){const r=t.getZoom();if(void 0===r)return;const o=t.getConstrainedZoom(r+e),a=t.getResolutionForZoom(o);t.getAnimating()&&t.cancelAnimations(),t.animate({resolution:a,anchor:n,duration:void 0!==i?i:250,easing:s.Vv})}const c=o},769254:(t,e,n)=>{"use strict";n.d(e,{S:()=>o,Z:()=>a});var i=n(463332),r=n(495397);class s extends i.ZP{constructor(t){super(t=t||{}),t.handleDownEvent&&(this.handleDownEvent=t.handleDownEvent),t.handleDragEvent&&(this.handleDragEvent=t.handleDragEvent),t.handleMoveEvent&&(this.handleMoveEvent=t.handleMoveEvent),t.handleUpEvent&&(this.handleUpEvent=t.handleUpEvent),t.stopDown&&(this.stopDown=t.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(t){return!1}handleDragEvent(t){}handleEvent(t){if(!t.originalEvent)return!0;let e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==r.Z.POINTERDRAG)this.handleDragEvent(t),t.originalEvent.preventDefault();else if(t.type==r.Z.POINTERUP){const e=this.handleUpEvent(t);this.handlingDownUpSequence=e&&this.targetPointers.length>0}}else if(t.type==r.Z.POINTERDOWN){const n=this.handleDownEvent(t);this.handlingDownUpSequence=n,e=this.stopDown(n)}else t.type==r.Z.POINTERMOVE&&this.handleMoveEvent(t);return!e}handleMoveEvent(t){}handleUpEvent(t){return!1}stopDown(t){return t}updateTrackedPointers_(t){t.activePointers&&(this.targetPointers=t.activePointers)}}function o(t){const e=t.length;let n=0,i=0;for(let r=0;r<e;r++)n+=t[r].clientX,i+=t[r].clientY;return{clientX:n/e,clientY:i/e}}const a=s},673751:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const i={ACTIVE:"active"}},958521:(t,e,n)=>{"use strict";n.d(e,{h$:()=>r,YP:()=>s,gE:()=>o,Gw:()=>a});var i=n(539265);function r(t){if(void 0!==t)return 0}function s(t){if(void 0!==t)return t}function o(t){const e=2*Math.PI/t;return function(t,n){return n?t:void 0!==t?t=Math.floor(t/e+.5)*e:void 0}}function a(t){return t=t||(0,i.Yr)(5),function(e,n){return n?e:void 0!==e?Math.abs(e)<=t?0:e:void 0}}}}]);