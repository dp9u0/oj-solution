/*
 * @lc app=leetcode id=3759 lang=javascript
 *
 * [3759] Count Elements With at Least K Greater Values
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countElements = function(nums, k) {
    if (k === 0) return nums.length;
    nums.sort((a, b) => b - a);
    const threshold = nums[k - 1];
    return nums.filter(x => x < threshold).length;
};
// @lc code=end

// TEST:
console.log(countElements([3,1,2], 1)); // 2
console.log(countElements([5,5,5], 2)); // 0
console.log(countElements([1,2,3,4,5], 2)); // 3
console.log(countElements([1], 0)); // 1
console.log(countElements([2,2,1,1], 2)); // 2
