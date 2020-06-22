/*
      ____      ____       ___     ___    _    ___    _          _   ____   _
\     \  (_    _)   )  ____)  |    \  |  | |  |   |  | |        | \  \  /  /
 |     )   |  |    /  /  __   |  |\ \ |  | |  |   |  | |  |\/|  |  \  \/  /
 |    <    |  |   (  (  (  \  |  | \ \|  | |  |   |  | |  |  |  |   >    <
 |     )  _|  |_   \  \__)  ) |  |  \    | |   \_/   | |  |  |  |  /  /\  \
/     /__(      )___)      (__|  |___\   |__\       /__|  |__|  |_/  /__\  \_
                                                                                v. 0.0.1 
*/
(function(fn) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = fn();
	} else if (typeof define === "function" && define.amd) {
		define([], fn);
	} else {
		if (typeof window !== "undefined") {
			root = window;
		} else if (typeof global !== "undefined") {
			root = global;
		} else if (typeof self !== "undefined") {
			root = self;
		} else {
			root = this;
		}
		root.bignumx = fn.call(root);
	}
})(function () {
    "use strict";
    const BASE = 10;

    function Bignumx(n) {
        this.num = "" + n;
        this.sign = [1, -1][this.num.match(/^-/)];
        this.arr = this.num.split('').reverse();
    }

    Bignumx.prototype.toString = function () {
        return this.arr.reverse().join('');
    };
    Bignumx.prototype.sum = function (bn) {
        var carry = 0,
            i = 0,    
            res = [],
            tmp;
        while (typeof bn[i] !== 'undefined' || typeof this.arr[i] !== 'undefined') {
            tmp = carry + bn.sign * (bn[i] || 0) + this.sign * (this.arr[i] || 0);
            carry = parseInt(tmp / 10, 10);
            res[i] = tmp % 10;
            i++;
        }
        console.log(res)
        return new BigNumx()
        
    };
    Bignumx.prototype.toString = function () {
        return this.n;
    };

    return Bignumx;
}
);