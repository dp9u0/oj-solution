/*
 * @lc app=leetcode id=2368 lang=javascript
 *
 * [2368] Reachable Nodes With Restrictions
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
  const blocked = new Set(restricted);
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const visited = new Uint8Array(n);
  const queue = [0];
  visited[0] = 1;
  let count = 0;

  while (queue.length) {
    const u = queue.pop();
    count++;
    for (const v of adj[u]) {
      if (!visited[v] && !blocked.has(v)) {
        visited[v] = 1;
        queue.push(v);
      }
    }
  }

  return count;
};
// @lc code=end

// TEST:
console.log(reachableNodes(7, [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], [4,5])); // 4
console.log(reachableNodes(7, [[0,1],[0,2],[0,5],[0,4],[3,2],[6,5]], [4,2,1])); // 3
console.log(reachableNodes(2, [[0,1]], [1])); // 1
console.log(reachableNodes(4, [[0,1],[1,2],[2,3]], [])); // 4
console.log(reachableNodes(5, [[0,1],[0,2],[0,3],[0,4]], [2,3])); // 3
