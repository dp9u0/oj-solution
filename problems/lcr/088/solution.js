/*
 * @lc app=leetcode.cn id=LCR 088 lang=javascript
 *
 * [LCR 088] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const n = cost.length;
  let prev2 = cost[0];
  let prev1 = cost[1];
  for (let i = 2; i < n; i++) {
    const cur = cost[i] + Math.min(prev1, prev2);
    prev2 = prev1;
    prev1 = cur;
  }
  return Math.min(prev1, prev2);
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minCostClimbingStairs([10, 15, 20]), 15);
assert.strictEqual(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6);
assert.strictEqual(minCostClimbingStairs([2, 1]), 1);
assert.strictEqual(minCostClimbingStairs([0, 0]), 0);
assert.strictEqual(minCostClimbingStairs([1, 2, 3]), 2);
assert.strictEqual(minCostClimbingStairs([5, 1, 1, 5]), 2);

console.log('All tests passed!');
console.log('minCostClimbingStairs([10,15,20]) =', minCostClimbingStairs([10, 15, 20]));
