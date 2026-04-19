/*
 * @lc app=leetcode id=3774 lang=javascript
 *
 * [3774] Absolute Difference Between Maximum and Minimum K Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let sumSmall = 0, sumLarge = 0;
    for (let i = 0; i < k; i++) sumSmall += nums[i];
    for (let i = n - k; i < n; i++) sumLarge += nums[i];
    return Math.abs(sumLarge - sumSmall);
};
// @lc code=end

// TEST:
console.log(absDifference([5,2,2,4], 2));
console.log(absDifference([100], 1));
console.log(absDifference([1,2,3,4,5], 3));
