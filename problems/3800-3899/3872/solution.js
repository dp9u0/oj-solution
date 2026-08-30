/*
 * @lc app=leetcode id=3872 lang=javascript
 *
 * [3872] Longest Arithmetic Sequence After Changing At Most One Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithmetic = function (nums) {
  const n = nums.length;
  const L = new Array(n).fill(1); // longest arithmetic subarray ending at i
  const R = new Array(n).fill(1); // longest arithmetic subarray starting at i

  for (let i = 1; i < n; i++) {
    L[i] = i >= 2 && nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2] ? L[i - 1] + 1 : 2;
  }
  for (let i = n - 2; i >= 0; i--) {
    R[i] = i <= n - 3 && nums[i + 2] - nums[i + 1] === nums[i + 1] - nums[i] ? R[i + 1] + 1 : 2;
  }

  let ans = 0;
  for (let i = 0; i < n; i++) ans = Math.max(ans, L[i]); // no replacement
  for (let i = 0; i + 1 < n; i++) ans = Math.max(ans, 1 + R[i + 1]); // replace i, extend right only
  for (let i = 1; i < n; i++) ans = Math.max(ans, 1 + L[i - 1]); // replace i, extend left only

  // replace i as an interior bridge: d forced to (nums[i+1] - nums[i-1]) / 2
  for (let i = 1; i < n - 1; i++) {
    const span = nums[i + 1] - nums[i - 1];
    if (span % 2 !== 0) continue;
    const d = span / 2;
    const leftLen = i >= 2 && nums[i - 1] - nums[i - 2] === d ? L[i - 1] : 1;
    const rightLen = i + 2 < n && nums[i + 2] - nums[i + 1] === d ? R[i + 1] : 1;
    ans = Math.max(ans, leftLen + 1 + rightLen);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(longestArithmetic([9, 7, 5, 10, 1]) === 5);
console.log(longestArithmetic([1, 2, 6, 7]) === 3);
console.log(longestArithmetic([1, 1, 1, 1]) === 4);
console.log(longestArithmetic([1, 2, 4, 8, 16]) === 3);
console.log(longestArithmetic([5, 4, 100, 2, 1]) === 5);
console.log(longestArithmetic([3, 6, 12, 24, 100]) === 3);
console.log(longestArithmetic([1, 2, 3, 5, 7]) === 4);
