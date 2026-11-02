/*
 * @lc app=leetcode.cn id=3736 lang=javascript
 *
 * [3736] 最小操作次数使数组元素相等 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let max = 0;
  let sum = 0;
  for (const num of nums) {
    max = Math.max(max, num);
    sum += num;
  }
  return nums.length * max - sum;
};
// @lc code=end

// TEST:
console.log(minMoves([2, 1, 3])); // 3
console.log(minMoves([4, 4, 5])); // 2
console.log(minMoves([1])); // 0
console.log(minMoves([7, 7, 7, 7])); // 0
console.log(minMoves([1, 2, 3, 4, 5])); // 10
console.log(minMoves([100, 1])); // 99
