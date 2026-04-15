/*
 * @lc app=leetcode id=2541 lang=javascript
 *
 * [2541] Minimum Operations to Make Array Equal II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums1, nums2, k) {
  const n = nums1.length;
  let posSum = 0;
  let total = 0;

  for (let i = 0; i < n; i++) {
    const diff = nums1[i] - nums2[i];
    if (k === 0) {
      if (diff !== 0) return -1;
    } else {
      if (diff % k !== 0) return -1;
      total += diff;
      if (diff > 0) posSum += diff;
    }
  }

  if (k !== 0 && total !== 0) return -1;
  return k === 0 ? 0 : posSum / k;
};
// @lc code=end

// TEST:
console.log(minOperations([4,3,1,4], [1,3,7,1], 3)); // 2
console.log(minOperations([3,8,5,2], [2,4,1,6], 1)); // -1
console.log(minOperations([1,2,3], [1,2,3], 0)); // 0
console.log(minOperations([1,2,3], [1,2,3], 5)); // 0
