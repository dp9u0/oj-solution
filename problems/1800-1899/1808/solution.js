/*
 * @lc app=leetcode id=1808 lang=javascript
 *
 * [1808] Maximize Number of Nice Divisors
 */

// @lc code=start
/**
 * @param {number} primeFactors
 * @return {number}
 */
var maxNiceDivisors = function(primeFactors) {
    const MOD = BigInt(1e9 + 7);

    const powMod = (base, exp) => {
        base = BigInt(base) % MOD;
        let result = 1n;
        while (exp > 0n) {
            if (exp & 1n) result = result * base % MOD;
            base = base * base % MOD;
            exp >>= 1n;
        }
        return Number(result);
    };

    const n = BigInt(primeFactors);
    if (n <= 3n) return Number(n);

    const q = n / 3n;
    const r = n % 3n;

    if (r === 0n) {
        return powMod(3, q);
    } else if (r === 1n) {
        return powMod(3, q - 1n) * 4 % Number(MOD);
    } else {
        return powMod(3, q) * 2 % Number(MOD);
    }
};
// @lc code=end

// TEST:
console.log(maxNiceDivisors(5)); // 6
console.log(maxNiceDivisors(8)); // 18
console.log(maxNiceDivisors(1)); // 1
console.log(maxNiceDivisors(2)); // 2
console.log(maxNiceDivisors(3)); // 3
console.log(maxNiceDivisors(4)); // 4
console.log(maxNiceDivisors(10)); // 36
