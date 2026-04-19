/*
 * @lc app=leetcode id=3203 lang=javascript
 *
 * [3203] Find Minimum Diameter After Merging Two Trees
 */

// @lc code=start
/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {
  const d1 = treeDiameter(edges1);
  const d2 = treeDiameter(edges2);
  return Math.max(d1, d2, Math.ceil(d1 / 2) + 1 + Math.ceil(d2 / 2));
};

function treeDiameter(edges) {
  if (edges.length === 0) return 0;
  const n = edges.length + 1;
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const bfs = (start) => {
    const dist = new Int32Array(n).fill(-1);
    dist[start] = 0;
    const queue = [start];
    let farthest = start;
    let head = 0;
    while (head < queue.length) {
      const node = queue[head++];
      for (const next of adj[node]) {
        if (dist[next] === -1) {
          dist[next] = dist[node] + 1;
          queue.push(next);
          if (dist[next] > dist[farthest]) farthest = next;
        }
      }
    }
    return { farthest, dist };
  };

  const { farthest: a } = bfs(0);
  const { farthest: b, dist } = bfs(a);
  return dist[b];
}
// @lc code=end

// TEST:
console.log(minimumDiameterAfterMerge([[0,1],[0,2],[0,3]], [[0,1]])); // 3
console.log(minimumDiameterAfterMerge([[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]], [[0,1],[0,2],[0,3],[2,4],[2,5],[3,6],[2,7]])); // 5
