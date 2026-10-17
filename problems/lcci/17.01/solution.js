/*
 * @lc app=leetcode.cn id=面试题 17.01 lang=javascript
 *
 * [面试题 17.01] 不用加号的加法
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    // 异或 = 无进位和；与后左移 = 进位；迭代至进位为 0
    while (b !== 0) {
        const carry = (a & b) << 1;
        a ^= b;
        b = carry;
    }
    return a;
};
// @lc code=end

// TEST:
console.log(add(1, 1) === 2);
console.log(add(1, 2) === 3);
console.log(add(-1, 1) === 0);
console.log(add(-3, 5) === 2);
console.log(add(0, 0) === 0);
console.log(add(100, 200) === 300);
console.log(add(-7, -8) === -15);
