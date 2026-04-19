/*
 * @lc app=leetcode id=2008 lang=javascript
 *
 * [2008] Maximum Earnings From Taxi
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function(n, rides) {
  // Group rides by end point
  const endRides = new Array(n + 1);
  for (let i = 0; i <= n; i++) endRides[i] = [];
  for (const [start, end, tip] of rides) {
    endRides[end].push([start, end - start + tip]);
  }

  const dp = new BigUint64Array(n + 1);
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1];
    for (const [start, profit] of endRides[i]) {
      const val = dp[start] + BigInt(profit);
      if (val > dp[i]) dp[i] = val;
    }
  }

  return Number(dp[n]);
};
// @lc code=end

// TEST:
console.log(maxTaxiEarnings(5, [[2,5,4],[1,5,1]])); // 7
console.log(maxTaxiEarnings(20, [[1,6,1],[3,10,2],[10,12,3],[11,12,2],[12,15,2],[13,18,1]])); // 20
