/*
 * @lc app=leetcode id=3536 lang=javascript
 *
 * [3536] Maximum Product of Two Digits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const digits = String(n).split('').map(Number).sort((a, b) => a - b);
    const d = digits.length;
    return digits[d - 1] * digits[d - 2];
};
// @lc code=end

// TEST:
console.log(maxProduct(31));   // 3
console.log(maxProduct(22));   // 4
console.log(maxProduct(124));  // 8
