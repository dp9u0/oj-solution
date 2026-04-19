/*
 * @lc app=leetcode id=2444 lang=javascript
 *
 * [2444] Count Subarrays With Fixed Bounds
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
  let result = 0;
  let leftBound = -1;
  let lastMin = -1;
  let lastMax = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      leftBound = i;
      lastMin = -1;
      lastMax = -1;
    } else {
      if (nums[i] === minK) lastMin = i;
      if (nums[i] === maxK) lastMax = i;
      if (lastMin >= 0 && lastMax >= 0) {
        result += Math.min(lastMin, lastMax) - leftBound;
      }
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(countSubarrays([1,3,5,2,7,5], 1, 5)); // 2
console.log(countSubarrays([1,1,1,1], 1, 1)); // 10
