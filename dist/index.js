"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=f(function(h,c){
var N=require('@stdlib/math-base-special-betainc/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-floor/dist'),d=require('@stdlib/constants-float64-pinf/dist');function l(e,r,i){var t;return n(e)||n(r)||n(i)||r<=0||i<0||i>1?NaN:e<0?0:e===d?1:(t=y(e+1e-7),N(i,r,t+1))}c.exports=l
});var s=f(function(j,v){
var F=require('@stdlib/utils-constant-function/dist'),b=require('@stdlib/math-base-special-betainc/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-floor/dist'),P=require('@stdlib/constants-float64-pinf/dist');function m(e,r){if(u(e)||u(r)||e<=0||r<0||r>1)return F(NaN);return i;function i(t){var a;return u(t)?NaN:t<0?0:t===P?1:(a=I(t+1e-7),b(r,e,a+1))}}v.exports=m
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),R=s();O(q,"factory",R);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
