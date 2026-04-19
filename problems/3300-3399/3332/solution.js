/*
 * @lc app=leetcode id=3332 lang=javascript
 *
 * [3332] Maximum Points Tourist Can Earn
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} stayScore
 * @param {number[][]} travelScore
 * @return {number}
 */
var maxScore = function(n, k, stayScore, travelScore) {
  // dp[j] = max score when currently at city j
  let dp = new Array(n).fill(0);
  for (let day = 0; day < k; day++) {
    const next = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      // stay
      next[j] = dp[j] + stayScore[day][j];
      // travel from any other city p to j
      for (let p = 0; p < n; p++) {
        if (p !== j) {
          next[j] = Math.max(next[j], dp[p] + travelScore[p][j]);
        }
      }
    }
    dp = next;
  }
  return Math.max(...dp);
};
// @lc code=end

// TEST:
console.log(maxScore(2, 1, [[2,3]], [[0,2],[1,0]])); // 3
console.log(maxScore(3, 2, [[3,4,2],[2,1,2]], [[0,2,1],[2,0,4],[3,2,0]])); // 8
