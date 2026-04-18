/*
 * @lc app=leetcode id=3026 lang=javascript
 *
 * [3026] Maximum Good Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

    const minPrefix = new Map();
    let result = -Infinity;
    let found = false;

    for (let j = 0; j < n; j++) {
        for (const target of [nums[j] + k, nums[j] - k]) {
            if (minPrefix.has(target)) {
                result = Math.max(result, prefix[j + 1] - minPrefix.get(target));
                found = true;
            }
        }

        const key = nums[j];
        const val = prefix[j];
        if (!minPrefix.has(key) || val < minPrefix.get(key)) {
            minPrefix.set(key, val);
        }
    }

    return found ? result : 0;
};
// @lc code=end

// TEST:
console.log(maximumSubarraySum([1, 2, 3, 4, 5, 6], 1)); // 11
console.log(maximumSubarraySum([-1, 3, 2, 4, 5], 3)); // 11
console.log(maximumSubarraySum([-1, -2, -3, -4], 2)); // -6
console.log(maximumSubarraySum([1, 2], 5)); // 0
console.log(maximumSubarraySum([1, 3], 2)); // 4
