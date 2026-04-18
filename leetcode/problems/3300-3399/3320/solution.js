/*
 * @lc app=leetcode id=3320 lang=javascript
 *
 * [3320] Count The Number of Winning Sequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countWinningSequences = function(s) {
    const MOD = 1e9 + 7;
    const n = s.length;
    const off = n; // offset for score difference
    const sz = 2 * n + 1;

    // F=0, W=1, E=2; score[bob][alice]: 1=Bob wins, -1=Alice wins, 0=tie
    const score = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]];
    const ch = { F: 0, W: 1, E: 2 };

    // dp[c][j] = ways to have score diff j with last creature c
    let dp = Array.from({ length: 3 }, () => new Array(sz).fill(0));
    for (let c = 0; c < 3; c++) {
        dp[c][off + score[c][ch[s[0]]]] = 1;
    }

    for (let i = 1; i < n; i++) {
        const ndp = Array.from({ length: 3 }, () => new Array(sz).fill(0));
        const a = ch[s[i]];
        for (let c = 0; c < 3; c++) {
            const delta = score[c][a];
            for (let pc = 0; pc < 3; pc++) {
                if (pc === c) continue;
                for (let j = 0; j < sz; j++) {
                    if (dp[pc][j] === 0) continue;
                    const nj = j + delta;
                    if (nj >= 0 && nj < sz) {
                        ndp[c][nj] = (ndp[c][nj] + dp[pc][j]) % MOD;
                    }
                }
            }
        }
        dp = ndp;
    }

    let ans = 0;
    for (let c = 0; c < 3; c++) {
        for (let j = off + 1; j < sz; j++) {
            ans = (ans + dp[c][j]) % MOD;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(countWinningSequences, ['FFF'], 3);
test(countWinningSequences, ['FWEFW'], 18);
test(countWinningSequences, ['F'], 1);
test(countWinningSequences, ['FW'], 2);
test(countWinningSequences, ['WEF'], 4);
