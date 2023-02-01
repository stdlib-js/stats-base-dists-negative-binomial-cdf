// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betainc@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function m(t,i,m){var d;return e(t)||e(i)||e(m)||i<=0||m<0||m>1?NaN:t<0?0:t===r?1:(d=n(t+1e-7),s(m,i,d+1))}function d(t,m){return e(t)||e(m)||t<=0||m<0||m>1?i(NaN):function(i){var d;if(e(i))return NaN;if(i<0)return 0;if(i===r)return 1;return d=n(i+1e-7),s(m,t,d+1)}}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
