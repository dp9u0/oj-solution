/*
 * @lc app=leetcode id=1929 lang=javascript
 *
 * [1929] Concatenation of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  return nums.concat(nums);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getConcatenation([1,2,1])));       // [1,2,1,1,2,1]
console.log(JSON.stringify(getConcatenation([1,3,2,1])));     // [1,3,2,1,1,3,2,1]
console.log(JSON.stringify(getConcatenation([1])));           // [1,1]
