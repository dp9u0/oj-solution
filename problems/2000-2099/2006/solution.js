/*
 * @lc app=leetcode id=2006 lang=javascript
 *
 * [2006] Count Number of Pairs With Absolute Difference K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
  const count = Array(101).fill(0);
  let ans = 0;
  for (const x of nums) {
    ans += (x - k >= 1 ? count[x - k] : 0) + (x + k <= 100 ? count[x + k] : 0);
    count[x]++;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(countKDifference([1, 2, 2, 1], 1) === 4);
console.log(countKDifference([1, 3], 3) === 0);
console.log(countKDifference([3, 2, 1, 5, 4], 2) === 3);
console.log(countKDifference([1], 1) === 0);
console.log(countKDifference([2, 2], 1) === 0);
console.log(countKDifference([1, 2, 3, 4, 5], 1) === 4);
console.log(countKDifference([10, 1, 11], 1) === 1);
