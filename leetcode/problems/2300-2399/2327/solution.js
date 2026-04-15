/*
 * @lc app=leetcode id=2327 lang=javascript
 *
 * [2327] Number of People Aware of a Secret
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
  const MOD = 1e9 + 7;
  let dp = new Array(n + 1).fill(0);
  let sum = new Array(n + 1).fill(0);
  dp[1] = 1;
  sum[1] = 1;

  for (let i = 2; i <= n; i++) {
    let lo = Math.max(0, i - forget);
    let hi = i - delay;
    if (hi >= 1) {
      dp[i] = (sum[hi] - (lo >= 1 ? sum[lo] : 0) + MOD) % MOD;
    }
    sum[i] = (sum[i - 1] + dp[i]) % MOD;
  }

  let lo = Math.max(0, n - forget);
  return (sum[n] - (lo >= 1 ? sum[lo] : 0) + MOD) % MOD;
};
// @lc code=end

// TEST:
console.log(peopleAwareOfSecret(6, 2, 4)); // 5
console.log(peopleAwareOfSecret(4, 1, 3)); // 6
console.log(peopleAwareOfSecret(684, 18, 496)); // scope test
