/*
 * @lc app=leetcode id=2321 lang=javascript
 *
 * [2321] Maximum Score Of Spliced Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumsSplicedArray = function(nums1, nums2) {
  const n = nums1.length;
  const sum1 = nums1.reduce((a, b) => a + b, 0);
  const sum2 = nums2.reduce((a, b) => a + b, 0);
  const maxSubarray = (arr) => {
    let cur = 0, best = 0;
    for (const v of arr) {
      cur = Math.max(0, cur + v);
      best = Math.max(best, cur);
    }
    return best;
  };
  const diff = nums1.map((v, i) => nums2[i] - v);
  const maxGain1 = maxSubarray(diff);
  const maxGain2 = maxSubarray(diff.map(d => -d));
  return Math.max(sum1 + maxGain1, sum2 + maxGain2);
};
// @lc code=end

// TEST:
console.log(maximumsSplicedArray([60,60,60], [10,90,10])); // 210
console.log(maximumsSplicedArray([20,40,20,70,30], [50,20,50,40,20])); // 220
console.log(maximumsSplicedArray([7,11,13], [1,1,1])); // 31
