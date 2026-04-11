/*
 * @lc app=leetcode id=2789 lang=javascript
 *
 * [2789] Largest Element in an Array after Merge Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function(nums) {
    let sum = nums[nums.length - 1];
    let maxVal = sum;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] <= sum) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        maxVal = Math.max(maxVal, sum);
    }
    return maxVal;
};
// @lc code=end

// TEST:
console.log(maxArrayValue([2,3,7,9,3])); // 21
console.log(maxArrayValue([5,3,3])); // 11
