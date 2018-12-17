/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let
    length = nums.length;
  let start = 0,
    end = length - 1,
    mid = Math.floor((start + end) / 2);
  while ((start < end) && !(nums[mid] === target && (mid === 0 || target > nums[mid - 1]))) {
    if (nums[mid] < target || (mid === 0 || target > nums[mid - 1])) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  let begin = -1,
    stop = -1;
  if (nums[mid] === target) {
    begin = stop = mid;
    while (nums[stop++] === target) {
    }
    return [begin, stop];
  }
  return [-1,-1]
};
let nums, target;

nums = [5, 7, 7, 8, 8, 10], target = 8
console.log(searchRange(nums, target));

nums = [5, 7, 7, 8, 8, 10], target = 6
console.log(searchRange(nums, target));