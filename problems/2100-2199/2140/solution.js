/*
 * @lc app=leetcode id=2140 lang=javascript
 *
 * [2140] Solving Questions With Brainpower
 */

// @lc code=start
/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
  const n = questions.length;
  const dp = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    const [points, brainpower] = questions[i];
    const next = i + brainpower + 1;
    const solve = points + (next < n ? dp[next] : 0);
    dp[i] = Math.max(solve, dp[i + 1]);
  }

  return dp[0];
};
// @lc code=end

// TEST:
console.log(mostPoints([[3,2],[4,3],[4,4],[2,5]])); // 5
console.log(mostPoints([[1,1],[2,2],[3,3],[4,4],[5,5]])); // 7
