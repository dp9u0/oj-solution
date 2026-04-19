/*
 * @lc app=leetcode id=1351 lang=javascript
 *
 * [1351] Count Negative Numbers in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const m = grid.length, n = grid[0].length;
    let count = 0, col = n - 1;
    for (let row = 0; row < m; row++) {
        while (col >= 0 && grid[row][col] < 0) col--;
        count += n - col - 1;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));
console.log(countNegatives([[3,2],[1,0]]));
console.log(countNegatives([[-1]]));
