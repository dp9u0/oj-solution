/*
 * @lc app=leetcode.cn id=3870 lang=javascript
 *
 * [3870] 统计范围内的逗号
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    // n <= 10^5 (at most 6 digits): every number >= 1000 has exactly one comma.
    return Math.max(0, n - 999);
};
// @lc code=end

// TEST:
console.log(countCommas(1002) === 3);
console.log(countCommas(998) === 0);
console.log(countCommas(1000) === 1);
console.log(countCommas(1) === 0);
console.log(countCommas(999) === 0);
console.log(countCommas(100000) === 99001);
console.log(countCommas(23456) === 22457);
