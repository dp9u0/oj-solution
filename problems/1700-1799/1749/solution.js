/*
 * @lc app=leetcode id=1749 lang=javascript
 *
 * [1749] Maximum Absolute Sum of Any Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let maxPrefix = 0, minPrefix = 0;
    let prefix = 0;
    let result = 0;

    for (const num of nums) {
        prefix += num;
        result = Math.max(result, Math.abs(prefix - minPrefix), Math.abs(prefix - maxPrefix));
        maxPrefix = Math.max(maxPrefix, prefix);
        minPrefix = Math.min(minPrefix, prefix);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maxAbsoluteSum([1, -3, 2, 3, -4])); // 5
console.log(maxAbsoluteSum([2, -5, 1, -4, 3, -2])); // 8
console.log(maxAbsoluteSum([-1])); // 1
console.log(maxAbsoluteSum([1, 2, 3])); // 6
