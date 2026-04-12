/*
 * @lc app=leetcode id=2958 lang=javascript
 *
 * [2958] Length of Longest Subarray With at Most K Frequency
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const freq = new Map();
    let left = 0, maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);

        while (freq.get(nums[right]) > k) {
            freq.set(nums[left], freq.get(nums[left]) - 1);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
// @lc code=end

// TEST:
console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2));
// Expected: 6

console.log(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1));
// Expected: 2

console.log(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4));
// Expected: 4
