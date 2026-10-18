/*
 * @lc app=leetcode.cn id=面试题 16.01 lang=javascript
 *
 * [面试题 16.01] 交换数字
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function(numbers) {
    // XOR 交换，无临时变量
    numbers[0] ^= numbers[1];
    numbers[1] ^= numbers[0];
    numbers[0] ^= numbers[1];
    return numbers;
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(eq(swapNumbers([1, 2]), [2, 1]));
console.log(eq(swapNumbers([0, 2147483647]), [2147483647, 0]));
console.log(eq(swapNumbers([5, 5]), [5, 5])); // 相等值 XOR 仍正确
console.log(eq(swapNumbers([-3, 7]), [7, -3]));
