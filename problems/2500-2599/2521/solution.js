/*
 * @lc app=leetcode id=2521 lang=javascript
 *
 * [2521] Distinct Prime Factors of Product of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function(nums) {
    const primes = new Set();
    for (const num of nums) {
        let n = num;
        for (let f = 2; f * f <= n; f++) {
            while (n % f === 0) {
                primes.add(f);
                n = Math.floor(n / f);
            }
        }
        if (n > 1) primes.add(n);
    }
    return primes.size;
};
// @lc code=end

// TEST:
console.log(distinctPrimeFactors([2,4,3,7,10,6]));   // 4
console.log(distinctPrimeFactors([2,4,8,16]));       // 1
