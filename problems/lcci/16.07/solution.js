/*
 * @lc app=leetcode.cn id=面试题 16.07 lang=javascript
 *
 * [面试题 16.07] 最大数值
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function(a, b) {
    // d = a-b 在双精度下精确；缩半后符号位提取不受 int32 回绕影响
    const d = a - b;
    const k = (Math.floor(d / 2) >> 31) & 1;
    return a - k * d;
};
// @lc code=end

// TEST:
console.log(maximum(1, 2) === 2);
console.log(maximum(2147483647, -2147483648) === 2147483647); // 跨极值
console.log(maximum(-2147483648, 2147483647) === 2147483647);
console.log(maximum(5, 5) === 5);
console.log(maximum(-3, -7) === -3);
console.log(maximum(-7, -3) === -3);
