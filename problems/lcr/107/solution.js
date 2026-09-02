/*
 * @lc app=leetcode.cn id=LCR 107 lang=javascript
 *
 * [LCR 107] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const dist = Array.from({ length: m }, () => new Array(n).fill(-1));
  const queue = [];
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (mat[r][c] === 0) {
        dist[r][c] = 0;
        queue.push([r, c]);
      }
    }
  }
  let head = 0;
  while (head < queue.length) {
    const [r, c] = queue[head++];
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
      if (dist[nr][nc] !== -1) continue;
      dist[nr][nc] = dist[r][c] + 1;
      queue.push([nr, nc]);
    }
  }
  return dist;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]), [[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
assert.deepStrictEqual(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]), [[0, 0, 0], [0, 1, 0], [1, 2, 1]]);
assert.deepStrictEqual(updateMatrix([[0]]), [[0]]);
assert.deepStrictEqual(updateMatrix([[1, 0], [1, 1]]), [[1, 0], [2, 1]]);
assert.deepStrictEqual(updateMatrix([[1, 1, 1], [1, 0, 1], [1, 1, 1]]), [[2, 1, 2], [1, 0, 1], [2, 1, 2]]);

console.log('All tests passed!');