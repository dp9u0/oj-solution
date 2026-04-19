/*
 * @lc app=leetcode id=3128 lang=javascript
 *
 * [3128] Right Triangles
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numberOfRightTriangles = function(grid) {
    const m = grid.length, n = grid[0].length;
    const rowCount = new Array(m).fill(0);
    const colCount = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }
    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                ans += (rowCount[i] - 1) * (colCount[j] - 1);
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(numberOfRightTriangles([[0,1,0],[0,1,1],[0,1,0]]));       // 2
console.log(numberOfRightTriangles([[1,0,0,0],[0,1,0,1],[1,0,0,0]])); // 0
console.log(numberOfRightTriangles([[1,0,1],[1,0,0],[1,0,0]]));       // 2
