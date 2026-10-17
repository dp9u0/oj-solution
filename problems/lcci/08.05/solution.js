/*
 * @lc app=leetcode.cn id=面试题 08.05 lang=javascript
 *
 * [面试题 08.05] 递归乘法
 */

// @lc code=start
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function(A, B) {
    // 折半递归：min 折半降低深度，奇数补一次 max
    if (A > B) [A, B] = [B, A];
    const half = A >> 1;
    if (half === 0) return A === 0 ? 0 : B; // A 为 0 或 1
    const sub = multiply(half, B);
    // 加法翻倍而非 <<1：乘积超 2^31 时移位会按 int32 溢出
    return sub + sub + (A & 1 ? B : 0);
};
// @lc code=end

// TEST:
console.log(multiply(1, 10) === 10);
console.log(multiply(3, 4) === 12);
console.log(multiply(7, 8) === 56);
console.log(multiply(5, 5) === 25);
console.log(multiply(123, 456) === 56088);
console.log(multiply(99999, 99999) === 9999800001);
