"use strict";var s=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var l=s(function(D,p){
var R=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/math-base-assert-is-negative-zero/dist');function _(e,a,o,q,m){var v,t,n,r,i;if(e<=0)return NaN;for(o<0?t=(1-e)*o:t=0,m<0?n=(1-e)*m:n=0,i=0;i<e&&(r=a[t],!(r===r&&q[n]===0));i++)t+=o,n+=m;if(i===e)return NaN;for(v=r,i+=1,i;i<e;i++)t+=o,n+=m,!q[n]&&(r=a[t],!R(r)&&(r<v||r===v&&Z(r))&&(v=r));return v}p.exports=_
});var y=s(function(F,x){
var E=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-negative-zero/dist');function d(e,a,o,q,m,v,t){var n,r,i,u,f;if(e<=0)return NaN;for(r=q,i=t,f=0;f<e&&(u=a[r],!(u===u&&m[i]===0));f++)r+=o,i+=v;if(f===e)return NaN;for(n=u,f+=1,f;f<e;f++)r+=o,i+=v,!m[i]&&(u=a[r],!E(u)&&(u<n||u===n&&O(u))&&(n=u));return n}x.exports=d
});var g=s(function(G,b){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=l(),k=y();h(j,"ndarray",k);b.exports=j
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=g(),c,N=z(w(__dirname,"./native.js"));A(N)?c=B:c=N;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
