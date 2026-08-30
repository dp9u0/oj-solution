/*
 * @lc app=leetcode id=3996 lang=javascript
 *
 * [3996] Knight Dialer Even Moves
 */

// @lc code=start
/**
 * @param {number[]} start
 * @param {number[]} target
 * @return {boolean}
 */
var canReach = function(start, target) {
  const dx = Math.abs(start[0] - target[0]);
  const dy = Math.abs(start[1] - target[1]);
  return (dx + dy) % 2 === 0;
};
// @lc code=end

// TEST:
console.log(canReach([1, 1], [2, 2]) === true);
console.log(canReach([4, 5], [6, 6]) === false);
console.log(canReach([0, 0], [0, 0]) === true);
console.log(canReach([0, 0], [1, 2]) === false);
console.log(canReach([0, 0], [2, 2]) === true);

// brute: BFS all path lengths parities on 8x8
function brute(s, t) {
  // BFS shortest; then check parity alternation reachability via BFS on (pos, parity)
  const seen = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => [false, false]));
  const D = [[1,2],[2,1],[-1,2],[-2,1],[1,-2],[2,-1],[-1,-2],[-2,-1]];
  let q = [[s[0], s[1], 0]];
  seen[s[0]][s[1]][0] = true;
  while (q.length) {
    const nq = [];
    for (const [x, y, p] of q) {
      if (x === t[0] && y === t[1] && p === 0) return true;
      for (const [dx, dy] of D) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || nx >= 8 || ny < 0 || ny >= 8) continue;
        if (!seen[nx][ny][1 - p]) { seen[nx][ny][1 - p] = true; nq.push([nx, ny, 1 - p]); }
      }
    }
    q = nq;
  }
  return false;
}
let ok = true;
for (let x1 = 0; x1 < 8; x1++) for (let y1 = 0; y1 < 8; y1++) for (let x2 = 0; x2 < 8; x2++) for (let y2 = 0; y2 < 8; y2++) {
  if (canReach([x1, y1], [x2, y2]) !== brute([x1, y1], [x2, y2])) { ok = false; console.log('MISMATCH', x1, y1, x2, y2); }
}
console.log(ok);
