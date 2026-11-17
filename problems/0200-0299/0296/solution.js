/*
 * @lc app=leetcode.cn id=296 lang=javascript
 *
 * [296] 最佳的碰头地点
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
    const rows = [], cols = [];
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 1) {
                rows.push(r);
                cols.push(c);
            }
        }
    }
    cols.sort((a, b) => a - b); // rows already ascending from the top-down scan

    // median minimizes the sum of absolute deviations on each axis independently
    const mr = rows[rows.length >> 1];
    const mc = cols[cols.length >> 1];

    return rows.reduce((s, r) => s + Math.abs(r - mr), 0) +
           cols.reduce((s, c) => s + Math.abs(c - mc), 0);
};
// @lc code=end

// TEST:
console.log(minTotalDistance([[1, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]])); // 6
console.log(minTotalDistance([[1, 1]])); // 1
console.log(minTotalDistance([[1]])); // 0
console.log(minTotalDistance([[0, 1], [1, 0]])); // 2
console.log(minTotalDistance([[1, 0, 1], [0, 0, 0], [1, 0, 1]])); // 8
