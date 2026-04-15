/*
 * @lc app=leetcode id=3643 lang=javascript
 *
 * [3643] Flip Square Submatrix Vertically
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    for (let i = 0; i < Math.floor(k / 2); i++) {
        const top = x + i, bottom = x + k - 1 - i;
        for (let j = y; j < y + k; j++) {
            const tmp = grid[top][j];
            grid[top][j] = grid[bottom][j];
            grid[bottom][j] = tmp;
        }
    }
    return grid;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(reverseSubmatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 1, 0, 3)));
// [[1,2,3,4],[13,14,15,8],[9,10,11,12],[5,6,7,16]]
console.log(JSON.stringify(reverseSubmatrix([[3,4,2,3],[2,3,4,2]], 0, 2, 2)));
// [[3,4,4,2],[2,3,2,3]]
