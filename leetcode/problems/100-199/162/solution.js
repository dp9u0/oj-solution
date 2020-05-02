/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let length = nums.length;
  if (length === 1) {
    return 0;
  }
  let left = 0;
  let right = length - 1;
  while (right - left > 1) {
    let mid = left + ~~((right - left) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return (left === length - 1 || nums[left] > nums[left + 1]) ? left : right;
};


// TEST:
console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 3, 4]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))