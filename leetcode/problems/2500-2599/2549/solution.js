/*
 * @lc app=leetcode id=2549 lang=javascript
 *
 * [2549] Count Distinct Numbers on Board
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function(n) {
    return n === 1 ? 1 : n - 1;
};
// @lc code=end

// TEST:
console.log(distinctIntegers(5)); // 4
console.log(distinctIntegers(3)); // 2
console.log(distinctIntegers(1)); // 1
