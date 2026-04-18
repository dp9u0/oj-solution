/*
 * @lc app=leetcode id=2312 lang=javascript
 *
 * [2312] Selling Pieces of Wood
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
var sellingWood = function(m, n, prices) {
  const priceMap = new Map();
  for (const [h, w, p] of prices) priceMap.set(h * (n + 1) + w, p);

  const dp = Array.from({ length: m + 1 }, () => new Float64Array(n + 1));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = priceMap.get(i * (n + 1) + j) || 0;
      for (let k = 1; k < i; k++) dp[i][j] = Math.max(dp[i][j], dp[k][j] + dp[i - k][j]);
      for (let k = 1; k < j; k++) dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[i][j - k]);
    }
  }

  return dp[m][n];
};
// @lc code=end

// TEST:
console.log(sellingWood(3, 5, [[1, 4, 2], [2, 2, 7], [2, 1, 3]]) === 19);
console.log(sellingWood(4, 6, [[3, 2, 10], [1, 4, 2], [4, 1, 3]]) === 32);
console.log(sellingWood(1, 1, [[1, 1, 5]]) === 5);
console.log(sellingWood(2, 2, [[1, 1, 1], [2, 2, 3]]) === 4);
console.log(sellingWood(2, 3, [[1, 2, 10], [2, 1, 5]]) === 25);
