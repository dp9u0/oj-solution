/*
 * @lc app=leetcode id=1857 lang=javascript
 *
 * [1857] Largest Color Value in a Directed Graph
 */

// @lc code=start
/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
  const n = colors.length;
  const adj = Array.from({ length: n }, () => []);
  const inDeg = new Array(n).fill(0);

  for (const [u, v] of edges) {
    adj[u].push(v);
    inDeg[v]++;
  }

  // dp[v][c] = max count of color c in any path ending at v
  const dp = Array.from({ length: n }, () => new Array(26).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][colors.charCodeAt(i) - 97] = 1;
  }

  const queue = [];
  for (let i = 0; i < n; i++) {
    if (inDeg[i] === 0) queue.push(i);
  }

  let visited = 0;
  let result = 1;

  while (queue.length > 0) {
    const u = queue.shift();
    visited++;

    for (const v of adj[u]) {
      for (let c = 0; c < 26; c++) {
        const add = (colors.charCodeAt(v) - 97 === c) ? 1 : 0;
        dp[v][c] = Math.max(dp[v][c], dp[u][c] + add);
        result = Math.max(result, dp[v][c]);
      }

      inDeg[v]--;
      if (inDeg[v] === 0) queue.push(v);
    }
  }

  return visited === n ? result : -1;
};
// @lc code=end

// TEST:
console.log(largestPathValue('abaca', [[0,1],[0,2],[2,3],[3,4]]) === 3);
console.log(largestPathValue('a', [[0,0]]) === -1);
console.log(largestPathValue('a', []) === 1);
console.log(largestPathValue('ab', [[0,1]]) === 1);
console.log(largestPathValue('aaa', [[0,1],[1,2]]) === 3);
