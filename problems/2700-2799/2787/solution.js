/*
 * @lc app=leetcode id=2787 lang=javascript
 *
 * [2787] Ways to Express an Integer as Sum of Powers
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
    const MOD = 1e9 + 7;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; Math.pow(i, x) <= n; i++) {
        const val = Math.pow(i, x);
        for (let s = n; s >= val; s--) {
            dp[s] = (dp[s] + dp[s - val]) % MOD;
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(numberOfWays(10, 2)); // 1
console.log(numberOfWays(4, 1)); // 2
console.log(numberOfWays(1, 2)); // 1
console.log(numberOfWays(160, 3)); // 1
console.log(numberOfWays(300, 1)); // 6
