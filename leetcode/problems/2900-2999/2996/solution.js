/*
 * @lc app=leetcode id=2996 lang=javascript
 *
 * [2996] Smallest Missing Integer Greater Than Sequential Prefix Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      sum += nums[i];
    } else {
      break;
    }
  }
  const set = new Set(nums);
  while (set.has(sum)) {
    sum++;
  }
  return sum;
};
// @lc code=end

// TEST:
console.log(missingInteger([1, 2, 3, 2, 5])); // 6
console.log(missingInteger([3, 4, 5, 1, 12, 14, 13])); // 15
console.log(missingInteger([5])); // 5
