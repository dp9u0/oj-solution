/*
 * @lc app=leetcode id=2328 lang=javascript
 *
 * [2328] Number of Increasing Paths in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
    const MOD = 1e9 + 7;
    const m = grid.length, n = grid[0].length;
    const cells = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            cells.push([grid[i][j], i, j]);
        }
    }
    cells.sort((a, b) => a[0] - b[0]);

    const dp = Array.from({length: m}, () => new Array(n).fill(1));
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    let result = 0;

    for (const [val, i, j] of cells) {
        for (const [di, dj] of dirs) {
            const ni = i + di, nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] < val) {
                dp[i][j] = (dp[i][j] + dp[ni][nj]) % MOD;
            }
        }
        result = (result + dp[i][j]) % MOD;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(countPaths([[1,1],[3,4]])); // 8
console.log(countPaths([[1],[2]])); // 3
console.log(countPaths([[1]])); // 1
console.log(countPaths([[1,2],[3,4]])); // 10
console.log(countPaths([[2,1]])); // 3
