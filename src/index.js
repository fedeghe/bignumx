function () {
    "use strict";
    const BASE = 10;

    function Bignumx(n) {
        if (typeof n !== 'string') throw 'String expected'
        
        
        this.sign = n.match(/^-/) ? -1 : 1;
        this.num = this.sign === -1 ? n.substring(1) : n;
        this.arr = this.num.split('').reverse().map(n => parseInt(n, BASE));
    }

    Bignumx.prototype.toString = function () {
        return this.arr.reverse().join('');
    };
    Bignumx.prototype.sum = function (bn) {
        var carry = 0,
            i = 0,    
            res = [],
            tmp,
            sign = 1,
            bnSmaller = null;
        while (typeof bn.arr[i] !== 'undefined' || typeof this.arr[i] !== 'undefined') {
            tmp = Math.abs(carry + bn.sign * (bn.arr[i] || 0) +  this.sign * (this.arr[i] || 0));
            if (bnSmaller === null) {
                if (bn.arr[i] > this.arr[i]) bnSmaller = false
                if (bn.arr[i] < this.arr[i]) bnSmaller = true
            }
            carry = parseInt(tmp / BASE, BASE);
            res[i] = tmp % BASE;
            i++;
        }
        if (bn.sign === -1 && this.sign === -1) sign = -1
        // already default
        // if (bn.sign === 1 && this.sign === 1) sign = 1 
        if (sign === 1 && bnSmaller !== null) {
            // true B < t => neg <=> -t+B
            if (bnSmaller) {
                if (this.sign === -1 && bn.sign === 1) sign = -1
            // false B > t => neg <=> t-B
            } else {
                if (this.sign === 1 && bn.sign === -1) sign = -1
            }
        }

        if (carry) res.push(carry)
        return new Bignumx((sign === 1 ? '' : '-') + res.reverse().join(''))
    };
    Bignumx.prototype.toString = function () {
        return (this.sign === -1 ? '-' : '' ) + this.num;
    };

    return function (n) {return new Bignumx(n)};
}
