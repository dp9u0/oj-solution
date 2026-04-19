/*
 * @lc app=leetcode id=3530 lang=javascript
 *
 * [3530] Maximum Profit from Valid Topological Order in DAG
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} score
 * @return {number}
 */
var maxProfit = function(n, edges, score) {
  const prereq = new Int32Array(n);
  for (const [u, v] of edges) {
    prereq[v] |= (1 << u);
  }

  const full = (1 << n) - 1;
  const dp = new Int32Array(1 << n).fill(-1);
  dp[0] = 0;

  for (let mask = 0; mask < full; mask++) {
    if (dp[mask] < 0) continue;
    const pos = popcount(mask) + 1;
    for (let v = 0; v < n; v++) {
      if (mask & (1 << v)) continue;
      if ((prereq[v] & mask) !== prereq[v]) continue;
      const next = mask | (1 << v);
      const val = dp[mask] + score[v] * pos;
      if (val > dp[next]) dp[next] = val;
    }
  }

  return dp[full];
};

function popcount(x) {
  let c = 0;
  while (x) { c++; x &= x - 1; }
  return c;
}
// @lc code=end

// TEST:
console.log(maxProfit(2, [[0,1]], [2,3])); // 8
console.log(maxProfit(3, [[0,1],[0,2]], [1,6,3])); // 25
console.log(maxProfit(3, [], [1,2,3])); // 14 (3*3+2*2+1*1=14)
console.log(maxProfit(1, [], [5])); // 5
console.log(maxProfit(4, [[0,1],[1,2],[2,3]], [1,2,3,4])); // 1*1+2*2+3*3+4*4=30
