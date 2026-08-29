/*
 * @lc app=leetcode id=3936 lang=javascript
 *
 * [3936] Minimum Operations to Move Zeros to the End
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function(nums) {
  const k = nums.filter((v) => v === 0).length;
  let ans = 0;
  for (let i = nums.length - k; i < nums.length; i++) {
    if (nums[i] !== 0) ans++;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(minimumSwaps([0, 1, 0, 3, 12]) === 2);
console.log(minimumSwaps([0, 1, 0, 2]) === 1);
console.log(minimumSwaps([1, 2, 0]) === 0);
console.log(minimumSwaps([0, 0, 1]) === 1);
console.log(minimumSwaps([0]) === 0);
console.log(minimumSwaps([1, 0, 0, 0, 1]) === 1);
