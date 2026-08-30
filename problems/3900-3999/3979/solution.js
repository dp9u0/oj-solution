/*
 * @lc app=leetcode id=3979 lang=javascript
 *
 * [3979] Maximum Value of an Ordered Pair
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxValidPairSum = function(nums, k) {
  const n = nums.length;
  let prefixMax = nums[0];
  let ans = -Infinity;
  for (let j = k; j < n; j++) {
    if (nums[j - k] > prefixMax) prefixMax = nums[j - k];
    const cand = prefixMax + nums[j];
    if (cand > ans) ans = cand;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxValidPairSum([1, 3, 5, 2, 8], 2) === 13);
console.log(maxValidPairSum([5, 1, 9], 1) === 14);
console.log(maxValidPairSum([1, 2], 1) === 3);
console.log(maxValidPairSum([9, 1], 1) === 10);
console.log(maxValidPairSum([3, 8, 1, 2], 3) === 5);
