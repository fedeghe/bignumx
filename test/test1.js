var b = require('../index.js'),
    assert = require('assert');
console.log(b)

describe('constructor', () => {
    it('should convert as expected', () => {
        var big = b('10')
        assert.equal(typeof big, "object");
    })
    it('should convert as', () => {
        var big = b('10')
        assert.equal(big, "10");
    })
    it('should sum as expected positive', () => {
        var big1 = b('10'),
            big2 = b('222165151435165135135135'),
            s = big1.sum(big2);
        assert.equal(s, "222165151435165135135145");
    })
    it('should sum as expected negative', () => {
        var big1 = b('23423423422'),
            big2 = b('-222'),
            s = big1.sum(big2);

        assert.equal(s.toString(), "23423423200");
    })
    it('should sum as expected negative 2', () => {
        var big1 = b('-23423423422'),
            big2 = b('-222'),
            s = big1.sum(big2);

        assert.equal(s.toString(), "-23423423644");
    })
    it('should sum as expected negative 3', () => {
        var big1 = b('-23423423422'),
            big2 = b('222'),
            s = big1.sum(big2);

        assert.equal(s.toString(), "-23423423200");
    })
})
