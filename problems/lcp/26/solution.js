/*
 * @lc app=leetcode.cn id=LCP 26 lang=javascript
 *
 * [LCP 26] 导航装置
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var navigation = function(root) {
  // Build adjacency: node ids are the tree node values (1..N). We also need
  // the number of vertices N (max value), used for array sizes / leaf checks.
  const adj = new Map();
  let maxId = 0;
  // collect nodes
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    const id = node.val;
    if (id > maxId) maxId = id;
    if (!adj.has(id)) adj.set(id, []);
    if (node.left) { const l = node.left.val; adj.get(id).push(l); if (!adj.has(l)) adj.set(l, []); adj.get(l).push(id); stack.push(node.left); }
    if (node.right) { const r = node.right.val; adj.get(id).push(r); if (!adj.has(r)) adj.set(r, []); adj.get(r).push(id); stack.push(node.right); }
  }
  const n = adj.size;
  const deg = new Map();
  for (const [id, list] of adj) deg.set(id, list.length);

  // If every vertex has degree <= 2, the tree is a path => metric dimension 1.
  let maxDeg = 0;
  for (const d of deg.values()) if (d > maxDeg) maxDeg = d;
  if (maxDeg <= 2) return 1;

  // major vertex = degree >= 3. Its "exterior legs" are the neighbor
  // components that reach a leaf (degree 1) before any other major vertex.
  const isMajor = (id) => deg.get(id) >= 3;
  const exteriorLegs = (v) => {
    let cnt = 0;
    for (const nb of adj.get(v)) {
      let prev = v, cur = nb;
      while (true) {
        if (deg.get(cur) === 1) { cnt++; break; }
        if (isMajor(cur)) break; // reached another major vertex -> interior
        const next = adj.get(cur).find(x => x !== prev);
        prev = cur; cur = next;
      }
    }
    return cnt;
  };

  let ans = 0;
  for (const [id] of adj) {
    if (isMajor(id)) ans += Math.max(0, exteriorLegs(id) - 1);
  }
  return ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

// helpers to build trees from leetcode array form (null = missing child)
function arrayToTree(arr) {
  if (!arr || arr.length === 0) return null;
  const nodes = arr.map(v => (v === null ? null : { val: v, left: null, right: null }));
  let idx = 0;
  for (let i = 0; i < nodes.length; i++) {
    const nd = nodes[i];
    if (!nd) continue;
    if (idx + 1 < nodes.length) nd.left = nodes[++idx];
    if (idx + 1 < nodes.length) nd.right = nodes[++idx];
  }
  return nodes[0];
}

// brute force: minimal resolving set by BFS + subset search (small N only)
function bruteNavigation(root) {
  // build adjacency with ids
  const adjM = new Map();
  const st = [root];
  while (st.length) {
    const node = st.pop();
    if (!node) continue;
    if (!adjM.has(node.val)) adjM.set(node.val, []);
    if (node.left) { adjM.get(node.val).push(node.left.val); if (!adjM.has(node.left.val)) adjM.set(node.left.val, []); adjM.get(node.left.val).push(node.val); st.push(node.left); }
    if (node.right) { adjM.get(node.val).push(node.right.val); if (!adjM.has(node.right.val)) adjM.set(node.right.val, []); adjM.get(node.right.val).push(node.val); st.push(node.right); }
  }
  const ids = [...adjM.keys()].sort((a, b) => a - b);
  const n = ids.length;
  // BFS dists
  const dist = {};
  for (const s of ids) {
    dist[s] = {};
    dist[s][s] = 0;
    const q = [s];
    for (let h = 0; h < q.length; h++) {
      const u = q[h];
      for (const w of adjM.get(u)) if (dist[s][w] === undefined) { dist[s][w] = dist[s][u] + 1; q.push(w); }
    }
  }
  function resolves(B) {
    const sig = new Set();
    for (const u of ids) {
      const key = B.map(b => dist[u][b]).join(',');
      if (sig.has(key)) return false;
      sig.add(key);
    }
    return true;
  }
  const chosen = [];
  function comb(start, k) {
    if (chosen.length === k) return resolves(chosen.slice());
    for (let i = start; i < n; i++) {
      chosen.push(ids[i]);
      if (comb(i + 1, k)) return true;
      chosen.pop();
    }
    return false;
  }
  for (let k = 1; k <= n; k++) if (comb(0, k)) return k;
  return n;
}

// examples
assert.strictEqual(navigation(arrayToTree([1, 2, null, 3, 4])), 2);
assert.strictEqual(navigation(arrayToTree([1, 2, 3, 4])), 1);

// hand checks
assert.strictEqual(navigation(arrayToTree([1, 2, 3])), 1);          // root deg2, leaves deg1 => all deg<=2 => path => 1
assert.strictEqual(navigation(arrayToTree([1, 2, null, 3])), 1);     // simple chain => path => 1
// a genuine T: node 2 has parent 1 and children 3,4 (deg3); arr [1,2,null,3,4]
// (this is example 1) already checked above; extra check: [1,2,3,4,5]
// node1 children 2,3; node2 children 4,5 -> node2 deg3 with legs to 4,5, and via 1->3(leaf)
assert.strictEqual(navigation(arrayToTree([1, 2, 3, 4, 5])), 2);

// randomized cross-check vs brute (small binary trees)
let seed = 2601;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
function makeRandomTree(cnt) {
  // create cnt nodes with ids 1..cnt; random binary tree shape
  const nodes = [];
  for (let i = 1; i <= cnt; i++) nodes.push({ val: i, left: null, right: null });
  const placed = [nodes[0]];
  let next = 1;
  for (let i = 0; i < nodes.length && next < cnt; i++) {
    const nd = nodes[i];
    if (!nd) continue;
    if (next < cnt && rnd() < 0.7) { nd.left = nodes[next++]; }
    if (next < cnt && rnd() < 0.7) { nd.right = nodes[next++]; }
  }
  return nodes[0];
}
for (let t = 0; t < 600; t++) {
  const cnt = 2 + Math.floor(rnd() * 7); // 2..8 nodes
  const root = makeRandomTree(cnt);
  const got = navigation(root);
  const exp = bruteNavigation(root);
  assert.strictEqual(got, exp, `mismatch got=${got} exp=${exp} cnt=${cnt}`);
}

console.log('All tests passed!');
console.log('ex1 =', navigation(arrayToTree([1, 2, null, 3, 4])));
console.log('ex2 =', navigation(arrayToTree([1, 2, 3, 4])));
