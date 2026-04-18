/*
 * @lc app=leetcode id=2190 lang=javascript
 *
 * [2190] Most Frequent Number Following Key In an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
  const count = new Map();
  let maxCount = 0, result = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      const target = nums[i + 1];
      const c = (count.get(target) || 0) + 1;
      count.set(target, c);
      if (c > maxCount) {
        maxCount = c;
        result = target;
      }
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(mostFrequent([1, 100, 200, 1, 100], 1)); // 100
console.log(mostFrequent([2, 2, 2, 2, 3], 2)); // 2
console.log(mostFrequent([1, 1, 1, 1], 1)); // 1
console.log(mostFrequent([1, 2, 3, 1, 2, 3], 1)); // 2
console.log(mostFrequent([10, 20, 10, 30], 10)); // 20
