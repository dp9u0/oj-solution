/*
 * @lc app=leetcode.cn id=面试题 16.05 lang=javascript
 *
 * [面试题 16.05] 阶乘尾数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // 尾零数 = n! 的因子 5 个数（2 远多于 5），25/125 自动多计
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(trailingZeroes(3) === 0);
console.log(trailingZeroes(5) === 1);
console.log(trailingZeroes(25) === 6); // 5,10,15,20,25(×2)
console.log(trailingZeroes(100) === 24);
console.log(trailingZeroes(0) === 0);
console.log(trailingZeroes(4) === 0);
