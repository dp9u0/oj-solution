/*
 * @lc app=leetcode id=3634 lang=javascript
 *
 * [3634] Minimum Removals to Balance Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let minRemove = n - 1;

  for (let i = 0; i < n; i++) {
    const limit = nums[i] * k;
    // Binary search: find rightmost j where nums[j] <= limit
    let lo = i, hi = n - 1, j = i;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] <= limit) {
        j = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    const kept = j - i + 1;
    minRemove = Math.min(minRemove, n - kept);
  }

  return minRemove;
};
// @lc code=end

// TEST:
console.log(minRemoval([2, 1, 5], 2)); // 1
console.log(minRemoval([1, 6, 2, 9], 3)); // 2
console.log(minRemoval([4, 6], 2)); // 0
console.log(minRemoval([1], 1)); // 0
console.log(minRemoval([1, 2, 3, 4, 5], 1)); // 4
