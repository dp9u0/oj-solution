/*
 * @lc app=leetcode id=316 lang=javascript
 *
 * [316] Remove Duplicate Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const stack = [];
  const lastIndex = new Map();
  for (let i = 0; i < s.length; i++) {
    lastIndex.set(s[i], i);
  }

  for (let i = 0; i < s.length; i++) {
    if (stack.includes(s[i])) continue;
    while (stack.length > 0 && stack[stack.length - 1] > s[i] && lastIndex.get(stack[stack.length - 1]) > i) {
      stack.pop();
    }
    stack.push(s[i]);
  }
  return stack.join('');

};
// @lc code=end
// TEST:
console.log(removeDuplicateLetters("bcabc"));
console.log(removeDuplicateLetters("cbacdcbc"));
console.log(removeDuplicateLetters("abacb"));
console.log(removeDuplicateLetters("bbcaac"));
console.log(removeDuplicateLetters("abacb"));
console.log(removeDuplicateLetters("bddbccd"));

