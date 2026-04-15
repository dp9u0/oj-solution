/*
 * @lc app=leetcode id=1866 lang=javascript
 *
 * [1866] Number of Ways to Rearrange Sticks With K Sticks Visible
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var rearrangeSticks = function(n, k) {
    let MOD = 1e9 + 7;
    let dp = new Array(k + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
      let ndp = new Array(k + 1).fill(0);
      for (let j = 1; j <= k; j++) {
        ndp[j] = Number((BigInt(dp[j - 1]) + BigInt(i - 1) * BigInt(dp[j])) % BigInt(MOD));
      }
      dp = ndp;
    }
    return dp[k];
};
// @lc code=end

// TEST:
console.log(rearrangeSticks(3, 2));
console.log(rearrangeSticks(5, 5));
console.log(rearrangeSticks(20, 11));
