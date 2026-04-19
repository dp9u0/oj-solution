/*
 * @lc app=leetcode id=2466 lang=javascript
 *
 * [2466] Count Ways To Build Good Strings
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
  const MOD = 1e9 + 7;
  const dp = new Array(high + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % MOD;
    if (i >= one) dp[i] = (dp[i] + dp[i - one]) % MOD;
  }

  let result = 0;
  for (let i = low; i <= high; i++) {
    result = (result + dp[i]) % MOD;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(countGoodStrings(3, 3, 1, 1)); // 8
console.log(countGoodStrings(2, 3, 1, 2)); // 5
console.log(countGoodStrings(2, 3, 3, 3)); // 2
