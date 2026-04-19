/*
 * @lc app=leetcode id=3255 lang=javascript
 *
 * [3255] Find the Power of K-Size Subarrays II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
  const n = nums.length;
  const len = new Int32Array(n);
  len[0] = 1;
  for (let i = 1; i < n; i++) {
    len[i] = (nums[i] === nums[i - 1] + 1) ? len[i - 1] + 1 : 1;
  }

  const res = new Int32Array(n - k + 1);
  for (let i = 0; i <= n - k; i++) {
    res[i] = len[i + k - 1] >= k ? nums[i + k - 1] : -1;
  }
  return [...res];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(resultsArray([1,2,3,4,3,2,5], 3))); // [3,4,-1,-1,-1]
console.log(JSON.stringify(resultsArray([2,2,2,2,2], 4))); // [-1,-1]
console.log(JSON.stringify(resultsArray([3,2,3,2,3,2], 2))); // [-1,3,-1,3,-1]
console.log(JSON.stringify(resultsArray([1], 1))); // [1]
console.log(JSON.stringify(resultsArray([1,2,3,4,5], 5))); // [5]
