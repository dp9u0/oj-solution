/*
 * @lc app=leetcode id=2485 lang=javascript
 *
 * [2485] Find the Pivot Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let total = n * (n + 1) / 2;
    let x = Math.sqrt(total);
    return Number.isInteger(x) ? x : -1;
};
// @lc code=end

// TEST:
console.log(pivotInteger(8)); // 6
console.log(pivotInteger(1)); // 1
console.log(pivotInteger(4)); // -1
