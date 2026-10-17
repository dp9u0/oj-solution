/*
 * @lc app=leetcode.cn id=面试题 08.11 lang=javascript
 *
 * [面试题 08.11] 硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    // 完全背包计数：按面额顺序外层递推，组合不重复
    const MOD = 1000000007;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for (const coin of [1, 5, 10, 25]) {
        for (let c = coin; c <= n; c++) {
            dp[c] = (dp[c] + dp[c - coin]) % MOD;
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(waysToChange(5) === 2);
console.log(waysToChange(10) === 4);
console.log(waysToChange(0) === 1);
console.log(waysToChange(1) === 1);
console.log(waysToChange(25) === 13);
const bigWays = waysToChange(1000000); // 大数仅验证不超时且已取模
console.log(Number.isInteger(bigWays) && bigWays >= 0 && bigWays < 1000000007);
