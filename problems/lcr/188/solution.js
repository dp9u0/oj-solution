/*
 * @lc app=leetcode.cn id=LCR 188 lang=javascript
 *
 * [LCR 188] 买卖芯片的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var bestTiming = function(prices) {
  if (!prices.length) return 0;
  let minSoFar = prices[0];
  let best = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minSoFar) minSoFar = prices[i];
    else best = Math.max(best, prices[i] - minSoFar);
  }
  return best;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(bestTiming([3, 6, 2, 9, 8, 5]), 7);
assert.strictEqual(bestTiming([8, 12, 15, 7, 3, 10]), 7);
// monotonic down -> 0
assert.strictEqual(bestTiming([7, 6, 4, 3, 1]), 0);
assert.strictEqual(bestTiming([]), 0);
assert.strictEqual(bestTiming([1]), 0);
assert.strictEqual(bestTiming([1, 2]), 1);
assert.strictEqual(bestTiming([5, 5, 5]), 0);
// buy low much later
assert.strictEqual(bestTiming([2, 9, 1, 10]), 9);

console.log('All tests passed!');
console.log('bestTiming([3,6,2,9,8,5]) =', bestTiming([3, 6, 2, 9, 8, 5]));
