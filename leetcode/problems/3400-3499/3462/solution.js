/*
 * @lc app=leetcode id=3462 lang=javascript
 *
 * [3462] Maximum Sum With at Most K Elements
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number[]} limits
 * @param {number} k
 * @return {number}
 */
var maxSum = function(grid, limits, k) {
    let candidates = [];
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i].slice().sort((a, b) => b - a);
        for (let j = 0; j < limits[i]; j++) {
            candidates.push(row[j]);
        }
    }
    candidates.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < k; i++) sum += candidates[i];
    return sum;
};
// @lc code=end

// TEST:
console.log(maxSum([[1,2],[3,4]], [1,2], 2)); // 7
console.log(maxSum([[5,3,7],[8,2,6]], [2,2], 3)); // 21
