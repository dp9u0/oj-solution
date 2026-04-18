/*
 * @lc app=leetcode id=2366 lang=javascript
 *
 * [2366] Minimum Replacements to Sort the Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
  const n = nums.length;
  let result = 0;
  let maxVal = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] <= maxVal) {
      maxVal = nums[i];
    } else {
      const k = Math.ceil(nums[i] / maxVal);
      result += k - 1;
      maxVal = Math.floor(nums[i] / k);
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(minimumReplacement([3,9,3]) === 2);
console.log(minimumReplacement([1,2,3,4,5]) === 0);
console.log(minimumReplacement([5,4,3,2,1]) === 10);
console.log(minimumReplacement([1]) === 0);
console.log(minimumReplacement([12,9,7,6]) === 6);
console.log(minimumReplacement([2,10,20]) === 0);
