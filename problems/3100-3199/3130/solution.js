/*
 * @lc app=leetcode id=3130 lang=javascript
 *
 * [3130] Find All Possible Stable Binary Arrays II
 */

// @lc code=start
/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function(zero, one, limit) {
    const MOD = 1e9 + 7;
    const colPref = Array.from({length: one + 1}, () => new Array(zero + 1).fill(0));
    const rowPref = Array.from({length: zero + 1}, () => new Array(one + 1).fill(0));

    for (let i = 0; i <= zero; i++) {
        for (let j = 0; j <= one; j++) {
            let dp0, dp1;
            if (i === 0 && j === 0) { dp0 = 0; dp1 = 0; }
            else if (j === 0) { dp0 = i <= limit ? 1 : 0; dp1 = 0; }
            else if (i === 0) { dp0 = 0; dp1 = j <= limit ? 1 : 0; }
            else {
                dp0 = (colPref[j][i - 1] - (i > limit ? colPref[j][i - limit - 1] : 0) + MOD) % MOD;
                dp1 = (rowPref[i][j - 1] - (j > limit ? rowPref[i][j - limit - 1] : 0) + MOD) % MOD;
            }
            rowPref[i][j] = ((j > 0 ? rowPref[i][j - 1] : 0) + dp0) % MOD;
            colPref[j][i] = ((i > 0 ? colPref[j][i - 1] : 0) + dp1) % MOD;
        }
    }

    const ans0 = (rowPref[zero][one] - (one > 0 ? rowPref[zero][one - 1] : 0) + MOD) % MOD;
    const ans1 = (colPref[one][zero] - (zero > 0 ? colPref[one][zero - 1] : 0) + MOD) % MOD;
    return (ans0 + ans1) % MOD;
};
// @lc code=end

// TEST:
console.log(numberOfStableArrays(1, 1, 2)); // 2
console.log(numberOfStableArrays(1, 2, 1)); // 1
console.log(numberOfStableArrays(3, 3, 2)); // 14
console.log(numberOfStableArrays(1, 1, 1)); // 2
console.log(numberOfStableArrays(3, 3, 3)); // 20
