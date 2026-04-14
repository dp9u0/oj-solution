/*
 * @lc app=leetcode id=1464 lang=javascript
 *
 * [1464] Maximum Product of Two Elements in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max1 = 0, max2 = 0;
  for (const n of nums) {
    if (n > max1) { max2 = max1; max1 = n; }
    else if (n > max2) max2 = n;
  }
  return (max1 - 1) * (max2 - 1);
};
// @lc code=end

// TEST:
console.log(maxProduct([3, 4, 5, 2])); // 12
console.log(maxProduct([1, 5, 4, 5])); // 16
console.log(maxProduct([3, 7])); // 12
