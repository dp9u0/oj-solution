/*
 * @lc app=leetcode id=2870 lang=javascript
 *
 * [2870] Minimum Number of Operations to Make Array Empty
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const count = new Map();
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  let result = 0;
  for (const cnt of count.values()) {
    if (cnt === 1) return -1;
    result += Math.ceil(cnt / 3);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(minOperations([2,3,3,2,2,4,2,3,4])); // 4
console.log(minOperations([2,1,2,2,3,3])); // -1
console.log(minOperations([2,2,2])); // 1
