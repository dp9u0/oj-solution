/*
 * @lc app=leetcode id=3181 lang=javascript
 *
 * [3181] Maximum Total Reward Using Operations II
 */

// @lc code=start
/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function(rewardValues) {
    const sorted = [...new Set(rewardValues)].sort((a, b) => a - b);
    let dp = 1n; // bit 0 set

    for (const v of sorted) {
        // only bits < v can be extended with v
        const mask = (1n << BigInt(v)) - 1n;
        const lower = dp & mask;
        dp = dp | (lower << BigInt(v));
    }

    // find highest bit set
    return dp.toString(2).length - 1;
};
// @lc code=end

// TEST:
console.log(maxTotalReward([1,1,3,3])); // 4
console.log(maxTotalReward([1,6,4,3,2])); // 11
console.log(maxTotalReward([1])); // 1
console.log(maxTotalReward([2,3,4,5])); // 9
console.log(maxTotalReward([1,2])); // 3
