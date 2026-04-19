/*
 * @lc app=leetcode id=3760 lang=javascript
 *
 * [3760] Maximum Substrings With Distinct Start
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
  return new Set(s).size;
};
// @lc code=end

// TEST:
console.log(maxDistinct('abab')); // 2
console.log(maxDistinct('abcd')); // 4
console.log(maxDistinct('aaaa')); // 1
console.log(maxDistinct('a')); // 1
console.log(maxDistinct('abcdefghijklmnopqrstuvwxyz')); // 26
