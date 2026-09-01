/*
 * @lc app=leetcode id=959 lang=javascript
 *
 * [959] Regions Cut By Slashes
 */

// @lc code=start
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  const n = grid.length;
  const g = Array.from({ length: n * 3 }, () => new Array(n * 3).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const r = i * 3, c = j * 3;
      if (grid[i][j] === '/') {
        g[r][c + 2] = g[r + 1][c + 1] = g[r + 2][c] = 1;
      } else if (grid[i][j] === '\\') {
        g[r][c] = g[r + 1][c + 1] = g[r + 2][c + 2] = 1;
      }
    }
  }
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const bfs = (si, sj) => {
    const q = [[si, sj]];
    g[si][sj] = 1;
    while (q.length) {
      const [ci, cj] = q.shift();
      for (const [di, dj] of dirs) {
        const ni = ci + di, nj = cj + dj;
        if (ni >= 0 && ni < n * 3 && nj >= 0 && nj < n * 3 && g[ni][nj] === 0) {
          g[ni][nj] = 1;
          q.push([ni, nj]);
        }
      }
    }
  };
  let regions = 0;
  for (let i = 0; i < n * 3; i++) {
    for (let j = 0; j < n * 3; j++) {
      if (g[i][j] === 0) {
        bfs(i, j);
        regions++;
      }
    }
  }
  return regions;
};
// @lc code=end

// TEST:
console.log(regionsBySlashes([" /","/ "])); // 2
console.log(regionsBySlashes([" /","  "])); // 1
console.log(regionsBySlashes(["/\\","\\/"])); // 5
