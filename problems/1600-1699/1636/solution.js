/*
 * @lc app=leetcode id=1636 lang=javascript
 *
 * [1636] Sort Array by Increasing Frequency
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
  return nums.sort((a, b) => freq.get(a) - freq.get(b) || b - a);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(frequencySort([1, 1, 2, 2, 2, 3]))); // [3,1,1,2,2,2]
console.log(JSON.stringify(frequencySort([2, 3, 1, 3, 2]))); // [1,3,3,2,2]
console.log(JSON.stringify(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]))); // [5,-1,4,4,-6,-6,1,1,1]
