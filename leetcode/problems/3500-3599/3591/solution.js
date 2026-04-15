/*
 * @lc app=leetcode id=3591 lang=javascript
 *
 * [3591] Check if Any Element Has Prime Frequency
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    let isPrime = (x) => {
        if (x < 2) return false;
        for (let i = 2; i * i <= x; i++) {
            if (x % i === 0) return false;
        }
        return true;
    };
    let freq = {};
    for (let x of nums) freq[x] = (freq[x] || 0) + 1;
    return Object.values(freq).some(isPrime);
};
// @lc code=end

// TEST:
console.log(checkPrimeFrequency([1,2,3,4,5,4])); // true
console.log(checkPrimeFrequency([1,2,3,4,5])); // false
console.log(checkPrimeFrequency([2,2,2,4,4])); // true
