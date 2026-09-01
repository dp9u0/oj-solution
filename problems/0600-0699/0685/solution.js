/*
 * @lc app=leetcode id=685 lang=javascript
 *
 * [685] Redundant Connection II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
  const n = edges.length;
  const parent = new Array(n + 1).fill(0);

  // Find node with two parents
  let edge1Parent = -1, edge2Idx = -1;
  for (let i = 0; i < n; i++) {
    const [u, v] = edges[i];
    if (parent[v] === 0) {
      parent[v] = u;
    } else {
      edge1Parent = parent[v];
      edge2Idx = i;
      break;
    }
  }

  // Union-Find helper
  const find = (uf, x) => {
    while (uf[x] !== x) {
      uf[x] = uf[uf[x]];
      x = uf[x];
    }
    return x;
  };

  const isValid = (skipIdx) => {
    const uf = Array.from({length: n + 1}, (_, i) => i);
    for (let i = 0; i < n; i++) {
      if (i === skipIdx) continue;
      const [u, v] = edges[i];
      const ru = find(uf, u), rv = find(uf, v);
      if (ru === rv) return false;
      uf[rv] = ru;
    }
    return true;
  };

  if (edge2Idx !== -1) {
    // Try removing the later edge first
    if (isValid(edge2Idx)) return edges[edge2Idx];
    return [edge1Parent, edges[edge2Idx][1]];
  }

  // No dual parent → find cycle edge
  const uf = Array.from({length: n + 1}, (_, i) => i);
  for (let i = 0; i < n; i++) {
    const [u, v] = edges[i];
    const ru = find(uf, u), rv = find(uf, v);
    if (ru === rv) return edges[i];
    uf[rv] = ru;
  }

  return [];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findRedundantDirectedConnection([[1,2],[1,3],[2,3]]))); // [2,3]
console.log(JSON.stringify(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,1],[1,5]]))); // [4,1]
console.log(JSON.stringify(findRedundantDirectedConnection([[2,1],[3,1],[4,2],[1,4]]))); // [2,1]
