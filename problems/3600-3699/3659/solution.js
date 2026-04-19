/*
 * @lc app=leetcode id=3659 lang=javascript
 *
 * [3659] Partition Array Into K-Distinct Groups
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var partitionArray = function(nums, k) {
  const n = nums.length;
  if (n % k !== 0) return false;
  const count = new Map();
  for (const v of nums) count.set(v, (count.get(v) || 0) + 1);
  const groups = n / k;
  for (const cnt of count.values()) {
    if (cnt > groups) return false;
  }
  return true;
};
// @lc code=end

// TEST:
console.log(partitionArray([1, 2, 3, 4], 2)); // true
console.log(partitionArray([3, 5, 2, 2], 2)); // true
console.log(partitionArray([1, 5, 2, 3], 3)); // false
console.log(partitionArray([1, 1, 1, 1], 2)); // false
console.log(partitionArray([1, 2, 3, 1, 2, 3], 3)); // true
