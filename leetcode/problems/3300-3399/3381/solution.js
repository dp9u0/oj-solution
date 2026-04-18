/*
 * @lc app=leetcode id=3381 lang=javascript
 *
 * [3381] Maximum Subarray Sum With Length Divisible by K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

    const minPrefix = new Array(k).fill(Infinity);
    let result = -Infinity;

    for (let i = 0; i <= n; i++) {
        const r = i % k;
        if (i >= k) {
            result = Math.max(result, prefix[i] - minPrefix[r]);
        }
        minPrefix[r] = Math.min(minPrefix[r], prefix[i]);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maxSubarraySum([1, 2], 1)); // 3
console.log(maxSubarraySum([-1, -2, -3, -4, -5], 4)); // -10
console.log(maxSubarraySum([-5, 1, 2, -3, 4], 2)); // 4
console.log(maxSubarraySum([1, 2, 3, 4, 5], 5)); // 15
console.log(maxSubarraySum([-1], 1)); // -1
