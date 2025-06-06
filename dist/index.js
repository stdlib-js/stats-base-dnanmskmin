"use strict";var f=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var m=f(function(F,d){
var b=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-assert-is-negative-zero/dist');function E(r,i,a,o,u,c,_){var t,v,s,e,n;if(r<=0)return NaN;for(v=o,s=_,n=0;n<r&&(e=i[v],!(e===e&&u[s]===0));n++)v+=a,s+=c;if(n===r)return NaN;for(t=e,n+=1,n;n<r;n++)v+=a,s+=c,!u[s]&&(e=i[v],!b(e)&&(e<t||e===t&&g(e))&&(t=e));return t}d.exports=E
});var x=f(function(G,y){
var p=require('@stdlib/strided-base-stride2offset/dist'),O=m();function Z(r,i,a,o,u){return O(r,i,a,p(r,a),o,u,p(r,u))}y.exports=Z
});var l=f(function(H,k){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),w=m();h(j,"ndarray",w);k.exports=j
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=l(),q,R=A(z(__dirname,"./native.js"));B(R)?q=C:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
