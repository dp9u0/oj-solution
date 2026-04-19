/*
 * @lc app=leetcode id=3724 lang=javascript
 *
 * [3724] Minimum Operations to Transform Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {
  const n = nums1.length;
  let baseCost = 0;
  for (let j = 0; j < n; j++) baseCost += Math.abs(nums1[j] - nums2[j]);

  const target = nums2[n];
  let minExtra = Infinity;

  for (let i = 0; i < n; i++) {
    const a = nums1[i], b = nums2[i], c = target;
    const median = [a, b, c].sort((x, y) => x - y)[1];
    const extra = Math.abs(a - median) + Math.abs(b - median) + Math.abs(c - median) - Math.abs(a - b);
    minExtra = Math.min(minExtra, extra);
  }

  return 1 + baseCost + minExtra;
};
// @lc code=end

// TEST:
console.log(minOperations([2,8], [1,7,3])); // 4
console.log(minOperations([1,3,6], [2,4,5,3])); // 4
console.log(minOperations([2], [3,4])); // 3
console.log(minOperations([5,5], [5,5,5])); // 1
console.log(minOperations([1,2], [3,4,5])); // 6
