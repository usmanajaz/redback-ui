import{t as c}from"./index-V0zlLCsl.js";import{g as _}from"./index-BBkUAzwr.js";import{e as h,f as m,g as y,h as $,j as S,k as p,l as d,m as O,n as P,o as k,p as C}from"./hasIn-_03O251r.js";import{_ as A,a as F,b as T,c as w}from"./_basePickBy-Cbg7v0UG.js";import{i as L}from"./isPlainObject-jh_HCFe2.js";function x(e){var n=e==null?0:e.length;return n?e[n-1]:void 0}var R=x;function E(e,n,r){var a=-1,t=e.length;n<0&&(n=-n>t?0:t+n),r=r>t?t:r,r<0&&(r+=t),t=n>r?0:r-n>>>0,n>>>=0;for(var i=Array(t);++a<t;)i[a]=e[a+n];return i}var N=E,G=h,M=N;function D(e,n){return n.length<2?e:G(e,M(n,0,-1))}var I=D,K=m,U=R,B=I,H=y;function Y(e,n){return n=K(n,e),e=B(e,n),e==null||delete e[H(U(n))]}var q=Y,z=L;function J(e){return z(e)?void 0:e}var Q=J,o=$,V=S,W=p,u=o?o.isConcatSpreadable:void 0;function X(e){return W(e)||V(e)||!!(u&&e&&e[u])}var Z=X,j=d,ee=Z;function g(e,n,r,a,t){var i=-1,s=e.length;for(r||(r=ee),t||(t=[]);++i<s;){var l=e[i];n>0&&r(l)?n>1?g(l,n-1,r,a,t):j(t,l):a||(t[t.length]=l)}return t}var ne=g,re=ne;function te(e){var n=e==null?0:e.length;return n?re(e,1):[]}var ae=te;function ie(e,n,r){switch(r.length){case 0:return e.call(n);case 1:return e.call(n,r[0]);case 2:return e.call(n,r[0],r[1]);case 3:return e.call(n,r[0],r[1],r[2])}return e.apply(n,r)}var le=ie,se=le,v=Math.max;function oe(e,n,r){return n=v(n===void 0?e.length-1:n,0),function(){for(var a=arguments,t=-1,i=v(a.length-n,0),s=Array(i);++t<i;)s[t]=a[n+t];t=-1;for(var l=Array(n+1);++t<n;)l[t]=a[t];return l[n]=r(s),se(e,this,l)}}var ue=oe;function ve(e){return function(){return e}}var fe=ve,ce=fe,f=O,_e=P,me=f?function(e,n){return f(e,"toString",{configurable:!0,enumerable:!1,value:ce(n),writable:!0})}:_e,ge=me,be=800,he=16,ye=Date.now;function $e(e){var n=0,r=0;return function(){var a=ye(),t=he-(a-r);if(r=a,t>0){if(++n>=be)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}var Se=$e,pe=ge,de=Se,Oe=de(pe),Pe=Oe,ke=ae,Ce=ue,Ae=Pe;function Fe(e){return Ae(Ce(e,void 0,ke),e+"")}var b=Fe,Te=k,we=T,Le=q,xe=m,Re=A,Ee=Q,Ne=b,Ge=F,Me=1,De=2,Ie=4,Ke=Ne(function(e,n){var r={};if(e==null)return r;var a=!1;n=Te(n,function(i){return i=xe(i,e),a||(a=i.length>1),i}),Re(e,Ge(e),r),a&&(r=we(r,Me|De|Ie,Ee));for(var t=n.length;t--;)Le(r,n[t]);return r}),Ue=Ke;const Be=_(Ue);var He=w,Ye=C;function qe(e,n){return He(e,n,function(r,a){return Ye(e,a)})}var ze=qe,Je=ze,Qe=b,Ve=Qe(function(e,n){return e==null?{}:Je(e,n)}),We=Ve;const Xe=_(We),tn=Be(c.default.colors,["light","dark","background"]);Xe(c.default.colors,["light","dark","background"]);export{tn as t};