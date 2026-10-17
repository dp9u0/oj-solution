/*
 * @lc app=leetcode.cn id=面试题 05.01 lang=javascript
 *
 * [面试题 05.01] 插入
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function(N, M, i, j) {
    // 清空 N 的 i..j 位再或上移位后的 M；j=31 时移位 32 会回绕，特判置 0
    const left = j >= 31 ? 0 : (~0 << (j + 1));
    const right = (1 << i) - 1;
    return (N & (left | right)) | (M << i);
};
// @lc code=end

// TEST:
console.log(insertBits(1024, 19, 2, 6) === 1100);
console.log(insertBits(0, 31, 0, 4) === 31);
console.log(insertBits(0, 0, 0, 0) === 0);
console.log(insertBits(-1, 0, 31, 31) === 2147483647); // 最高位清零
console.log(insertBits(0, 1, 31, 31) === -2147483648); // 符号位
console.log(insertBits(15, 0, 1, 2) === 9); // 1111 → 1001
