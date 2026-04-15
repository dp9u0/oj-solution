/*
 * @lc app=leetcode id=3674 lang=javascript
 *
 * [3674] Minimum Operations to Equalize Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[0]) return 1;
    }
    return 0;
};
// @lc code=end

// TEST:
console.log(minOperations([1,2])); // 1
console.log(minOperations([5,5,5])); // 0
console.log(minOperations([3,3,6])); // 1
