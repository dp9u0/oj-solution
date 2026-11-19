/*
 * @lc app=leetcode.cn id=660 lang=javascript
 *
 * [660] 移除 9
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var newInteger = function(n) {
    // n-th number without digit 9 == n in base 9, digits read as decimal
    let res = 0, pow = 1;
    while (n > 0) {
        res += (n % 9) * pow;
        pow *= 10;
        n = Math.floor(n / 9);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(newInteger(1)); // 1
console.log(newInteger(9)); // 10
console.log(newInteger(10)); // 11
console.log(newInteger(18)); // 20
console.log(newInteger(80)); // 88
console.log(newInteger(81)); // 100
