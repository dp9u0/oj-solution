/*
 * @lc app=leetcode id=3276 lang=javascript
 *
 * [3276] Select Cells in Grid With Maximum Score
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function(grid) {
  const m = grid.length;
  const full = (1 << m) - 1;

  const rowsByVal = new Map();
  for (let i = 0; i < m; i++) {
    for (const v of grid[i]) {
      if (!rowsByVal.has(v)) rowsByVal.set(v, new Set());
      rowsByVal.get(v).add(i);
    }
  }

  const vals = [...rowsByVal.keys()].sort((a, b) => b - a);
  const dp = new Int32Array(full + 1);

  for (const v of vals) {
    const rows = [...rowsByVal.get(v)];
    const prev = new Int32Array(dp);
    for (let mask = 0; mask <= full; mask++) {
      for (const i of rows) {
        if (mask & (1 << i)) continue;
        const next = mask | (1 << i);
        dp[next] = Math.max(dp[next], prev[mask] + v);
      }
    }
  }

  let ans = 0;
  for (let mask = 1; mask <= full; mask++) ans = Math.max(ans, dp[mask]);
  return ans;
};
// @lc code=end

// TEST:
console.log(maxScore([[1, 2, 3], [4, 3, 2], [1, 1, 1]]) === 8);
console.log(maxScore([[8, 7, 6], [8, 3, 2]]) === 15);
console.log(maxScore([[1, 1], [1, 1]]) === 1);
console.log(maxScore([[5]]) === 5);
console.log(maxScore([[4, 3], [4, 2]]) === 7);
