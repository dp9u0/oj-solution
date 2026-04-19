/*
 * @lc app=leetcode id=2351 lang=javascript
 *
 * [2351] First Letter to Appear Twice
 */

// @lc code=start
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
  const seen = new Set();
  for (const ch of s) {
    if (seen.has(ch)) return ch;
    seen.add(ch);
  }
  return '';
};
// @lc code=end

// TEST:
console.log(repeatedCharacter('abccbaacz')); // 'c'
console.log(repeatedCharacter('abcdd')); // 'd'
console.log(repeatedCharacter('aa')); // 'a'
console.log(repeatedCharacter('abcdefghijklmnopqrstuvwxyzabc')); // 'a'
console.log(repeatedCharacter('abccbaacz')); // 'c'
