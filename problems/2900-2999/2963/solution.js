/*
 * @lc app=leetcode id=2963 lang=javascript
 *
 * [2963] Count the Number of Good Partitions
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodPartitions = function(nums) {
  const MOD = 1e9 + 7;
  const last = new Map();
  for (let i = 0; i < nums.length; i++) last.set(nums[i], i);

  let cuts = 0, maxLast = 0;
  for (let i = 0; i < nums.length; i++) {
    maxLast = Math.max(maxLast, last.get(nums[i]));
    if (i === maxLast) cuts++;
  }

  let ans = 1;
  for (let i = 0; i < cuts - 1; i++) ans = ans * 2 % MOD;
  return ans;
};
// @lc code=end

// TEST:
console.log(numberOfGoodPartitions([1,2,3,4])); // 8
console.log(numberOfGoodPartitions([1,1,1,1])); // 1
console.log(numberOfGoodPartitions([1,2,1,3])); // 2
console.log(numberOfGoodPartitions([1])); // 1
console.log(numberOfGoodPartitions([1,2,3,1,2])); // 1
