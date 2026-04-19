/*
 * @lc app=leetcode id=2176 lang=javascript
 *
 * [2176] Count Equal and Divisible Pairs in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) count++;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(countPairs([3,1,2,2,2,1,3], 2)); // 4
console.log(countPairs([1,2,3,4], 1)); // 0
console.log(countPairs([1,1,1,1], 1)); // 6
console.log(countPairs([5,5], 2)); // 0
console.log(countPairs([1], 1)); // 0
