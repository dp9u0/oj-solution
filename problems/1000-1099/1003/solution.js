/*
 * @lc app=leetcode id=1003 lang=javascript
 *
 * [1003] Check If Word Is Valid After Substitutions
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (const c of s) {
    stack.push(c);
    while (stack.length >= 3 && stack[stack.length - 3] === 'a' && stack[stack.length - 2] === 'b' && stack[stack.length - 1] === 'c') {
      stack.pop(); stack.pop(); stack.pop();
    }
  }
  return stack.length === 0;
};
// @lc code=end

// TEST:
console.log(isValid("aabcbc")); // true
console.log(isValid("abcabcababcc")); // true
console.log(isValid("abccba")); // false
console.log(isValid("abc")); // true
console.log(isValid("aabbcc")); // false
