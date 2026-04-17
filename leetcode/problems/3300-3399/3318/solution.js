/*
 * @lc app=leetcode id=3318 lang=javascript
 *
 * [3318] Find X-Sum of All K-Long Subarrays I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
  const n = nums.length;
  const ans = [];

  for (let i = 0; i <= n - k; i++) {
    const freq = new Map();
    for (let j = i; j < i + k; j++) {
      freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
    }

    // Sort by frequency desc, then value desc
    const entries = [...freq.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]);

    let sum = 0;
    const take = Math.min(x, entries.length);
    for (let t = 0; t < take; t++) {
      sum += entries[t][0] * entries[t][1];
    }
    ans.push(sum);
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(findXSum([1,1,2,2,3,4,2,3], 6, 2)); // [6,10,12]
console.log(findXSum([3,8,7,8,7,5], 2, 2)); // [11,15,15,15,12]
console.log(findXSum([1], 1, 1)); // [1]
console.log(findXSum([1,2,3,4], 2, 1)); // top 1 freq per window
console.log(findXSum([5,5,5,5], 4, 2)); // [20]
