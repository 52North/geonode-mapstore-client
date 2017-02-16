/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var expect = require('expect');
var {
    TEXT_SEARCH_RESULTS_LOADED,
    TEXT_SEARCH_LOADING,
    TEXT_SEARCH_ERROR,
    TEXT_SEARCH_STARTED,
    searchResultLoaded,
    searchTextLoading,
    searchResultError,
    searchTextStarted
} = require('../search');

describe('Test correctness of the search actions', () => {

    it('text search started', () => {
        const action = searchTextStarted(true);
        expect(action.type).toBe(TEXT_SEARCH_STARTED);
    });
    it('text search loading', () => {
        const action = searchTextLoading(true);
        expect(action.loading).toBe(true);
        expect(action.type).toBe(TEXT_SEARCH_LOADING);
    });
    it('text search error', () => {
        const action = searchResultError({message: "MESSAGE"});
        expect(action.error).toExist();
        expect(action.error.message).toBe("MESSAGE");
        expect(action.type).toBe(TEXT_SEARCH_ERROR);
    });
    it('serch results', () => {
        const testVal = ['result1', 'result2'];
        const retval = searchResultLoaded(testVal);
        expect(retval).toExist();
        expect(retval.type).toBe(TEXT_SEARCH_RESULTS_LOADED);
        expect(retval.results).toEqual(testVal);
        expect(retval.append).toBe(false);

        const retval2 = searchResultLoaded(testVal, true);
        expect(retval2).toExist();
        expect(retval2.type).toBe(TEXT_SEARCH_RESULTS_LOADED);
        expect(retval2.results).toEqual(testVal);
        expect(retval2.append).toBe(true);
    });

});
