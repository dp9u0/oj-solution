/*
 * @lc app=leetcode.cn id=LCP 79 lang=javascript
 *
 * [LCP 79] 提取咒文
 */

// @lc code=start
/**
 * @param {string[]} matrix
 * @param {string} mantra
 * @return {number}
 */
var extractMantra = function(matrix, mantra) {
  const R = matrix.length;
  const C = matrix[0].length;
  const INF = Infinity;

  // L1 distance transform in place over grid h:
  // h[r][c] = min_p orig[p] + |r-pr|+|c-pc|, exact via 4 directional sweeps.
  const transform = (h) => {
    // row passes: left->right, right->left
    for (let r = 0; r < R; r++) {
      for (let c = 1; c < C; c++) if (h[r][c - 1] + 1 < h[r][c]) h[r][c] = h[r][c - 1] + 1;
      for (let c = C - 2; c >= 0; c--) if (h[r][c + 1] + 1 < h[r][c]) h[r][c] = h[r][c + 1] + 1;
    }
    // column passes: top->bottom, bottom->top
    for (let c = 0; c < C; c++) {
      for (let r = 1; r < R; r++) if (h[r - 1][c] + 1 < h[r][c]) h[r][c] = h[r - 1][c] + 1;
      for (let r = R - 2; r >= 0; r--) if (h[r + 1][c] + 1 < h[r][c]) h[r][c] = h[r + 1][c] + 1;
    }
  };

  // prev[r][c] = min ops having extracted processed prefix, standing at (r,c)
  let prev = Array.from({ length: R }, () => new Array(C).fill(INF));
  prev[0][0] = 0;

  for (let k = 0; k < mantra.length; k++) {
    const ch = mantra[k];
    const h = prev.map(row => row.slice());
    transform(h);
    const next = Array.from({ length: R }, () => new Array(C).fill(INF));
    let found = false;
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (matrix[r][c] === ch && h[r][c] < INF) {
          next[r][c] = h[r][c] + 1; // move there + extract
          found = true;
        }
      }
    }
    if (!found) return -1;
    prev = next;
  }

  let ans = INF;
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (prev[r][c] < ans) ans = prev[r][c];
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(extractMantra(['sd', 'ep'], 'speed'), 10);
assert.strictEqual(extractMantra(['abc', 'daf', 'geg'], 'sad'), -1);
// single-char mantra at start
assert.strictEqual(extractMantra(['s'], 's'), 1);
assert.strictEqual(extractMantra(['x'], 'x'), 1);
// char absent anywhere
assert.strictEqual(extractMantra(['ab', 'cd'], 'z'), -1);
// all same char mantra: repeated extraction at same cell; stay put
assert.strictEqual(extractMantra(['a'], 'aaa'), 3);
// need to travel; grid 1x3 with letters
assert.strictEqual(extractMantra(['abc'], 'cba'), 7);
// vertical travel: (0,0)->b(1,0) then back to a(0,0): 2+2 = 4
assert.strictEqual(extractMantra(['a', 'b'], 'ba'), 4);
// move and reuse
assert.strictEqual(extractMantra(['ab'], 'ab'), 3);

console.log('All tests passed!');
console.log('extractMantra(["sd","ep"], "speed") =', extractMantra(['sd', 'ep'], 'speed'));
