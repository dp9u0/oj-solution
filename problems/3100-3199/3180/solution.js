/*
 * @lc app=leetcode id=3180 lang=javascript
 *
 * [3180] Maximum Total Reward Using Operations I
 */

// @lc code=start
/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function(rewardValues) {
    const sorted = [...new Set(rewardValues)].sort((a, b) => a - b);
    const maxSum = sorted.reduce((a, b) => a + b, 0);
    const dp = new Uint8Array(maxSum + 1);
    dp[0] = 1;

    for (const v of sorted) {
        for (let s = v - 1; s >= 0; s--) {
            if (dp[s]) dp[s + v] = 1;
        }
    }

    for (let s = maxSum; s >= 0; s--) {
        if (dp[s]) return s;
    }
    return 0;
};
// @lc code=end

// TEST:
console.log(maxTotalReward([1,1,3,3])); // 4
console.log(maxTotalReward([1,6,4,3,2])); // 11
console.log(maxTotalReward([2,3,4])); // 7
