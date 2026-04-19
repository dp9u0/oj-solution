/*
 * @lc app=leetcode id=2579 lang=javascript
 *
 * [2579] Count Total Number of Colored Cells
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    return 2 * n * n - 2 * n + 1;
};
// @lc code=end

// TEST:
console.log(coloredCells(1)); // 1
console.log(coloredCells(2)); // 5
console.log(coloredCells(3)); // 13
console.log(coloredCells(4)); // 25
console.log(coloredCells(5)); // 41
