/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  for (let index = 0; index < nums.length; index++) {
    const n = nums[index];
    if (i < 2 || n > nums[i - 2]) {
      nums[i++] = n;
    }
  }
  return i;
};