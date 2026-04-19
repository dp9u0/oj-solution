/*
 * @lc app=leetcode id=2202 lang=javascript
 *
 * [2202] Maximize the Topmost Element After K Moves
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function(nums, k) {
  const n = nums.length;

  if (n === 1) return k % 2 === 0 ? nums[0] : -1;

  let result = -1;

  // Remove exactly k elements, top becomes nums[k]
  if (k < n) result = nums[k];

  // Remove k-1 elements, add back the max from removed ones
  if (k >= 2) {
    const end = Math.min(k - 2, n - 1);
    for (let i = 0; i <= end; i++) {
      if (nums[i] > result) result = nums[i];
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(maximumTop([5, 2, 2, 4, 0, 6], 4)); // 5
console.log(maximumTop([2], 1)); // -1
console.log(maximumTop([1, 2, 3], 0)); // 1
console.log(maximumTop([3, 2, 1], 2)); // 3
console.log(maximumTop([5], 2)); // 5
console.log(maximumTop([5], 3)); // -1
console.log(maximumTop([35, 43, 29, 27], 5)); // 43
