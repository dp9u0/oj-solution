/*
 * @lc app=leetcode id=775 lang=javascript
 *
 * [775] Global and Local Inversions
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i] - i) > 1) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(isIdealPermutation([1, 0, 2])); // true
console.log(isIdealPermutation([1, 2, 0])); // false
console.log(isIdealPermutation([0, 1, 2])); // true
console.log(isIdealPermutation([2, 0, 1])); // false
console.log(isIdealPermutation([0])); // true
