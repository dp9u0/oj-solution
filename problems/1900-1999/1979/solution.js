/*
 * @lc app=leetcode id=1979 lang=javascript
 *
 * [1979] Find Greatest Common Divisor of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  return gcd(min, max);
};
// @lc code=end

// TEST:
console.log(findGCD([2,5,6,9,10])); // 2
console.log(findGCD([7,5,6,8,3]));  // 1
console.log(findGCD([3,3]));        // 3
