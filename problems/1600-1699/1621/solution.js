/*
 * @lc app=leetcode.cn id=1621 lang=javascript
 *
 * [1621] 大小为 K 的不重叠线段的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function(n, k) {
    const MOD = 1e9 + 7;
    // 平移映射后的双射：方案数 = C(n + k - 1, 2k)
    return comb(n + k - 1, 2 * k, MOD);
};

// C(m, r) mod p，p 为质数，用费马小定理求逆元
function comb(m, r, p) {
    if (r < 0 || r > m) return 0;
    const P = BigInt(p);
    let num = 1n, den = 1n;
    for (let i = 0; i < r; i++) {
        num = num * BigInt(m - i) % P;
        den = den * BigInt(i + 1) % P;
    }
    return Number(num * modPow(den, P - 2n, P) % P);
}

function modPow(base, exp, p) {
    // base*base 可能超出 Number.MAX_SAFE_INTEGER，用 BigInt 保证精度
    const P = BigInt(p);
    let result = 1n, b = BigInt(base) % P, e = BigInt(exp);
    while (e > 0n) {
        if (e & 1n) result = result * b % P;
        b = b * b % P;
        e >>= 1n;
    }
    return result;
}
// @lc code=end

// TEST:
console.log(numberOfSets(4, 2)); // 5
console.log(numberOfSets(3, 1)); // 3
console.log(numberOfSets(30, 7)); // 796297179
console.log(numberOfSets(5, 3)); // 7
console.log(numberOfSets(3, 2)); // 1
console.log(numberOfSets(2, 1)); // 1
console.log(numberOfSets(1000, 1)); // 499500 = C(1000, 2)
