/*
 * @lc app=leetcode id=1909 lang=javascript
 *
 * [1909] Remove One Element to Make the Array Strictly Increasing
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let removed = false;
    let prev = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > prev) {
            prev = nums[i];
        } else if (!removed) {
            removed = true;
            if (i === 1 || nums[i] > nums[i - 2]) {
                prev = nums[i];
            }
            // else keep prev = nums[i-1]
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(canBeIncreasing([1,2,10,5,7])); // true
console.log(canBeIncreasing([2,3,1,2])); // false
console.log(canBeIncreasing([1,1,1])); // false
