/*
 * @lc app=leetcode id=1389 lang=javascript
 *
 * [1389] Create Target Array in the Given Order
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  const target = [];
  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(createTargetArray([0,1,2,3,4], [0,1,2,2,1])));  // [0,4,1,3,2]
console.log(JSON.stringify(createTargetArray([1,2,3,4,0], [0,1,2,3,0])));  // [0,1,2,3,4]
console.log(JSON.stringify(createTargetArray([1], [0])));                  // [1]
