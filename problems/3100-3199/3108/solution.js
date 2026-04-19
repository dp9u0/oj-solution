/*
 * @lc app=leetcode id=3108 lang=javascript
 *
 * [3108] Minimum Cost Walk in Weighted Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(n, edges, query) {
  const parent = new Int32Array(n);
  const rank = new Int32Array(n);
  const componentAnd = new Int32Array(n).fill((1 << 20) - 1);

  for (let i = 0; i < n; i++) parent[i] = i;

  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  const union = (x, y) => {
    const rx = find(x), ry = find(y);
    if (rx === ry) return rx;
    if (rank[rx] < rank[ry]) {
      parent[rx] = ry;
      return ry;
    } else if (rank[rx] > rank[ry]) {
      parent[ry] = rx;
      return rx;
    } else {
      parent[ry] = rx;
      rank[rx]++;
      return rx;
    }
  };

  for (const [u, v, w] of edges) {
    const ru = find(u), rv = find(v);
    if (ru !== rv) {
      const root = union(u, v);
      componentAnd[root] = componentAnd[ru] & componentAnd[rv] & w;
    } else {
      componentAnd[ru] &= w;
    }
  }

  return query.map(([s, t]) => {
    if (s === t) return 0;
    const rs = find(s), rt = find(t);
    if (rs !== rt) return -1;
    return componentAnd[rs];
  });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minimumCost(5, [[0,1,7],[1,3,7],[1,2,1]], [[0,3],[3,4]]))); // [1,-1]
console.log(JSON.stringify(minimumCost(3, [[0,2,7],[0,1,15],[1,2,6],[1,2,1]], [[1,2]]))); // [0]
console.log(JSON.stringify(minimumCost(4, [[0,1,1],[2,3,1]], [[0,3]]))); // [-1]
