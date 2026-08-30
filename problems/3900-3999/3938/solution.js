/*
 * @lc app=leetcode id=3938 lang=javascript
 *
 * [3938] Maximum Sum of Shared Cells
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let ans = -Infinity;
  // kadane with length >= 2 over array arr
  const kadane2 = (arr) => {
    const L = arr.length;
    const pre = Array(L + 1).fill(0);
    for (let i = 0; i < L; i++) pre[i + 1] = pre[i] + arr[i];
    let best = -Infinity;
    let minPre = pre[0];
    for (let j = 2; j <= L; j++) {
      if (pre[j - 2] < minPre) minPre = pre[j - 2];
      if (pre[j] - minPre > best) best = pre[j] - minPre;
    }
    return best;
  };
  // vertical segments (length >= 2) - always feasible
  for (let c = 0; c < n; c++) {
    const col = [];
    for (let r = 0; r < m; r++) col.push(grid[r][c]);
    const k = kadane2(col);
    if (k > ans) ans = k;
  }
  // horizontal segments (length >= 2): always feasible
  for (let r = 0; r < m; r++) {
    if (n >= 2) {
      const k = kadane2(grid[r]);
      if (k > ans) ans = k;
    }
  }
  // single cells: 4 distinct representative check
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const IN1 = [];
      const OUT1 = [];
      const IN2 = [];
      const OUT2 = [];
      if (r >= 1) { IN1.push('U'); OUT2.push('U'); }
      if (r <= m - 2) { OUT1.push('D'); IN2.push('D'); }
      if (c >= 1) { IN1.push('L'); IN2.push('L'); }
      if (c <= n - 2) { OUT1.push('R'); OUT2.push('R'); }
      if (r === 0 && c === 0) IN1.push('N');
      if (r === m - 1 && c === n - 1) OUT1.push('N');
      if (r === m - 1 && c === 0) IN2.push('N');
      if (r === 0 && c === n - 1) OUT2.push('N');
      let ok = false;
      for (const a of IN1) {
        for (const b of OUT1) {
          if (a !== 'N' && a === b) continue;
          for (const p of IN2) {
            if (a !== 'N' && p !== 'N' && a === p) continue;
            if (b !== 'N' && p !== 'N' && b === p) continue;
            for (const q of OUT2) {
              if (a !== 'N' && q !== 'N' && a === q) continue;
              if (b !== 'N' && q !== 'N' && b === q) continue;
              if (p !== 'N' && q !== 'N' && p === q) continue;
              ok = true;
            }
          }
        }
      }
      if (ok && grid[r][c] > ans) ans = grid[r][c];
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxScore([[1, 2, 0, -3], [1, -2, 1, 0], [-4, 2, -1, 3], [3, -3, 3, -2], [-1, -5, 0, 1]]) === 4);
console.log(maxScore([[4, -2, -3], [-1, -3, -1], [-4, 2, -1]]) === 3);
console.log(maxScore([[1, 1], [1, 1]]) === 2);
console.log(maxScore([[-1, -2], [-3, -4]]) === -3);

// brute: enumerate all path pairs (tiny grids)
function brute(grid) {
  const m = grid.length, n = grid[0].length;
  const paths1 = [];
  const paths2 = [];
  const genP1 = (r, c, acc) => {
    if (r === m - 1 && c === n - 1) { paths1.push(acc.slice()); return; }
    if (c + 1 < n) { acc.push([r, c + 1]); genP1(r, c + 1, acc); acc.pop(); }
    if (r + 1 < m) { acc.push([r + 1, c]); genP1(r + 1, c, acc); acc.pop(); }
  };
  const genP2 = (r, c, acc) => {
    if (r === 0 && c === n - 1) { paths2.push(acc.slice()); return; }
    if (c + 1 < n) { acc.push([r, c + 1]); genP2(r, c + 1, acc); acc.pop(); }
    if (r - 1 >= 0) { acc.push([r - 1, c]); genP2(r - 1, c, acc); acc.pop(); }
  };
  genP1(0, 0, [[0, 0]]);
  genP2(m - 1, 0, [[m - 1, 0]]);
  let best = -Infinity;
  for (const p1 of paths1) {
    const s1 = new Set(p1.map((x) => x[0] * 100 + x[1]));
    for (const p2 of paths2) {
      let sum = 0;
      for (const [r, c] of p2) if (s1.has(r * 100 + c)) sum += grid[r][c];
      if (sum > best) best = sum;
    }
  }
  return best;
}
let seed = 33;
let ok = true;
for (let t = 0; t < 400; t++) {
  const m = 2 + t % 3, n = 2 + (t >> 1) % 3;
  const g = Array.from({ length: m }, () => Array.from({ length: n }, () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 9 - 4));
  const a = maxScore(g.map((r) => r.slice()));
  const b = brute(g.map((r) => r.slice()));
  if (a !== b) { ok = false; console.log('MISMATCH', JSON.stringify(g), 'fast=' + a, 'brute=' + b); break; }
}
console.log(ok);
