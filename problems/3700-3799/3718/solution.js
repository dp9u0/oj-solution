/*
 * @lc app=leetcode id=3718 lang=javascript
 *
 * [3718] Smallest Missing Multiple of K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
  const set = new Set(nums);
  let multiple = k;
  while (set.has(multiple)) {
    multiple += k;
  }
  return multiple;
};
// @lc code=end

// TEST:
console.log(missingMultiple([8, 2, 3, 4, 6], 2)); // 10
console.log(missingMultiple([1, 4, 7, 10, 15], 5)); // 5
console.log(missingMultiple([2, 4, 6], 1)); // 1
