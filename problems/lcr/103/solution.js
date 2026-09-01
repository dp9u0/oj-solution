/*
 * @lc app=leetcode.cn id=LCR 103 lang=javascript
 *
 * [LCR 103] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const c of coins) {
      if (i >= c && dp[i - c] + 1 < dp[i]) {
        dp[i] = dp[i - c] + 1;
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(coinChange([1, 2, 5], 11), 3);
assert.strictEqual(coinChange([2], 3), -1);
assert.strictEqual(coinChange([1], 0), 0);
assert.strictEqual(coinChange([1], 1), 1);
assert.strictEqual(coinChange([1], 2), 2);
// 无法凑成
assert.strictEqual(coinChange([2], 1), -1);
// 大面额可快速凑
assert.strictEqual(coinChange([3, 7, 11], 14), 2); // 7+7
// 0 金额任意硬币
assert.strictEqual(coinChange([5, 10], 0), 0);
console.log('All tests passed!');
