import{R as N,r as Ht}from"./index-BBkUAzwr.js";var _=function(){return _=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_.apply(this,arguments)};function ot(t,e,r){if(r||arguments.length===2)for(var n=0,s=e.length,o;n<s;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var v="-ms-",st="-moz-",m="-webkit-",he="comm",It="rule",qt="decl",He="@import",de="@keyframes",qe="@layer",le=Math.abs,Kt=String.fromCharCode,Dt=Object.assign;function Ke(t,e){return R(t,0)^45?(((e<<2^R(t,0))<<2^R(t,1))<<2^R(t,2))<<2^R(t,3):0}function ge(t){return t.trim()}function D(t,e){return(t=e.exec(t))?t[0]:t}function f(t,e,r){return t.replace(e,r)}function gt(t,e,r){return t.indexOf(e,r)}function R(t,e){return t.charCodeAt(e)|0}function U(t,e,r){return t.slice(e,r)}function T(t){return t.length}function me(t){return t.length}function nt(t,e){return e.push(t),t}function Ue(t,e){return t.map(e).join("")}function te(t,e){return t.filter(function(r){return!D(r,e)})}var xt=1,Z=1,ye=0,k=0,A=0,X="";function At(t,e,r,n,s,o,i,u){return{value:t,root:e,parent:r,type:n,props:s,children:o,line:xt,column:Z,length:i,return:"",siblings:u}}function G(t,e){return Dt(At("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function q(t){for(;t.root;)t=G(t.root,{children:[t]});nt(t,t.siblings)}function Ze(){return A}function Je(){return A=k>0?R(X,--k):0,Z--,A===10&&(Z=1,xt--),A}function O(){return A=k<ye?R(X,k++):0,Z++,A===10&&(Z=1,xt++),A}function Y(){return R(X,k)}function mt(){return k}function Et(t,e){return U(X,t,e)}function zt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ve(t){return xt=Z=1,ye=T(X=t),k=0,[]}function Xe(t){return X="",t}function Nt(t){return ge(Et(k-1,Ft(t===91?t+2:t===40?t+1:t)))}function Qe(t){for(;(A=Y())&&A<33;)O();return zt(t)>2||zt(A)>3?"":" "}function tr(t,e){for(;--e&&O()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return Et(t,mt()+(e<6&&Y()==32&&O()==32))}function Ft(t){for(;O();)switch(A){case t:return k;case 34:case 39:t!==34&&t!==39&&Ft(A);break;case 40:t===41&&Ft(t);break;case 92:O();break}return k}function er(t,e){for(;O()&&t+A!==57;)if(t+A===84&&Y()===47)break;return"/*"+Et(e,k-1)+"*"+Kt(t===47?t:O())}function rr(t){for(;!zt(Y());)O();return Et(t,k)}function nr(t){return Xe(yt("",null,null,null,[""],t=Ve(t),0,[0],t))}function yt(t,e,r,n,s,o,i,u,a){for(var c=0,p=0,d=i,g=0,l=0,b=0,I=1,P=1,x=1,w=0,S="",C=s,E=o,y=n,h=S;P;)switch(b=w,w=O()){case 40:if(b!=108&&R(h,d-1)==58){gt(h+=f(Nt(w),"&","&\f"),"&\f",le(c?u[c-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:h+=Nt(w);break;case 9:case 10:case 13:case 32:h+=Qe(b);break;case 92:h+=tr(mt()-1,7);continue;case 47:switch(Y()){case 42:case 47:nt(sr(er(O(),mt()),e,r,a),a);break;default:h+="/"}break;case 123*I:u[c++]=T(h)*x;case 125*I:case 59:case 0:switch(w){case 0:case 125:P=0;case 59+p:x==-1&&(h=f(h,/\f/g,"")),l>0&&T(h)-d&&nt(l>32?re(h+";",n,r,d-1,a):re(f(h," ","")+";",n,r,d-2,a),a);break;case 59:h+=";";default:if(nt(y=ee(h,e,r,c,p,s,u,S,C=[],E=[],d,o),o),w===123)if(p===0)yt(h,e,y,y,C,o,d,u,E);else switch(g===99&&R(h,3)===110?100:g){case 100:case 108:case 109:case 115:yt(t,y,y,n&&nt(ee(t,y,y,0,0,s,u,S,s,C=[],d,E),E),s,E,d,u,n?C:E);break;default:yt(h,y,y,y,[""],E,0,u,E)}}c=p=l=0,I=x=1,S=h="",d=i;break;case 58:d=1+T(h),l=b;default:if(I<1){if(w==123)--I;else if(w==125&&I++==0&&Je()==125)continue}switch(h+=Kt(w),w*I){case 38:x=p>0?1:(h+="\f",-1);break;case 44:u[c++]=(T(h)-1)*x,x=1;break;case 64:Y()===45&&(h+=Nt(O())),g=Y(),p=d=T(S=h+=rr(mt())),w++;break;case 45:b===45&&T(h)==2&&(I=0)}}return o}function ee(t,e,r,n,s,o,i,u,a,c,p,d){for(var g=s-1,l=s===0?o:[""],b=me(l),I=0,P=0,x=0;I<n;++I)for(var w=0,S=U(t,g+1,g=le(P=i[I])),C=t;w<b;++w)(C=ge(P>0?l[w]+" "+S:f(S,/&\f/g,l[w])))&&(a[x++]=C);return At(t,e,r,s===0?It:u,a,c,p,d)}function sr(t,e,r,n){return At(t,e,r,he,Kt(Ze()),U(t,2,-2),0,n)}function re(t,e,r,n,s){return At(t,e,r,qt,U(t,0,n),U(t,n+1,-1),n,s)}function ve(t,e,r){switch(Ke(t,e)){case 5103:return m+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+t+t;case 4789:return st+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return m+t+st+t+v+t+t;case 5936:switch(R(t,e+11)){case 114:return m+t+v+f(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return m+t+v+f(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return m+t+v+f(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return m+t+v+t+t;case 6165:return m+t+v+"flex-"+t+t;case 5187:return m+t+f(t,/(\w+).+(:[^]+)/,m+"box-$1$2"+v+"flex-$1$2")+t;case 5443:return m+t+v+"flex-item-"+f(t,/flex-|-self/g,"")+(D(t,/flex-|baseline/)?"":v+"grid-row-"+f(t,/flex-|-self/g,""))+t;case 4675:return m+t+v+"flex-line-pack"+f(t,/align-content|flex-|-self/g,"")+t;case 5548:return m+t+v+f(t,"shrink","negative")+t;case 5292:return m+t+v+f(t,"basis","preferred-size")+t;case 6060:return m+"box-"+f(t,"-grow","")+m+t+v+f(t,"grow","positive")+t;case 4554:return m+f(t,/([^-])(transform)/g,"$1"+m+"$2")+t;case 6187:return f(f(f(t,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),t,"")+t;case 5495:case 3959:return f(t,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return f(f(t,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+t+t;case 4200:if(!D(t,/flex-|baseline/))return v+"grid-column-align"+U(t,e)+t;break;case 2592:case 3360:return v+f(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,s){return e=s,D(n.props,/grid-\w+-end/)})?~gt(t+(r=r[e].value),"span",0)?t:v+f(t,"-start","")+t+v+"grid-row-span:"+(~gt(r,"span",0)?D(r,/\d+/):+D(r,/\d+/)-+D(t,/\d+/))+";":v+f(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return D(n.props,/grid-\w+-start/)})?t:v+f(f(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return f(t,/(.+)-inline(.+)/,m+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(T(t)-1-e>6)switch(R(t,e+1)){case 109:if(R(t,e+4)!==45)break;case 102:return f(t,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+st+(R(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~gt(t,"stretch",0)?ve(f(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return f(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,o,i,u,a,c){return v+s+":"+o+c+(i?v+s+"-span:"+(u?a:+a-+o)+c:"")+t});case 4949:if(R(t,e+6)===121)return f(t,":",":"+m)+t;break;case 6444:switch(R(t,R(t,14)===45?18:11)){case 120:return f(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+m+(R(t,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+v+"$2box$3")+t;case 100:return f(t,":",":"+v)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return f(t,"scroll-","scroll-snap-")+t}return t}function bt(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function or(t,e,r,n){switch(t.type){case qe:if(t.children.length)break;case He:case qt:return t.return=t.return||t.value;case he:return"";case de:return t.return=t.value+"{"+bt(t.children,n)+"}";case It:if(!T(t.value=t.props.join(",")))return""}return T(r=bt(t.children,n))?t.return=t.value+"{"+r+"}":""}function ir(t){var e=me(t);return function(r,n,s,o){for(var i="",u=0;u<e;u++)i+=t[u](r,n,s,o)||"";return i}}function ar(t){return function(e){e.root||(e=e.return)&&t(e)}}function cr(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case qt:t.return=ve(t.value,t.length,r);return;case de:return bt([G(t,{value:f(t.value,"@","@"+m)})],n);case It:if(t.length)return Ue(r=t.props,function(s){switch(D(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":q(G(t,{props:[f(s,/:(read-\w+)/,":"+st+"$1")]})),q(G(t,{props:[s]})),Dt(t,{props:te(r,n)});break;case"::placeholder":q(G(t,{props:[f(s,/:(plac\w+)/,":"+m+"input-$1")]})),q(G(t,{props:[f(s,/:(plac\w+)/,":"+st+"$1")]})),q(G(t,{props:[f(s,/:(plac\w+)/,v+"input-$1")]})),q(G(t,{props:[s]})),Dt(t,{props:te(r,n)});break}return""})}}var ur={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$={},J=typeof process<"u"&&$!==void 0&&($.REACT_APP_SC_ATTR||$.SC_ATTR)||"data-styled",Se="active",be="data-styled-version",Rt="6.1.8",Ut=`/*!sc*/
`,Zt=typeof window<"u"&&"HTMLElement"in window,fr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$.REACT_APP_SC_DISABLE_SPEEDY!==""?$.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$!==void 0&&$.SC_DISABLE_SPEEDY!==void 0&&$.SC_DISABLE_SPEEDY!==""&&$.SC_DISABLE_SPEEDY!=="false"&&$.SC_DISABLE_SPEEDY),pr={},_t=Object.freeze([]),V=Object.freeze({});function we(t,e,r){return r===void 0&&(r=V),t.theme!==r.theme&&t.theme||e||r.theme}var Ce=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dr=/(^-|-$)/g;function ne(t){return t.replace(hr,"-").replace(dr,"")}var lr=/(a)(d)/gi,dt=52,se=function(t){return String.fromCharCode(t+(t>25?39:97))};function Gt(t){var e,r="";for(e=Math.abs(t);e>dt;e=e/dt|0)r=se(e%dt)+r;return(se(e%dt)+r).replace(lr,"$1-$2")}var Ot,Ie=5381,K=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},xe=function(t){return K(Ie,t)};function Ae(t){return Gt(xe(t)>>>0)}function gr(t){return t.displayName||t.name||"Component"}function Tt(t){return typeof t=="string"&&!0}var Ee=typeof Symbol=="function"&&Symbol.for,Re=Ee?Symbol.for("react.memo"):60115,mr=Ee?Symbol.for("react.forward_ref"):60112,yr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_e={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sr=((Ot={})[mr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ot[Re]=_e,Ot);function oe(t){return("type"in(e=t)&&e.type.$$typeof)===Re?_e:"$$typeof"in t?Sr[t.$$typeof]:yr;var e}var br=Object.defineProperty,wr=Object.getOwnPropertyNames,ie=Object.getOwnPropertySymbols,Cr=Object.getOwnPropertyDescriptor,Ir=Object.getPrototypeOf,ae=Object.prototype;function Pe(t,e,r){if(typeof e!="string"){if(ae){var n=Ir(e);n&&n!==ae&&Pe(t,n,r)}var s=wr(e);ie&&(s=s.concat(ie(e)));for(var o=oe(t),i=oe(e),u=0;u<s.length;++u){var a=s[u];if(!(a in vr||r&&r[a]||i&&a in i||o&&a in o)){var c=Cr(e,a);try{br(t,a,c)}catch{}}}}return t}function W(t){return typeof t=="function"}function Jt(t){return typeof t=="object"&&"styledComponentId"in t}function M(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Bt(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=e?e+t[n]:t[n];return r}function it(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Lt(t,e,r){if(r===void 0&&(r=!1),!r&&!it(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Lt(t[n],e[n]);else if(it(e))for(var n in e)t[n]=Lt(t[n],e[n]);return t}function Vt(t,e){Object.defineProperty(t,"toString",{value:e})}function H(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var xr=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,o=s;e>=o;)if((o<<=1)<0)throw H(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=s;i<o;i++)this.groupSizes[i]=0}for(var u=this.indexOfGroup(e+1),a=(i=0,r.length);i<a;i++)this.tag.insertRule(u,r[i])&&(this.groupSizes[e]++,u++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),s=n+r;this.groupSizes[e]=0;for(var o=n;o<s;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],s=this.indexOfGroup(e),o=s+n,i=s;i<o;i++)r+="".concat(this.tag.getRule(i)).concat(Ut);return r},t}(),vt=new Map,wt=new Map,St=1,lt=function(t){if(vt.has(t))return vt.get(t);for(;wt.has(St);)St++;var e=St++;return vt.set(t,e),wt.set(e,t),e},Ar=function(t,e){St=e+1,vt.set(t,e),wt.set(e,t)},Er="style[".concat(J,"][").concat(be,'="').concat(Rt,'"]'),Rr=new RegExp("^".concat(J,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_r=function(t,e,r){for(var n,s=r.split(","),o=0,i=s.length;o<i;o++)(n=s[o])&&t.registerName(e,n)},Pr=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(Ut),s=[],o=0,i=n.length;o<i;o++){var u=n[o].trim();if(u){var a=u.match(Rr);if(a){var c=0|parseInt(a[1],10),p=a[2];c!==0&&(Ar(p,c),_r(t,p,a[3]),t.getTag().insertRules(c,s)),s.length=0}else s.push(u)}}};function $r(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $e=function(t){var e=document.head,r=t||e,n=document.createElement("style"),s=function(u){var a=Array.from(u.querySelectorAll("style[".concat(J,"]")));return a[a.length-1]}(r),o=s!==void 0?s.nextSibling:null;n.setAttribute(J,Se),n.setAttribute(be,Rt);var i=$r();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},kr=function(){function t(e){this.element=$e(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,o=n.length;s<o;s++){var i=n[s];if(i.ownerNode===r)return i}throw H(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),Nr=function(){function t(e){this.element=$e(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Or=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ce=Zt,Tr={isServer:!Zt,useCSSOMInjection:!fr},Ct=function(){function t(e,r,n){e===void 0&&(e=V),r===void 0&&(r={});var s=this;this.options=_(_({},Tr),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Zt&&ce&&(ce=!1,function(o){for(var i=document.querySelectorAll(Er),u=0,a=i.length;u<a;u++){var c=i[u];c&&c.getAttribute(J)!==Se&&(Pr(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Vt(this,function(){return function(o){for(var i=o.getTag(),u=i.length,a="",c=function(d){var g=function(x){return wt.get(x)}(d);if(g===void 0)return"continue";var l=o.names.get(g),b=i.getGroup(d);if(l===void 0||b.length===0)return"continue";var I="".concat(J,".g").concat(d,'[id="').concat(g,'"]'),P="";l!==void 0&&l.forEach(function(x){x.length>0&&(P+="".concat(x,","))}),a+="".concat(b).concat(I,'{content:"').concat(P,'"}').concat(Ut)},p=0;p<u;p++)c(p);return a}(s)})}return t.registerId=function(e){return lt(e)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(_(_({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new Or(s):n?new kr(s):new Nr(s)}(this.options),new xr(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(lt(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(lt(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(lt(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),jr=/&/g,Dr=/^\s*\/\/.*$/gm;function ke(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=ke(r.children,e)),r})}function zr(t){var e,r,n,s=t===void 0?V:t,o=s.options,i=o===void 0?V:o,u=s.plugins,a=u===void 0?_t:u,c=function(g,l,b){return b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?".".concat(e):g},p=a.slice();p.push(function(g){g.type===It&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(jr,r).replace(n,c))}),i.prefix&&p.push(cr),p.push(or);var d=function(g,l,b,I){l===void 0&&(l=""),b===void 0&&(b=""),I===void 0&&(I="&"),e=I,r=l,n=new RegExp("\\".concat(r,"\\b"),"g");var P=g.replace(Dr,""),x=nr(b||l?"".concat(b," ").concat(l," { ").concat(P," }"):P);i.namespace&&(x=ke(x,i.namespace));var w=[];return bt(x,ir(p.concat(ar(function(S){return w.push(S)})))),w};return d.hash=a.length?a.reduce(function(g,l){return l.name||H(15),K(g,l.name)},Ie).toString():"",d}var Fr=new Ct,Mt=zr(),Ne=N.createContext({shouldForwardProp:void 0,styleSheet:Fr,stylis:Mt});Ne.Consumer;N.createContext(void 0);function Yt(){return Ht.useContext(Ne)}var Gr=function(){function t(e,r){var n=this;this.inject=function(s,o){o===void 0&&(o=Mt);var i=n.name+o.hash;s.hasNameForId(n.id,i)||s.insertRules(n.id,i,o(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,Vt(this,function(){throw H(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Mt),this.name+e.hash},t}(),Br=function(t){return t>="A"&&t<="Z"};function ue(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;Br(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var Oe=function(t){return t==null||t===!1||t===""},Te=function(t){var e,r,n=[];for(var s in t){var o=t[s];t.hasOwnProperty(s)&&!Oe(o)&&(Array.isArray(o)&&o.isCss||W(o)?n.push("".concat(ue(s),":"),o,";"):it(o)?n.push.apply(n,ot(ot(["".concat(s," {")],Te(o),!1),["}"],!1)):n.push("".concat(ue(s),": ").concat((e=s,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in ur||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function B(t,e,r,n){if(Oe(t))return[];if(Jt(t))return[".".concat(t.styledComponentId)];if(W(t)){if(!W(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var s=t(e);return B(s,e,r,n)}var o;return t instanceof Gr?r?(t.inject(r,n),[t.getName(n)]):[t]:it(t)?Te(t):Array.isArray(t)?Array.prototype.concat.apply(_t,t.map(function(i){return B(i,e,r,n)})):[t.toString()]}function je(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(W(r)&&!Jt(r))return!1}return!0}var Lr=xe(Rt),Mr=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&je(e),this.componentId=r,this.baseHash=K(Lr,r),this.baseStyle=n,Ct.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=M(s,this.staticRulesId);else{var o=Bt(B(this.rules,e,r,n)),i=Gt(K(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,i)){var u=n(o,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,u)}s=M(s,i),this.staticRulesId=i}else{for(var a=K(this.baseHash,n.hash),c="",p=0;p<this.rules.length;p++){var d=this.rules[p];if(typeof d=="string")c+=d;else if(d){var g=Bt(B(d,e,r,n));a=K(a,g+p),c+=g}}if(c){var l=Gt(a>>>0);r.hasNameForId(this.componentId,l)||r.insertRules(this.componentId,l,n(c,".".concat(l),void 0,this.componentId)),s=M(s,l)}}return s},t}(),at=N.createContext(void 0);at.Consumer;function Kr(t){var e=N.useContext(at),r=Ht.useMemo(function(){return function(n,s){if(!n)throw H(14);if(W(n)){var o=n(s);return o}if(Array.isArray(n)||typeof n!="object")throw H(8);return s?_(_({},s),n):n}(t.theme,e)},[t.theme,e]);return t.children?N.createElement(at.Provider,{value:r},t.children):null}var jt={};function Yr(t,e,r){var n=Jt(t),s=t,o=!Tt(t),i=e.attrs,u=i===void 0?_t:i,a=e.componentId,c=a===void 0?function(C,E){var y=typeof C!="string"?"sc":ne(C);jt[y]=(jt[y]||0)+1;var h="".concat(y,"-").concat(Ae(Rt+y+jt[y]));return E?"".concat(E,"-").concat(h):h}(e.displayName,e.parentComponentId):a,p=e.displayName,d=p===void 0?function(C){return Tt(C)?"styled.".concat(C):"Styled(".concat(gr(C),")")}(t):p,g=e.displayName&&e.componentId?"".concat(ne(e.displayName),"-").concat(e.componentId):e.componentId||c,l=n&&s.attrs?s.attrs.concat(u).filter(Boolean):u,b=e.shouldForwardProp;if(n&&s.shouldForwardProp){var I=s.shouldForwardProp;if(e.shouldForwardProp){var P=e.shouldForwardProp;b=function(C,E){return I(C,E)&&P(C,E)}}else b=I}var x=new Mr(r,g,n?s.componentStyle:void 0);function w(C,E){return function(y,h,Q){var ct=y.attrs,Fe=y.componentStyle,Ge=y.defaultProps,Be=y.foldedComponentIds,Le=y.styledComponentId,Me=y.target,Ye=N.useContext(at),We=Yt(),Pt=y.shouldForwardProp||We.shouldForwardProp,Xt=we(h,Ye,Ge)||V,j=function(ft,et,pt){for(var rt,L=_(_({},et),{className:void 0,theme:pt}),kt=0;kt<ft.length;kt+=1){var ht=W(rt=ft[kt])?rt(L):rt;for(var F in ht)L[F]=F==="className"?M(L[F],ht[F]):F==="style"?_(_({},L[F]),ht[F]):ht[F]}return et.className&&(L.className=M(L.className,et.className)),L}(ct,h,Xt),ut=j.as||Me,tt={};for(var z in j)j[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&j.theme===Xt||(z==="forwardedAs"?tt.as=j.forwardedAs:Pt&&!Pt(z,ut)||(tt[z]=j[z]));var Qt=function(ft,et){var pt=Yt(),rt=ft.generateAndInjectStyles(et,pt.styleSheet,pt.stylis);return rt}(Fe,j),$t=M(Be,Le);return Qt&&($t+=" "+Qt),j.className&&($t+=" "+j.className),tt[Tt(ut)&&!Ce.has(ut)?"class":"className"]=$t,tt.ref=Q,Ht.createElement(ut,tt)}(S,C,E)}w.displayName=d;var S=N.forwardRef(w);return S.attrs=l,S.componentStyle=x,S.displayName=d,S.shouldForwardProp=b,S.foldedComponentIds=n?M(s.foldedComponentIds,s.styledComponentId):"",S.styledComponentId=g,S.target=n?s.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=n?function(E){for(var y=[],h=1;h<arguments.length;h++)y[h-1]=arguments[h];for(var Q=0,ct=y;Q<ct.length;Q++)Lt(E,ct[Q],!0);return E}({},s.defaultProps,C):C}}),Vt(S,function(){return".".concat(S.styledComponentId)}),o&&Pe(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function fe(t,e){for(var r=[t[0]],n=0,s=e.length;n<s;n+=1)r.push(e[n],t[n+1]);return r}var pe=function(t){return Object.assign(t,{isCss:!0})};function De(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(W(t)||it(t))return pe(B(fe(_t,ot([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?B(n):pe(B(fe(n,e)))}function Wt(t,e,r){if(r===void 0&&(r=V),!e)throw H(1,e);var n=function(s){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return t(e,r,De.apply(void 0,ot([s],o,!1)))};return n.attrs=function(s){return Wt(t,e,_(_({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return Wt(t,e,_(_({},r),s))},n}var ze=function(t){return Wt(Yr,t)},Wr=ze;Ce.forEach(function(t){Wr[t]=ze(t)});var Hr=function(){function t(e,r){this.rules=e,this.componentId=r,this.isStatic=je(e),Ct.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,r,n,s){var o=s(Bt(B(this.rules,r,n,s)),""),i=this.componentId+e;n.insertRules(i,i,o)},t.prototype.removeStyles=function(e,r){r.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,r,n,s){e>2&&Ct.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,r,n,s)},t}();function Ur(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=De.apply(void 0,ot([t],e,!1)),s="sc-global-".concat(Ae(JSON.stringify(n))),o=new Hr(n,s),i=function(a){var c=Yt(),p=N.useContext(at),d=N.useRef(c.styleSheet.allocateGSInstance(s)).current;return c.styleSheet.server&&u(d,a,c.styleSheet,p,c.stylis),N.useLayoutEffect(function(){if(!c.styleSheet.server)return u(d,a,c.styleSheet,p,c.stylis),function(){return o.removeStyles(d,c.styleSheet)}},[d,a,c.styleSheet,p,c.stylis]),null};function u(a,c,p,d,g){if(o.isStatic)o.renderStyles(a,pr,p,g);else{var l=_(_({},c),{theme:we(c,d,i.defaultProps)});o.renderStyles(a,l,p,g)}}return N.memo(i)}export{Ur as d,Kr as t,Wr as u};