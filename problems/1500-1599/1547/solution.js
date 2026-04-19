/*
 * @lc app=leetcode id=1547 lang=javascript
 *
 * [1547] Minimum Cost to Cut a Stick
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
  cuts.sort((a, b) => a - b);
  const points = [0, ...cuts, n];
  const len = points.length;

  const dp = Array.from({ length: len }, () => new Array(len).fill(0));

  for (let gap = 2; gap < len; gap++) {
    for (let i = 0; i + gap < len; i++) {
      const j = i + gap;
      dp[i][j] = Infinity;
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
      dp[i][j] += points[j] - points[i];
    }
  }

  return dp[0][len - 1];
};
// @lc code=end

// TEST:
console.log(minCost(7, [1, 3, 4, 5])); // 16
console.log(minCost(9, [5, 6, 1, 4, 2])); // 22
