/*
 * @lc app=leetcode id=1034 lang=javascript
 *
 * [1034] Coloring A Border
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
  const m = grid.length, n = grid[0].length;
  const orig = grid[row][col];
  if (orig === color) return grid;

  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  const visited = Array.from({ length: m }, () => new Uint8Array(n));
  const border = [];
  const queue = [[row, col]];
  visited[row][col] = 1;

  while (queue.length) {
    const [r, c] = queue.pop();
    let isBorder = false;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= m || nc < 0 || nc >= n || grid[nr][nc] !== orig) {
        isBorder = true;
      } else if (!visited[nr][nc]) {
        visited[nr][nc] = 1;
        queue.push([nr, nc]);
      }
    }
    if (isBorder) border.push([r, c]);
  }

  for (const [r, c] of border) grid[r][c] = color;
  return grid;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(colorBorder([[1,1],[1,2]], 0, 0, 3))); // [[3,3],[3,2]]
console.log(JSON.stringify(colorBorder([[1,2,2],[2,3,2]], 0, 1, 3))); // [[1,3,3],[2,3,3]]
console.log(JSON.stringify(colorBorder([[1,1,1],[1,1,1],[1,1,1]], 1, 1, 2))); // [[2,2,2],[2,1,2],[2,2,2]]
console.log(JSON.stringify(colorBorder([[1]], 0, 0, 2))); // [[2]]
console.log(JSON.stringify(colorBorder([[1,2,1,2]], 0, 0, 3))); // [[3,2,1,2]]
