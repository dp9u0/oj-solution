/*
 * @lc app=leetcode id=2470 lang=javascript
 *
 * [2470] Number of Subarrays With LCM Equal to K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function(nums, k) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const lcm = (a, b) => a / gcd(a, b) * b;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    for (let j = i; j < nums.length; j++) {
      cur = j === i ? nums[i] : lcm(cur, nums[j]);
      if (cur === k) count++;
      else if (cur > k) break;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(subarrayLCM([3, 6, 2, 7, 1], 6)); // 4
console.log(subarrayLCM([3], 2)); // 0
console.log(subarrayLCM([1], 1)); // 1
console.log(subarrayLCM([2, 3, 6], 6)); // 4
console.log(subarrayLCM([6, 6], 6)); // 3
console.log(subarrayLCM([1, 2, 3], 6)); // 2
