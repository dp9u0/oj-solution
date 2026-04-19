/*
 * @lc app=leetcode id=834 lang=javascript
 *
 * [834] Sum of Distances in Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const subtreeSize = new Int32Array(n);
  const res = new Int32Array(n);

  // First DFS: compute subtree sizes and res[0]
  const dfs1 = (node, parent, depth) => {
    subtreeSize[node] = 1;
    res[0] += depth;
    for (const child of adj[node]) {
      if (child !== parent) {
        dfs1(child, node, depth + 1);
        subtreeSize[node] += subtreeSize[child];
      }
    }
  };
  dfs1(0, -1, 0);

  // Second DFS: reroot DP
  const dfs2 = (node, parent) => {
    for (const child of adj[node]) {
      if (child !== parent) {
        res[child] = res[node] - subtreeSize[child] + (n - subtreeSize[child]);
        dfs2(child, node);
      }
    }
  };
  dfs2(0, -1);

  return Array.from(res);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sumOfDistancesInTree(6, [[0,1],[0,2],[2,3],[2,4],[2,5]]))); // [8,12,6,10,10,10]
console.log(JSON.stringify(sumOfDistancesInTree(1, []))); // [0]
console.log(JSON.stringify(sumOfDistancesInTree(2, [[1,0]]))); // [1,1]
