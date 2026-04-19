/*
 * @lc app=leetcode id=2603 lang=javascript
 *
 * [2603] Collect Coins in a Tree
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number[][]} edges
 * @return {number}
 */
var collectTheCoins = function(coins, edges) {
  const n = coins.length;
  if (n <= 1) return 0;

  const adj = Array.from({ length: n }, () => []);
  const degree = new Array(n).fill(0);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
    degree[u]++;
    degree[v]++;
  }

  // Step 1: Remove no-coin leaves (topological sort)
  const queue = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1 && coins[i] === 0) queue.push(i);
  }
  while (queue.length > 0) {
    const u = queue.shift();
    if (degree[u] <= 0) continue;
    degree[u]--;
    for (const v of adj[u]) {
      if (degree[v] > 0) {
        degree[v]--;
        if (degree[v] === 1 && coins[v] === 0) queue.push(v);
      }
    }
  }

  // Step 2: Trim 2 layers of leaves (can collect within distance 2)
  for (let layer = 0; layer < 2; layer++) {
    const leaves = [];
    for (let i = 0; i < n; i++) {
      if (degree[i] === 1) leaves.push(i);
    }
    for (const u of leaves) {
      if (degree[u] !== 1) continue;
      degree[u]--;
      for (const v of adj[u]) {
        if (degree[v] > 0) degree[v]--;
      }
    }
  }

  // Sum of remaining degrees = 2 * remaining edges = answer
  let ans = 0;
  for (let i = 0; i < n; i++) ans += degree[i];
  return ans;
};
// @lc code=end

// TEST:
console.log(collectTheCoins([1,0,0,0,0,1], [[0,1],[1,2],[2,3],[3,4],[4,5]])); // 2
console.log(collectTheCoins([0,0,0,1,1,0,0,1], [[0,1],[0,2],[1,3],[1,4],[2,5],[5,6],[5,7]])); // 2
console.log(collectTheCoins([1], [])); // 0
console.log(collectTheCoins([0,1,0], [[0,1],[1,2]])); // 0
console.log(collectTheCoins([1,1,1,1], [[0,1],[1,2],[2,3]])); // 0
console.log(collectTheCoins([0,0], [[0,1]])); // 0
