/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = {};
  let result = [];
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = (map[nums1[i]] || 0) + 1
  }

  for (let j = 0; j < nums2.length; j++) {
    if (map[nums2[j]]) {
      map[nums2[j]]--;
      result.push(nums2[j]);
    }
  }
  return result;
};