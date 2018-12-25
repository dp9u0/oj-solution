/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let total = (1 + nums.length) * nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    total -= nums[i];
  }
  return total;
};