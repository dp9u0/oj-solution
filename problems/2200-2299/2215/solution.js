/*
 * @lc app=leetcode id=2215 lang=javascript
 *
 * [2215] Find the Difference of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const list1 = [...set1].filter(x => !set2.has(x));
  const list2 = [...set2].filter(x => !set1.has(x));
  return [list1, list2];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findDifference([1,2,3], [2,4,6])));          // [[1,3],[4,6]]
console.log(JSON.stringify(findDifference([1,2,3,3], [1,1,2,2])));     // [[3],[]]
