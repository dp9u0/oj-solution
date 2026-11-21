/*
 * @lc app=leetcode.cn id=2450 lang=javascript
 *
 * [2450] 应用操作后不同二进制字符串的数量
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countDistinctStrings = function(s, k) {
    const MOD = 1000000007n;
    let e = BigInt(s.length - k + 1), base = 2n, res = 1n;
    while (e > 0n) {
        if (e & 1n) res = (res * base) % MOD;
        base = (base * base) % MOD;
        e >>= 1n;
    }
    return Number(res);
};
// @lc code=end

// TEST:
console.log(countDistinctStrings("1001", 3)); // 4
console.log(countDistinctStrings("10110", 5)); // 2
console.log(countDistinctStrings("0", 1)); // 2
console.log(countDistinctStrings("1", 1)); // 2
console.log(countDistinctStrings("11", 1)); // 4 (2^2)
