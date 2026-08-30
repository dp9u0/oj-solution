/*
 * @lc app=leetcode id=3970 lang=javascript
 *
 * [3970] Shortest Path With At Most K Consecutive Identical Characters
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (n, edges, labels, k) {
  const m = edges.length;

  // CSR adjacency: start[u]..start[u+1)-1 are the out-edges of u
  const start = new Int32Array(n + 1);
  for (let i = 0; i < m; i++) start[edges[i][0] + 1]++;
  for (let i = 0; i < n; i++) start[i + 1] += start[i];
  const to = new Int32Array(m);
  const wt = new Int32Array(m);
  const fill = start.slice();
  for (let i = 0; i < m; i++) {
    const e = edges[i];
    const p = fill[e[0]]++;
    to[p] = e[1];
    wt[p] = e[2];
  }

  const width = k + 1;
  const dist = new Float64Array(n * width).fill(Infinity);
  // label codes for fast compare
  const lab = new Int32Array(n);
  for (let i = 0; i < n; i++) lab[i] = labels.charCodeAt(i);

  // binary min-heap over (distance, state), 1-indexed, parallel arrays
  const hd = [0, 0];
  const hs = [0, 1]; // state (node 0, run 1), distance 0
  dist[1] = 0;

  while (hd.length > 1) {
    const d = hd[1];
    const s = hs[1];
    const last = hd.length - 1;
    hd[1] = hd[last];
    hs[1] = hs[last];
    hd.pop();
    hs.pop();
    let i = 1;
    const len = hd.length;
    for (;;) {
      const l = i << 1;
      const r = l + 1;
      let sm = i;
      if (l < len && hd[l] < hd[sm]) sm = l;
      if (r < len && hd[r] < hd[sm]) sm = r;
      if (sm === i) break;
      const td = hd[i]; hd[i] = hd[sm]; hd[sm] = td;
      const ts = hs[i]; hs[i] = hs[sm]; hs[sm] = ts;
      i = sm;
    }
    if (d > dist[s]) continue; // stale entry

    const u = (s / width) | 0;
    const c = s - u * width;
    const lu = lab[u];
    for (let p = start[u]; p < start[u + 1]; p++) {
      const v = to[p];
      let nc;
      if (lab[v] === lu) {
        nc = c + 1;
        if (nc > k) continue; // would exceed k consecutive identical chars
      } else {
        nc = 1;
      }
      const ns = v * width + nc;
      const nd = d + wt[p];
      if (nd < dist[ns]) {
        dist[ns] = nd;
        // push (nd, ns)
        hd.push(nd);
        hs.push(ns);
        let j = hd.length - 1;
        while (j > 1) {
          const par = j >> 1;
          if (hd[par] <= hd[j]) break;
          const pd = hd[par]; hd[par] = hd[j]; hd[j] = pd;
          const ps = hs[par]; hs[par] = hs[j]; hs[j] = ps;
          j = par;
        }
      }
    }
  }

  const base = (n - 1) * width;
  let ans = Infinity;
  for (let c = 1; c <= k; c++) {
    if (dist[base + c] < ans) ans = dist[base + c];
  }
  return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
const run = (n, edges, labels, k) => shortestPath(n, edges, labels, k);
// example 1: must take the direct edge to avoid "aa"
console.log(run(3, [[0, 1, 1], [1, 2, 1], [0, 2, 3]], 'aab', 1) === 3);
// example 2: "aab" allowed when k = 2
console.log(run(3, [[0, 1, 1], [1, 2, 1], [0, 2, 3]], 'aab', 2) === 2);
// example 3: only path has "aaa", invalid for k = 2
console.log(run(3, [[0, 1, 1], [1, 2, 1]], 'aaa', 2) === -1);
// single node: trivially valid, cost 0
console.log(run(1, [], 'z', 1) === 0);
// no edges at all, unreachable
console.log(run(2, [], 'ab', 5) === -1);
// longer chain: labels "abab", k=1, path 0->1->2->3 cost 6 beats direct 0->3 cost 10
console.log(run(4, [[0, 1, 2], [1, 2, 2], [2, 3, 2], [0, 3, 10]], 'abab', 1) === 6);
// same chain but k=1 with direct-only shortcut when chain blocked: labels "aabb" chain invalid ("bb"), use 0->3
console.log(run(4, [[0, 1, 2], [1, 2, 2], [2, 3, 2], [0, 3, 10]], 'aabb', 1) === 10);
// run of exactly k is allowed: "aaa" with k=3
console.log(run(3, [[0, 1, 1], [1, 2, 1]], 'aaa', 3) === 2);
