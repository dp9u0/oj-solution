/*
 * @lc app=leetcode id=2400 lang=javascript
 *
 * [2400] Number of Ways to Reach a Position After Exactly k Steps
 */

// @lc code=start
/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function(startPos, endPos, k) {
  const MOD = 1e9 + 7;
  const d = Math.abs(endPos - startPos);
  if (d > k || (k + d) % 2 !== 0) return 0;
  const r = (k + d) / 2;

  // Pascal's triangle to compute C(k, r) safely
  const dp = new Array(r + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= k; i++) {
    for (let j = Math.min(i, r); j >= 1; j--) {
      dp[j] = (dp[j] + dp[j - 1]) % MOD;
    }
  }
  return dp[r];
};
// @lc code=end

// TEST:
console.log(numberOfWays(1, 2, 3)); // 3
console.log(numberOfWays(2, 5, 10)); // 0
console.log(numberOfWays(1, 1, 2)); // 2
