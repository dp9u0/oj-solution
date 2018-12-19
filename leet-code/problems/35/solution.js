/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let maxIndex = nums.length - 1;
  if (target <= nums[0]) {
    return 0;
  }

  if (target > nums[maxIndex]) {
    return maxIndex + 1;
  }
  return bs(nums, 0, maxIndex, target, maxIndex);
};

var bs = function (nums, left, right, target, maxIndex) {
  let first = ~~((left + right) / 2);
  let second = first + 1;
  console.log(`${left} ${right}`);
  console.log(`${first} ${second}`);
  if (target > nums[first] && target <= nums[second]) {
    return second;
  }
  if (target <= nums[first]) {
    return first === 0 ? 0 : bs(nums, left, first, target, maxIndex);
  }
  if (target > nums[second]) {
    return second === maxIndex ? maxIndex + 1 : bs(nums, second, right, target, maxIndex);
  }
}

// console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1], 2));
// console.log(searchInsert([1,3,5,6],0));