/*
 * @lc app=leetcode id=1551 lang=javascript
 *
 * [1551] Minimum Operations to Make Array Equal
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
  // arr = [1,3,5,...], target = n
  // answer = sum of (n - arr[i]) for arr[i] < n
  // = floor(n/2) * ceil(n/2) = floor(n^2/4)
  return Math.floor(n * n / 4);
};
// @lc code=end

// TEST:
console.log(minOperations(3)); // 2
console.log(minOperations(6)); // 9
console.log(minOperations(1)); // 0
