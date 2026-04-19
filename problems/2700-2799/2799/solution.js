/*
 * @lc app=leetcode id=2799 lang=javascript
 *
 * [2799] Count Complete Subarrays in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
  const totalDistinct = new Set(nums).size;
  const n = nums.length;
  let count = 0;
  const freq = new Map();
  let left = 0;
  for (let right = 0; right < n; right++) {
    freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);
    while (freq.size === totalDistinct) {
      count += n - right;
      freq.set(nums[left], freq.get(nums[left]) - 1);
      if (freq.get(nums[left]) === 0) {
        freq.delete(nums[left]);
      }
      left++;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(countCompleteSubarrays([1, 3, 1, 2, 2])); // 4
console.log(countCompleteSubarrays([5, 5, 5, 5])); // 10
console.log(countCompleteSubarrays([1, 2, 3])); // 1
