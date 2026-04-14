/*
 * @lc app=leetcode id=2414 lang=javascript
 *
 * [2414] Length of the Longest Alphabetical Continuous Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
  let maxLen = 1, currLen = 1;
  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) - s.charCodeAt(i - 1) === 1) {
      currLen++;
      maxLen = Math.max(maxLen, currLen);
    } else {
      currLen = 1;
    }
  }
  return maxLen;
};
// @lc code=end

// TEST:
console.log(longestContinuousSubstring('abacaba')); // 2
console.log(longestContinuousSubstring('abcde')); // 5
