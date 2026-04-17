/*
 * @lc app=leetcode id=3498 lang=javascript
 *
 * [3498] Reverse Degree of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const rev = 26 - (s.charCodeAt(i) - 97);
    sum += rev * (i + 1);
  }
  return sum;
};
// @lc code=end

// TEST:
console.log(reverseDegree('abc')); // 148
console.log(reverseDegree('zaza')); // 160
console.log(reverseDegree('a')); // 26
console.log(reverseDegree('z')); // 1
console.log(reverseDegree('abcba')); // 26+50+72+50+26=224
