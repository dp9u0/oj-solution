/*
 * @lc app=leetcode id=3120 lang=javascript
 *
 * [3120] Count the Number of Special Characters I
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
  const lower = new Set();
  const upper = new Set();
  for (const ch of word) {
    if (ch >= 'a' && ch <= 'z') lower.add(ch);
    else upper.add(ch.toLowerCase());
  }
  let count = 0;
  for (const c of lower) {
    if (upper.has(c)) count++;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(numberOfSpecialChars("aaAbcBC")); // 3
console.log(numberOfSpecialChars("abc")); // 0
console.log(numberOfSpecialChars("abBCab")); // 1
