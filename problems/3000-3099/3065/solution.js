/*
 * @lc app=leetcode id=3065 lang=javascript
 *
 * [3065] Minimum Operations to Exceed Threshold Value I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    return nums.filter(x => x < k).length;
};
// @lc code=end

// TEST:
console.log(minOperations([2,11,10,1,3], 10)); // 3
console.log(minOperations([1,1,2,4,9], 1)); // 0
console.log(minOperations([1,1,2,4,9], 9)); // 4
