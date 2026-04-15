/*
 * @lc app=leetcode id=2639 lang=javascript
 *
 * [2639] Find the Width of Columns of a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    const n = grid[0].length;
    const ans = new Array(n).fill(0);
    for (const row of grid) {
        for (let j = 0; j < n; j++) {
            ans[j] = Math.max(ans[j], String(row[j]).length);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(findColumnWidth([[1],[22],[333]]));
console.log(findColumnWidth([[-15,1,3],[15,7,12],[5,6,-2]]));
