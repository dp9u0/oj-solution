/*
 * @lc app=leetcode id=3257 lang=javascript
 *
 * [3257] Maximum Value Sum by Placing Three Rooks II
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var maximumValueSum = function(board) {
  const m = board.length;
  const n = board[0].length;

  // top-3 per row: mark cells (val desc, col asc)
  const inRowTop = Array.from({ length: m }, () => Array(n).fill(false));
  for (let i = 0; i < m; i++) {
    const cells = board[i].map((v, j) => [v, j]);
    cells.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    for (let t = 0; t < 3 && t < cells.length; t++) inRowTop[i][cells[t][1]] = true;
  }
  // top-3 per column: mark cells (val desc, row asc)
  const inColTop = Array.from({ length: n }, () => Array(m).fill(false));
  for (let j = 0; j < n; j++) {
    const cells = [];
    for (let i = 0; i < m; i++) cells.push([board[i][j], i]);
    cells.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    for (let t = 0; t < 3 && t < cells.length; t++) inColTop[j][cells[t][1]] = true;
  }

  // candidate pool: row-top3 ∩ col-top3
  const pool = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (inRowTop[i][j] && inColTop[j][i]) pool.push([board[i][j], i, j]);
    }
  }
  pool.sort((a, b) => b[0] - a[0] || a[1] - b[1] || a[2] - b[2]);
  const top15 = pool.slice(0, 15);

  let ans = -Infinity;
  const P = pool.length;
  for (let a = 0; a < P; a++) {
    const va = pool[a][0];
    const ra = pool[a][1];
    const ca = pool[a][2];
    for (let b = a + 1; b < P; b++) {
      const rb = pool[b][1];
      const cb = pool[b][2];
      if (rb === ra || cb === ca) continue;
      for (let t = 0; t < top15.length; t++) {
        const rt = top15[t][1];
        const ct = top15[t][2];
        if (rt === ra || rt === rb || ct === ca || ct === cb) continue;
        const s = va + pool[b][0] + top15[t][0];
        if (s > ans) ans = s;
        break;
      }
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maximumValueSum([[-3, 1, 1, 1], [-3, 1, -3, 1], [-3, 2, 1, 1]]) === 4);
console.log(maximumValueSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) === 15);
console.log(maximumValueSum([[1, 1, 1], [1, 1, 1], [1, 1, 1]]) === 3);
console.log(maximumValueSum([[-5, -3, -1], [-5, -6, -2], [-5, -4, -7]]) === -10);

// brute-force cross-check on small boards
function bruteForce(board) {
  const m = board.length;
  const n = board[0].length;
  let best = -Infinity;
  for (let r1 = 0; r1 < m; r1++) for (let c1 = 0; c1 < n; c1++)
    for (let r2 = 0; r2 < m; r2++) for (let c2 = 0; c2 < n; c2++)
      for (let r3 = 0; r3 < m; r3++) for (let c3 = 0; c3 < n; c3++) {
        if (r1 === r2 || r1 === r3 || r2 === r3) continue;
        if (c1 === c2 || c1 === c3 || c2 === c3) continue;
        const s = board[r1][c1] + board[r2][c2] + board[r3][c3];
        if (s > best) best = s;
      }
  return best;
}
let seed = 777;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 19 - 9;
let allOk = true;
for (let t = 0; t < 200; t++) {
  const rows = 3 + t % 3;
  const cols = 3 + (t >> 1) % 3;
  const bd = Array.from({ length: rows }, () => Array.from({ length: cols }, rnd));
  const a = maximumValueSum(bd);
  const b = bruteForce(bd);
  if (a !== b) {
    allOk = false;
    console.log(`MISMATCH ${JSON.stringify(bd)} fast=${a} brute=${b}`);
  }
}
console.log(allOk);
