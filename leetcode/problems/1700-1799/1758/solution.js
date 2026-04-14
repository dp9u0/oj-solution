/*
 * @lc app=leetcode id=1758 lang=javascript
 *
 * [1758] Minimum Changes To Make Alternating Binary String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  let diff0 = 0; // count of chars different from pattern 0101...
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) !== i % 2) diff0++;
  }
  return Math.min(diff0, s.length - diff0);
};
// @lc code=end

// TEST:
console.log(minOperations('0100')); // 1
console.log(minOperations('10'));   // 0
console.log(minOperations('1111')); // 2
