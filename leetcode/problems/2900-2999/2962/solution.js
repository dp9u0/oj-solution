/*
 * @lc app=leetcode id=2962 lang=javascript
 *
 * [2962] Count Subarrays Where Max Element Appears at Least K Times
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  const maxVal = Math.max(...nums);
  const positions = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxVal) positions.push(i);
  }
  let count = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxVal) count++;
    if (count >= k) {
      result += positions[count - k] + 1;
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(countSubarrays([1, 3, 2, 3, 3], 2)); // 6
console.log(countSubarrays([1, 4, 2, 1], 3)); // 0
console.log(countSubarrays([1, 1, 1, 1], 2)); // 6
