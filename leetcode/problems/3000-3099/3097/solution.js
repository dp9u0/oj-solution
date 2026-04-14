/*
 * @lc app=leetcode id=3097 lang=javascript
 *
 * [3097] Shortest Subarray With OR at Least K II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
  const n = nums.length;
  if (k === 0) return 1;

  const bitCount = new Array(30).fill(0);
  let result = n + 1;
  let left = 0;
  let windowOr = 0;

  const getOr = () => {
    let val = 0;
    for (let b = 0; b < 30; b++) {
      if (bitCount[b] > 0) val |= (1 << b);
    }
    return val;
  };

  for (let right = 0; right < n; right++) {
    for (let b = 0; b < 30; b++) {
      if (nums[right] & (1 << b)) bitCount[b]++;
    }
    while (left <= right && getOr() >= k) {
      result = Math.min(result, right - left + 1);
      for (let b = 0; b < 30; b++) {
        if (nums[left] & (1 << b)) bitCount[b]--;
      }
      left++;
    }
  }

  return result <= n ? result : -1;
};
// @lc code=end

// TEST:
console.log(minimumSubarrayLength([1,2,3], 2)); // 1
console.log(minimumSubarrayLength([2,1,8], 10)); // 3
console.log(minimumSubarrayLength([1,2], 0)); // 1
