/*
 * @lc app=leetcode id=3209 lang=javascript
 *
 * [3209] Number of Subarrays With AND Value of K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  let result = 0;
  let prev = new Map();

  for (const num of nums) {
    const curr = new Map();
    curr.set(num, (curr.get(num) || 0) + 1);
    for (const [val, cnt] of prev) {
      const and = val & num;
      curr.set(and, (curr.get(and) || 0) + cnt);
    }
    result += curr.get(k) || 0;
    prev = curr;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(countSubarrays([1, 1, 1], 1) === 6);
console.log(countSubarrays([1, 1, 2], 1) === 3);
console.log(countSubarrays([1, 2, 3], 2) === 2);
console.log(countSubarrays([0, 0, 0], 0) === 6);
console.log(countSubarrays([1], 1) === 1);
