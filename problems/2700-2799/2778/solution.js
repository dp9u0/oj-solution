/*
 * @lc app=leetcode.cn id=2778 lang=javascript
 *
 * [2778] 特殊元素平方和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
  const n = nums.length;
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      ans += nums[i - 1] * nums[i - 1];
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(sumOfSquares([1, 2, 3, 4])); // 21
console.log(sumOfSquares([2, 7, 1, 19, 18, 3])); // 63
console.log(sumOfSquares([1])); // 1
console.log(sumOfSquares([5, 5, 5])); // 50
console.log(sumOfSquares([1, 2, 3, 4, 5, 6, 7, 8])); // 85
