/*
 * @lc app=leetcode id=3070 lang=javascript
 *
 * [3070] Count Submatrices with Top-Left Element and Sum Less Than k
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) grid[i][j] += grid[i - 1][j];
            if (j > 0) grid[i][j] += grid[i][j - 1];
            if (i > 0 && j > 0) grid[i][j] -= grid[i - 1][j - 1];
            if (grid[i][j] <= k) ans++;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countSubmatrices([[7,6,3],[6,6,1]], 18)); // 4
console.log(countSubmatrices([[7,2,9],[1,5,0],[2,6,6]], 20)); // 6
