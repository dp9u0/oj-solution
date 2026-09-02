/*
 * @lc app=leetcode.cn id=LCR 129 lang=javascript
 *
 * [LCR 129] 字母迷宫
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @param {string} target
 * @return {boolean}
 */
var wordPuzzle = function(grid, target) {
  const R = grid.length;
  const C = grid[0].length;
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const dfs = (r, c, k) => {
    if (k === target.length) return true;
    if (r < 0 || r >= R || c < 0 || c >= C || grid[r][c] !== target[k]) return false;
    // temporarily mark used
    const tmp = grid[r][c];
    grid[r][c] = '#';
    let found = false;
    for (const [dr, dc] of dirs) {
      if (dfs(r + dr, c + dc, k + 1)) { found = true; break; }
    }
    grid[r][c] = tmp; // always restore, even on success
    return found;
  };
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === target[0] && dfs(r, c, 0)) return true;
    }
  }
  return false;
};
// @lc code=end

// TEST:
const assert = require('assert');

const g = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
assert.strictEqual(wordPuzzle(g, 'ABCCED'), true);
assert.strictEqual(wordPuzzle(g, 'SEE'), true);
assert.strictEqual(wordPuzzle(g, 'ABCB'), false);
// re-check grid not mutated between calls (each call gets same g; our fn restores via backtrack but 'SEE' leaves grid restored)
assert.strictEqual(wordPuzzle([['a']], 'a'), true);
assert.strictEqual(wordPuzzle([['a']], 'b'), false);
assert.strictEqual(wordPuzzle([['a', 'b'], ['c', 'd']], 'abdc'), true);

console.log('All tests passed!');
