/*
 * @lc app=leetcode id=1413 lang=javascript
 *
 * [1413] Minimum Value to Get Positive Step by Step Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let sum = 0, minPrefix = 0;
    for (const x of nums) { sum += x; minPrefix = Math.min(minPrefix, sum); }
    return Math.max(1, 1 - minPrefix);
};
// @lc code=end

// TEST:
console.log(minStartValue([-3,2,-3,4,2])); // 5
console.log(minStartValue([1,2])); // 1
console.log(minStartValue([1,-2,-3])); // 5
console.log(minStartValue([-1])); // 2
console.log(minStartValue([1])); // 1
