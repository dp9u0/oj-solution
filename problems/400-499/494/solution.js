/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const total = nums.reduce((a, b) => a + b, 0);
    const diff = total - target;
    if (diff < 0 || diff % 2 !== 0) return 0;

    const bag = diff / 2;
    const dp = new Array(bag + 1).fill(0);
    dp[0] = 1;

    for (const num of nums) {
        for (let j = bag; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }

    return dp[bag];
};
// @lc code=end

// TEST:
console.log(findTargetSumWays([1,1,1,1,1], 3)); // 5
console.log(findTargetSumWays([1], 1)); // 1
console.log(findTargetSumWays([0,0,0,0,1], 1)); // 16
