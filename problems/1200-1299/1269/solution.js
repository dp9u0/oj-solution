/*
 * @lc app=leetcode id=1269 lang=javascript
 *
 * [1269] Number of Ways to Stay in the Same Place After Some Steps
 */

// @lc code=start
/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  const MOD = 1e9 + 7;
  const n = Math.min(steps + 1, arrLen);

  let dp = new Int32Array(n);
  dp[0] = 1;

  for (let s = 0; s < steps; s++) {
    const ndp = new Int32Array(n);
    for (let j = 0; j < n; j++) {
      if (!dp[j]) continue;
      // Stay
      ndp[j] = (ndp[j] + dp[j]) % MOD;
      // Right
      if (j + 1 < n) ndp[j + 1] = (ndp[j + 1] + dp[j]) % MOD;
      // Left
      if (j - 1 >= 0) ndp[j - 1] = (ndp[j - 1] + dp[j]) % MOD;
    }
    dp = ndp;
  }

  return dp[0];
};
// @lc code=end

// TEST:
console.log(numWays(3, 2)); // 4
console.log(numWays(2, 4)); // 2
console.log(numWays(4, 2)); // 8
console.log(numWays(1, 1)); // 1 (only stay)
console.log(numWays(500, 1000000)); // large case
console.log(numWays(3, 1)); // 1 (only stay, stay, stay)
