/*
 * @lc app=leetcode id=1155 lang=javascript
 *
 * [1155] Number of Dice Rolls With Target Sum
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    const MOD = 1e9 + 7;
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let d = 0; d < n; d++) {
        const next = new Array(target + 1).fill(0);
        for (let s = 0; s <= target; s++) {
            if (dp[s] === 0) continue;
            for (let f = 1; f <= k && s + f <= target; f++) {
                next[s + f] = (next[s + f] + dp[s]) % MOD;
            }
        }
        dp = next;
    }

    return dp[target];
};
// @lc code=end

// TEST:
console.log(numRollsToTarget(1, 6, 3)); // 1
console.log(numRollsToTarget(2, 6, 7)); // 6
console.log(numRollsToTarget(30, 30, 500)); // 222616187
