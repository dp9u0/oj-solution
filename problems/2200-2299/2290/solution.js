/*
 * @lc app=leetcode id=2290 lang=javascript
 *
 * [2290] Minimum Obstacle Removal to Reach Corner
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
  const m = grid.length, n = grid[0].length;
  const dist = Array.from({ length: m }, () => new Int32Array(n).fill(-1));
  dist[0][0] = 0;
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];

  let cur = [[0, 0]];
  while (cur.length) {
    const nxt = [];
    for (const [r, c] of cur) {
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr < 0 || nr >= m || nc < 0 || nc >= n || dist[nr][nc] !== -1) continue;
        dist[nr][nc] = dist[r][c] + grid[nr][nc];
        if (grid[nr][nc] === 0) {
          cur.push([nr, nc]);
        } else {
          nxt.push([nr, nc]);
        }
      }
    }
    cur = nxt;
  }

  return dist[m - 1][n - 1];
};
// @lc code=end

// TEST:
console.log(minimumObstacles([[0,1,1],[1,1,0],[1,1,0]])); // 2
console.log(minimumObstacles([[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]])); // 0
console.log(minimumObstacles([[0,0],[0,0]])); // 0
console.log(minimumObstacles([[0,1],[1,0]])); // 1
console.log(minimumObstacles([[0,0,0],[0,1,0],[0,0,0]])); // 0
