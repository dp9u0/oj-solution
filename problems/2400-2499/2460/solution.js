/*
 * @lc app=leetcode id=2460 lang=javascript
 *
 * [2460] Apply Operations to an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) nums[j++] = nums[i];
  }
  while (j < n) nums[j++] = 0;
  return nums;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(applyOperations([1,2,2,1,1,0]))); // [1,4,2,0,0,0]
console.log(JSON.stringify(applyOperations([0,1]))); // [1,0]
console.log(JSON.stringify(applyOperations([1,1,1,1]))); // [2,2,0,0]
console.log(JSON.stringify(applyOperations([0,0,0]))); // [0,0,0]
console.log(JSON.stringify(applyOperations([2,2,0,4]))); // [4,4,0,0]
