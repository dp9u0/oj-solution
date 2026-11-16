/*
 * @lc app=leetcode.cn id=3667 lang=javascript
 *
 * [3667] 按绝对值排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByAbsoluteValue = function(nums) {
    return nums.sort((a, b) => Math.abs(a) - Math.abs(b));
};
// @lc code=end

// TEST:
console.log(sortByAbsoluteValue([3, -1, -4, 1, 5])); // [-1, 1, 3, -4, 5]
console.log(sortByAbsoluteValue([-100, 100])); // [-100, 100]
console.log(sortByAbsoluteValue([5])); // [5]
console.log(sortByAbsoluteValue([-1, -2, -3])); // [-1, -2, -3]
console.log(sortByAbsoluteValue([0, 1, -1])); // [0, 1, -1]
console.log(sortByAbsoluteValue([2, -2, 2])); // [2, -2, 2]
