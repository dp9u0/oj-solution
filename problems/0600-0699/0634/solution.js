/*
 * @lc app=leetcode.cn id=634 lang=javascript
 *
 * [634] 寻找数组的错位排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findDerangement = function(n) {
    const MOD = 1000000007;
    if (n === 1) return 0;
    let a = 1; // D(2)
    let b = 0; // D(1)
    for (let i = 3; i <= n; i++) {
        [a, b] = [(i - 1) * (a + b) % MOD, a];
    }
    return a;
};
// @lc code=end

// TEST:
console.log(findDerangement(1)); // 0
console.log(findDerangement(2)); // 1
console.log(findDerangement(3)); // 2
console.log(findDerangement(4)); // 9
console.log(findDerangement(5)); // 44
console.log(findDerangement(1000000) % 1000000007 >= 0); // true (runs fast, modded)
