/*
 * @lc app=leetcode id=2316 lang=javascript
 *
 * [2316] Count Unreachable Pairs of Nodes in an Undirected Graph
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
  const parent = new Array(n);
  const rank = new Array(n).fill(0);
  const size = new Array(n).fill(1);

  for (let i = 0; i < n; i++) parent[i] = i;

  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  const union = (a, b) => {
    const ra = find(a), rb = find(b);
    if (ra === rb) return;
    if (rank[ra] < rank[rb]) {
      parent[ra] = rb;
      size[rb] += size[ra];
    } else if (rank[ra] > rank[rb]) {
      parent[rb] = ra;
      size[ra] += size[rb];
    } else {
      parent[rb] = ra;
      size[ra] += size[rb];
      rank[ra]++;
    }
  };

  for (const [a, b] of edges) union(a, b);

  const visited = new Set();
  let result = 0;
  let seen = 0;

  for (let i = 0; i < n; i++) {
    const root = find(i);
    if (!visited.has(root)) {
      visited.add(root);
      result += size[root] * seen;
      seen += size[root];
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(countPairs(3, [[0,1],[0,2],[1,2]])); // 0
console.log(countPairs(7, [[0,2],[0,5],[2,4],[1,6],[5,4]])); // 14
