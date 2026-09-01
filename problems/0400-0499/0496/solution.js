/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let stack = [],
    map = {}
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      stack.pop();
    }
    if (stack.length) {
      map[nums2[i]] = stack[stack.length - 1];
    } else {
      map[nums2[i]] = -1;
    }
    stack.push(nums2[i]);
  }
  let result = [];
  for (let j = 0; j < nums1.length; j++) {
    result[j] = map[nums1[j]];
  }
  return result;
};