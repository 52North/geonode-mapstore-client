(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7498],{21994:(e,t,r)=>{!function(e){"use strict";function t(t,r){clearTimeout(r.timeout),e.off(window,"mouseup",r.hurry),e.off(window,"keyup",r.hurry)}e.defineOption("autoRefresh",!1,(function(r,n){r.state.autoRefresh&&(t(0,r.state.autoRefresh),r.state.autoRefresh=null),n&&0==r.display.wrapper.offsetHeight&&function(r,n){function a(){r.display.wrapper.offsetHeight?(t(0,n),r.display.lastWrapHeight!=r.display.wrapper.clientHeight&&r.refresh()):n.timeout=setTimeout(a,n.delay)}n.timeout=setTimeout(a,n.delay),n.hurry=function(){clearTimeout(n.timeout),n.timeout=setTimeout(a,50)},e.on(window,"mouseup",n.hurry),e.on(window,"keyup",n.hurry)}(r,r.state.autoRefresh={delay:n.delay||250})}))}(r(4631))},62193:(e,t,r)=>{!function(e){"use strict";e.registerHelper("lint","json",(function(t){var r=[];jsonlint.parseError=function(t,n){var a=n.loc;r.push({from:e.Pos(a.first_line-1,a.first_column),to:e.Pos(a.last_line-1,a.last_column),message:t})};try{jsonlint.parse(t)}catch(e){}return r}))}(r(4631))},3256:(e,t,r)=>{!function(e){"use strict";var t="CodeMirror-lint-markers";function r(e){e.parentNode&&e.parentNode.removeChild(e)}function n(t,n,a){var o=function(t,r){var n=document.createElement("div");function a(t){if(!n.parentNode)return e.off(document,"mousemove",a);n.style.top=Math.max(0,t.clientY-n.offsetHeight-5)+"px",n.style.left=t.clientX+5+"px"}return n.className="CodeMirror-lint-tooltip",n.appendChild(r.cloneNode(!0)),document.body.appendChild(n),e.on(document,"mousemove",a),a(t),null!=n.style.opacity&&(n.style.opacity=1),n}(t,n);function i(){var t;e.off(a,"mouseout",i),o&&((t=o).parentNode&&(null==t.style.opacity&&r(t),t.style.opacity=0,setTimeout((function(){r(t)}),600)),o=null)}var c=setInterval((function(){if(o)for(var e=a;;e=e.parentNode){if(e&&11==e.nodeType&&(e=e.host),e==document.body)return;if(!e){i();break}}if(!o)return clearInterval(c)}),400);e.on(a,"mouseout",i)}function a(e,t,r){this.marked=[],this.options=t,this.timeout=null,this.hasGutter=r,this.onMouseOver=function(t){!function(e,t){var r=t.target||t.srcElement;if(/\bCodeMirror-lint-mark-/.test(r.className)){for(var a=r.getBoundingClientRect(),o=(a.left+a.right)/2,i=(a.top+a.bottom)/2,s=e.findMarksAt(e.coordsChar({left:o,top:i},"client")),l=[],u=0;u<s.length;++u){var f=s[u].__annotation;f&&l.push(f)}l.length&&function(e,t){for(var r=t.target||t.srcElement,a=document.createDocumentFragment(),o=0;o<e.length;o++){var i=e[o];a.appendChild(c(i))}n(t,a,r)}(l,t)}}(e,t)},this.waitingFor=0}function o(e){var r=e.state.lint;r.hasGutter&&e.clearGutter(t);for(var n=0;n<r.marked.length;++n)r.marked[n].clear();r.marked.length=0}function i(t,r,a,o){var i=document.createElement("div"),c=i;return i.className="CodeMirror-lint-marker-"+r,a&&((c=i.appendChild(document.createElement("div"))).className="CodeMirror-lint-marker-multiple"),0!=o&&e.on(c,"mouseover",(function(e){n(e,t,c)})),i}function c(e){var t=e.severity;t||(t="error");var r=document.createElement("div");return r.className="CodeMirror-lint-message-"+t,r.appendChild(document.createTextNode(e.message)),r}function s(t){var r=t.state.lint.options,n=r.options||r,a=r.getAnnotations||t.getHelper(e.Pos(0,0),"lint");a&&(r.async||a.async?function(t,r,n){var a=t.state.lint,o=++a.waitingFor;function i(){o=-1,t.off("change",i)}t.on("change",i),r(t.getValue(),(function(r,n){t.off("change",i),a.waitingFor==o&&(n&&r instanceof e&&(r=n),l(t,r))}),n,t)}(t,a,n):l(t,a(t.getValue(),n,t)))}function l(e,r){o(e);for(var n=e.state.lint,a=n.options,s=function(e){for(var t=[],r=0;r<e.length;++r){var n=e[r],a=n.from.line;(t[a]||(t[a]=[])).push(n)}return t}(r),l=0;l<s.length;++l){var u=s[l];if(u){for(var f=null,m=n.hasGutter&&document.createDocumentFragment(),p=0;p<u.length;++p){var d=u[p],v=d.severity;v||(v="error"),y=v,f="error"==(g=f)?g:y,a.formatAnnotation&&(d=a.formatAnnotation(d)),n.hasGutter&&m.appendChild(c(d)),d.to&&n.marked.push(e.markText(d.from,d.to,{className:"CodeMirror-lint-mark-"+v,__annotation:d}))}n.hasGutter&&e.setGutterMarker(l,t,i(m,f,u.length>1,n.options.tooltips))}}var g,y;a.onUpdateLinting&&a.onUpdateLinting(r,s,e)}function u(e){var t=e.state.lint;t&&(clearTimeout(t.timeout),t.timeout=setTimeout((function(){s(e)}),t.options.delay||500))}e.defineOption("lint",!1,(function(r,n,i){if(i&&i!=e.Init&&(o(r),!1!==r.state.lint.options.lintOnChange&&r.off("change",u),e.off(r.getWrapperElement(),"mouseover",r.state.lint.onMouseOver),clearTimeout(r.state.lint.timeout),delete r.state.lint),n){for(var c=r.getOption("gutters"),l=!1,f=0;f<c.length;++f)c[f]==t&&(l=!0);var m=r.state.lint=new a(r,(p=n)instanceof Function?{getAnnotations:p}:(p&&!0!==p||(p={}),p),l);!1!==m.options.lintOnChange&&r.on("change",u),0!=m.options.tooltips&&e.on(r.getWrapperElement(),"mouseover",m.onMouseOver),s(r)}var p})),e.defineExtension("performLint",(function(){this.state.lint&&s(this)}))}(r(4631))},96876:(e,t,r)=>{!function(e){"use strict";function t(e,t,r){return/^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}e.defineMode("javascript",(function(r,n){var a,o,i=r.indentUnit,c=n.statementIndent,s=n.jsonld,l=n.json||s,u=n.typescript,f=n.wordCharacters||/[\w$\xa1-\uffff]/,m=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("operator"),o={type:"atom",style:"atom"},i={if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:n,break:n,continue:n,new:e("new"),delete:n,throw:n,debugger:n,var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:a,typeof:a,instanceof:a,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n,async:e("async")};if(u){var c={type:"variable",style:"variable-3"},s={interface:e("class"),implements:n,namespace:n,module:e("module"),enum:e("module"),public:e("modifier"),private:e("modifier"),protected:e("modifier"),abstract:e("modifier"),as:a,string:c,number:c,boolean:c,any:c};for(var l in s)i[l]=s[l]}return i}(),p=/[+\-*&%=<>!?|~^]/,d=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function v(e,t,r){return a=e,o=r,t}function g(e,r){var n,a=e.next();if('"'==a||"'"==a)return r.tokenize=(n=a,function(e,t){var r,a=!1;if(s&&"@"==e.peek()&&e.match(d))return t.tokenize=g,v("jsonld-keyword","meta");for(;null!=(r=e.next())&&(r!=n||a);)a=!a&&"\\"==r;return a||(t.tokenize=g),v("string","string")}),r.tokenize(e,r);if("."==a&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return v("number","number");if("."==a&&e.match(".."))return v("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(a))return v(a);if("="==a&&e.eat(">"))return v("=>","operator");if("0"==a&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),v("number","number");if("0"==a&&e.eat(/o/i))return e.eatWhile(/[0-7]/i),v("number","number");if("0"==a&&e.eat(/b/i))return e.eatWhile(/[01]/i),v("number","number");if(/\d/.test(a))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),v("number","number");if("/"==a)return e.eat("*")?(r.tokenize=y,y(e,r)):e.eat("/")?(e.skipToEnd(),v("comment","comment")):t(e,r,1)?(function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),v("regexp","string-2")):(e.eatWhile(p),v("operator","operator",e.current()));if("`"==a)return r.tokenize=h,h(e,r);if("#"==a)return e.skipToEnd(),v("error","error");if(p.test(a))return e.eatWhile(p),v("operator","operator",e.current());if(f.test(a)){e.eatWhile(f);var o=e.current(),i=m.propertyIsEnumerable(o)&&m[o];return i&&"."!=r.lastType?v(i.type,i.style,o):v("variable","variable",o)}}function y(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=g;break}n="*"==r}return v("comment","comment")}function h(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=g;break}n=!n&&"\\"==r}return v("quasi","string-2",e.current())}var b="([{}])";function k(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){for(var n=0,a=!1,o=r-1;o>=0;--o){var i=e.string.charAt(o),c=b.indexOf(i);if(c>=0&&c<3){if(!n){++o;break}if(0==--n){"("==i&&(a=!0);break}}else if(c>=3&&c<6)++n;else if(f.test(i))a=!0;else{if(/["'\/]/.test(i))return;if(a&&!n){++o;break}}}a&&!n&&(t.fatArrowAt=o)}}var w={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0};function x(e,t,r,n,a,o){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=o,null!=n&&(this.align=n)}function C(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}var M={state:null,column:null,marked:null,cc:null};function E(){for(var e=arguments.length-1;e>=0;e--)M.cc.push(arguments[e])}function j(){return E.apply(null,arguments),!0}function T(e){function t(t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}var r=M.state;if(M.marked="def",r.context){if(t(r.localVars))return;r.localVars={name:e,next:r.localVars}}else{if(t(r.globalVars))return;n.globalVars&&(r.globalVars={name:e,next:r.globalVars})}}var A={name:"this",next:{name:"arguments"}};function O(){M.state.context={prev:M.state.context,vars:M.state.localVars},M.state.localVars=A}function _(){M.state.localVars=M.state.context.vars,M.state.context=M.state.context.prev}function D(e,t){var r=function(){var r=M.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new x(n,M.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function I(){var e=M.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function V(e){return function t(r){return r==e?j():";"==e?E():j(t)}}function z(e,t){return"var"==e?j(D("vardef",t.length),le,V(";"),I):"keyword a"==e?j(D("form"),N,z,I):"keyword b"==e?j(D("form"),z,I):"{"==e?j(D("}"),te,I):";"==e?j():"if"==e?("else"==M.state.lexical.info&&M.state.cc[M.state.cc.length-1]==I&&M.state.cc.pop()(),j(D("form"),N,z,I,de)):"function"==e?j(ke):"for"==e?j(D("form"),ve,z,I):"variable"==e?j(D("stat"),Z):"switch"==e?j(D("form"),N,D("}","switch"),V("{"),te,I,I):"case"==e?j(N,V(":")):"default"==e?j(V(":")):"catch"==e?j(D("form"),O,V("("),we,V(")"),z,I,_):"class"==e?j(D("form"),xe,I):"export"==e?j(D("stat"),je,I):"import"==e?j(D("stat"),Te,I):"module"==e?j(D("form"),ue,D("}"),V("{"),te,I,I):"async"==e?j(z):E(D("stat"),N,V(";"),I)}function N(e){return B(e,!1)}function R(e){return B(e,!0)}function B(e,t){if(M.state.fatArrowAt==M.stream.start){var r=t?G:q;if("("==e)return j(O,D(")"),Q(ue,")"),I,V("=>"),r,_);if("variable"==e)return E(O,ue,V("=>"),r,_)}var n=t?H:S;return w.hasOwnProperty(e)?j(n):"function"==e?j(ke,n):"keyword c"==e||"async"==e?j(t?F:P):"("==e?j(D(")"),P,V(")"),I,n):"operator"==e||"spread"==e?j(t?R:N):"["==e?j(D("]"),De,I,n):"{"==e?ee(K,"}",null,n):"quasi"==e?E(U,n):"new"==e?j(function(e){return function(t){return"."==t?j(e?L:$):E(e?R:N)}}(t)):j()}function P(e){return e.match(/[;\}\)\],]/)?E():E(N)}function F(e){return e.match(/[;\}\)\],]/)?E():E(R)}function S(e,t){return","==e?j(N):H(e,t,!1)}function H(e,t,r){var n=0==r?S:H,a=0==r?N:R;return"=>"==e?j(O,r?G:q,_):"operator"==e?/\+\+|--/.test(t)?j(n):"?"==t?j(N,V(":"),a):j(a):"quasi"==e?E(U,n):";"!=e?"("==e?ee(R,")","call",n):"."==e?j(X,n):"["==e?j(D("]"),P,V("]"),I,n):void 0:void 0}function U(e,t){return"quasi"!=e?E():"${"!=t.slice(t.length-2)?j(U):j(N,W)}function W(e){if("}"==e)return M.marked="string-2",M.state.tokenize=h,j(U)}function q(e){return k(M.stream,M.state),E("{"==e?z:N)}function G(e){return k(M.stream,M.state),E("{"==e?z:R)}function $(e,t){if("target"==t)return M.marked="keyword",j(S)}function L(e,t){if("target"==t)return M.marked="keyword",j(H)}function Z(e){return":"==e?j(I,z):E(S,V(";"),I)}function X(e){if("variable"==e)return M.marked="property",j()}function K(e,t){return"async"==e?(M.marked="property",j(K)):"variable"==e||"keyword"==M.style?(M.marked="property",j("get"==t||"set"==t?Y:J)):"number"==e||"string"==e?(M.marked=s?"property":M.style+" property",j(J)):"jsonld-keyword"==e?j(J):"modifier"==e?j(K):"["==e?j(N,V("]"),J):"spread"==e?j(N):":"==e?E(J):void 0}function Y(e){return"variable"!=e?E(J):(M.marked="property",j(ke))}function J(e){return":"==e?j(R):"("==e?E(ke):void 0}function Q(e,t){function r(n,a){if(","==n){var o=M.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),j((function(r,n){return r==t||n==t?E():E(e)}),r)}return n==t||a==t?j():j(V(t))}return function(n,a){return n==t||a==t?j():E(e,r)}}function ee(e,t,r){for(var n=3;n<arguments.length;n++)M.cc.push(arguments[n]);return j(D(t,r),Q(e,t),I)}function te(e){return"}"==e?j():E(z,te)}function re(e){if(u&&":"==e)return j(ae)}function ne(e,t){if("="==t)return j(R)}function ae(e){return"variable"==e?(M.marked="variable-3",j(se)):"{"==e?j(Q(ie,"}")):"("==e?j(Q(ce,")"),oe):void 0}function oe(e){if("=>"==e)return j(ae)}function ie(e){return"variable"==e||"keyword"==M.style?(M.marked="property",j(ie)):":"==e?j(ae):void 0}function ce(e){return"variable"==e?j(ce):":"==e?j(ae):void 0}function se(e,t){return"<"==t?j(Q(ae,">"),se):"["==e?j(V("]"),se):void 0}function le(){return E(ue,re,me,pe)}function ue(e,t){return"modifier"==e?j(ue):"variable"==e?(T(t),j()):"spread"==e?j(ue):"["==e?ee(ue,"]"):"{"==e?ee(fe,"}"):void 0}function fe(e,t){return"variable"!=e||M.stream.match(/^\s*:/,!1)?("variable"==e&&(M.marked="property"),"spread"==e?j(ue):"}"==e?E():j(V(":"),ue,me)):(T(t),j(me))}function me(e,t){if("="==t)return j(R)}function pe(e){if(","==e)return j(le)}function de(e,t){if("keyword b"==e&&"else"==t)return j(D("form","else"),z,I)}function ve(e){if("("==e)return j(D(")"),ge,V(")"),I)}function ge(e){return"var"==e?j(le,V(";"),he):";"==e?j(he):"variable"==e?j(ye):E(N,V(";"),he)}function ye(e,t){return"in"==t||"of"==t?(M.marked="keyword",j(N)):j(S,he)}function he(e,t){return";"==e?j(be):"in"==t||"of"==t?(M.marked="keyword",j(N)):E(N,V(";"),be)}function be(e){")"!=e&&j(N)}function ke(e,t){return"*"==t?(M.marked="keyword",j(ke)):"variable"==e?(T(t),j(ke)):"("==e?j(O,D(")"),Q(we,")"),I,re,z,_):void 0}function we(e){return"spread"==e?j(we):E(ue,re,ne)}function xe(e,t){if("variable"==e)return T(t),j(Ce)}function Ce(e,t){return"extends"==t?j(u?ae:N,Ce):"{"==e?j(D("}"),Me,I):void 0}function Me(e,t){return"variable"==e||"keyword"==M.style?"static"==t?(M.marked="keyword",j(Me)):(M.marked="property","get"==t||"set"==t?j(Ee,ke,Me):j(ke,Me)):"*"==t?(M.marked="keyword",j(Me)):";"==e?j(Me):"}"==e?j():void 0}function Ee(e){return"variable"!=e?E():(M.marked="property",j())}function je(e,t){return"*"==t?(M.marked="keyword",j(_e,V(";"))):"default"==t?(M.marked="keyword",j(N,V(";"))):E(z)}function Te(e){return"string"==e?j():E(Ae,_e)}function Ae(e,t){return"{"==e?ee(Ae,"}"):("variable"==e&&T(t),"*"==t&&(M.marked="keyword"),j(Oe))}function Oe(e,t){if("as"==t)return M.marked="keyword",j(Ae)}function _e(e,t){if("from"==t)return M.marked="keyword",j(N)}function De(e){return"]"==e?j():E(Q(R,"]"))}return I.lex=!0,{startState:function(e){var t={tokenize:g,lastType:"sof",cc:[],lexical:new x((e||0)-i,0,"block",!1),localVars:n.localVars,context:n.localVars&&{vars:n.localVars},indented:e||0};return n.globalVars&&"object"==typeof n.globalVars&&(t.globalVars=n.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),k(e,t)),t.tokenize!=y&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==a?r:(t.lastType="operator"!=a||"++"!=o&&"--"!=o?a:"incdec",function(e,t,r,n,a){var o=e.cc;for(M.state=e,M.stream=a,M.marked=null,M.cc=o,M.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((o.length?o.pop():l?N:z)(r,n)){for(;o.length&&o[o.length-1].lex;)o.pop()();return M.marked?M.marked:"variable"==r&&C(e,n)?"variable-2":t}}(t,r,a,o,e))},indent:function(t,r){if(t.tokenize==y)return e.Pass;if(t.tokenize!=g)return 0;var a=r&&r.charAt(0),o=t.lexical;if(!/^\s*else\b/.test(r))for(var s=t.cc.length-1;s>=0;--s){var l=t.cc[s];if(l==I)o=o.prev;else if(l!=de)break}"stat"==o.type&&"}"==a&&(o=o.prev),c&&")"==o.type&&"stat"==o.prev.type&&(o=o.prev);var u=o.type,f=a==u;return"vardef"==u?o.indented+("operator"==t.lastType||","==t.lastType?o.info+1:0):"form"==u&&"{"==a?o.indented:"form"==u?o.indented+i:"stat"==u?o.indented+(function(e,t){return"operator"==e.lastType||","==e.lastType||p.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,r)?c||i:0):"switch"!=o.info||f||0==n.doubleIndentSwitch?o.align?o.column+(f?0:1):o.indented+(f?0:i):o.indented+(/^(?:case|default)\b/.test(r)?i:2*i)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:l?null:"/*",blockCommentEnd:l?null:"*/",lineComment:l?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:l?"json":"javascript",jsonldMode:s,jsonMode:l,expressionAllowed:t,skipExpression:function(e){var t=e.cc[e.cc.length-1];t!=N&&t!=R||e.cc.pop()}}})),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}(r(4631))},20640:(e,t,r)=>{"use strict";var n=r(11742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,o,i,c,s,l,u=!1;t||(t={}),r=t.debug||!1;try{if(i=n(),c=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=a[t.format]||a.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(n){r&&console.error("unable to copy using execCommand: ",n),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(n){r&&console.error("unable to copy using clipboardData: ",n),r&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),l&&document.body.removeChild(l),i()}return u}},5206:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,"/*\n\n    Name:       material\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original material color scheme by Mattia Astorino (https://github.com/equinusocio/material-theme)\n\n*/\n\n.msgapi .cm-s-material {\n  background-color: #263238;\n  color: rgba(233, 237, 237, 1);\n}\n.msgapi .cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: rgb(83,127,126);\n  border: none;\n}\n.msgapi .cm-s-material .CodeMirror-guttermarker, .msgapi .cm-s-material .CodeMirror-guttermarker-subtle, .msgapi .cm-s-material .CodeMirror-linenumber { color: rgb(83,127,126); }\n.msgapi .cm-s-material .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n.msgapi .cm-s-material div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }\n.msgapi .cm-s-material.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.msgapi .cm-s-material .CodeMirror-line::selection, .msgapi .cm-s-material .CodeMirror-line > span::selection, .msgapi .cm-s-material .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.msgapi .cm-s-material .CodeMirror-line::-moz-selection, .msgapi .cm-s-material .CodeMirror-line > span::-moz-selection, .msgapi .cm-s-material .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n\n.msgapi .cm-s-material .CodeMirror-activeline-background { background: rgba(0, 0, 0, 0); }\n.msgapi .cm-s-material .cm-keyword { color: rgba(199, 146, 234, 1); }\n.msgapi .cm-s-material .cm-operator { color: rgba(233, 237, 237, 1); }\n.msgapi .cm-s-material .cm-variable-2 { color: #80CBC4; }\n.msgapi .cm-s-material .cm-variable-3 { color: #82B1FF; }\n.msgapi .cm-s-material .cm-builtin { color: #DECB6B; }\n.msgapi .cm-s-material .cm-atom { color: #F77669; }\n.msgapi .cm-s-material .cm-number { color: #F77669; }\n.msgapi .cm-s-material .cm-def { color: rgba(233, 237, 237, 1); }\n.msgapi .cm-s-material .cm-string { color: #C3E88D; }\n.msgapi .cm-s-material .cm-string-2 { color: #80CBC4; }\n.msgapi .cm-s-material .cm-comment { color: #546E7A; }\n.msgapi .cm-s-material .cm-variable { color: #82B1FF; }\n.msgapi .cm-s-material .cm-tag { color: #80CBC4; }\n.msgapi .cm-s-material .cm-meta { color: #80CBC4; }\n.msgapi .cm-s-material .cm-attribute { color: #FFCB6B; }\n.msgapi .cm-s-material .cm-property { color: #80CBAE; }\n.msgapi .cm-s-material .cm-qualifier { color: #DECB6B; }\n.msgapi .cm-s-material .cm-variable-3 { color: #DECB6B; }\n.msgapi .cm-s-material .cm-tag { color: rgba(255, 83, 112, 1); }\n.msgapi .cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #EC5F67;\n}\n.msgapi .cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n",""]);const o=a},48983:(e,t,r)=>{var n=r(40371)("length");e.exports=n},88016:(e,t,r)=>{var n=r(48983),a=r(62689),o=r(21903);e.exports=function(e){return a(e)?o(e):n(e)}},21903:e=>{var t="\\ud800-\\udfff",r="["+t+"]",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",a="\\ud83c[\\udffb-\\udfff]",o="[^"+t+"]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:"+n+"|"+a+")?",l="[\\ufe0e\\ufe0f]?",u=l+s+"(?:\\u200d(?:"+[o,i,c].join("|")+")"+l+s+")*",f="(?:"+[o+n+"?",n,i,c,r].join("|")+")",m=RegExp(a+"(?="+a+")|"+f+u,"g");e.exports=function(e){for(var t=m.lastIndex=0;m.test(e);)++t;return t}},84238:(e,t,r)=>{var n=r(280),a=r(64160),o=r(98612),i=r(47037),c=r(88016);e.exports=function(e){if(null==e)return 0;if(o(e))return i(e)?c(e):e.length;var t=a(e);return"[object Map]"==t||"[object Set]"==t?e.size:n(e).length}},74300:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=c(r(24852)),i=c(r(20640));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.CopyToClipboard=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=Array(a),l=0;l<a;l++)c[l]=arguments[l];return r=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.onClick=function(e){var t=n.props,r=t.text,a=t.onCopy,c=t.children,s=t.options,l=o.default.Children.only(c),u=(0,i.default)(r,s);a&&a(r,u),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e)},s(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["text","onCopy","options","children"]),a=o.default.Children.only(t);return o.default.cloneElement(a,n({},r,{onClick:this.onClick}))}}]),t}(o.default.PureComponent)},74855:(e,t,r)=>{"use strict";var n=r(74300).CopyToClipboard;e.exports=n},99715:(e,t,r)=>{"use strict";var n=r(93379),a=r.n(n),o=r(5206);a()(o.Z,{insert:"head",singleton:!1}),o.Z.locals},11742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);