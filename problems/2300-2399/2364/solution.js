/*
 * @lc app=leetcode id=2364 lang=javascript
 *
 * [2364] Count Number of Bad Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
  const map = new Map();
  let goodPairs = 0;
  for (let i = 0; i < nums.length; i++) {
    const diff = nums[i] - i;
    const count = map.get(diff) || 0;
    goodPairs += count;
    map.set(diff, count + 1);
  }
  return (nums.length * (nums.length - 1)) / 2 - goodPairs;
};
// @lc code=end

// TEST:
console.log(countBadPairs([4, 1, 3, 3])); // 5
console.log(countBadPairs([1, 2, 3, 4, 5])); // 0
console.log(countBadPairs([1, 1, 1])); // 3
