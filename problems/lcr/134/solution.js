/*
 * @lc app=leetcode.cn id=LCR 134 lang=javascript
 *
 * [LCR 134] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // 处理负数指数：x^(-n) = (1/x)^n
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    // n 可能是 -2^31, 上面 -n 依然能存 (2^31 超过 int 但 JS number 安全范围足够)
    let result = 1;
    while (n > 0) {
        if (n % 2 === 1) result *= x; // 当前位为 1
        x *= x;                        // 底数平方
        n = Math.floor(n / 2);
    }
    return result;
};
// @lc code=end

// TEST:
function assertClose(actual, expected) {
  const eps = 1e-5;
  console.log(Math.abs(actual - expected) < eps);
}

// 示例 1: x = 2, n = 10 -> 1024
assertClose(myPow(2, 10), 1024);

// 示例 2: x = 2.1, n = 3 -> 9.261
assertClose(myPow(2.1, 3), 9.261);

// 示例 3: x = 2, n = -2 -> 0.25
assertClose(myPow(2, -2), 0.25);

// n = 0 -> 1
assertClose(myPow(2, 0), 1);
assertClose(myPow(-2, 0), 1);

// x = 1 -> 恒为 1
assertClose(myPow(1, 100), 1);

// 小数底 + 负数次幂: x = 0.5, n = -3 -> 8
assertClose(myPow(0.5, -3), 8);

// 负底数: x = -2, n = 3 -> -8
assertClose(myPow(-2, 3), -8);

// 负底数偶次幂: x = -2, n = 4 -> 16
assertClose(myPow(-2, 4), 16);

// 极大指数: x = 1.00001, n = 123456 应仍收敛(约3.44) —— 用近似验证不 NaN
const big = myPow(1.00001, 123456);
console.log(!isNaN(big) && big > 0);

// 边界: x = -100, n = 1 -> -100; x=0.5, n=... 取 n=2147483647 判有限
console.log(Math.abs(myPow(-100, 1) + 100) < 1e-5);
console.log(isFinite(myPow(0.999, 2147483647)));
