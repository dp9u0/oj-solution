/*
 * @lc app=leetcode id=2373 lang=javascript
 *
 * [2373] Largest Local Values in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let n = grid.length;
    let result = [];
    for (let i = 0; i < n - 2; i++) {
        result[i] = [];
        for (let j = 0; j < n - 2; j++) {
            let max = 0;
            for (let r = i; r < i + 3; r++) {
                for (let c = j; c < j + 3; c++) {
                    if (grid[r][c] > max) max = grid[r][c];
                }
            }
            result[i][j] = max;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]))); // [[9,9],[8,6]]
console.log(JSON.stringify(largestLocal([[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]))); // [[2,2,2],[2,2,2],[2,2,2]]
