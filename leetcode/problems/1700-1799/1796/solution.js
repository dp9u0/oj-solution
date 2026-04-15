/*
 * @lc app=leetcode id=1796 lang=javascript
 *
 * [1796] Second Largest Digit in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  const digits = new Set();
  for (const ch of s) {
    if (ch >= '0' && ch <= '9') digits.add(+ch);
  }
  if (digits.size < 2) return -1;
  const sorted = [...digits].sort((a, b) => a - b);
  return sorted[sorted.length - 2];
};
// @lc code=end

// TEST:
console.log(secondHighest('dfa12321afd')); // 2
console.log(secondHighest('abc1111')); // -1
console.log(secondHighest('ck077')); // 0
