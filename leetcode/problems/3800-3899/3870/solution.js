/*
 * @lc app=leetcode id=3870 lang=javascript
 *
 * [3870] Count Commas in Range
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    // For n <= 10^5: numbers >= 1000 each have exactly 1 comma
    return Math.max(0, n - 999);
};
// @lc code=end

// TEST:
console.log(countCommas(1002));  // 3
console.log(countCommas(998));   // 0
console.log(countCommas(1));     // 0
console.log(countCommas(1000));  // 1
console.log(countCommas(100000)); // 99001
console.log(countCommas(9999));  // 9000
console.log(countCommas(999));   // 0
