/*
 * @lc app=leetcode id=3726 lang=javascript
 *
 * [3726] Remove Zeros in Decimal Representation
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    return parseInt(String(n).replace(/0/g, ''), 10);
};
// @lc code=end

// TEST:
console.log(removeZeros(1020030));  // 123
console.log(removeZeros(1));        // 1
console.log(removeZeros(10));       // 1
console.log(removeZeros(1000));     // 1
console.log(removeZeros(12345));    // 12345
console.log(removeZeros(1010101));  // 1111
