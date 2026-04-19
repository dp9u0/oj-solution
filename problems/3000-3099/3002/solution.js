/*
 * @lc app=leetcode id=3002 lang=javascript
 *
 * [3002] Maximum Size of a Set After Removals
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumSetSize = function(nums1, nums2) {
  const n = nums1.length;
  const s1 = new Set(nums1), s2 = new Set(nums2);
  const only1 = [...s1].filter(x => !s2.has(x)).length;
  const only2 = [...s2].filter(x => !s1.has(x)).length;
  const both = [...s1].filter(x => s2.has(x)).length;
  const keep1 = Math.min(only1, n / 2);
  const keep2 = Math.min(only2, n / 2);
  const rem1 = Math.max(n / 2 - only1, 0);
  const rem2 = Math.max(n / 2 - only2, 0);
  return keep1 + keep2 + Math.min(both, rem1 + rem2);
};
// @lc code=end

// TEST:
console.log(maximumSetSize([1,2,1,2], [1,1,1,1])); // 2
console.log(maximumSetSize([1,2,3,4,5,6], [2,3,2,3,2,3])); // 5
console.log(maximumSetSize([1,1,2,2,3,3], [4,4,5,5,6,6])); // 6
console.log(maximumSetSize([1,2], [2,1])); // 2
console.log(maximumSetSize([1,1], [2,2])); // 2
