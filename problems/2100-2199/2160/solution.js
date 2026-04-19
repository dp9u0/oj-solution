/*
 * @lc app=leetcode id=2160 lang=javascript
 *
 * [2160] Minimum Sum of Four Digit Number After Splitting Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const d = String(num).split('').map(Number).sort((a, b) => a - b);
    return (d[0] * 10 + d[2]) + (d[1] * 10 + d[3]);
};
// @lc code=end

// TEST:
console.log(minimumSum(2932)); // 52
console.log(minimumSum(4009)); // 13
console.log(minimumSum(1000)); // 1
console.log(minimumSum(9999)); // 198
console.log(minimumSum(1234)); // 37
