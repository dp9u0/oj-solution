/*
 * @lc app=leetcode id=2609 lang=javascript
 *
 * [2609] Find the Longest Balanced Substring of a Binary String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
  let max = 0, zeros = 0, ones = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      if (ones > 0) {
        max = Math.max(max, 2 * Math.min(zeros, ones));
        zeros = 0;
        ones = 0;
      }
      zeros++;
    } else {
      ones++;
    }
  }
  max = Math.max(max, 2 * Math.min(zeros, ones));
  return max;
};
// @lc code=end

// TEST:
console.log(findTheLongestBalancedSubstring("01000111")); // 6
console.log(findTheLongestBalancedSubstring("00111")); // 4
console.log(findTheLongestBalancedSubstring("111")); // 0
console.log(findTheLongestBalancedSubstring("0101")); // 2
console.log(findTheLongestBalancedSubstring("000111000")); // 6
