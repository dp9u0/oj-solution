/*
 * @lc app=leetcode.cn id=LCP 16 lang=javascript
 *
 * [LCP 16] 游乐园的游览计划
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[]} value
 * @return {number}
 */
var maxWeight = function(edges, value) {
  const n = value.length;
  const adj = Array.from({ length: n }, () => new Set());
  const deg = new Array(n).fill(0);
  for (const [u, v] of edges) {
    adj[u].add(v);
    adj[v].add(u);
    deg[u]++; deg[v]++;
  }

  // Per-apex A, records of triangles {A,x,y}: store [x,y,w] where w=value[x]+value[y].
  // (value[A] is added separately once, since A is visited only once per day.)
  const triAt = Array.from({ length: n }, () => []);

  // Enumerate every triangle exactly once.
  // Order vertices by (degree, id); orient edges from smaller to larger endpoint.
  // For each vertex a, for each out-neighbor b of a, for each out-neighbor c of b,
  // if a-c is an edge then {a,b,c} is a triangle discovered at its smallest vertex.
  const rank = new Array(n);
  const order = [];
  for (let i = 0; i < n; i++) order.push(i);
  order.sort((a, b) => (deg[a] - deg[b]) || (a - b));
  for (let i = 0; i < n; i++) rank[order[i]] = i;

  const out = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    // orient low->high by (deg, id)
    if (rank[u] < rank[v]) out[u].push(v); else out[v].push(u);
  }

  for (let a = 0; a < n; a++) {
    const outA = out[a];
    const setA = adj[a];
    for (let bi = 0; bi < outA.length; bi++) {
      const b = outA[bi];
      const outB = out[b];
      for (const c of outB) {
        if (setA.has(c)) {
          // triangle {a,b,c}; apexes a,b,c each get the opposite pair
          triAt[a].push([b, c, value[b] + value[c]]);
          triAt[b].push([a, c, value[a] + value[c]]);
          triAt[c].push([a, b, value[a] + value[b]]);
        }
      }
    }
  }

  let ans = 0;
  for (let A = 0; A < n; A++) {
    const list = triAt[A];
    if (list.length === 0) continue;

    // best from a single triangle (morning == afternoon, same 3 nodes)
    let bestSingle = 0;
    for (const [, , w] of list) if (w > bestSingle) bestSingle = w;

    // best from two triangles sharing exactly one neighbor (a "V" of 3 distinct
    // neighbors {x, p, q}: two edges x-p, x-q). For shared vertex x the union sum
    // is w(x,p)+w(x,q)-value[x]. Track the top two edge weights per endpoint x.
    let bestShared = 0;
    {
      const top = new Map(); // x -> [largest, 2nd largest] weight among incident triangle-edges
      for (const [x, y, w] of list) {
        for (const z of [x, y]) {
          let t = top.get(z);
          if (!t) { top.set(z, [w, -1]); continue; }
          if (w > t[0]) { t[1] = t[0]; t[0] = w; }
          else if (w > t[1]) { t[1] = w; }
        }
      }
      for (const [x, t] of top) {
        if (t[1] >= 0) {
          const s = t[0] + t[1] - value[x];
          if (s > bestShared) bestShared = s;
        }
      }
    }

    // best from two vertex-disjoint triangle-edges (4 distinct neighbors).
    // sort by weight desc; for each edge find the heaviest disjoint partner by
    // scanning the sorted list from the head.
    list.sort((a, b) => b[2] - a[2]);
    let bestDisjoint = 0;
    for (let i = 0; i < list.length; i++) {
      const [x1, y1] = list[i];
      for (let j = 0; j < list.length; j++) {
        if (j === i) continue;
        const [x2, y2, w2] = list[j];
        if (x2 !== x1 && x2 !== y1 && y2 !== x1 && y2 !== y1) {
          const s = list[i][2] + w2;
          if (s > bestDisjoint) bestDisjoint = s;
          break; // first (heaviest) disjoint partner in desc order is the best
        }
      }
    }

    const contrib = Math.max(bestSingle, bestShared, bestDisjoint);
    const total = value[A] + contrib;
    if (total > ans) ans = total;
  }

  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

// ---------- brute reference (direct enumeration, small graphs only) ----------
function brute(edges, value) {
  const n = value.length;
  const adj = Array.from({ length: n }, () => new Array(n).fill(false));
  for (const [u, v] of edges) { adj[u][v] = adj[v][u] = true; }
  let best = 0;
  // collect all triangles per apex: apex A with neighbor pair (x,y) that are adjacent
  const trisAt = Array.from({ length: n }, () => []);
  for (let A = 0; A < n; A++) {
    for (let x = 0; x < n; x++) {
      if (x === A || !adj[A][x]) continue;
      for (let y = x + 1; y < n; y++) {
        if (y === A || !adj[A][y]) continue;
        if (adj[x][y]) trisAt[A].push([x, y]);
      }
    }
  }
  for (let A = 0; A < n; A++) {
    const T = trisAt[A];
    for (let i = 0; i < T.length; i++) {
      for (let j = i; j < T.length; j++) {
        const s = new Set([A, T[i][0], T[i][1], T[j][0], T[j][1]]);
        let sum = 0;
        for (const v of s) sum += value[v];
        if (sum > best) best = sum;
      }
    }
  }
  return best;
}

// LeetCode examples
assert.strictEqual(maxWeight([[0,1],[1,2],[0,2]], [1,2,3]), 6);
assert.strictEqual(maxWeight([[0,2],[2,1]], [1,2,5]), 0);
assert.strictEqual(maxWeight(
  [[0,1],[0,2],[0,3],[0,4],[0,5],[1,3],[2,4],[2,5],[3,4],[3,5],[4,5]],
  [7,8,6,8,9,7]), 39);

// exhaustive cross-check vs brute on many random small graphs
let seed = 20260903;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
for (let t = 0; t < 2000; t++) {
  const n = 3 + Math.floor(rnd() * 7);           // 3..9 vertices
  const p = rnd();
  const edges = [];
  for (let u = 0; u < n; u++) {
    for (let v = u + 1; v < n; v++) {
      if (rnd() < p) edges.push([u, v]);
    }
  }
  const value = [];
  for (let i = 0; i < n; i++) value.push(Math.floor(rnd() * 20));
  if (edges.length === 0) continue; // degenerate
  const got = maxWeight(edges, value);
  const exp = brute(edges, value);
  assert.strictEqual(got, exp, `mismatch edges=${JSON.stringify(edges)} value=${JSON.stringify(value)}`);
}

console.log('All tests passed!');
console.log('ex1 =', maxWeight([[0,1],[1,2],[0,2]], [1,2,3]));
console.log('ex3 =', maxWeight([[0,1],[0,2],[0,3],[0,4],[0,5],[1,3],[2,4],[2,5],[3,4],[3,5],[4,5]], [7,8,6,8,9,7]));
