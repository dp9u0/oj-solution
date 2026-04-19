/*
 * @lc app=leetcode id=1443 lang=javascript
 *
 * [1443] Minimum Time to Collect All Apples in a Tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  // Iterative post-order DFS
  const parent = new Int32Array(n).fill(-1);
  const order = [0];
  parent[0] = -2; // mark visited
  for (let i = 0; i < order.length; i++) {
    const u = order[i];
    for (const v of adj[u]) {
      if (parent[v] === -1) {
        parent[v] = u;
        order.push(v);
      }
    }
  }

  let time = 0;
  const hasAppleInSubtree = new Uint8Array(n);
  for (let i = 0; i < n; i++) hasAppleInSubtree[i] = hasApple[i] ? 1 : 0;

  for (let i = order.length - 1; i > 0; i--) {
    const u = order[i];
    if (hasAppleInSubtree[u]) {
      time += 2;
      hasAppleInSubtree[parent[u]] = 1;
    }
  }
  return time;
};
// @lc code=end

// TEST:
console.log(minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,true,true,false])); // 8
console.log(minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,false,true,false])); // 6
console.log(minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,false,false,false,false,false])); // 0
console.log(minTime(1, [], [true])); // 0
console.log(minTime(4, [[0,1],[1,2],[0,3]], [true,true,false,true])); // 4
