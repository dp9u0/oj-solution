/*
 * @lc app=leetcode id=3432 lang=javascript
 *
 * [3432] Count Partitions with Even Sum Difference
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  return total % 2 === 0 ? nums.length - 1 : 0;
};
// @lc code=end

// TEST:
console.log(countPartitions([10,10,3,7,6])); // 4
console.log(countPartitions([1,2,2])); // 0
console.log(countPartitions([2,4,6,8])); // 3
console.log(countPartitions([1,1])); // 1
console.log(countPartitions([2,2])); // 1
