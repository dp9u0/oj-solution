/*
 * @lc app=leetcode id=2523 lang=javascript
 *
 * [2523] Closest Prime Numbers in Range
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    const sieve = new Uint8Array(right + 1);
    sieve[0] = sieve[1] = 1;
    for (let i = 2; i * i <= right; i++) {
        if (!sieve[i]) {
            for (let j = i * i; j <= right; j += i) sieve[j] = 1;
        }
    }
    const primes = [];
    for (let i = left; i <= right; i++) {
        if (!sieve[i]) primes.push(i);
    }
    if (primes.length < 2) return [-1, -1];
    let minDiff = Infinity, res = [-1, -1];
    for (let i = 1; i < primes.length; i++) {
        const diff = primes[i] - primes[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
            res = [primes[i - 1], primes[i]];
        }
    }
    return res;
};
// @lc code=end

// TEST:
console.log(closestPrimes(10, 19)); // [11,13]
console.log(closestPrimes(4, 6)); // [-1,-1]
