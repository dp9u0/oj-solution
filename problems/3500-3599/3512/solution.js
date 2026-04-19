/*
 * @lc app=leetcode id=3512 lang=javascript
 *
 * [3512] Minimum Operations to Make Array Sum Divisible by K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const sum = nums.reduce((a, b) => a + b, 0);
    return sum % k;
};
// @lc code=end

// TEST:
console.log(minOperations([3, 9, 7], 5)); // 4
console.log(minOperations([4, 1, 3], 4)); // 0
console.log(minOperations([3, 2], 6)); // 5
console.log(minOperations([1], 1)); // 0
console.log(minOperations([5, 5], 3)); // 1
