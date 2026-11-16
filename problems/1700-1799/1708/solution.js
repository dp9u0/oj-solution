/*
 * @lc app=leetcode.cn id=1708 lang=javascript
 *
 * [1708] 长度为 K 的最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var largestSubarray = function(nums, k) {
    // distinct values: lexicographic order of equal-length windows
    // is decided by the first element
    let best = 0;
    for (let i = 1; i + k <= nums.length; i++) {
        if (nums[i] > nums[best]) best = i;
    }
    return nums.slice(best, best + k);
};
// @lc code=end

// TEST:
console.log(largestSubarray([1, 4, 5, 2, 3], 3)); // [5,2,3]
console.log(largestSubarray([1, 4, 5, 2, 3], 4)); // [4,5,2,3]
console.log(largestSubarray([1, 4, 5, 2, 3], 1)); // [5]
console.log(largestSubarray([9, 1, 2], 2)); // [9,1]
console.log(largestSubarray([5], 1)); // [5]
