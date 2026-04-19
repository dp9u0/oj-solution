/*
 * @lc app=leetcode id=2335 lang=javascript
 *
 * [2335] Minimum Amount of Time to Fill Cups
 */

// @lc code=start
/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
  return Math.max(Math.max(...amount), Math.ceil(amount.reduce((a, b) => a + b, 0) / 2));
};
// @lc code=end

// TEST:
console.log(fillCups([1, 4, 2])); // 4
console.log(fillCups([5, 4, 4])); // 7
console.log(fillCups([5, 0, 0])); // 5
