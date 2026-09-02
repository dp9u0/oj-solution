/*
 * @lc app=leetcode.cn id=LCP 07 lang=javascript
 *
 * [LCP 07] 传递信息
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, relation, k) {
  let dp = new Array(n).fill(0);
  dp[0] = 1;
  for (let step = 0; step < k; step++) {
    const next = new Array(n).fill(0);
    for (const [a, b] of relation) {
      next[b] += dp[a];
    }
    dp = next;
  }
  return dp[n - 1];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(numWays(5, [[0, 2], [2, 1], [3, 4], [2, 3], [1, 4], [2, 0], [0, 4]], 3), 3);
assert.strictEqual(numWays(3, [[0, 2], [2, 1]], 2), 0);
assert.strictEqual(numWays(2, [[0, 1]], 1), 1);
assert.strictEqual(numWays(2, [[0, 1]], 2), 0); // 0->1 then stuck
assert.strictEqual(numWays(3, [[0, 1], [1, 2], [2, 0]], 3), 0); // 3 steps ends at 0 only
assert.strictEqual(numWays(3, [[0, 1], [1, 2], [2, 0]], 2), 1); // 0->1->2

console.log('All tests passed!');