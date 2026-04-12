/*
 * @lc app=leetcode id=698 lang=javascript
 *
 * [698] Partition to K Equal Sum Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % k !== 0) return false;
    const target = total / k;

    nums.sort((a, b) => b - a);
    if (nums[0] > target) return false;

    const n = nums.length;
    const dp = new Array(1 << n).fill(-1);
    dp[0] = 0;

    for (let mask = 0; mask < (1 << n); mask++) {
        if (dp[mask] === -1) continue;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) continue;
            if (dp[mask] + nums[i] > target) continue;
            const next = mask | (1 << i);
            dp[next] = (dp[mask] + nums[i]) % target;
            if (dp[next] === 0 && next === (1 << n) - 1) return true;
        }
    }

    return false;
};
// @lc code=end

// TEST:
console.log(canPartitionKSubsets([4,3,2,3,5,2,1], 4)); // true
console.log(canPartitionKSubsets([1,2,3,4], 3)); // false
console.log(canPartitionKSubsets([2,2,2,2,2,2], 3)); // true
