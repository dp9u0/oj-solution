/*
 * @lc app=leetcode id=3828 lang=javascript
 *
 * [3828] Final Element After Subarray Deletions
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var finalElement = function(nums) {
    return Math.max(nums[0], nums[nums.length - 1]);
};
// @lc code=end

// TEST:
console.log(finalElement([3, 1, 2, 4])); // 4
console.log(finalElement([1, 2])); // 2
console.log(finalElement([5])); // 5
console.log(finalElement([7, 3, 9, 2])); // 7
