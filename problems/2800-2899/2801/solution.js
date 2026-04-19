/*
 * @lc app=leetcode id=2801 lang=javascript
 *
 * [2801] Count Stepping Numbers in Range
 */

// @lc code=start
/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var countSteppingNumbers = function(low, high) {
    const MOD = 1e9 + 7;

    const countUpTo = (s) => {
        const n = s.length;
        let dp = Array.from({length: 2}, () =>
            Array.from({length: 2}, () => new Array(10).fill(0)));
        dp[0][1][0] = 1;

        for (let i = 0; i < n; i++) {
            const ndp = Array.from({length: 2}, () =>
                Array.from({length: 2}, () => new Array(10).fill(0)));
            const digit = s.charCodeAt(i) - 48;

            for (let started = 0; started <= 1; started++) {
                for (let tight = 0; tight <= 1; tight++) {
                    for (let last = 0; last <= 9; last++) {
                        const cnt = dp[started][tight][last];
                        if (cnt === 0) continue;
                        const maxD = tight ? digit : 9;
                        for (let d = 0; d <= maxD; d++) {
                            const nTight = (tight && d === digit) ? 1 : 0;
                            if (!started && d === 0) {
                                ndp[0][nTight][0] = (ndp[0][nTight][0] + cnt) % MOD;
                            } else if (!started) {
                                ndp[1][nTight][d] = (ndp[1][nTight][d] + cnt) % MOD;
                            } else if (Math.abs(d - last) === 1) {
                                ndp[1][nTight][d] = (ndp[1][nTight][d] + cnt) % MOD;
                            }
                        }
                    }
                }
            }
            dp = ndp;
        }

        let result = 0;
        for (let tight = 0; tight <= 1; tight++) {
            for (let last = 0; last <= 9; last++) {
                result = (result + dp[1][tight][last]) % MOD;
            }
        }
        return result;
    };

    const isStepping = (s) => {
        for (let i = 1; i < s.length; i++) {
            if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1)) !== 1) return false;
        }
        return true;
    };

    let ans = (countUpTo(high) - countUpTo(low) + MOD) % MOD;
    if (isStepping(low)) ans = (ans + 1) % MOD;
    return ans;
};
// @lc code=end

// TEST:
console.log(countSteppingNumbers("1", "11")); // 10
console.log(countSteppingNumbers("90", "101")); // 2
console.log(countSteppingNumbers("1", "1")); // 1
console.log(countSteppingNumbers("10", "10")); // 1
console.log(countSteppingNumbers("11", "11")); // 0
console.log(countSteppingNumbers("1", "9")); // 9
