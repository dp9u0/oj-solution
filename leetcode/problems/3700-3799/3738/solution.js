/*
 * @lc app=leetcode id=3738 lang=javascript
 *
 * [3738] Longest Non-Decreasing Subarray After Replacing at Most One Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  const n = nums.length;
  if (n <= 2) return n;

  const left = new Int32Array(n);
  const right = new Int32Array(n);

  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = nums[i] >= nums[i - 1] ? left[i - 1] + 1 : 1;
  }

  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = nums[i] <= nums[i + 1] ? right[i + 1] + 1 : 1;
  }

  let ans = Math.max(...left);
  for (let i = 0; i < n; i++) {
    if (i > 0 && i < n - 1 && nums[i - 1] <= nums[i + 1]) {
      ans = Math.max(ans, left[i - 1] + 1 + right[i + 1]);
    }
    // Replace at boundary: extend left or right segment by 1
    if (i < n - 1) ans = Math.max(ans, right[i + 1] + 1);
    if (i > 0) ans = Math.max(ans, left[i - 1] + 1);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(longestSubarray([1,2,3,1,2])); // 4
console.log(longestSubarray([2,2,2,2,2])); // 5
console.log(longestSubarray([5,4,3,2,1])); // 2
console.log(longestSubarray([1])); // 1
console.log(longestSubarray([1,3,2,4])); // 4
