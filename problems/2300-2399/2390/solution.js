/*
 * @lc app=leetcode id=2390 lang=javascript
 *
 * [2390] Removing Stars From a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  const stack = [];
  for (const ch of s) {
    if (ch === '*') {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join('');
};
// @lc code=end

// TEST:
console.log(removeStars("leet**cod*e")); // "lecoe"
console.log(removeStars("erase*****")); // ""
console.log(removeStars("ab*c*d")); // "ad"
