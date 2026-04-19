/*
 * @lc app=leetcode id=2826 lang=javascript
 *
 * [2826] Sorting Three Groups
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  // dp1: longest subsequence ending with group 1
  // dp12: longest subsequence with values in {1,2}, ending with 2
  // dp123: longest subsequence with values in {1,2,3}
  let dp1 = 0, dp12 = 0, dp123 = 0;
  for (const x of nums) {
    if (x === 1) {
      dp1++;
      dp12 = Math.max(dp12, dp1);
      dp123 = Math.max(dp123, dp12);
    } else if (x === 2) {
      dp12 = Math.max(dp12 + 1, dp1 + 1);
      dp123 = Math.max(dp123, dp12);
    } else {
      dp123 = Math.max(dp123 + 1, dp12 + 1, dp1 + 1);
    }
  }
  return nums.length - dp123;
};
// @lc code=end

// TEST:
console.log(minimumOperations([2,1,3,2,1])); // 3
console.log(minimumOperations([1,3,2,1,3,3])); // 2
console.log(minimumOperations([2,2,2,2,3,3])); // 0
console.log(minimumOperations([1])); // 0
console.log(minimumOperations([3,2,1])); // 2
console.log(minimumOperations([1,1,1,2,2,3,3,3])); // 0
