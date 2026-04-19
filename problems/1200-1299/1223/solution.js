/*
 * @lc app=leetcode id=1223 lang=javascript
 *
 * [1223] Dice Roll Simulation
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
    const MOD = 1e9 + 7;
    let dp = Array.from({ length: 6 }, () => new Int32Array(16));
    for (let j = 0; j < 6; j++) dp[j][1] = 1;

    for (let i = 2; i <= n; i++) {
        const newDp = Array.from({ length: 6 }, () => new Int32Array(16));
        let total = 0;
        for (let j = 0; j < 6; j++)
            for (let k = 1; k <= rollMax[j]; k++)
                total = (total + dp[j][k]) % MOD;

        for (let j = 0; j < 6; j++) {
            let sumJ = 0;
            for (let k = 1; k <= rollMax[j]; k++) sumJ = (sumJ + dp[j][k]) % MOD;
            newDp[j][1] = (total - sumJ + MOD) % MOD;
            for (let k = 2; k <= rollMax[j]; k++) newDp[j][k] = dp[j][k - 1];
        }
        dp = newDp;
    }

    let ans = 0;
    for (let j = 0; j < 6; j++)
        for (let k = 1; k <= rollMax[j]; k++)
            ans = (ans + dp[j][k]) % MOD;
    return ans;
};
// @lc code=end

// TEST:
console.log(dieSimulator(2, [1, 1, 2, 2, 2, 3]));   // 34
console.log(dieSimulator(2, [1, 1, 1, 1, 1, 1]));   // 30
console.log(dieSimulator(3, [1, 1, 1, 2, 2, 3]));   // 181
console.log(dieSimulator(1, [1, 1, 1, 1, 1, 1]));   // 6
console.log(dieSimulator(4, [2, 1, 1, 3, 1, 2]));   // some value
