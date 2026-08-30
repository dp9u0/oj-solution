/*
 * @lc app=leetcode id=3904 lang=javascript
 *
 * [3904] Smallest Stable Index II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
  const n = nums.length;
  // suffMin[i] = min(nums[i..n-1])
  const suffMin = new Array(n);
  suffMin[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffMin[i] = Math.min(nums[i], suffMin[i + 1]);
  }

  let prefMax = -Infinity;
  for (let i = 0; i < n; i++) {
    prefMax = Math.max(prefMax, nums[i]);
    if (prefMax - suffMin[i] <= k) return i;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(firstStableIndex([5, 0, 1, 4], 3)); // 3
console.log(firstStableIndex([3, 2, 1], 1)); // -1
console.log(firstStableIndex([0], 0)); // 0
console.log(firstStableIndex([3, 2, 1], 2)); // 0
console.log(firstStableIndex([1, 2, 3, 4, 5], 0)); // 0
console.log(firstStableIndex([5, 4, 3, 2, 1], 4)); // 0
console.log(firstStableIndex([10, 1, 100, 2, 200], 8)); // 4