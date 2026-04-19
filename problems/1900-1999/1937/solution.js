/*
 * @lc app=leetcode id=1937 lang=javascript
 *
 * [1937] Maximum Number of Points with Cost
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  const m = points.length;
  const n = points[0].length;
  let dp = points[0].slice();

  for (let r = 1; r < m; r++) {
    // left-to-right: leftMax[c] = max(dp[c'] + c') for c' <= c
    const leftMax = new Array(n);
    leftMax[0] = dp[0];
    for (let c = 1; c < n; c++) {
      leftMax[c] = Math.max(leftMax[c - 1] - 1, dp[c]);
    }
    // right-to-left: rightMax[c] = max(dp[c'] - c') for c' >= c
    const rightMax = new Array(n);
    rightMax[n - 1] = dp[n - 1];
    for (let c = n - 2; c >= 0; c--) {
      rightMax[c] = Math.max(rightMax[c + 1] - 1, dp[c]);
    }
    // combine
    for (let c = 0; c < n; c++) {
      dp[c] = points[r][c] + Math.max(leftMax[c], rightMax[c]);
    }
  }

  return Math.max(...dp);
};
// @lc code=end

// TEST:
console.log(maxPoints([[1,2,3],[1,5,1],[3,1,1]])); // 9
console.log(maxPoints([[1,5],[2,3],[4,2]])); // 11
console.log(maxPoints([[5]])); // 5
