/*
 * @lc app=leetcode id=3405 lang=javascript
 *
 * [3405] Count the Number of Arrays with K Matching Adjacent Elements
 */

// @lc code=start
const MOD = 1000000007n;

/**
 * @param {bigint} base
 * @param {bigint} exp
 * @return {bigint}
 */
function powMod(base, exp) {
    let result = 1n;
    base %= MOD;
    while (exp > 0n) {
        if (exp & 1n) result = result * base % MOD;
        base = base * base % MOD;
        exp >>= 1n;
    }
    return result;
}

/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var countGoodArrays = function(n, m, k) {
    // C(n-1, k) = ∏(n-1-i) / k!，分母用费马小定理求逆元
    let comb = 1n;
    for (let i = 0; i < k; i++) comb = comb * BigInt(n - 1 - i) % MOD;
    let factK = 1n;
    for (let i = 2; i <= k; i++) factK = factK * BigInt(i) % MOD;
    comb = comb * powMod(factK, MOD - 2n) % MOD;

    return Number(BigInt(m) % MOD * comb % MOD * powMod(BigInt(m - 1), BigInt(n - 1 - k)) % MOD);
};
// @lc code=end

// TEST:
console.log(countGoodArrays(3, 2, 1)); // 4
console.log(countGoodArrays(4, 2, 2)); // 6
console.log(countGoodArrays(5, 2, 0)); // 2
console.log(countGoodArrays(1, 5, 0)); // 5
console.log(countGoodArrays(5, 1, 4)); // 1
console.log(countGoodArrays(5, 1, 2)); // 0
console.log(countGoodArrays(100000, 100000, 50000)); // 509990004 (大数据量性能/模运算正确性，已与暴力对拍验证公式)
