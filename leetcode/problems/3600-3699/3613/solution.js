/*
 * @lc app=leetcode id=3613 lang=javascript
 *
 * [3613] Minimize Maximum Component Cost
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var minCost = function(n, edges, k) {
  if (k >= n) return 0;

  edges.sort((a, b) => a[2] - b[2]);

  const parent = new Array(n);
  for (let i = 0; i < n; i++) parent[i] = i;
  const rank = new Array(n).fill(0);

  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  let components = n;
  let result = 0;

  for (const [u, v, w] of edges) {
    if (components <= k) break;
    const ru = find(u), rv = find(v);
    if (ru !== rv) {
      if (rank[ru] < rank[rv]) parent[ru] = rv;
      else if (rank[ru] > rank[rv]) parent[rv] = ru;
      else { parent[rv] = ru; rank[ru]++; }
      components--;
      result = w;
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(minCost(5, [[0,1,4],[1,2,3],[1,3,2],[3,4,6]], 2)); // 4
console.log(minCost(4, [[0,1,5],[1,2,5],[2,3,5]], 1)); // 5
console.log(minCost(3, [[0,1,2],[1,2,3]], 3)); // 0
