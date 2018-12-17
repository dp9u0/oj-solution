/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let n = nums.length;
  let f = [];
  f[0] = nums[0];
  let max = f[0];
  for (let i = 1; i < n; i++) {
    f[i] = nums[i] + (f[i - 1] > 0 ? f[i - 1] : 0);
    max = Math.max(max, f[i]);
  }
  return max;
};


//TEST: 
let nums;

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));