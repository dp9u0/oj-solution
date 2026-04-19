/*
 * @lc app=leetcode id=2970 lang=javascript
 *
 * [2970] Count the Number of Incremovable Subarrays I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
  const n = nums.length;
  const isStrictlyIncreasing = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= arr[i - 1]) return false;
    }
    return true;
  };
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const remaining = nums.slice(0, i).concat(nums.slice(j + 1));
      if (isStrictlyIncreasing(remaining)) count++;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(incremovableSubarrayCount([1,2,3,4])); // 10
console.log(incremovableSubarrayCount([6,5,7,8])); // 7
console.log(incremovableSubarrayCount([8,7,6,6])); // 3
