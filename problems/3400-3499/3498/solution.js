/*
 * @lc app=leetcode.cn id=3498 lang=javascript
 *
 * [3498] 字符串的反转度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    total += (26 - (s.charCodeAt(i) - 97)) * (i + 1);
  }
  return total;
};
// @lc code=end

// TEST:
console.log(reverseDegree("abc")); // 148
console.log(reverseDegree("zaza")); // 160
console.log(reverseDegree("z")); // 1
console.log(reverseDegree("a")); // 26
console.log(reverseDegree("zzzz")); // 10
console.log(reverseDegree("aaaa")); // 26 * (1+2+3+4) = 260
