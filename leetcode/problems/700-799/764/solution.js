/*
 * @lc app=leetcode id=764 lang=javascript
 *
 * [764] Largest Plus Sign
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
    const banned = new Set(mines.map(([x, y]) => x * n + y));
    const dp = Array.from({ length: n }, () => new Array(n).fill(n));

    for (let r = 0; r < n; r++) {
        let count = 0;
        for (let c = 0; c < n; c++) {
            count = banned.has(r * n + c) ? 0 : count + 1;
            dp[r][c] = Math.min(dp[r][c], count);
        }
        count = 0;
        for (let c = n - 1; c >= 0; c--) {
            count = banned.has(r * n + c) ? 0 : count + 1;
            dp[r][c] = Math.min(dp[r][c], count);
        }
    }

    let result = 0;
    for (let c = 0; c < n; c++) {
        let count = 0;
        for (let r = 0; r < n; r++) {
            count = banned.has(r * n + c) ? 0 : count + 1;
            dp[r][c] = Math.min(dp[r][c], count);
        }
        count = 0;
        for (let r = n - 1; r >= 0; r--) {
            count = banned.has(r * n + c) ? 0 : count + 1;
            dp[r][c] = Math.min(dp[r][c], count);
            result = Math.max(result, dp[r][c]);
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(orderOfLargestPlusSign(5, [[4, 2]])); // 2
console.log(orderOfLargestPlusSign(1, [[0, 0]])); // 0
console.log(orderOfLargestPlusSign(2, [])); // 1
