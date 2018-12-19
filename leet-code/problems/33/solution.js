/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let length = nums.length;
  let start = 0,
    end = length - 1;
  let last = nums[end];
  if (length === 0) {
    return -1;
  }
  if (length === 1) {
    return last === target ? 0 : -1;
  }
  if (last === target) {
    return end;
  }
  let rotatedAt = ~~((start + end + 1) / 2);
  while (!(nums[rotatedAt] < last && nums[rotatedAt - 1] > last) && rotatedAt !== 0 && start < end) {
    if (nums[rotatedAt] < last) {
      end = rotatedAt - 1;
    } else {
      start = rotatedAt;
    }
    rotatedAt = ~~((start + end + 1) / 2);
  }
  rotatedAt = start < end ? rotatedAt : 0;
  // DEBUG:
  // console.log(rotatedAt);

  if (target > last) {
    start = 0;
    end = (rotatedAt || length) - 1;
  } else {
    start = rotatedAt;
    end = length - 1;
  }
  // console.log(start);
  // console.log(end);
  let mid = ~~((start + end) / 2);
  while (start < end && nums[mid] !== target) {
    if (target > nums[mid]) {
      start = mid +1;
    } else {
      end = mid;
    }
    mid = ~~((start + end) / 2);
    // console.log(start);
    // console.log(end);
  }
  return nums[mid] === target ? mid : -1;
};

//TEST:
let nums, target;

nums = [4, 5, 6, 7, 0, 1, 2], target = 0
console.log('-------------------------------')
console.log(search(nums, target))
console.log('-------------------------------')
nums = [4, 5, 6, 7, 0, 1, 2], target = 3
console.log(search(nums, target))
console.log('-------------------------------')
nums = [1, 3], target = 1
console.log(search(nums, target))
console.log('-------------------------------')
nums = [2, 1], target = 1
console.log(search(nums, target))
console.log('-------------------------------')
nums = [1, 3], target = 2
console.log(search(nums, target))