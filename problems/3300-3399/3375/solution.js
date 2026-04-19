/*
 * @lc app=leetcode id=3375 lang=javascript
 *
 * [3375] Minimum Operations to Make Array Values Equal to K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  const set = new Set();
  for (const num of nums) {
    if (num < k) return -1;
    if (num > k) set.add(num);
  }
  return set.size;
};
// @lc code=end

// TEST:
console.log(minOperations([5,2,5,4,5], 2)); // 2
console.log(minOperations([2,1,2], 2)); // -1
console.log(minOperations([9,7,5,3], 1)); // 4
console.log(minOperations([1,1,1], 1)); // 0
console.log(minOperations([5,5,5,5], 5)); // 0
