/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    count = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i]) {
      count++;
    } else {
      max = Math.max(count, max);
      count = 0;
    }
  }
  return max;
};