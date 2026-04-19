/*
 * @lc app=leetcode id=2089 lang=javascript
 *
 * [2089] Find Target Indices After Sorting Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let less = 0, equal = 0;
    for (let num of nums) {
      if (num < target) less++;
      else if (num === target) equal++;
    }
    let result = [];
    for (let i = 0; i < equal; i++) {
      result.push(less + i);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(targetIndices([1,2,5,2,3], 2)));
console.log(JSON.stringify(targetIndices([1,2,5,2,3], 3)));
console.log(JSON.stringify(targetIndices([1,2,5,2,3], 5)));
