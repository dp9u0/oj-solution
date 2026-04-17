/*
 * @lc app=leetcode id=1563 lang=javascript
 *
 * [1563] Stone Game V
 */

// @lc code=start
/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
    const n = stoneValue.length;
    if (n === 1) return 0;

    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + stoneValue[i];

    const dp = new Array(n).fill(0).map(() => new Int32Array(n));

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len <= n; i++) {
            const j = i + len - 1;
            for (let k = i; k < j; k++) {
                const left = prefix[k + 1] - prefix[i];
                const right = prefix[j + 1] - prefix[k + 1];
                if (left < right) {
                    dp[i][j] = Math.max(dp[i][j], left + dp[i][k]);
                } else if (right < left) {
                    dp[i][j] = Math.max(dp[i][j], right + dp[k + 1][j]);
                } else {
                    dp[i][j] = Math.max(dp[i][j], left + Math.max(dp[i][k], dp[k + 1][j]));
                }
            }
        }
    }

    return dp[0][n - 1];
};
// @lc code=end

// TEST:
console.log(stoneGameV([6,2,3,4,5,5])); // 18
console.log(stoneGameV([7,7,7,7,7,7,7])); // 28
console.log(stoneGameV([4])); // 0
console.log(stoneGameV([1,2])); // 1
console.log(stoneGameV([2,1,1])); // 3
console.log(stoneGameV([10,9,8,7,6,5])); // check
