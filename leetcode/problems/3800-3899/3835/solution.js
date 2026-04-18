/*
 * @lc app=leetcode id=3835 lang=javascript
 *
 * [3835] Count Subarrays With Cost Less Than or Equal to K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  const n = nums.length;
  const maxDq = [], minDq = [];
  let count = 0, left = 0, maxHead = 0, minHead = 0;

  for (let right = 0; right < n; right++) {
    while (maxDq.length > maxHead && nums[maxDq[maxDq.length - 1]] <= nums[right]) maxDq.pop();
    maxDq.push(right);
    while (minDq.length > minHead && nums[minDq[minDq.length - 1]] >= nums[right]) minDq.pop();
    minDq.push(right);

    while (left <= right) {
      while (maxHead < maxDq.length && maxDq[maxHead] < left) maxHead++;
      while (minHead < minDq.length && minDq[minHead] < left) minHead++;
      const cost = (nums[maxDq[maxHead]] - nums[minDq[minHead]]) * (right - left + 1);
      if (cost <= k) break;
      left++;
    }

    count += right - left + 1;
  }

  return count;
};
// @lc code=end

// TEST:
console.log(countSubarrays([1,3,2], 4)); // 5
console.log(countSubarrays([5,5,5,5], 0)); // 10
console.log(countSubarrays([1,2,3], 0)); // 3
console.log(countSubarrays([1], 0)); // 1
console.log(countSubarrays([1,2], 1)); // 2
