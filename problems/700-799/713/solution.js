/*
 * @lc app=leetcode id=713 lang=javascript
 *
 * [713] Subarray Product Less Than K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;

    let product = 1;
    let left = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];
        while (product >= k) {
            product /= nums[left];
            left++;
        }
        count += right - left + 1;
    }

    return count;
};
// @lc code=end

// TEST:
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // 8
console.log(numSubarrayProductLessThanK([1, 2, 3], 0)); // 0
console.log(numSubarrayProductLessThanK([1, 1, 1], 2)); // 6
