/*
 * @lc app=leetcode id=1621 lang=javascript
 *
 * [1621] Number of Sets of K Non-Overlapping Line Segments
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function(n, k) {
    const MOD = 1e9 + 7;
    const a = n + k - 1, b = 2 * k;
    if (b > a) return 0;

    const fac = new Array(a + 1);
    fac[0] = 1;
    for (let i = 1; i <= a; i++) fac[i] = Number(BigInt(fac[i - 1]) * BigInt(i) % BigInt(MOD));

    const modPow = (base, exp, mod) => {
        let result = 1n, b = BigInt(base), m = BigInt(mod);
        while (exp > 0) {
            if (exp & 1) result = result * b % m;
            b = b * b % m;
            exp >>= 1;
        }
        return Number(result);
    };

    const inv = (x) => modPow(x, MOD - 2, MOD);
    return Number(BigInt(fac[a]) * BigInt(inv(fac[b])) % BigInt(MOD) * BigInt(inv(fac[a - b])) % BigInt(MOD));
};
// @lc code=end

// TEST:
console.log(numberOfSets(4, 2)); // 5
console.log(numberOfSets(3, 1)); // 3
console.log(numberOfSets(30, 7)); // 796297179
console.log(numberOfSets(2, 1)); // 1
console.log(numberOfSets(5, 3)); // 7
console.log(numberOfSets(1000, 999)); // 1
