/*
 * @lc app=leetcode id=2966 lang=javascript
 *
 * [2966] Divide Array Into Arrays With Max Difference
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i + 2] - nums[i] > k) return [];
    result.push([nums[i], nums[i + 1], nums[i + 2]]);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(divideArray([1,3,4,8,7,9,3,5,1], 2))); // [[1,1,3],[3,4,5],[7,8,9]]
console.log(JSON.stringify(divideArray([2,4,2,2,5,2], 2))); // []
