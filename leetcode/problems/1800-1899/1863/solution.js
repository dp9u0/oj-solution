/*
 * @lc app=leetcode id=1863 lang=javascript
 *
 * [1863] Sum of All Subset XOR Totals
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  let or = 0;
  for (const num of nums) or |= num;
  return or << (nums.length - 1);
};
// @lc code=end

// TEST:
console.log(subsetXORSum([1,3])); // 6
console.log(subsetXORSum([5,1,6])); // 28
console.log(subsetXORSum([3,4,5,6,7,8])); // 480
