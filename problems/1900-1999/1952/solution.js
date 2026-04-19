/*
 * @lc app=leetcode id=1952 lang=javascript
 *
 * [1952] Three Divisors
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    const sq = Math.sqrt(n);
    if (sq !== Math.floor(sq)) return false;
    return isPrime(sq);
};

function isPrime(x) {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++) {
        if (x % i === 0) return false;
    }
    return true;
}
// @lc code=end

// TEST:
console.log(isThree(2));
console.log(isThree(4));
console.log(isThree(9));
console.log(isThree(1));
