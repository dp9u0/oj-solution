/*
 * @lc app=leetcode id=1887 lang=javascript
 *
 * [1887] Reduction Operations to Make the Array Elements Equal
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  let level = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) level++;
    result += level;
  }
  return result;
};
// @lc code=end

// TEST:
console.log(reductionOperations([5, 1, 3])); // 3
console.log(reductionOperations([1, 1, 1])); // 0
console.log(reductionOperations([1, 1, 2, 2, 3])); // 4
console.log(reductionOperations([3])); // 0
