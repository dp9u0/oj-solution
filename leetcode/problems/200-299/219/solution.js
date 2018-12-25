/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = {},
    n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] in map && i - map[nums[i]] <= k) {
      return true;
    }
    map[nums[i]] = i;
  }
  return false;
};