/*
 * @lc app=leetcode.cn id=LCP 04 lang=javascript
 *
 * [LCP 04] 覆盖
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} broken
 * @return {number}
 */
var domino = function(n, m, broken) {
  // Mark broken cells.
  const bad = Array.from({ length: n }, () => new Array(m).fill(false));
  for (const [r, c] of broken) bad[r][c] = true;

  // A 1x2 domino always covers one black and one white cell of the chessboard
  // coloring (r + c parity). Non-overlapping placements = a matching between
  // intact black cells and intact white cells that are orthogonally adjacent.
  const idx = (r, c) => r * m + c;
  const N = n * m;
  const match = new Array(N).fill(-1);   // for white cells: which black cell is matched
  const seen = new Array(N).fill(false);

  const tryKuhn = (r, c) => {
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
      if (bad[nr][nc]) continue;
      const v = idx(nr, nc);          // white cell
      if (seen[v]) continue;
      seen[v] = true;
      if (match[v] === -1 || tryKuhn(Math.floor(match[v] / m), match[v] % m)) {
        match[v] = idx(r, c);
        return true;
      }
    }
    return false;
  };

  let ans = 0;
  // Black cells = those with (r+c) even, intact.
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (bad[r][c] || ((r + c) & 1) !== 0) continue; // black intact
      seen.fill(false);
      if (tryKuhn(r, c)) ans++;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

// brute force: enumerate domino placements via bitmask DP over intact cells.
function bruteDomino(n, m, broken) {
  const bad = Array.from({ length: n }, () => new Array(m).fill(false));
  for (const [r, c] of broken) bad[r][c] = true;
  const idx = (r, c) => r * m + c;
  // map intact cells to consecutive indices
  const cellId = Array.from({ length: n }, () => new Array(m).fill(-1));
  let k = 0;
  for (let r = 0; r < n; r++) for (let c = 0; c < m; c++) if (!bad[r][c]) cellId[r][c] = k++;
  const K = k;
  // possible domino edges (pairs of intact adjacent cells)
  const edges = [];
  for (let r = 0; r < n; r++) for (let c = 0; c < m; c++) {
    if (bad[r][c]) continue;
    for (const [dr, dc] of [[0, 1], [1, 0]]) {
      const nr = r + dr, nc = c + dc;
      if (nr < n && nc < m && !bad[nr][nc]) edges.push([cellId[r][c], cellId[nr][nc]]);
    }
  }
  // maximum matching over <= 64 nodes - do recursive search on edges (max ~ 16 dominoes -> choose subsets)
  // Since K <= 64 but edges modest; use recursive choose with pruning via memo on used nodes is too big.
  // Instead: maximum matching brute via trying all subsets of edges whose endpoints disjoint.
  // Use simple backtracking over edges with bitmask of used cells; K<=20 typical in tests (n*m<=64 though).
  // To keep brute feasible for random tests, we limit cells via our generator (n*m<=16). Implement mask DP.
  let best = 0;
  const usedMask = new Array(edges.length).fill(0);
  // DFS choosing non-conflicting edges
  const recurse = (i, count) => {
    if (count > best) best = count;
    if (i >= edges.length) return;
    // upper bound prune: remaining edges can add at most (edges.length - i) more
    if (count + (edges.length - i) <= best) return;
    // skip edge i
    recurse(i + 1, count);
    // take edge i if free
    const [a, b] = edges[i];
    if (!usedMask[a] && !usedMask[b]) {
      usedMask[a] = usedMask[b] = 1;
      recurse(i + 1, count + 1);
      usedMask[a] = usedMask[b] = 0;
    }
  };
  recurse(0, 0);
  return best;
}

// examples
assert.strictEqual(domino(2, 3, [[1, 0], [1, 1]]), 2);
assert.strictEqual(domino(3, 3, []), 4);

// hand cases
assert.strictEqual(domino(1, 2, []), 1);            // single domino
assert.strictEqual(domino(1, 3, []), 1);            // 3 in a row -> 1 domino
assert.strictEqual(domino(2, 2, [[0,0],[0,1],[1,0],[1,1]]), 0); // all broken
assert.strictEqual(domino(2, 2, []), 2);            // full 2x2 -> 2 dominoes
assert.strictEqual(domino(1, 1, []), 0);            // single cell

// randomized cross-check vs brute (small grids)
let seed = 40901;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
for (let t = 0; t < 800; t++) {
  const n = 1 + Math.floor(rnd() * 4);
  const m = 1 + Math.floor(rnd() * 4);
  const broken = [];
  for (let r = 0; r < n; r++) for (let c = 0; c < m; c++) if (rnd() < 0.25) broken.push([r, c]);
  const got = domino(n, m, broken);
  const exp = bruteDomino(n, m, broken);
  assert.strictEqual(got, exp, `mismatch n=${n} m=${m} broken=${JSON.stringify(broken)} got=${got} exp=${exp}`);
}

console.log('All tests passed!');
console.log('ex1 =', domino(2, 3, [[1, 0], [1, 1]]));
console.log('ex2 =', domino(3, 3, []));
