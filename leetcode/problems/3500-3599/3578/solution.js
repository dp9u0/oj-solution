/*
 * @lc app=leetcode id=3578 lang=javascript
 *
 * [3578] Count Partitions With Max-Min Difference at Most K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPartitions = function(nums, k) {
  const MOD = 1e9 + 7;
  const n = nums.length;
  const prefix = new Array(n + 2).fill(0);
  prefix[1] = 1;

  const maxDq = [], minDq = [];
  let l = 0, result = 0;

  for (let i = 1; i <= n; i++) {
    while (maxDq.length && nums[maxDq[maxDq.length - 1]] <= nums[i - 1]) maxDq.pop();
    maxDq.push(i - 1);
    while (minDq.length && nums[minDq[minDq.length - 1]] >= nums[i - 1]) minDq.pop();
    minDq.push(i - 1);

    while (nums[maxDq[0]] - nums[minDq[0]] > k) {
      if (maxDq[0] === l) maxDq.shift();
      if (minDq[0] === l) minDq.shift();
      l++;
    }

    result = (prefix[i] - prefix[l] + MOD) % MOD;
    prefix[i + 1] = (prefix[i] + result) % MOD;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(countPartitions([9, 4, 1, 3, 7], 4)); // 6
console.log(countPartitions([3, 3, 4], 0)); // 2
console.log(countPartitions([1, 2, 3], 2)); // 4
console.log(countPartitions([1, 1], 0)); // 2
console.log(countPartitions([5, 1], 3)); // 1
