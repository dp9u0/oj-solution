/*
 * @lc app=leetcode id=3600 lang=javascript
 *
 * [3600] Maximize Spanning Tree Stability with Upgrades
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStability = function(n, edges, k) {
  const parent = new Array(n);
  const rank = new Array(n).fill(0);

  const find = (x) => {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  };

  const union = (a, b) => {
    const pa = find(a), pb = find(b);
    if (pa === pb) return false;
    if (rank[pa] < rank[pb]) parent[pa] = pb;
    else if (rank[pa] > rank[pb]) parent[pb] = pa;
    else { parent[pb] = pa; rank[pa]++; }
    return true;
  };

  const reset = () => {
    for (let i = 0; i < n; i++) { parent[i] = i; rank[i] = 0; }
  };

  const mustEdges = edges.filter(e => e[3] === 1);
  const optEdges = edges.filter(e => e[3] === 0);

  // Check if must-edges alone form a cycle
  reset();
  for (const [u, v] of mustEdges) {
    if (!union(u, v)) return -1; // cycle in must-edges
  }

  // Check if possible to connect all nodes
  for (const [u, v, s] of optEdges) {
    union(u, v);
  }
  const root = find(0);
  for (let i = 1; i < n; i++) {
    if (find(i) !== root) return -1;
  }

  const minMust = mustEdges.length > 0 ? Math.min(...mustEdges.map(e => e[2])) : Infinity;
  let lo = 1, hi = Math.min(minMust, Math.max(...edges.map(e => e[2])) * 2);
  let result = 0;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (check(mid, n, mustEdges, optEdges, k, parent, rank, find, union, reset)) {
      result = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return result;
};

function check(mid, n, mustEdges, optEdges, k, parent, rank, find, union, reset) {
  reset();
  let edgesUsed = 0;

  // Add must-edges
  for (const [u, v, s] of mustEdges) {
    if (s < mid) return false;
    union(u, v);
    edgesUsed++;
  }

  // Sort optional edges: prefer no-upgrade edges (si >= mid) first, by strength desc
  const noUpgrade = optEdges.filter(e => e[2] >= mid).sort((a, b) => b[2] - a[2]);
  const upgrade = optEdges.filter(e => e[2] < mid && e[2] * 2 >= mid).sort((a, b) => b[2] - a[2]);

  // Add no-upgrade edges first
  for (const [u, v] of noUpgrade) {
    if (union(u, v)) edgesUsed++;
  }

  // Add upgraded edges
  let upgradesLeft = k;
  for (const [u, v] of upgrade) {
    if (upgradesLeft <= 0) break;
    if (union(u, v)) {
      edgesUsed++;
      upgradesLeft--;
    }
  }

  return edgesUsed >= n - 1;
}
// @lc code=end

// TEST:
console.log(maxStability(3, [[0,1,2,1],[1,2,3,0]], 1) === 2);
console.log(maxStability(3, [[0,1,4,0],[1,2,3,0],[0,2,1,0]], 2) === 6);
console.log(maxStability(3, [[0,1,1,1],[1,2,1,1],[2,0,1,1]], 0) === -1);
console.log(maxStability(2, [[0,1,5,0]], 1) === 10);
console.log(maxStability(3, [[0,1,2,0],[1,2,3,0],[0,2,4,0]], 1) === 4);
