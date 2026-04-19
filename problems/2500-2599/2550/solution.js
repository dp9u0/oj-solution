/*
 * @lc app=leetcode id=2550 lang=javascript
 *
 * [2550] Count Collisions of Monkeys on a Polygon
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monkeyMove = function(n) {
    const MOD = 1e9 + 7;

    const powMod = (base, exp, mod) => {
        let result = 1n;
        let b = BigInt(base);
        const m = BigInt(mod);
        while (exp > 0) {
            if (exp & 1n) result = result * b % m;
            b = b * b % m;
            exp >>= 1n;
        }
        return Number(result);
    };

    const total = powMod(2, BigInt(n), MOD);
    return (total - 2 + MOD) % MOD;
};
// @lc code=end

// TEST:
console.log(monkeyMove(3)); // 6
console.log(monkeyMove(4)); // 14
console.log(monkeyMove(5)); // 30
console.log(monkeyMove(10)); // 1022
console.log(monkeyMove(1000000000)); // 140624999
