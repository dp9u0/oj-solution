/*
 * @lc app=leetcode.cn id=LCR 099 lang=javascript
 *
 * [LCR 099] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) grid[i][j] += grid[i][j - 1];
      else if (j === 0) grid[i][j] += grid[i - 1][j];
      else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[m - 1][n - 1];
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]), 7);
assert.strictEqual(minPathSum([[1, 2, 3], [4, 5, 6]]), 12);
assert.strictEqual(minPathSum([[1]]), 1);
assert.strictEqual(minPathSum([[1, 2], [1, 1]]), 3);
assert.strictEqual(minPathSum([[0, 0], [0, 0]]), 0);
assert.strictEqual(minPathSum([[1, 2, 3]]), 6);
assert.strictEqual(minPathSum([[1], [2], [3]]), 6);

console.log('All tests passed!');
console.log('minPathSum([[1,3,1],[1,5,1],[4,2,1]]) =', minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
