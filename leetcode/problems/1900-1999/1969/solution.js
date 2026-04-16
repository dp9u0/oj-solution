/*
 * @lc app=leetcode id=1969 lang=javascript
 *
 * [1969] Minimum Non-Zero Product of the Array Elements
 */

// @lc code=start
/**
 * @param {number} p
 * @return {number}
 */
var minNonZeroProduct = function(p) {
    const MOD = BigInt(1e9 + 7);
    let pow = (base, exp) => {
        base = BigInt(base) % MOD;
        let res = 1n;
        while (exp > 0n) {
            if (exp & 1n) res = res * base % MOD;
            base = base * base % MOD;
            exp >>= 1n;
        }
        return res;
    };
    let a = BigInt(1) << BigInt(p); // 2^p
    let cnt = (a >> 1n) - 1n; // 2^(p-1) - 1
    return Number(pow(a - 2n, cnt) * ((a - 1n) % MOD) % MOD);
};
// @lc code=end

// TEST:
console.log(minNonZeroProduct(1)); // 1
console.log(minNonZeroProduct(2)); // 6
console.log(minNonZeroProduct(3)); // 1512
