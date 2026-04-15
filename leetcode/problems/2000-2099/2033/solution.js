/*
 * @lc app=leetcode id=2033 lang=javascript
 *
 * [2033] Minimum Operations to Make a Uni-Value Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    const arr = grid.flat().sort((a, b) => a - b);
    const rem = arr[0] % x;
    for (const v of arr) {
        if (v % x !== rem) return -1;
    }
    const median = arr[arr.length >> 1];
    let ops = 0;
    for (const v of arr) {
        ops += Math.abs(v - median) / x;
    }
    return ops;
};
// @lc code=end

// TEST:
console.log(minOperations([[2,4],[6,8]], 2));    // 4
console.log(minOperations([[1,5],[2,3]], 1));    // 5
console.log(minOperations([[1,2],[3,4]], 2));    // -1
