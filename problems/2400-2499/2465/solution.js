/*
 * @lc app=leetcode id=2465 lang=javascript
 *
 * [2465] Number of Distinct Averages
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
  nums.sort((a, b) => a - b);
  const seen = new Set();
  let l = 0, r = nums.length - 1;
  while (l < r) {
    seen.add(nums[l] + nums[r]);
    l++;
    r--;
  }
  return seen.size;
};
// @lc code=end

// TEST:
console.log(distinctAverages([4, 1, 4, 0, 3, 5])); // 2
console.log(distinctAverages([1, 100])); // 1
console.log(distinctAverages([9, 5, 7, 8, 6, 1])); // 2
