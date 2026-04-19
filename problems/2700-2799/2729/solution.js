/*
 * @lc app=leetcode id=2729 lang=javascript
 *
 * [2729] Check if The Number is Fascinating
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    const s = '' + n + (2 * n) + (3 * n);
    if (s.length !== 9 || s.includes('0')) return false;
    const digits = new Set(s);
    return digits.size === 9;
};
// @lc code=end

// TEST:
console.log(isFascinating(192)); // true
console.log(isFascinating(100)); // false
console.log(isFascinating(267)); // false
