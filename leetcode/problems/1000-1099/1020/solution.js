/*
 * @lc app=leetcode id=1020 lang=javascript
 *
 * [1020] Number of Enclaves
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  const m = grid.length, n = grid[0].length;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && (i === 0 || i === m - 1 || j === 0 || j === n - 1)) {
        queue.push([i, j]);
        grid[i][j] = 0;
      }
    }
  }

  let head = 0;
  while (head < queue.length) {
    const [r, c] = queue[head++];
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
        grid[nr][nc] = 0;
        queue.push([nr, nc]);
      }
    }
  }

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) count++;
    }
  }

  return count;
};
// @lc code=end

// TEST:
console.log(numEnclaves([[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]])); // 3
console.log(numEnclaves([[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]])); // 0
