/*
 * @lc app=leetcode id=1031 lang=javascript
 *
 * [1031] Maximum Sum of Two Non-Overlapping Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

  const subSum = (start, len) => prefix[start + len] - prefix[start];

  const solve = (L, R) => {
    let result = 0, maxL = 0;
    for (let j = L; j + R <= n; j++) {
      maxL = Math.max(maxL, subSum(j - L, L));
      result = Math.max(result, maxL + subSum(j, R));
    }
    return result;
  };

  return Math.max(solve(firstLen, secondLen), solve(secondLen, firstLen));
};
// @lc code=end

// TEST:
console.log(maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2)); // 20
console.log(maxSumTwoNoOverlap([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2)); // 29
console.log(maxSumTwoNoOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3)); // 31
console.log(maxSumTwoNoOverlap([1, 0, 1], 1, 1)); // 2
console.log(maxSumTwoNoOverlap([0, 0, 0, 0], 1, 2)); // 0
