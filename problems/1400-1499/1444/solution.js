/*
 * @lc app=leetcode id=1444 lang=javascript
 *
 * [1444] Number of Ways of Cutting a Pizza
 */

// @lc code=start
/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function(pizza, k) {
    const MOD = 1e9 + 7;
    const rows = pizza.length, cols = pizza[0].length;

    // 2D prefix sum of apples
    const prefix = Array.from({length: rows + 1}, () => new Array(cols + 1).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            prefix[i + 1][j + 1] = (pizza[i][j] === 'A' ? 1 : 0) + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j];
        }
    }

    const hasApple = (r1, c1, r2, c2) =>
        prefix[r2 + 1][c2 + 1] - prefix[r1][c2 + 1] - prefix[r2 + 1][c1] + prefix[r1][c1] > 0;

    // dp[r][c] = ways for current piece count
    let dp = Array.from({length: rows}, () => new Array(cols).fill(0));
    for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
            dp[r][c] = hasApple(r, c, rows - 1, cols - 1) ? 1 : 0;

    for (let p = 2; p <= k; p++) {
        const ndp = Array.from({length: rows}, () => new Array(cols).fill(0));
        for (let r = rows - 1; r >= 0; r--) {
            for (let c = cols - 1; c >= 0; c--) {
                for (let i = r + 1; i < rows; i++) {
                    if (hasApple(r, c, i - 1, cols - 1))
                        ndp[r][c] = (ndp[r][c] + dp[i][c]) % MOD;
                }
                for (let j = c + 1; j < cols; j++) {
                    if (hasApple(r, c, rows - 1, j - 1))
                        ndp[r][c] = (ndp[r][c] + dp[r][j]) % MOD;
                }
            }
        }
        dp = ndp;
    }

    return dp[0][0];
};
// @lc code=end

// TEST:
console.log(ways(["A..","AAA","..."], 3)); // 3
console.log(ways(["A..","AA.","..."], 3)); // 1
console.log(ways(["A..","A..","..."], 1)); // 1
console.log(ways(["A","A"], 1)); // 1
console.log(ways([".A","..","AA"], 3)); // 4
