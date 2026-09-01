/*
 * @lc app=leetcode id=878 lang=javascript
 *
 * [878] Nth Magical Number
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function(n, a, b) {
    const MOD = BigInt(1e9 + 7);
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    const lcmVal = Math.floor(a / gcd(a, b)) * b;
    const ba = BigInt(a), bb = BigInt(b), blcm = BigInt(lcmVal), bn = BigInt(n);
    let lo = 1n, hi = bn * BigInt(Math.max(a, b));
    while (lo < hi) {
        const mid = lo + (hi - lo) / 2n;
        const cnt = mid / ba + mid / bb - mid / blcm;
        if (cnt >= bn) hi = mid;
        else lo = mid + 1n;
    }
    return Number(lo % MOD);
};
// @lc code=end

// TEST:
console.log(nthMagicalNumber(1, 2, 3)); // 2
console.log(nthMagicalNumber(4, 2, 3)); // 6
