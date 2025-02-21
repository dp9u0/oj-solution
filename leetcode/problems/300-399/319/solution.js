/*
 * @lc app=leetcode id=319 lang=javascript
 *
 * [319] Bulb Switcher
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    // 返回n的平方根向下取整
    // 因为只有完全平方数的因数个数为奇数，最终会保持点亮状态
    return Math.floor(Math.sqrt(n));
};
// @lc code=end
// TEST:
console.log(bulbSwitch(0)); // 0
console.log(bulbSwitch(1)); // 1
console.log(bulbSwitch(3)); // 1
console.log(bulbSwitch(4)); // 2
console.log(bulbSwitch(9)); // 3
console.log(bulbSwitch(10)); // 3



