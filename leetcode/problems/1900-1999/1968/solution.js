/*
 * @lc app=leetcode id=1968 lang=javascript
 *
 * [1968] Array With Elements Not Equal to Average of Neighbors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    if (lo <= hi) result.push(nums[lo++]);
    if (lo <= hi) result.push(nums[hi--]);
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(rearrangeArray([1, 2, 3, 4, 5])));
console.log(JSON.stringify(rearrangeArray([6, 2, 0, 9, 7])));
