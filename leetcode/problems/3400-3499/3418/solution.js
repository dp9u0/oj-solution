/*
 * @lc app=leetcode id=3418 lang=javascript
 *
 * [3418] Maximum Amount of Money Robot Can Earn
 */

// @lc code=start
/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function(coins) {
    const m = coins.length, n = coins[0].length;
    const INF = -1e9;
    // dp[j][k] = max profit at column j having used k neutralizations
    let dp = Array.from({ length: n }, () => Array(3).fill(INF));

    for (let i = 0; i < m; i++) {
        const ndp = Array.from({ length: n }, () => Array(3).fill(INF));
        for (let j = 0; j < n; j++) {
            const val = coins[i][j];
            for (let k = 0; k <= 2; k++) {
                const fromAbove = i > 0 ? dp[j][k] : (j === 0 && k === 0 ? 0 : INF);
                const fromLeft = j > 0 ? ndp[j - 1][k] : INF;
                const best = Math.max(fromAbove, fromLeft);
                if (best === INF) continue;
                ndp[j][k] = Math.max(ndp[j][k], best + val);
                if (val < 0 && k < 2) {
                    ndp[j][k + 1] = Math.max(ndp[j][k + 1], best);
                }
            }
        }
        dp = ndp;
    }
    return Math.max(...dp[n - 1]);
};
// @lc code=end

// TEST:
console.log(maximumAmount([[0,1,-1],[1,-2,3],[2,-3,4]])); // 8
console.log(maximumAmount([[10,10,10],[10,10,10]])); // 40
console.log(maximumAmount([[-1,-2],[-3,-4]])); // -1
