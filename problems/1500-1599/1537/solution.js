/*
 * @lc app=leetcode id=1537 lang=javascript
 *
 * [1537] Get the Maximum Score
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function(nums1, nums2) {
  const MOD = 1e9 + 7;
  let i = 0;
  let j = 0;
  let best1 = 0;
  let best2 = 0;
  let sum1 = 0;
  let sum2 = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      sum1 += nums1[i++];
    } else if (nums1[i] > nums2[j]) {
      sum2 += nums2[j++];
    } else {
      const best = Math.max(best1 + sum1, best2 + sum2) + nums1[i];
      best1 = best;
      best2 = best;
      sum1 = 0;
      sum2 = 0;
      i++;
      j++;
    }
  }
  while (i < nums1.length) sum1 += nums1[i++];
  while (j < nums2.length) sum2 += nums2[j++];
  return Math.max(best1 + sum1, best2 + sum2) % MOD;
};
// @lc code=end

// TEST:
console.log(maxSum([2, 4, 5, 8, 10], [4, 6, 8, 9]) === 30);
console.log(maxSum([1, 3, 5, 7, 9], [3, 5, 100]) === 109);
console.log(maxSum([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]) === 40);
console.log(maxSum([1], [1]) === 1);
console.log(maxSum([1, 2, 3], [3]) === 6);
console.log(maxSum([5], [1, 2, 3, 4]) === 10);
console.log(maxSum([1, 4, 5, 8, 10], [2, 4, 6, 8, 9, 10]) === 39);
