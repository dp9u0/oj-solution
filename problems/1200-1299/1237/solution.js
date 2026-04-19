/*
 * @lc app=leetcode id=1237 lang=javascript
 *
 * [1237] Find Positive Integer Solution for a Given Equation
 */

// @lc code=start
/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
    let result = [];
    let x = 1, y = 1000;
    while (x <= 1000 && y >= 1) {
      let val = customfunction.f(x, y);
      if (val === z) {
        result.push([x, y]);
        x++;
        y--;
      } else if (val > z) {
        y--;
      } else {
        x++;
      }
    }
    return result;
};
// @lc code=end

// TEST:
// Note: cannot test locally without CustomFunction, test via LeetCode
console.log("Test via LeetCode");
