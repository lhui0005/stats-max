/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { DataType, typedndarray } from '@stdlib/types/ndarray';

/**
* Input array.
*/
type InputArray<T> = typedndarray<T>;

/**
* Output array.
*/
type OutputArray<U> = typedndarray<U>;

/**
* Interface defining "base" options.
*/
interface BaseOptions {
	/**
	* List of dimensions over which to perform a reduction.
	*/
	dims?: ArrayLike<number>;
}

/**
* Interface defining options.
*/
interface Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype?: DataType;

	/**
	* Boolean indicating whether the reduced dimensions should be included in the returned array as singleton dimensions. Default: `false`.
	*/
	keepdims?: boolean;
}

/**
* Interface for performing a reduction on an ndarray.
*/
interface Unary {
	/**
	* Computes the maximum value along one or more ndarray dimensions.
	*
	* @param x - input ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray-base-ctor' );
	*
	* var xbuf = [ -1.0, 2.0, -3.0 ];
	* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
	*
	* var y = max( x );
	* // returns <ndarray>
	*
	* var v = y.get();
	* // returns 2.0
	*/
	<T = unknown, U = unknown>( x: InputArray<T>, options?: Options ): OutputArray<U>; // NOTE: we lose type specificity here, but retaining specificity would likely be difficult and/or tedious to completely enumerate, as the output ndarray data type is dependent on how `x` interacts with output data type policy and whether that policy has been overridden by `options.dtype`. In principle, as well, based on the policy, it is possible to know more exactly which `InputArray` types are actually allowed.

	/**
	* Computes the maximum value along one or more ndarray dimensions and assigns results to a provided output ndarray.
	*
	* @param x - input ndarray
	* @param out - output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray-base-ctor' );
	*
	* var xbuf = [ -1.0, 2.0, -3.0 ];
	* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = [ 0.0 ];
	* var y = new ndarray( 'generic', ybuf, [], [ 0 ], 0, 'row-major' );
	*
	* var out = max.assign( x, y );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns 2.0
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T = unknown, U extends OutputArray<unknown> = OutputArray<unknown>>( x: InputArray<T>, out: U, options?: BaseOptions ): U;
}

/**
* Computes the maximum value along one or more ndarray dimensions.
*
* @param x - input ndarray
* @param options - function options
* @returns output ndarray
*
* @example
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var y = max( x );
* // returns <ndarray>
*
* var v = y.get();
* // returns 2.0
*
* @example
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
*
* var xbuf = [ -1.0, 2.0, -3.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 0.0 ];
* var y = new ndarray( 'generic', ybuf, [], [ 0 ], 0, 'row-major' );
*
* var out = max.assign( x, y );
* // returns <ndarray>
*
* var v = out.get();
* // returns 2.0
*
* var bool = ( out === y );
* // returns true
*/
declare const max: Unary;


// EXPORTS //

export = max;
