/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[start] < nums[end]) {
      break;
    }
    let mid = ~~((start + end) / 2);
    if (nums[mid] >= nums[start]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[start];
};


// TEST: 
console.log(findMin([0, 1, 2, 4, 5, 6, 7]));
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([2, 3, 4, 5, 6, 1]));