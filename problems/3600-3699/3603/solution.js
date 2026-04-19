/*
 * @lc app=leetcode id=3603 lang=javascript
 *
 * [3603] Minimum Cost Path with Alternating Directions II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} waitCost
 * @return {number}
 */
var minCost = function(m, n, waitCost) {
  const entryCost = (i, j) => (i + 1) * (j + 1);
  // dp0[i][j] = min cost to be at (i,j) on an even second (after moving, need to wait)
  // dp1[i][j] = min cost to be at (i,j) on an odd second (after waiting, can move)
  const total = m * n;
  const dp0 = new Float64Array(total).fill(Infinity);
  const dp1 = new Float64Array(total).fill(Infinity);

  // Start at (0,0), second 1 (odd), after paying entry cost
  dp1[0] = entryCost(0, 0);

  // Process in row-major order. For each cell:
  // 1. dp1 -> move right/down -> update dp0 of target
  // 2. dp0 -> wait -> update dp1 of same cell
  // Since moves only go right/down and wait stays in place,
  // we need to iterate until stable (but due to DAG structure of moves,
  // one pass with proper ordering should work if we handle wait first)
  // Actually: dp0 at (i,j) depends on dp1 at (i-1,j) and dp1 at (i,j-1)
  //           dp1 at (i,j) depends on dp0 at (i,j)
  // So process: first compute dp0 from dp1 of predecessors, then dp1 from dp0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const idx = i * n + j;
      // dp0[idx] already set by moves from predecessors in previous iterations

      // Wait: dp0 -> dp1 at same cell
      if (dp0[idx] < Infinity) {
        const cost = dp0[idx] + waitCost[i][j];
        if (cost < dp1[idx]) dp1[idx] = cost;
      }

      // Move from dp1: right and down
      if (dp1[idx] < Infinity) {
        if (j + 1 < n) {
          const nidx = i * n + j + 1;
          const cost = dp1[idx] + entryCost(i, j + 1);
          if (cost < dp0[nidx]) dp0[nidx] = cost;
        }
        if (i + 1 < m) {
          const nidx = (i + 1) * n + j;
          const cost = dp1[idx] + entryCost(i + 1, j);
          if (cost < dp0[nidx]) dp0[nidx] = cost;
        }
      }
    }
  }

  const lastIdx = (m - 1) * n + (n - 1);
  return Math.min(dp0[lastIdx], dp1[lastIdx]);
};
// @lc code=end

// TEST:
console.log(minCost(1, 2, [[1,2]])); // 3
console.log(minCost(2, 2, [[3,5],[2,4]])); // 9
console.log(minCost(2, 3, [[6,1,4],[3,2,5]])); // 16
console.log(minCost(1, 1, [[0]])); // 1
console.log(minCost(2, 1, [[1],[1]])); // 3
