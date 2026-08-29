/*
 * @lc app=leetcode id=3933 lang=javascript
 *
 * [3933] Count Local Maximums
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countLocalMaximums = function(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  // 2d sparse table
  const K1 = 32 - Math.clz32(n);
  const K2 = 32 - Math.clz32(m);
  const st = [];
  for (let k1 = 0; k1 <= K1; k1++) {
    st[k1] = [];
    for (let k2 = 0; k2 <= K2; k2++) {
      st[k1][k2] = [];
    }
  }
  st[0][0] = matrix;
  for (let k1 = 0; k1 <= K1; k1++) {
    for (let k2 = 0; k2 <= K2; k2++) {
      if (k1 === 0 && k2 === 0) continue;
      const rows = n - (1 << k1) + 1;
      const cols = m - (1 << k2) + 1;
      const cur = Array.from({ length: Math.max(rows, 0) }, () => Array(Math.max(cols, 0)).fill(0));
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          let v;
          if (k1 > 0) {
            v = Math.max(st[k1 - 1][k2][i][j], st[k1 - 1][k2][i + (1 << (k1 - 1))][j]);
          } else {
            v = Math.max(st[k1][k2 - 1][i][j], st[k1][k2 - 1][i][j + (1 << (k2 - 1))]);
          }
          cur[i][j] = v;
        }
      }
      st[k1][k2] = cur;
    }
  }
  const query = (r1, r2, c1, c2) => {
    r1 = Math.max(0, r1);
    c1 = Math.max(0, c1);
    r2 = Math.min(n - 1, r2);
    c2 = Math.min(m - 1, c2);
    if (r1 > r2 || c1 > c2) return -Infinity;
    const k1 = 31 - Math.clz32(r2 - r1 + 1);
    const k2 = 31 - Math.clz32(c2 - c1 + 1);
    return Math.max(
      st[k1][k2][r1][c1],
      st[k1][k2][r1][c2 - (1 << k2) + 1],
      st[k1][k2][r2 - (1 << k1) + 1][c1],
      st[k1][k2][r2 - (1 << k1) + 1][c2 - (1 << k2) + 1]
    );
  };
  let ans = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      const x = matrix[r][c];
      if (x === 0) continue;
      // square minus 4 corners = 5 rectangles
      const parts = [
        [r - x, r - x, c - x + 1, c + x - 1],
        [r + x, r + x, c - x + 1, c + x - 1],
        [r - x + 1, r + x - 1, c - x, c - x],
        [r - x + 1, r + x - 1, c + x, c + x],
        [r - x + 1, r + x - 1, c - x + 1, c + x - 1],
      ];
      let ok = true;
      for (const [r1, r2, c1, c2] of parts) {
        if (query(r1, r2, c1, c2) > x) { ok = false; break; }
      }
      if (ok) ans++;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(countLocalMaximums([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,2,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]) === 1);
console.log(countLocalMaximums([[1,2],[3,4]]) === 1);
console.log(countLocalMaximums([[1,0,1],[0,1,0],[1,0,1]]) === 5);

// brute cross-check
function bruteCount(matrix) {
  const n = matrix.length, m = matrix[0].length;
  let cnt = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      const x = matrix[r][c];
      if (x === 0) continue;
      let ok = true;
      for (let dr = -x; dr <= x && ok; dr++) {
        for (let dc = -x; dc <= x && ok; dc++) {
          if (Math.abs(dr) === x && Math.abs(dc) === x) continue;
          const rr = r + dr, cc = c + dc;
          if (rr < 0 || rr >= n || cc < 0 || cc >= m) continue;
          if (matrix[rr][cc] > x) ok = false;
        }
      }
      if (ok) cnt++;
    }
  }
  return cnt;
}
let seed = 21;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 4;
let ok = true;
for (let t = 0; t < 200; t++) {
  const rows = 1 + t % 6, cols = 1 + (t >> 1) % 6;
  const mat = Array.from({ length: rows }, () => Array.from({ length: cols }, rnd));
  const a = countLocalMaximums(mat.map((r) => r.slice()));
  const b = bruteCount(mat);
  if (a !== b) { ok = false; console.log('MISMATCH', JSON.stringify(mat), a, b); break; }
}
console.log(ok);
