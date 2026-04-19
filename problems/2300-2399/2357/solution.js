/*
 * @lc app=leetcode id=2357 lang=javascript
 *
 * [2357] Make Array Zero by Subtracting Equal Amounts
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  const set = new Set();
  for (const num of nums) {
    if (num > 0) set.add(num);
  }
  return set.size;
};
// @lc code=end

// TEST:
console.log(minimumOperations([1,5,0,3,5])); // 3
console.log(minimumOperations([0])); // 0
console.log(minimumOperations([1,1,1])); // 1
