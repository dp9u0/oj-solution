/*
 * @lc app=leetcode.cn id=LCR 091 lang=javascript
 *
 * [LCR 091] 粉刷房子
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
  const n = costs.length;
  // dp[c] = min cost painting up to current house, current house = color c
  let dp0 = costs[0][0];
  let dp1 = costs[0][1];
  let dp2 = costs[0][2];
  for (let i = 1; i < n; i++) {
    const ndp0 = costs[i][0] + Math.min(dp1, dp2);
    const ndp1 = costs[i][1] + Math.min(dp0, dp2);
    const ndp2 = costs[i][2] + Math.min(dp0, dp1);
    dp0 = ndp0;
    dp1 = ndp1;
    dp2 = ndp2;
  }
  return Math.min(dp0, dp1, dp2);
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]]), 10);
assert.strictEqual(minCost([[7, 6, 2]]), 2);
// single house picks cheapest
assert.strictEqual(minCost([[5, 1, 9]]), 1);
// two houses: must differ
assert.strictEqual(minCost([[1, 100, 100], [100, 1, 100]]), 2);
// minimal costs, need alternation
assert.strictEqual(minCost([[1, 2, 3], [1, 2, 3], [1, 2, 3]]), 4);
// larger alternating
assert.strictEqual(minCost([[1, 5, 3], [2, 4, 6], [7, 1, 2], [3, 9, 1]]), 7);
// all same cost across colors per house, n=3 -> cheapest = 3 * 1
assert.strictEqual(minCost([[1, 1, 1], [1, 1, 1], [1, 1, 1]]), 3);

console.log('All tests passed!');
console.log('minCost([[17,2,17],[16,16,5],[14,3,19]]) =', minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]]));
