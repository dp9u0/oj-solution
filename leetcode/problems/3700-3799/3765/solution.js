/*
 * @lc app=leetcode id=3765 lang=javascript
 *
 * [3765] Complete Prime Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var completePrime = function(num) {
    const isPrime = (x) => {
        if (x < 2) return false;
        if (x < 4) return true;
        if (x % 2 === 0 || x % 3 === 0) return false;
        for (let i = 5; i * i <= x; i += 6) {
            if (x % i === 0 || x % (i + 2) === 0) return false;
        }
        return true;
    };

    const s = String(num);
    const n = s.length;

    for (let k = 1; k <= n; k++) {
        if (!isPrime(parseInt(s.substring(0, k)))) return false;
        if (!isPrime(parseInt(s.substring(n - k)))) return false;
    }

    return true;
};
// @lc code=end

// TEST:
console.log(completePrime(23)); // true
console.log(completePrime(39)); // false
console.log(completePrime(7)); // true
console.log(completePrime(1)); // false
console.log(completePrime(2)); // true
console.log(completePrime(373)); // true
