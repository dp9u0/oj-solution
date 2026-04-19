/*
 * @lc app=leetcode id=3193 lang=javascript
 *
 * [3193] Count the Number of Inversions
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} requirements
 * @return {number}
 */
var numberOfPermutations = function(n, requirements) {
    const MOD = 1e9 + 7;
    const reqMap = new Map();
    let maxCnt = 0;
    for (const [end, cnt] of requirements) {
        reqMap.set(end, cnt);
        if (cnt > maxCnt) maxCnt = cnt;
    }

    let dp = new Array(maxCnt + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        const prefix = new Array(maxCnt + 2).fill(0);
        for (let j = 0; j <= maxCnt; j++) prefix[j + 1] = (prefix[j] + dp[j]) % MOD;

        const next = new Array(maxCnt + 1).fill(0);
        for (let j = 0; j <= maxCnt; j++) {
            const lo = Math.max(0, j - (i - 1));
            next[j] = (prefix[j + 1] - prefix[lo] + MOD) % MOD;
        }

        if (reqMap.has(i - 1)) {
            const cnt = reqMap.get(i - 1);
            for (let j = 0; j <= maxCnt; j++) if (j !== cnt) next[j] = 0;
        }

        dp = next;
    }

    return dp[reqMap.get(n - 1)] || 0;
};
// @lc code=end

// TEST:
console.log(numberOfPermutations(3, [[2,2],[0,0]])); // 2
console.log(numberOfPermutations(3, [[2,2],[1,1],[0,0]])); // 1
console.log(numberOfPermutations(2, [[0,0],[1,0]])); // 1
console.log(numberOfPermutations(3, [[2,0]])); // 1
console.log(numberOfPermutations(4, [[3,2],[0,0]])); // 5
