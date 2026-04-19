/*
 * @lc app=leetcode id=1615 lang=javascript
 *
 * [1615] Maximal Network Rank
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
  const degree = new Array(n).fill(0);
  const connected = new Set();
  for (const [a, b] of roads) {
    degree[a]++;
    degree[b]++;
    connected.add(`${Math.min(a, b)},${Math.max(a, b)}`);
  }
  let maxRank = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const rank = degree[i] + degree[j] - (connected.has(`${i},${j}`) ? 1 : 0);
      maxRank = Math.max(maxRank, rank);
    }
  }
  return maxRank;
};
// @lc code=end

// TEST:
console.log(maximalNetworkRank(4, [[0,1],[0,3],[1,2],[1,3]])); // 4
console.log(maximalNetworkRank(5, [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]])); // 5
console.log(maximalNetworkRank(8, [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]])); // 5
