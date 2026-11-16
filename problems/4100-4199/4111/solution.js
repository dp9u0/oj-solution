/*
 * @lc app=leetcode.cn id=4111 lang=javascript
 *
 * [4111] 统计一致子数组数目 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countConsistent = function(nums) {
  const n = nums.length;
  let count = 0;
  for (let left = 0; left < n; left++) {
    let and = nums[left];
    let min = nums[left];
    for (let right = left; right < n; right++) {
      if (right > left) {
        and &= nums[right];
        min = Math.min(min, nums[right]);
      }
      if (and === min) count++;
    }
  }
  return count;
};
// @lc code=end

// TEST:
console.log(countConsistent([5, 3, 1, 2])) // 6
console.log(countConsistent([1, 1, 1])) // 6
console.log(countConsistent([0])) // 1
console.log(countConsistent([7, 7, 7, 7])) // 10
console.log(countConsistent([3, 5, 6])) // 3
