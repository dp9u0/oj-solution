/*
 * @lc app=leetcode id=3742 lang=javascript
 *
 * [3742] Maximum Path Score in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var maxPathScore = function(grid, k) {
    let m = grid.length, n = grid[0].length;
    let INF = -1e9;
    let dp = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(k + 1).fill(INF)));
    dp[0][0][0] = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let score = grid[i][j], cost = grid[i][j] > 0 ? 1 : 0;
            if (i === 0 && j === 0) continue;
            for (let c = 0; c <= k; c++) {
                let best = INF;
                if (c >= cost) {
                    if (i > 0 && dp[i - 1][j][c - cost] !== INF) best = Math.max(best, dp[i - 1][j][c - cost] + score);
                    if (j > 0 && dp[i][j - 1][c - cost] !== INF) best = Math.max(best, dp[i][j - 1][c - cost] + score);
                }
                dp[i][j][c] = best;
            }
        }
    }
    let ans = INF;
    for (let c = 0; c <= k; c++) ans = Math.max(ans, dp[m - 1][n - 1][c]);
    return ans === INF ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(maxPathScore([[0,1],[2,0]], 1));
console.log(maxPathScore([[0,1],[1,2]], 1));
console.log(maxPathScore([[0,0],[0,0]], 0));
