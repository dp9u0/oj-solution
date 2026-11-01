/*
 * @lc app=leetcode.cn id=462 lang=javascript
 *
 * [462] 最小操作次数使数组元素相等 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  let moves = 0;
  for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
    moves += nums[j] - nums[i];
  }
  return moves;
};
// @lc code=end

// TEST:
if (require.main === module) {
  console.log(minMoves2([1, 2, 3])); // 2
  console.log(minMoves2([1, 10, 2, 9])); // 16
  console.log(minMoves2([5])); // 0
  console.log(minMoves2([3, 1, 2])); // 2
  console.log(minMoves2([-1000000000, 1000000000])); // 2000000000
  console.log(minMoves2([1, 0, 0, 8, 6])); // 14
}
