var b = require('../index').Bignumx,
    assert = require('assert');

describe('should work', () => {
    it('works', () => {
        var big = new b(10)
        assert.equal(big.n, 10);
    })
})