/*
 * @lc app=leetcode id=3452 lang=javascript
 *
 * [3452] Sum of Good Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let good = true;
    if (i - k >= 0 && nums[i] <= nums[i - k]) good = false;
    if (i + k < nums.length && nums[i] <= nums[i + k]) good = false;
    if (good) sum += nums[i];
  }
  return sum;
};
// @lc code=end

// TEST:
console.log(sumOfGoodNumbers([1,3,2,1,5,4], 2)); // 12
console.log(sumOfGoodNumbers([2,1], 1)); // 2
console.log(sumOfGoodNumbers([5,5,5], 1)); // 0
console.log(sumOfGoodNumbers([10,1,1], 1)); // 10
console.log(sumOfGoodNumbers([1,2,3,4,5], 2)); // 9
