/*
 * @lc app=leetcode.cn id=LCP 41 lang=javascript
 *
 * [LCP 41] 黑白翻转棋
 */

// @lc code=start
/**
 * @param {string[]} chessboard
 * @return {number}
 */
var flipChess = function(chessboard) {
  const R = chessboard.length;
  const C = chessboard[0].length;
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
  const sim = (sr, sc) => {
    const g = chessboard.map(row => row.split(''));
    g[sr][sc] = 'X';
    const queue = [[sr, sc]];
    let head = 0;
    const flipped = new Set();
    while (head < queue.length) {
      const [r, c] = queue[head++];
      for (const [dr, dc] of dirs) {
        const run = [];
        let rr = r + dr;
        let cc = c + dc;
        while (rr >= 0 && rr < R && cc >= 0 && cc < C && g[rr][cc] === 'O') {
          run.push([rr, cc]);
          rr += dr;
          cc += dc;
        }
        if (run.length && rr >= 0 && rr < R && cc >= 0 && cc < C && g[rr][cc] === 'X') {
          for (const [xr, xc] of run) {
            g[xr][xc] = 'X';
            queue.push([xr, xc]);
            flipped.add(xr * C + xc);
          }
        }
      }
    }
    return flipped.size;
  };
  let ans = 0;
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
    if (chessboard[r][c] === '.') {
      const cnt = sim(r, c);
      if (cnt > ans) ans = cnt;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(flipChess(['....X.', '....X.', 'XOOO..', '......', '......']), 3);
assert.strictEqual(flipChess(['.X.', '.O.', 'XO.']), 2);
assert.strictEqual(flipChess(['.......', '.......', '.......', 'X......', '.O.....', '..O....', '....OOX']), 4);
// tiny: place at col2 sandwiches O between X and placed X
assert.strictEqual(flipChess(['XO.']), 1);
// gap or missing closer prevents flank
assert.strictEqual(flipChess(['X.O']), 0);
assert.strictEqual(flipChess(['X..O']), 0); // gap prevents flank
assert.strictEqual(flipChess(['XOOOX']), 0); // no empty cell
assert.strictEqual(flipChess(['OO.', 'OOX']), 0);

console.log('All tests passed!');
console.log('flipChess([\'....X.\',\'....X.\',\'XOOO..\',\'......\',\'......\']) =', flipChess(['....X.', '....X.', 'XOOO..', '......', '......']));
