/*
 * @lc app=leetcode id=2930 lang=javascript
 *
 * [2930] Number of Strings Which Can Be Rearranged to Contain Substring
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var stringCount = function(n) {
    if (n < 4) return 0;
    const MOD = BigInt(1e9 + 7);
    const pow = (base, exp) => {
        let result = 1n, b = BigInt(base);
        while (exp > 0) {
            if (exp & 1) result = result * b % MOD;
            b = b * b % MOD;
            exp >>= 1;
        }
        return result;
    };
    const a = pow(26, n), b = pow(25, n), c = pow(24, n), d = pow(23, n);
    const N = BigInt(n);
    const nb = N * pow(25, n - 1) % MOD;
    const nc = N * pow(24, n - 1) % MOD;
    const nd = N * pow(23, n - 1) % MOD;
    const pos = (a + 3n * c + 2n * nc) % MOD;
    const neg = (3n * b + nb + d + nd) % MOD;
    return Number((pos - neg + MOD) % MOD);
};
// @lc code=end

// TEST:
console.log(stringCount(4)); // 12
console.log(stringCount(10)); // 83943898
console.log(stringCount(1)); // 0
console.log(stringCount(5)); // 1460
