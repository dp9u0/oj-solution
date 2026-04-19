/*
 * @lc app=leetcode id=2090 lang=javascript
 *
 * [2090] K Radius Subarray Averages
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  if (2 * k + 1 > n) return result;

  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  const windowSize = 2 * k + 1;
  for (let i = k; i < n - k; i++) {
    const sum = prefix[i + k + 1] - prefix[i - k];
    result[i] = Math.trunc(sum / windowSize);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getAverages([7,4,3,9,1,8,5,2,6], 3))); // [-1,-1,-1,5,4,4,-1,-1,-1]
console.log(JSON.stringify(getAverages([100000], 0))); // [100000]
console.log(JSON.stringify(getAverages([8], 100000))); // [-1]
