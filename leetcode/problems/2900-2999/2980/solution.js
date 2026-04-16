/*
 * @lc app=leetcode id=2980 lang=javascript
 *
 * [2980] Check if Bitwise OR Has Trailing Zeros
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
    let even = nums.filter(x => x % 2 === 0).length;
    return even >= 2;
};
// @lc code=end

// TEST:
console.log(hasTrailingZeros([1,2,3,4,5])); // true
console.log(hasTrailingZeros([2,4,8,16])); // true
console.log(hasTrailingZeros([1,3,5,7,9])); // false
