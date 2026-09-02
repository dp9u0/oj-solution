/*
 * @lc app=leetcode.cn id=LCP 63 lang=javascript
 *
 * [LCP 63] 弹珠游戏
 */

// @lc code=start
/**
 * @param {number} num
 * @param {string[]} plate
 * @return {number[][]}
 */
var ballGame = function(num, plate) {
  const R = plate.length;
  const C = plate[0].length;
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // E, S, W, N (clockwise order)

  const ok = (r, c) => r >= 0 && r < R && c >= 0 && c < C;

  const tryLaunch = (r, c, dirIdx) => {
    // simulate; returns true if marble lands in a hole within num steps
    let steps = 0;
    let cr = r;
    let cc = c;
    let d = dirIdx;
    const seen = new Set();
    for (;;) {
      cr += dirs[d][0];
      cc += dirs[d][1];
      steps++;
      if (!ok(cr, cc)) return false;   // exited
      if (steps > num) return false;
      const ch = plate[cr][cc];
      if (ch === 'O') return true;
      if (ch === 'W') d = (d + 3) % 4; // ccw
      else if (ch === 'E') d = (d + 1) % 4; // cw
      const key = cr * C + cc;
      const state = key * 4 + d;
      if (seen.has(state)) return false; // cycle, can't reach hole
      seen.add(state);
    }
  };

  const res = [];
  // top & bottom edges (exclude corners): shoot down/up
  for (let c = 1; c < C - 1; c++) {
    if (plate[0][c] === '.' && tryLaunch(0, c, 1)) res.push([0, c]);
    if (plate[R - 1][c] === '.' && tryLaunch(R - 1, c, 3)) res.push([R - 1, c]);
  }
  // left & right edges: shoot right/left
  for (let r = 1; r < R - 1; r++) {
    if (plate[r][0] === '.' && tryLaunch(r, 0, 0)) res.push([r, 0]);
    if (plate[r][C - 1] === '.' && tryLaunch(r, C - 1, 2)) res.push([r, C - 1]);
  }
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

const sorted = (a) => a.map(p => p.join(',')).sort();
assert.deepStrictEqual(sorted(ballGame(4, ['..E.', '.EOW', '..W.'])), sorted([[2, 1]]));
assert.deepStrictEqual(sorted(ballGame(5, ['.....', '..E..', '.WO..', '.....'])), sorted([[0, 1], [1, 0], [2, 4], [3, 2]]));
assert.deepStrictEqual(sorted(ballGame(3, ['.....', '....O', '....O', '.....'])), []);

console.log('All tests passed!');
console.log('ex1 =', JSON.stringify(ballGame(4, ['..E.', '.EOW', '..W.'])));
