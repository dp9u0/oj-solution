/*
 * @lc app=leetcode id=2605 lang=javascript
 *
 * [2605] Form Smallest Number From Two Digit Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
  const set1 = new Set(nums1);
  let commonMin = 10;
  for (const d of nums2) {
    if (set1.has(d)) commonMin = Math.min(commonMin, d);
  }
  if (commonMin <= 9) return commonMin;

  const a = Math.min(...nums1);
  const b = Math.min(...nums2);
  return Math.min(a, b) * 10 + Math.max(a, b);
};
// @lc code=end

// TEST:
console.log(minNumber([4, 1, 3], [5, 7])); // 15
console.log(minNumber([3, 5, 2, 6], [3, 1, 7])); // 3
console.log(minNumber([6, 4], [7, 5])); // 45
