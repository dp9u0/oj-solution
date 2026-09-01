/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return bs(nums, target, 0, nums.length - 1);
};

function bs(nums, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = ~~((start + end) / 2);
  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] > target) {
    return bs(nums, target, start, mid - 1);
  } else {
    return bs(nums, target, start + 1, end);
  }
}