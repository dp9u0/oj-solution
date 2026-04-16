/*
 * @lc app=leetcode id=2770 lang=javascript
 *
 * [2770] Maximum Number of Jumps to Reach the Last Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function(nums, target) {
    const n = nums.length;
    const dp = new Array(n).fill(-Infinity);
    dp[0] = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (Math.abs(nums[i] - nums[j]) <= target && dp[j] !== -Infinity) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return dp[n - 1] === -Infinity ? -1 : dp[n - 1];
};
// @lc code=end

// TEST:
console.log(maximumJumps([1, 3, 6, 4, 1, 2], 2)); // 3
console.log(maximumJumps([1, 3, 6, 4, 1, 2], 3)); // 5
console.log(maximumJumps([1, 3, 6, 4, 1, 2], 0)); // -1
console.log(maximumJumps([1, 2], 1)); // 1
console.log(maximumJumps([1, 2], 0)); // -1
