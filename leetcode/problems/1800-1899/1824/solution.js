/*
 * @lc app=leetcode id=1824 lang=javascript
 *
 * [1824] Minimum Sideway Jumps
 */

// @lc code=start
/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function(obstacles) {
  const INF = 1e9;
  let dp = [1, 0, 1]; // dp[0]=lane1, dp[1]=lane2, dp[2]=lane3
  for (let i = 1; i < obstacles.length; i++) {
    const obs = obstacles[i];
    // mark obstacle lanes as INF
    for (let j = 0; j < 3; j++) {
      if (j + 1 === obs) dp[j] = INF;
    }
    // update non-obstacle lanes
    for (let j = 0; j < 3; j++) {
      if (j + 1 !== obs) {
        const minOther = Math.min(
          dp[(j + 1) % 3],
          dp[(j + 2) % 3]
        ) + 1;
        dp[j] = Math.min(dp[j], minOther);
      }
    }
  }
  return Math.min(...dp);
};
// @lc code=end

// TEST:
console.log(minSideJumps([0,1,2,3,0])); // 2
console.log(minSideJumps([0,1,1,3,3,0])); // 0
console.log(minSideJumps([0,2,1,0,3,0])); // 2
