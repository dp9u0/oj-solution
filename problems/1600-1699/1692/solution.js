/*
 * @lc app=leetcode.cn id=1692 lang=javascript
 *
 * [1692] 计算分配糖果的不同方式
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var waysToDistribute = function(n, k) {
    const MOD = 1000000007;
    // dp[j] = S(i, j) processed row by row (Stirling numbers, second kind)
    const dp = new Array(k + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = Math.min(i, k); j >= 1; j--) {
            dp[j] = (j * dp[j] + dp[j - 1]) % MOD;
        }
        dp[0] = 0;
    }
    return dp[k];
};
// @lc code=end

// TEST:
console.log(waysToDistribute(3, 2)); // 3
console.log(waysToDistribute(4, 2)); // 7
console.log(waysToDistribute(20, 5)); // 206085257
console.log(waysToDistribute(1, 1)); // 1
