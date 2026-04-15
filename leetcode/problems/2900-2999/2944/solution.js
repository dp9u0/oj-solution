/*
 * @lc app=leetcode id=2944 lang=javascript
 *
 * [2944] Minimum Number of Coins for Fruits
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function(prices) {
  const n = prices.length;
  const dp = new Array(n + 1);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    const start = Math.ceil((i - 1) / 2);
    let minPrev = Infinity;
    for (let j = start; j < i; j++) {
      minPrev = Math.min(minPrev, dp[j]);
    }
    dp[i] = prices[i - 1] + minPrev;
  }

  let result = Infinity;
  for (let j = Math.ceil(n / 2); j <= n; j++) {
    result = Math.min(result, dp[j]);
  }
  return result;
};
// @lc code=end

// TEST:
console.log(minimumCoins([3,1,2])); // 4
console.log(minimumCoins([1,10,1,1])); // 2
console.log(minimumCoins([26,18,6,12,49,7,45,45])); // 39
