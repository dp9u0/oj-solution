/*
 * @lc app=leetcode id=2486 lang=javascript
 *
 * [2486] Append Characters to String to Make Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
  let j = 0;
  for (let i = 0; i < s.length && j < t.length; i++) {
    if (s[i] === t[j]) j++;
  }
  return t.length - j;
};
// @lc code=end

// TEST:
console.log(appendCharacters('coaching', 'coding')); // 4
console.log(appendCharacters('abcde', 'a')); // 0
console.log(appendCharacters('z', 'abcde')); // 5
