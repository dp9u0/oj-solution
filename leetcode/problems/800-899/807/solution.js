/*
 * @lc app=leetcode id=807 lang=javascript
 *
 * [807] Max Increase to Keep City Skyline
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    const n = grid.length;
    const rowMax = grid.map(row => Math.max(...row));
    const colMax = Array.from({ length: n }, (_, j) => Math.max(...grid.map(row => row[j])));

    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            ans += Math.min(rowMax[i], colMax[j]) - grid[i][j];
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]])); // 35
console.log(maxIncreaseKeepingSkyline([[0,0,0],[0,0,0],[0,0,0]])); // 0
