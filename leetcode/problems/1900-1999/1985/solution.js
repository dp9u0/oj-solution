/*
 * @lc app=leetcode id=1985 lang=javascript
 *
 * [1985] Find the Kth Largest Integer in the Array
 */

// @lc code=start
/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
  nums.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a < b ? -1 : a > b ? 1 : 0;
  });
  return nums[nums.length - k];
};
// @lc code=end

// TEST:
console.log(kthLargestNumber(['3','6','7','10'], 4)); // '3'
console.log(kthLargestNumber(['2','21','12','1'], 3)); // '2'
console.log(kthLargestNumber(['0','0'], 2)); // '0'
