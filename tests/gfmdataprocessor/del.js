/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { testDataProcessor as test } from '/tests/markdown-gfm/_utils/utils.js';

describe( 'GFMDataProcessor', () => {
	describe( 'del', () => {
		it( 'should process deleted text', () => {
			test(
				'~~deleted~~',

				// GitHub is rendering as:
				// <p><del>deleted</del></p>
				'<p><del>deleted</del></p>'
			);
		} );

		it( 'should process deleted inside text', () => {
			test(
				'This is ~~deleted content~~.',

				// GitHub is rendering as:
				// <p>This is <del>deleted content</del>.</p>
				'<p>This is <del>deleted content</del>.</p>'
			);
		} );
	} );
} );
