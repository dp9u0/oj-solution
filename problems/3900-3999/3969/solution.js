/*
 * @lc app=leetcode id=3969 lang=javascript
 *
 * [3969] Valid Subarrays With Matching Sum Digits I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var countValidSubarrays = function (nums, x) {
  const n = nums.length;
  const prefix = new Array(n + 1);
  prefix[0] = 0;
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

  const firstDigit = (v) => {
    while (v >= 10) v = Math.floor(v / 10);
    return v;
  };

  let count = 0;
  for (let l = 0; l < n; l++) {
    for (let r = l; r < n; r++) {
      const sum = prefix[r + 1] - prefix[l];
      if (sum % 10 !== x) continue;
      if (firstDigit(sum) === x) count++;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(countValidSubarrays([1, 100, 1], 1) === 4);
console.log(countValidSubarrays([1], 2) === 0);
console.log(countValidSubarrays([1, 1, 1], 1) === 3);
console.log(countValidSubarrays([10, 10], 1) === 0);
console.log(countValidSubarrays([11, 3], 1) === 1);
console.log(countValidSubarrays([5], 5) === 1);
console.log(countValidSubarrays([1000000000, 1000000000], 2) === 0);
console.log(countValidSubarrays([999999999, 2], 1) === 1);
