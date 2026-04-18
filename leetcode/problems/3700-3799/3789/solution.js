/*
 * @lc app=leetcode id=3789 lang=javascript
 *
 * [3789] Minimum Cost to Acquire Required Items
 */

// @lc code=start
/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
  const cost = (b) => b * costBoth + Math.max(0, need1 - b) * cost1 + Math.max(0, need2 - b) * cost2;
  return Math.min(cost(0), cost(need1), cost(need2));
};
// @lc code=end

// TEST:
console.log(minimumCost(3, 2, 1, 3, 2)); // 3
console.log(minimumCost(5, 4, 15, 2, 3)); // 22
console.log(minimumCost(5, 4, 15, 0, 0)); // 0
console.log(minimumCost(1, 1, 1, 5, 5)); // 5
console.log(minimumCost(10, 20, 5, 3, 7)); // min of 3*10+7*20=170, 3*5+4*20=95, 7*5+0=35 -> 35
