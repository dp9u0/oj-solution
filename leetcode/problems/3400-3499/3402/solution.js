/*
 * @lc app=leetcode id=3402 lang=javascript
 *
 * [3402] Minimum Operations to Make Columns Strictly Increasing
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
    const m = grid.length, n = grid[0].length;
    let ops = 0;
    for (let j = 0; j < n; j++)
        for (let i = 1; i < m; i++) {
            if (grid[i][j] <= grid[i - 1][j]) {
                ops += grid[i - 1][j] + 1 - grid[i][j];
                grid[i][j] = grid[i - 1][j] + 1;
            }
        }
    return ops;
};
// @lc code=end

// TEST:
console.log(minimumOperations([[3,2],[1,3],[3,4],[0,1]])); // 15
console.log(minimumOperations([[3,2,1],[2,1,0],[1,2,3]])); // 12
console.log(minimumOperations([[1]])); // 0
console.log(minimumOperations([[1],[1]])); // 1
console.log(minimumOperations([[0,0],[0,0]])); // 2
