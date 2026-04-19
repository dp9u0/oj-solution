/*
 * @lc app=leetcode id=3046 lang=javascript
 *
 * [3046] Split the Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
  const count = {};
  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
    if (count[n] > 2) return false;
  }
  return true;
};
// @lc code=end

// TEST:
console.log(isPossibleToSplit([1,1,2,2,3,4])); // true
console.log(isPossibleToSplit([1,1,1,1]));     // false
console.log(isPossibleToSplit([1,2,3,4]));     // true
