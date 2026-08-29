/*
 * @lc app=leetcode id=2091 lang=javascript
 *
 * [2091] Removing Minimum and Maximum From Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
  const n = nums.length;
  let minIdx = 0;
  let maxIdx = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[minIdx]) minIdx = i;
    if (nums[i] > nums[maxIdx]) maxIdx = i;
  }
  const l = Math.min(minIdx, maxIdx);
  const r = Math.max(minIdx, maxIdx);
  return Math.min(r + 1, n - l, l + 1 + n - r);
};
// @lc code=end

// TEST:
console.log(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6]) === 5);
console.log(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5]) === 3);
console.log(minimumDeletions([101]) === 1);
console.log(minimumDeletions([1, 2]) === 2);
console.log(minimumDeletions([2, 1]) === 2);
console.log(minimumDeletions([5, 3, 1, 2, 4, 6]) === 4); // min at 2, max at 5: min(6, 4, 3+1)=4
console.log(minimumDeletions([-1, -5, -3]) === 2); // min at 1, max at 0: min(2, 2, 1+2)=2
