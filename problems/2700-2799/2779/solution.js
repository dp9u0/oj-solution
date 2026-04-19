/*
 * @lc app=leetcode id=2779 lang=javascript
 *
 * [2779] Maximum Beauty of an Array After Applying Operation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let result = 0;

    for (let right = 0; right < nums.length; right++) {
        while (nums[right] - nums[left] > 2 * k) {
            left++;
        }
        result = Math.max(result, right - left + 1);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maximumBeauty([4,6,1,2], 2)); // 3
console.log(maximumBeauty([1,1,1,1], 10)); // 4
console.log(maximumBeauty([5,57,46], 15)); // 2
