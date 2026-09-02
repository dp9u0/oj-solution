/*
 * @lc app=leetcode.cn id=LCP 38 lang=javascript
 *
 * [LCP 38] 守卫城堡
 */

// @lc code=start
// Dinic max-flow (iterative DFS is recursive here; node count is small enough).
function Dinic(n) {
  const to = [];
  const cap = [];
  const nxt = [];
  const head = new Array(n).fill(-1);
  function addEdge(u, v, c) {
    to.push(v); cap.push(c); nxt.push(head[u]); head[u] = to.length - 1;
    to.push(u); cap.push(0); nxt.push(head[v]); head[v] = to.length - 1;
  }
  const level = new Array(n);
  const it = new Array(n);
  function bfs(s, t) {
    level.fill(-1);
    const q = [s]; level[s] = 0;
    for (let h = 0; h < q.length; h++) {
      const u = q[h];
      for (let e = head[u]; e !== -1; e = nxt[e]) {
        if (cap[e] > 0) {
          const v = to[e];
          if (level[v] < 0) { level[v] = level[u] + 1; q.push(v); }
        }
      }
    }
    return level[t] >= 0;
  }
  return {
    addEdge,
    maxflow(s, t) {
      let flow = 0;
      const stackE = []; // edges on the current root->... path
      for (;;) {
        if (!bfs(s, t)) break;
        for (let i = 0; i < n; i++) it[i] = head[i];
        // iterative augmenting loop over the current level graph
        let u = s;
        stackE.length = 0;
        while (true) {
          if (u === t) {
            // found path: augment
            let f = Infinity;
            for (const e of stackE) if (cap[e] < f) f = cap[e];
            for (const e of stackE) { cap[e] -= f; cap[e ^ 1] += f; }
            flow += f;
            // reset path and continue from source
            stackE.length = 0;
            u = s;
            continue;
          }
          // find next usable edge from u
          let adv = false;
          for (; it[u] !== -1; it[u] = nxt[it[u]]) {
            const e = it[u];
            if (cap[e] > 0 && level[to[e]] === level[u] + 1) {
              stackE.push(e);
              u = to[e];
              adv = true;
              break;
            }
          }
          if (adv) continue;
          // u is a dead end (no outgoing). Mark level[u] = -1 so we never
          // revisit u in this phase (standard optimization), then retreat.
          level[u] = -2;
          if (stackE.length === 0) break; // source dead end: phase done
          const pe = stackE.pop();
          u = to[pe ^ 1]; // parent node
        }
      }
      return flow;
    },
  };
}

/**
 * @param {string[]} grid
 * @return {number}
 */
var guardCastle = function(grid) {
  const rows = 2, cols = grid[0].length;
  const cellOf = (r, c) => r * cols + c;
  const isWall = (r, c) => grid[r][c] === '#';
  let totalDots = 0;
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (grid[r][c] === '.') totalDots++;
  return guardCastleImpl(grid, rows, cols, cellOf, totalDots, isWall);
};

function guardCastleImpl(grid, rows, cols, cellOf, totalDots, isWall) {
  const INF = totalDots + 1;
  const numCells = rows * cols;
  const nodeIn = (u) => 2 * u;
  const nodeOut = (u) => 2 * u + 1;
  const hubNode = 2 * numCells;
  const SRC = hubNode + 1;
  const SNK = SRC + 1;
  const din = Dinic(SNK + 1);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (isWall(r, c)) continue;
      const u = cellOf(r, c);
      const ch = grid[r][c];
      din.addEdge(nodeIn(u), nodeOut(u), ch === '.' ? 1 : INF);
      if (ch === 'S') din.addEdge(SRC, nodeIn(u), INF);
      if (ch === 'C') din.addEdge(nodeOut(u), SNK, INF);
    }
  }
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const PList = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (isWall(r, c)) continue;
      const u = cellOf(r, c);
      const ch = grid[r][c];
      if (ch === 'P') PList.push(u);
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
        if (isWall(nr, nc)) continue;
        // directed movement edges out(u)->in(neighbor) and symmetric
        din.addEdge(nodeOut(u), nodeIn(cellOf(nr, nc)), INF);
      }
    }
  }
  // teleport hub
  for (const u of PList) {
    din.addEdge(nodeOut(u), hubNode, INF);
    din.addEdge(hubNode, nodeIn(u), INF);
  }

  const flow = din.maxflow(SRC, SNK);
  return flow > totalDots ? -1 : flow;
}
// @lc code=end

