/*
 * @lc app=leetcode id=2598 lang=javascript
 *
 * [2598] Smallest Missing Non-negative Integer After Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
  const cnt = new Array(value).fill(0);
  for (const num of nums) {
    cnt[((num % value) + value) % value]++;
  }
  let mex = 0;
  while (cnt[mex % value] > 0) {
    cnt[mex % value]--;
    mex++;
  }
  return mex;
};
// @lc code=end

// TEST:
console.log(findSmallestInteger([1,-10,7,13,6,8], 5)); // 4
console.log(findSmallestInteger([1,-10,7,13,6,8], 7)); // 2
console.log(findSmallestInteger([0,1,2,3,4], 5)); // 5
