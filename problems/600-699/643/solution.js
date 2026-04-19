/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = -Infinity,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] - (nums[i - k] || 0);
    if (i >= k - 1) max = Math.max(max, sum);
  }
  return max / k;
};