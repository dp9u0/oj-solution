/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let result = [];
  let map = {};
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = true;
  }
  for (let j = 0; j < nums2.length; j++) {
    if (map[nums2[j]]) {
      map[nums2[j]] = false;
      result.push(nums2[j]);
    }
  }
  return result;
};

/**
// TEST:
*/