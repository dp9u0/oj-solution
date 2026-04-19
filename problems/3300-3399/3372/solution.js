/*
 * @lc app=leetcode id=3372 lang=javascript
 *
 * [3372] Maximize the Number of Target Nodes After Connecting Trees I
 */

// @lc code=start
/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2, k) {
  const buildAdj = (edges, n) => {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
      adj[u].push(v);
      adj[v].push(u);
    }
    return adj;
  };

  const bfs = (adj, start, maxDist) => {
    if (maxDist < 0) return 0;
    const n = adj.length;
    const dist = new Array(n).fill(-1);
    dist[start] = 0;
    const queue = [start];
    let head = 0, count = 0;
    while (head < queue.length) {
      const u = queue[head++];
      if (dist[u] > maxDist) break;
      count++;
      for (const v of adj[u]) {
        if (dist[v] === -1) {
          dist[v] = dist[u] + 1;
          queue.push(v);
        }
      }
    }
    return count;
  };

  const n = edges1.length + 1;
  const m = edges2.length + 1;
  const adj1 = buildAdj(edges1, n);
  const adj2 = buildAdj(edges2, m);

  const count1 = new Array(n);
  for (let i = 0; i < n; i++) {
    count1[i] = bfs(adj1, i, k);
  }

  let maxCount2 = 0;
  for (let i = 0; i < m; i++) {
    maxCount2 = Math.max(maxCount2, bfs(adj2, i, k - 1));
  }

  return count1.map(c => c + maxCount2);
};
// @lc code=end

// TEST:
console.log(maxTargetNodes([[0,1],[0,2],[2,3],[2,4]], [[0,1],[0,2],[0,3],[2,7],[1,4],[4,5],[4,6]], 2)); // [9,7,9,8,8]
console.log(maxTargetNodes([[0,1],[0,2],[0,3],[0,4]], [[0,1],[1,2],[2,3]], 1)); // [6,3,3,3,3]
