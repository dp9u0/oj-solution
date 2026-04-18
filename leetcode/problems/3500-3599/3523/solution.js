/*
 * @lc app=leetcode id=3523 lang=javascript
 *
 * [3523] Make Array Non-decreasing
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPossibleSize = function(nums) {
  let count = 0;
  let max = 0;
  for (const x of nums) {
    if (x >= max) {
      count++;
      max = x;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(maximumPossibleSize([4, 2, 5, 3, 5])); // 3
console.log(maximumPossibleSize([1, 2, 3])); // 3
console.log(maximumPossibleSize([5, 4, 3, 2, 1])); // 1
console.log(maximumPossibleSize([1])); // 1
console.log(maximumPossibleSize([3, 3, 3])); // 3
console.log(maximumPossibleSize([2, 1, 2, 1, 2])); // 3
console.log(maximumPossibleSize([1, 3, 2, 4, 3, 5])); // 4
