/*
 * @lc app=leetcode id=3857 lang=javascript
 *
 * [3857] Minimum Cost to Split into Ones
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minCost = function(n) {
  return n * (n - 1) / 2;
};
// @lc code=end

// TEST:
console.log(minCost(3)); // 3
console.log(minCost(4)); // 6
console.log(minCost(1)); // 0
console.log(minCost(5)); // 10
