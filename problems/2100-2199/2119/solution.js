/*
 * @lc app=leetcode id=2119 lang=javascript
 *
 * [2119] A Number After a Double Reversal
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    return num === 0 || num % 10 !== 0;
};
// @lc code=end

// TEST:
console.log(isSameAfterReversals(526));  // true
console.log(isSameAfterReversals(1800)); // false
console.log(isSameAfterReversals(0));    // true
