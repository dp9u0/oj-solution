/*
 * @lc app=leetcode id=2134 lang=javascript
 *
 * [2134] Minimum Swaps to Group All 1's Together II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
  const n = nums.length;
  const totalOnes = nums.reduce((sum, x) => sum + x, 0);

  if (totalOnes === 0 || totalOnes === n) return 0;

  // Sliding window of size totalOnes on circular array
  let ones = 0;
  for (let i = 0; i < totalOnes; i++) {
    ones += nums[i];
  }

  let maxOnes = ones;

  for (let i = totalOnes; i < n + totalOnes; i++) {
    ones += nums[i % n] - nums[(i - totalOnes) % n];
    maxOnes = Math.max(maxOnes, ones);
  }

  return totalOnes - maxOnes;
};
// @lc code=end

// TEST:
console.log(minSwaps([0,1,0,1,1,0,0])); // 1
console.log(minSwaps([0,1,1,1,0,0,1,1,0])); // 2
console.log(minSwaps([1,1,0,0,1])); // 0
