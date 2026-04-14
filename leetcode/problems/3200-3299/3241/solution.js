/*
 * @lc app=leetcode id=3241 lang=javascript
 *
 * [3241] Time Taken to Mark All Nodes
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var timeTaken = function(edges) {
  const n = edges.length + 1;
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const w = i => (i & 1) ? 1 : 2;

  // BFS to build rooted tree (root=0) and get level order
  const ch = Array.from({ length: n }, () => []);
  const par = new Int32Array(n).fill(-1);
  par[0] = 0;
  const bfs = [0];
  for (let i = 0; i < bfs.length; i++) {
    const u = bfs[i];
    for (const v of adj[u]) {
      if (par[v] === -1) {
        par[v] = u;
        ch[u].push(v);
        bfs.push(v);
      }
    }
  }

  // Post-order (reverse BFS): compute f[u] = max dist from u into its subtree
  const f = new Int32Array(n);
  for (let i = n - 1; i >= 0; i--) {
    const u = bfs[i];
    for (const c of ch[u]) {
      f[u] = Math.max(f[u], w(c) + f[c]);
    }
  }

  // Pre-order (forward BFS): compute g[u] = max dist from u to non-descendants
  const g = new Int32Array(n);
  for (let i = 0; i < n; i++) {
    const u = bfs[i];
    const kids = ch[u];
    const m = kids.length;
    if (m === 0) continue;

    // Prefix/suffix max of w(c)+f[c] for siblings
    const pre = new Int32Array(m + 1);
    const suf = new Int32Array(m + 1);
    for (let j = 0; j < m; j++) pre[j + 1] = Math.max(pre[j], w(kids[j]) + f[kids[j]]);
    for (let j = m - 1; j >= 0; j--) suf[j] = Math.max(suf[j + 1], w(kids[j]) + f[kids[j]]);

    for (let j = 0; j < m; j++) {
      const siblingMax = Math.max(pre[j], suf[j + 1]);
      g[kids[j]] = w(u) + Math.max(g[u], siblingMax);
    }
  }

  const ans = new Array(n);
  for (let i = 0; i < n; i++) ans[i] = Math.max(f[i], g[i]);
  return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(timeTaken([[0,1],[0,2]]))); // [2,4,3]
console.log(JSON.stringify(timeTaken([[0,1]]))); // [1,2]
console.log(JSON.stringify(timeTaken([[2,4],[0,1],[2,3],[0,2]]))); // [4,6,3,5,5]
