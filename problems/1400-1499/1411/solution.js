/*
 * @lc app=leetcode id=1411 lang=javascript
 *
 * [1411] Number of Ways to Paint N × 3 Grid
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    const MOD = 1e9 + 7;
    let aba = 6, abc = 6;

    for (let i = 2; i <= n; i++) {
        const newAba = (3 * aba + 2 * abc) % MOD;
        const newAbc = (2 * aba + 2 * abc) % MOD;
        aba = newAba;
        abc = newAbc;
    }

    return (aba + abc) % MOD;
};
// @lc code=end

// TEST:
console.log(numOfWays(1)); // 12
console.log(numOfWays(2)); // 54
console.log(numOfWays(3)); // 246
console.log(numOfWays(5000)); // 30228214
console.log(numOfWays(10)); // 10107954
