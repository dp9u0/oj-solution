/*
 * @lc app=leetcode.cn id=面试题 05.06 lang=javascript
 *
 * [面试题 05.06] 整数转换
 */

// @lc code=start
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function(A, B) {
    // 异或后为 1 的位即需要翻转的位，统计其个数
    let diff = A ^ B;
    let count = 0;
    // 负数时 diff 为有符号数，须用无符号右移才能遍历全部 32 位（含符号位）
    while (diff !== 0) {
        count += diff & 1;
        diff >>>= 1;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(convertInteger(29, 15) === 2); // 11101 vs 01111
console.log(convertInteger(1, 2) === 2); // 01 vs 10
console.log(convertInteger(0, 0) === 0);
console.log(convertInteger(-1, 0) === 32); // 符号位参与统计
console.log(convertInteger(-1, 2147483647) === 1); // 仅最高位不同
console.log(convertInteger(-2147483648, 2147483647) === 32);
console.log(convertInteger(826, 2446) === 6);
