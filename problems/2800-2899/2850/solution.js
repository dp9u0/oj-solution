/*
 * @lc app=leetcode id=2850 lang=javascript
 *
 * [2850] Minimum Moves to Spread Stones Over Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
  const sources = [], targets = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (grid[r][c] > 1) {
        for (let k = 1; k < grid[r][c]; k++) sources.push([r, c]);
      } else if (grid[r][c] === 0) {
        targets.push([r, c]);
      }
    }
  }

  const n = targets.length;
  if (n === 0) return 0;

  const used = new Array(n).fill(false);
  let minCost = Infinity;

  const match = (si, cost) => {
    if (si === n) { minCost = Math.min(minCost, cost); return; }
    if (cost >= minCost) return;
    for (let ti = 0; ti < n; ti++) {
      if (used[ti]) continue;
      used[ti] = true;
      match(si + 1, cost + Math.abs(sources[si][0] - targets[ti][0]) + Math.abs(sources[si][1] - targets[ti][1]));
      used[ti] = false;
    }
  };

  match(0, 0);
  return minCost;
};
// @lc code=end

// TEST:
console.log(minimumMoves([[1,1,0],[1,1,1],[1,2,1]])); // 3
console.log(minimumMoves([[1,3,0],[1,0,0],[1,0,3]])); // 4
console.log(minimumMoves([[1,1,1],[1,1,1],[1,1,1]])); // 0
console.log(minimumMoves([[0,0,0],[0,9,0],[0,0,0]])); // 12
console.log(minimumMoves([[3,0,0],[0,3,0],[0,0,3]])); // 8
