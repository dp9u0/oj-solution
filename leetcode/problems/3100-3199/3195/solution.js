/*
 * @lc app=leetcode id=3195 lang=javascript
 *
 * [3195] Find the Minimum Area to Cover All Ones I
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    const m = grid.length, n = grid[0].length;
    let minR = m, maxR = -1, minC = n, maxC = -1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                minR = Math.min(minR, i);
                maxR = Math.max(maxR, i);
                minC = Math.min(minC, j);
                maxC = Math.max(maxC, j);
            }
        }
    }

    return (maxR - minR + 1) * (maxC - minC + 1);
};
// @lc code=end

// TEST:
console.log(minimumArea([[0,1,0],[1,0,1]]));  // 6
console.log(minimumArea([[1,0],[0,0]]));       // 1
