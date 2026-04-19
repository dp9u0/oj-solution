/*
 * @lc app=leetcode id=1039 lang=javascript
 *
 * [1039] Minimum Score Triangulation of Polygon
 */

// @lc code=start
/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
  const n = values.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let len = 2; len < n; len++) {
    for (let i = 0; i + len < n; i++) {
      const j = i + len;
      dp[i][j] = Infinity;
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + values[i] * values[k] * values[j]);
      }
    }
  }
  return dp[0][n - 1];
};
// @lc code=end

// TEST:
console.log(minScoreTriangulation([1,2,3])); // 6
console.log(minScoreTriangulation([3,7,4,5])); // 144
console.log(minScoreTriangulation([1,3,1,4,1,5])); // 13
