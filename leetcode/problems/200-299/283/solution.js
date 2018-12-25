/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums == null || nums.length == 0) return;
  let p = 0;
  for (let num of nums) {
    if (num !== 0) nums[p++] = num;
  }
  while (p < nums.length) {
    nums[p++] = 0;
  }
};