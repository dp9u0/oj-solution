/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  const parts = [];
  let depth = 0;
  for (const ch of s) {
    if (ch === '(') {
      if (depth > 0) parts.push(ch);
      depth++;
    } else {
      depth--;
      if (depth > 0) parts.push(ch);
    }
  }
  return parts.join('');
};
// @lc code=end

// TEST:
console.log(removeOuterParentheses('(()())(())')); // "()()()"
console.log(removeOuterParentheses('(()())(())(()(()))')); // "()()()()(())"
console.log(removeOuterParentheses('()()')); // ""
console.log(removeOuterParentheses('(()())')); // "()()"
console.log(removeOuterParentheses('((()())(()()))')); // "(()())(()())"
console.log(removeOuterParentheses('()')); // ""
