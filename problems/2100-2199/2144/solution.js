/*
 * @lc app=leetcode id=2144 lang=javascript
 *
 * [2144] Minimum Cost of Buying Candies With Discount
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
  cost.sort((a, b) => b - a);
  let total = 0;
  for (let i = 0; i < cost.length; i++) {
    if (i % 3 !== 2) total += cost[i];
  }
  return total;
};
// @lc code=end

// TEST:
console.log(minimumCost([1, 2, 3])); // 5
console.log(minimumCost([6, 5, 7, 9, 2, 2])); // 23
console.log(minimumCost([5, 5])); // 10
