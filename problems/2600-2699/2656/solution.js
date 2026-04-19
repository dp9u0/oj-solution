/*
 * @lc app=leetcode id=2656 lang=javascript
 *
 * [2656] Maximum Sum With Exactly K Elements 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    const max = Math.max(...nums);
    return k * max + k * (k - 1) / 2;
};
// @lc code=end

// TEST:
console.log(maximizeSum([1,2,3,4,5], 3));
console.log(maximizeSum([5,5,5], 2));
console.log(maximizeSum([1], 1));
