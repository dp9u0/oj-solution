/*
 * @lc app=leetcode id=3151 lang=javascript
 *
 * [3151] Special Array I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i - 1] % 2) return false;
  }
  return true;
};
// @lc code=end

// TEST:
console.log(isArraySpecial([1]));        // true
console.log(isArraySpecial([2,1,4]));    // true
console.log(isArraySpecial([4,3,1,6]));  // false