// TEST:
const assert = require('assert');

// ---- brute force (small grids): try all subsets of '.' cells to wall ----
function canReach(grid, walled) {
  // walled: set of "r,c" strings that are '.' turned into '#'
  const rows = 2, cols = grid[0].length;
  const isW = (r, c) => grid[r][c] === '#' || walled.has(r + ',' + c);
  const Pcells = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (grid[r][c] === 'P') Pcells.push([r, c]);
  const seen = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const q = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (grid[r][c] === 'S') { seen[r][c] = true; q.push([r, c]); }
  for (let h = 0; h < q.length; h++) {
    const [r, c] = q[h];
    if (grid[r][c] === 'C') return true;
    if (grid[r][c] === 'P') {
      // teleport to every other P
      for (const [pr, pc] of Pcells) {
        if (!seen[pr][pc] && !isW(pr, pc)) { seen[pr][pc] = true; q.push([pr, pc]); }
      }
    }
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
      if (isW(nr, nc)) continue;
      if (!seen[nr][nc]) { seen[nr][nc] = true; q.push([nr, nc]); }
    }
  }
  return false;
}
function brute(grid) {
  const rows = 2, cols = grid[0].length;
  const dots = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (grid[r][c] === '.') dots.push(r + ',' + c);
  const k = dots.length;
  let best = Infinity;
  // if even walling all dots still lets S reach C -> -1
  const allW = new Set(dots);
  if (canReach(grid, allW)) return -1;
  for (let mask = 0; mask < (1 << k); mask++) {
    const walled = new Set();
    let cnt = 0;
    for (let i = 0; i < k; i++) if (mask & (1 << i)) { walled.add(dots[i]); cnt++; }
    if (cnt >= best) continue;
    if (!canReach(grid, walled)) best = cnt;
  }
  return best === Infinity ? 0 : best;
}

// examples
assert.strictEqual(guardCastle(["S.C.P#P.", ".....#.S"]), brute(["S.C.P#P.", ".....#.S"]));
assert.strictEqual(guardCastle(["SP#P..P#PC#.S", "..#P..P####.#"]), brute(["SP#P..P#PC#.S", "..#P..P####.#"]));
assert.strictEqual(guardCastle(["SP#.C.#PS", "P.#...#.P"]), brute(["SP#.C.#PS", "P.#...#.P"]));
assert.strictEqual(guardCastle(["CP.#.P.", "...S..S"]), brute(["CP.#.P.", "...S..S"]));

// hand checks
assert.strictEqual(guardCastle([".C", "S."]), brute([".C", "S."]));       // single dot between S and C: wall it (1)
assert.strictEqual(guardCastle(["SC", ".."]), brute(["SC", ".."]));       // S and C adjacent, no dots on path => -1? S-C adjacent directly -> unreachable to block
assert.strictEqual(guardCastle(["S.", "C."]), brute(["S.", "C."]));

// randomized cross-check vs brute (small 2-row grids)
let seed = 3801;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
const pool = ['.', '#', 'S', 'C', 'P'];
for (let t = 0; t < 1500; t++) {
  const cols = 2 + Math.floor(rnd() * 5); // 2..6 columns
  const rows = 2;
  let g = [];
  let sCount = 0, cCount = 0;
  for (let r = 0; r < rows; r++) {
    let srow = '';
    for (let c = 0; c < cols; c++) {
      let ch = pool[Math.floor(rnd() * pool.length)];
      // ensure at least one S and exactly one C
      if (r === 0 && c === 0) ch = 'S';
      if (r === 0 && c === 1) ch = 'C';
      srow += ch;
    }
    g.push(srow);
  }
  // recount S/C - we forced S at (0,0), C at (0,1); extra S/C okay (brute handles). Ensure at least one S and one C.
  const got = guardCastle(g);
  const exp = brute(g);
  assert.strictEqual(got, exp, `mismatch grid=${JSON.stringify(g)} got=${got} exp=${exp}`);
}

console.log('All tests passed!');
console.log('ex1 =', guardCastle(["S.C.P#P.", ".....#.S"]));
console.log('ex4 =', guardCastle(["CP.#.P.", "...S..S"]));
