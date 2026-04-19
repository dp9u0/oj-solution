/*
 * @lc app=leetcode id=3882 lang=javascript
 *
 * [3882] Minimum XOR Path in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    let m = grid.length, n = grid[0].length;
    let dp = Array.from({ length: m }, () => Array.from({ length: n }, () => new Set()));
    dp[0][0].add(grid[0][0]);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            let s = new Set();
            if (i > 0) for (let v of dp[i - 1][j]) s.add(v ^ grid[i][j]);
            if (j > 0) for (let v of dp[i][j - 1]) s.add(v ^ grid[i][j]);
            dp[i][j] = s;
        }
    }
    let ans = Infinity;
    for (let v of dp[m - 1][n - 1]) ans = Math.min(ans, v);
    return ans;
};
// @lc code=end

// TEST:
console.log(minCost([[1,2],[3,4]]));
console.log(minCost([[6,7],[5,8]]));
console.log(minCost([[2,7,5]]));
