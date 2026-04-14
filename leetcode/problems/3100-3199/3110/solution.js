/*
 * @lc app=leetcode id=3110 lang=javascript
 *
 * [3110] Score of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  let score = 0;
  for (let i = 1; i < s.length; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
  }
  return score;
};
// @lc code=end

// TEST:
console.log(scoreOfString('hello')); // 13
console.log(scoreOfString('zaz')); // 50
