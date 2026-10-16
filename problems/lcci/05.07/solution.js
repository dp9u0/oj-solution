/*
 * @lc app=leetcode.cn id=面试题 05.07 lang=javascript
 *
 * [面试题 05.07] 配对交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function(num) {
    // 0xaaaaaaaa(1010..)取奇数位右移、0x55555555(0101..)取偶数位左移，或合并
    return ((num & 0xaaaaaaaa) >>> 1) | ((num & 0x55555555) << 1);
};
// @lc code=end

// TEST:
console.log(exchangeBits(2) === 1); // 10 → 01
console.log(exchangeBits(3) === 3); // 11 → 11
console.log(exchangeBits(0) === 0);
console.log(exchangeBits(1) === 2);
console.log(exchangeBits(10) === 5); // 1010 → 0101
console.log(exchangeBits(4660) === 8504); // 0x1234 → 0x2138
console.log(exchangeBits((1 << 30) - 1) === (1 << 30) - 1); // 全 1 不变
