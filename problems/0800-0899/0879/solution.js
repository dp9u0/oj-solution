/*
 * @lc app=leetcode id=879 lang=javascript
 *
 * [879] Profitable Schemes
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
    const MOD = 1e9 + 7;
    const m = group.length;
    // dp[i][j] = schemes using i people with at least j profit
    const dp = Array.from({ length: n + 1 }, () => new Array(minProfit + 1).fill(0));
    dp[0][0] = 1;

    for (let k = 0; k < m; k++) {
        const g = group[k], p = profit[k];
        for (let i = n; i >= g; i--) {
            for (let j = minProfit; j >= 0; j--) {
                const np = Math.min(minProfit, j + p);
                dp[i][np] = (dp[i][np] + dp[i - g][j]) % MOD;
            }
        }
    }

    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans = (ans + dp[i][minProfit]) % MOD;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(profitableSchemes(5, 3, [2, 2], [2, 3])); // 2
console.log(profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8])); // 7
console.log(profitableSchemes(1, 0, [1], [1])); // 1 (do nothing or commit crime)
console.log(profitableSchemes(5, 0, [2, 2], [2, 3])); // 4 (all subsets: {}, {0}, {1}, {0,1})
console.log(profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8])); // 7
