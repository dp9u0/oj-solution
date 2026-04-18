/*
 * @lc app=leetcode id=3652 lang=javascript
 *
 * [3652] Best Time to Buy and Sell Stock using Strategy
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function(prices, strategy, k) {
  const n = prices.length;
  const half = k / 2;

  let baseProfit = 0;
  for (let i = 0; i < n; i++) baseProfit += strategy[i] * prices[i];

  // holdGain[i] = -strategy[i] * prices[i], sellGain[i] = (1 - strategy[i]) * prices[i]
  // prefix sums for each
  const holdPsum = new Float64Array(n + 1);
  const sellPsum = new Float64Array(n + 1);
  for (let i = 0; i < n; i++) {
    holdPsum[i + 1] = holdPsum[i] + (-strategy[i] * prices[i]);
    sellPsum[i + 1] = sellPsum[i] + ((1 - strategy[i]) * prices[i]);
  }

  let maxChange = 0;
  for (let j = 0; j + k <= n; j++) {
    const holdGain = holdPsum[j + half] - holdPsum[j];
    const sellGain = sellPsum[j + k] - sellPsum[j + half];
    maxChange = Math.max(maxChange, holdGain + sellGain);
  }

  return baseProfit + maxChange;
};
// @lc code=end

// TEST:
console.log(maxProfit([4,2,8], [-1,0,1], 2)); // 10
console.log(maxProfit([5,4,3], [1,1,0], 2)); // 9
console.log(maxProfit([1,2,3,4], [-1,-1,1,1], 4)); // modify all
console.log(maxProfit([10,20], [1,1], 2)); // 30 (no modification better or same)
console.log(maxProfit([3,1,5,2,4], [-1,1,0,-1,1], 2)); // check
