/*
 * @lc app=leetcode id=2044 lang=javascript
 *
 * [2044] Count Number of Maximum Bitwise-OR Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
  const n = nums.length;
  let maxOr = 0;
  let count = 0;

  for (let mask = 1; mask < (1 << n); mask++) {
    let or = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) or |= nums[i];
    }
    if (or > maxOr) {
      maxOr = or;
      count = 1;
    } else if (or === maxOr) {
      count++;
    }
  }

  return count;
};
// @lc code=end

// TEST:
console.log(countMaxOrSubsets([3,1])); // 2
console.log(countMaxOrSubsets([2,2,2])); // 7
console.log(countMaxOrSubsets([3,2,1,5])); // 6
