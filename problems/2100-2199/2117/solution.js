/*
 * @lc app=leetcode id=2117 lang=javascript
 *
 * [2117] Abbreviating the Product of a Range
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {string}
 */
var abbreviateProduct = function(left, right) {
    let total2 = 0, total5 = 0;
    let suf = 1;
    const MOD = 100000;
    let logSum = 0;

    for (let i = left; i <= right; i++) {
        let x = i;
        while (x % 2 === 0) { total2++; x /= 2; }
        while (x % 5 === 0) { total5++; x /= 5; }
        suf = suf * x % MOD;
        logSum += Math.log10(i);
    }

    const C = Math.min(total2, total5);
    const logRem = logSum - C;

    const powMod = (b, e) => {
        let r = 1;
        while (e > 0) {
            if (e & 1) r = r * b % MOD;
            b = b * b % MOD; e >>= 1;
        }
        return r;
    };
    suf = suf * powMod(2, total2 - C) % MOD * powMod(5, total5 - C) % MOD;

    if (logRem < 12) {
        let prod = 1n;
        for (let i = left; i <= right; i++) prod *= BigInt(i);
        let tc = 0;
        while (prod % 10n === 0n) { prod /= 10n; tc++; }
        const s = prod.toString();
        if (s.length <= 10) return s + 'e' + tc;
        return s.slice(0, 5) + '...' + s.slice(-5) + 'e' + tc;
    }

    // Prefix: direct BigInt multiplication with normalization
    let pre = 1n;
    for (let i = left; i <= right; i++) {
        pre *= BigInt(i);
        while (pre >= 10n ** 20n) pre /= 10n;
    }
    while (pre % 10n === 0n) pre /= 10n;

    return pre.toString().slice(0, 5) + '...' + suf.toString().padStart(5, '0') + 'e' + C;
};
// @lc code=end

// TEST:
console.log(abbreviateProduct(1, 4));       // '24e0'
console.log(abbreviateProduct(2, 11));      // '399168e2'
console.log(abbreviateProduct(371, 375));   // '7219856259e3'
console.log(abbreviateProduct(1, 1));       // '1e0'
console.log(abbreviateProduct(10, 10));     // '1e1'
console.log(abbreviateProduct(999, 1001));  // '999999e3'
console.log(abbreviateProduct(1, 10000));   // large
console.log(abbreviateProduct(4838, 6186)); // the failing test case
