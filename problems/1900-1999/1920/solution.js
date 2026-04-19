/*
 * @lc app=leetcode id=1920 lang=javascript
 *
 * [1920] Build Array from Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  return nums.map(n => nums[n]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(buildArray([0, 2, 1, 5, 3, 4]))); // [0,1,2,4,5,3]
console.log(JSON.stringify(buildArray([5, 0, 1, 2, 3, 4]))); // [4,5,0,1,2,3]
