/*
 * @lc app=leetcode id=3095 lang=javascript
 *
 * [3095] Shortest Subarray With OR at Least K I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
  const n = nums.length;
  let ans = Infinity;
  for (let i = 0; i < n; i++) {
    let or = 0;
    for (let j = i; j < n; j++) {
      or |= nums[j];
      if (or >= k) {
        ans = Math.min(ans, j - i + 1);
        break;
      }
    }
  }
  return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minimumSubarrayLength([1,2,3], 2)); // 1
console.log(minimumSubarrayLength([2,1,8], 10)); // 3
console.log(minimumSubarrayLength([1,2], 0)); // 1
console.log(minimumSubarrayLength([1,2,3], 7)); // -1
console.log(minimumSubarrayLength([1], 1)); // 1
