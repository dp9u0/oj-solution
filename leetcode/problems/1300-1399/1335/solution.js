/*
 * @lc app=leetcode id=1335 lang=javascript
 *
 * [1335] Minimum Difficulty of a Job Schedule
 */

// @lc code=start
/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
  const n = jobDifficulty.length;
  if (n < d) return -1;

  const INF = Infinity;
  // dp[j] = min difficulty for current day, having completed j jobs
  let dp = new Array(n + 1).fill(INF);
  dp[0] = 0;

  for (let day = 1; day <= d; day++) {
    const next = new Array(n + 1).fill(INF);
    // For this day, we need at least `day` jobs done total
    // The last day's job count ranges from day to n
    for (let j = day; j <= n; j++) {
      let maxDiff = 0;
      // Enumerate the first job of this day: k ranges from day-1 to j-1
      // We go backwards to maintain max efficiently
      for (let k = j - 1; k >= day - 1; k--) {
        maxDiff = Math.max(maxDiff, jobDifficulty[k]);
        if (dp[k] !== INF) {
          next[j] = Math.min(next[j], dp[k] + maxDiff);
        }
      }
    }
    dp = next;
  }

  return dp[n] === INF ? -1 : dp[n];
};
// @lc code=end

// TEST:
console.log(minDifficulty([6,5,4,3,2,1], 2) === 7);
console.log(minDifficulty([9,9,9], 4) === -1);
console.log(minDifficulty([1,1,1], 3) === 3);
console.log(minDifficulty([1], 1) === 1);
console.log(minDifficulty([7,1,7,1,7,1], 3) === 15);
