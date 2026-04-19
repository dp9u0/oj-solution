/*
 * @lc app=leetcode id=799 lang=javascript
 *
 * [799] Champagne Tower
 */

// @lc code=start
/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  const dp = new Array(query_row + 1).fill(0).map(() => new Array(query_row + 1).fill(0));
  dp[0][0] = poured;

  for (let i = 0; i < query_row; i++) {
    for (let j = 0; j <= i; j++) {
      if (dp[i][j] > 1) {
        const overflow = (dp[i][j] - 1) / 2;
        dp[i + 1][j] += overflow;
        dp[i + 1][j + 1] += overflow;
      }
    }
  }

  return Math.min(dp[query_row][query_glass], 1);
};
// @lc code=end

// TEST:
console.log(champagneTower(1, 1, 1));         // 0
console.log(champagneTower(2, 1, 1));         // 0.5
console.log(champagneTower(100000009, 33, 17)); // 1
console.log(champagneTower(4, 2, 0));         // 0.25
console.log(champagneTower(4, 2, 1));         // 0.5
