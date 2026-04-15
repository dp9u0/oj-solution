/*
 * @lc app=leetcode id=2610 lang=javascript
 *
 * [2610] Convert an Array Into a 2D Array With Conditions
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
  const count = {};
  const result = [];

  for (const num of nums) {
    const row = count[num] || 0;
    if (!result[row]) result[row] = [];
    result[row].push(num);
    count[num] = row + 1;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findMatrix([1,3,4,1,2,3,1]))); // [[1,3,4,2],[1,3],[1]]
console.log(JSON.stringify(findMatrix([1,2,3,4]))); // [[1,2,3,4]]
