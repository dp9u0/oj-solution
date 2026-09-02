/*
 * @lc app=leetcode.cn id=LCR 105 lang=javascript
 *
 * [LCR 105] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let best = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] !== 1) continue;
      // DFS count
      const stack = [[r, c]];
      grid[r][c] = 0;
      let area = 0;
      while (stack.length) {
        const [cr, cc] = stack.pop();
        area++;
        for (const [dr, dc] of dirs) {
          const nr = cr + dr;
          const nc = cc + dc;
          if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
          if (grid[nr][nc] === 1) {
            grid[nr][nc] = 0;
            stack.push([nr, nc]);
          }
        }
      }
      if (area > best) best = area;
    }
  }
  return best;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]), 6);
assert.strictEqual(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]), 0);
assert.strictEqual(maxAreaOfIsland([[1, 1, 1], [1, 1, 1], [1, 1, 1]]), 9);
assert.strictEqual(maxAreaOfIsland([[1]]), 1);
assert.strictEqual(maxAreaOfIsland([[1, 0, 1], [1, 0, 1], [1, 1, 1]]), 7);

console.log('All tests passed!');