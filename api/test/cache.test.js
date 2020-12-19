const assert = require('assert');
const {get, set} = require("../services/cache");

describe('test_caching', function() {
    const key = "test_key";
    const value = "test_value";

    it('can complete round trip', function() {
        assert.equal(set(key, value), true);
        assert.equal(get(key), value)    
    });
});