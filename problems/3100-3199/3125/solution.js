/*
 * @lc app=leetcode.cn id=3125 lang=javascript
 *
 * [3125] 使得按位与结果为 0 的最大数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var maxNumber = function(n) {
    let h = 0;
    while (2 ** (h + 1) <= n) h++;
    return 2 ** h - 1;
};
// @lc code=end

// TEST:
console.log(maxNumber(7)); // 3
console.log(maxNumber(9)); // 7
console.log(maxNumber(17)); // 15
console.log(maxNumber(1)); // 0
console.log(maxNumber(1000000000000000)); // 562949953421311 (2^49-1)
