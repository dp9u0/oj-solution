/*
 * @lc app=leetcode id=2145 lang=javascript
 *
 * [2145] Count the Hidden Sequences
 */

// @lc code=start
/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
  let minPrefix = 0, maxPrefix = 0, prefix = 0;
  for (const d of differences) {
    prefix += d;
    minPrefix = Math.min(minPrefix, prefix);
    maxPrefix = Math.max(maxPrefix, prefix);
  }
  return Math.max(0, (upper - lower) - (maxPrefix - minPrefix) + 1);
};
// @lc code=end

// TEST:
console.log(numberOfArrays([1, -3, 4], 1, 6)); // 2
console.log(numberOfArrays([3, -4, 5, 1, -2], -4, 5)); // 4
console.log(numberOfArrays([4, -7, 2], 3, 6)); // 0
