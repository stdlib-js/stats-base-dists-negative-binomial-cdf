/** @license Apache-2.0 */

'use strict';

/**
* Negative binomial distribution cumulative distribution function (CDF).
*
* @module @stdlib/stats-base-dists-negative-binomial-cdf
*
* @example
* var cdf = require( '@stdlib/stats-base-dists-negative-binomial-cdf' );
*
* var y = cdf( 5.0, 20.0, 0.8 );
* // returns ~0.617
*
* y = cdf( 21.0, 20.0, 0.5 );
* // returns ~0.622
*
* y = cdf( 5.0, 10.0, 0.4 );
* // returns ~0.034
*
* y = cdf( 0.0, 10.0, 0.9 );
* // returns ~0.349
*
* y = cdf( 21.0, 15.5, 0.5 );
* // returns ~0.859
*
* y = cdf( 5.0, 7.4, 0.4 );
* // returns ~0.131
*
* var mycdf = cdf.factory( 10, 0.5 );
* y = mycdf( 3.0 );
* // returns ~0.046
*
* y = mycdf( 11.0 );
* // returns ~0.668
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
