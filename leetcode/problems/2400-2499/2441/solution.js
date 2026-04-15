/*
 * @lc app=leetcode id=2441 lang=javascript
 *
 * [2441] Largest Positive Integer That Exists With Its Negative
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  const set = new Set(nums);
  let res = -1;
  for (const num of nums) {
    if (num > 0 && set.has(-num)) {
      res = Math.max(res, num);
    }
  }
  return res;
};
// @lc code=end

// TEST:
console.log(findMaxK([-1,2,-3,3])); // 3
console.log(findMaxK([-1,10,6,7,-7,1])); // 7
console.log(findMaxK([-10,8,6,7,-2,-3])); // -1
