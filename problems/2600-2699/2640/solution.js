/*
 * @lc app=leetcode id=2640 lang=javascript
 *
 * [2640] Find the Score of All Prefixes of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
  const n = nums.length;
  const result = new Array(n);
  let maxVal = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    maxVal = Math.max(maxVal, nums[i]);
    sum += nums[i] + maxVal;
    result[i] = sum;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findPrefixScore([2,3,7,5,10]))); // [4,10,24,36,56]
console.log(JSON.stringify(findPrefixScore([1,1,2,4,8,16]))); // [2,4,8,16,32,64]
