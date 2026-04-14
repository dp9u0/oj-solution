/*
 * @lc app=leetcode id=1877 lang=javascript
 *
 * [1877] Minimize Maximum Pair Sum in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  const n = nums.length;

  for (let i = 0; i < n / 2; i++) {
    result = Math.max(result, nums[i] + nums[n - 1 - i]);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(minPairSum([3,5,2,3])); // 7
console.log(minPairSum([3,5,4,2,4,6])); // 8
