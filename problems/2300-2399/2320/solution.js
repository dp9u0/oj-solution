/*
 * @lc app=leetcode id=2320 lang=javascript
 *
 * [2320] Count Number of Ways to Place Houses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function(n) {
    const MOD = 1e9 + 7;
    let a = 2, b = 3;
    if (n === 1) return 4;
    for (let i = 3; i <= n; i++) {
        const c = (a + b) % MOD;
        a = b;
        b = c;
    }
    return Number(BigInt(b) * BigInt(b) % BigInt(MOD));
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(countHousePlacements, [1], 4);
test(countHousePlacements, [2], 9);
test(countHousePlacements, [3], 25);
test(countHousePlacements, [4], 64);
test(countHousePlacements, [5], 169);
