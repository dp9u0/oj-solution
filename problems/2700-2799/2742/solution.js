/*
 * @lc app=leetcode id=2742 lang=javascript
 *
 * [2742] Painting the Walls
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
  const n = cost.length;
  const INF = Infinity;
  const dp = new Array(n + 1).fill(INF);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    const w = time[i] + 1;
    for (let j = n; j >= 1; j--) {
      const prev = Math.max(0, j - w);
      if (dp[prev] < INF) {
        dp[j] = Math.min(dp[j], dp[prev] + cost[i]);
      }
    }
  }

  return dp[n];
};
// @lc code=end

// TEST:
console.log(paintWalls([1, 2, 3, 2], [1, 2, 3, 2]) === 3);
console.log(paintWalls([2, 3, 4, 2], [1, 1, 1, 1]) === 4);
console.log(paintWalls([1], [1]) === 1);
console.log(paintWalls([5, 4, 3], [1, 1, 1]) === 7);
console.log(paintWalls([1, 1, 1, 1], [5, 5, 5, 5]) === 1);
