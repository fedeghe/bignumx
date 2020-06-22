var b = require('../index').Bignumx,
    assert = require('assert');

describe('constructor', () => {
    it('should convert as expected', () => {
        var big = b(10)
        assert.equal(typeof big, "object");
    })
})
