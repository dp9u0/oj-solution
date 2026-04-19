/*
 * @lc app=leetcode id=2310 lang=javascript
 *
 * [2310] Sum of Numbers With Units Digit K
 */

// @lc code=start
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function(num, k) {
  if (num === 0) return 0;
  for (let m = 1; m * k <= num && m <= num; m++) {
    if ((m * k) % 10 === num % 10) return m;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(minimumNumbers(58, 9)); // 2
console.log(minimumNumbers(37, 2)); // -1
console.log(minimumNumbers(0, 7)); // 0
console.log(minimumNumbers(10, 1)); // 10
console.log(minimumNumbers(5, 5)); // 1
