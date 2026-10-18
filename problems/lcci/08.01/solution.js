/*
 * @lc app=leetcode.cn id=面试题 08.01 lang=javascript
 *
 * [面试题 08.01] 三步问题
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
    // f(n) = f(n-1) + f(n-2) + f(n-3)，滚动三变量取模
    const MOD = 1000000007;
    let a = 1; // f(1)
    let b = 2; // f(2)
    let c = 4; // f(3)
    if (n === 1) return a;
    if (n === 2) return b;
    for (let i = 4; i <= n; i++) {
        const next = (a + b + c) % MOD;
        a = b;
        b = c;
        c = next;
    }
    return c;
};
// @lc code=end

// TEST:
console.log(waysToStep(3) === 4);
console.log(waysToStep(5) === 13);
console.log(waysToStep(1) === 1);
console.log(waysToStep(2) === 2);
console.log(waysToStep(4) === 7);
console.log(waysToStep(1000000) >= 0); // 大 n 仅验证不超时且已取模
