/*
 * @lc app=leetcode id=1800 lang=javascript
 *
 * [1800] Maximum Ascending Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let maxSum = nums[0], curSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      curSum += nums[i];
    } else {
      curSum = nums[i];
    }
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};
// @lc code=end

// TEST:
console.log(maxAscendingSum([10,20,30,5,10,50]));       // 65
console.log(maxAscendingSum([10,20,30,40,50]));          // 150
console.log(maxAscendingSum([12,17,15,13,10,11,12]));    // 33
