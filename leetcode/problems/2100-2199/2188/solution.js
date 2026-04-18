/*
 * @lc app=leetcode id=2188 lang=javascript
 *
 * [2188] Minimum Time to Finish the Race
 */

// @lc code=start
/**
 * @param {number[][]} tires
 * @param {number} changeTime
 * @param {number} numLaps
 * @return {number}
 */
var minimumFinishTime = function(tires, changeTime, numLaps) {
  const maxStint = 20;
  const cost = new Array(maxStint + 1).fill(Infinity);

  for (const [fi, ri] of tires) {
    let lapTime = fi, total = 0;
    for (let j = 1; j <= maxStint; j++) {
      total += lapTime;
      if (total > 2e9) break;
      cost[j] = Math.min(cost[j], total);
      lapTime *= ri;
      if (lapTime > 2e9) break;
    }
  }

  const dp = new Array(numLaps + 1).fill(Infinity);
  dp[0] = -changeTime;
  for (let i = 1; i <= numLaps; i++) {
    for (let j = 1; j <= Math.min(i, maxStint); j++) {
      if (cost[j] < Infinity) {
        dp[i] = Math.min(dp[i], dp[i - j] + cost[j] + changeTime);
      }
    }
  }
  return dp[numLaps];
};
// @lc code=end

// TEST:
console.log(minimumFinishTime([[2,3],[3,4]], 5, 4) === 21);
console.log(minimumFinishTime([[1,10],[2,2],[3,4]], 6, 5) === 25);
console.log(minimumFinishTime([[1,2]], 100, 1) === 1);
console.log(minimumFinishTime([[1,2]], 3, 3) === 7);
console.log(minimumFinishTime([[5,3],[6,4]], 10, 2) === 20);
