/*
 * @lc app=leetcode.cn id=LCR 102 lang=javascript
 *
 * [LCR 102] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  const sum = nums.reduce((a, b) => a + b, 0);
  const P = (target + sum) / 2;
  if (P < 0 || P % 1 !== 0 || P > sum) return 0;
  const dp = new Array(P + 1).fill(0);
  dp[0] = 1;
  for (const num of nums) {
    for (let s = P; s >= num; s--) {
      dp[s] += dp[s - num];
    }
  }
  return dp[P];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(findTargetSumWays([1, 1, 1, 1, 1], 3), 5);
assert.strictEqual(findTargetSumWays([1], 1), 1);
assert.strictEqual(findTargetSumWays([1], 2), 0);
// P non-integer (target 1 from [1,1]: impossible)
assert.strictEqual(findTargetSumWays([1, 1], 1), 0);
assert.strictEqual(findTargetSumWays([2, 1], 1), 1);
// zeros double the ways
assert.strictEqual(findTargetSumWays([0], 0), 2);
assert.strictEqual(findTargetSumWays([0, 0, 1], 1), 4);

console.log('All tests passed!');
console.log('findTargetSumWays([1,1,1,1,1], 3) =', findTargetSumWays([1, 1, 1, 1, 1], 3));
