/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const res = [];
  let lRemove = 0;
  let rRemove = 0;

  // 统计最少需要删除的左/右括号数
  for (const ch of s) {
    if (ch === '(') {
      lRemove++;
    } else if (ch === ')') {
      if (lRemove === 0) rRemove++;
      else lRemove--;
    }
  }

  const isValid = (str) => {
    let count = 0;
    for (const ch of str) {
      if (ch === '(') count++;
      else if (ch === ')') {
        count--;
        if (count < 0) return false;
      }
    }
    return count === 0;
  };

  const helper = (str, start, lRemove, rRemove) => {
    if (lRemove === 0 && rRemove === 0) {
      if (isValid(str)) res.push(str);
      return;
    }
    for (let i = start; i < str.length; i++) {
      // 连续相同括号只删第一个，避免重复结果
      if (i !== start && str[i] === str[i - 1]) continue;
      // 剩余字符不够删除，提前剪枝
      if (lRemove + rRemove > str.length - i) return;
      if (str[i] === '(' && lRemove > 0) {
        helper(str.slice(0, i) + str.slice(i + 1), i, lRemove - 1, rRemove);
      }
      if (str[i] === ')' && rRemove > 0) {
        helper(str.slice(0, i) + str.slice(i + 1), i, lRemove, rRemove - 1);
      }
    }
  };

  helper(s, 0, lRemove, rRemove);
  return res;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.deepStrictEqual(removeInvalidParentheses("()())()").sort(), ["(())()", "()()()"]);
assert.deepStrictEqual(removeInvalidParentheses("(a)())()").sort(), ["(a())()", "(a)()()"]);
assert.deepStrictEqual(removeInvalidParentheses(")("), [""]);
assert.deepStrictEqual(removeInvalidParentheses("(((k()((").sort(), ["(k)", "k()"]);
assert.deepStrictEqual(removeInvalidParentheses("n"), ["n"]);
assert.deepStrictEqual(removeInvalidParentheses(")(f"), ["f"]);
assert.deepStrictEqual(removeInvalidParentheses("").length, 1); // 空串 -> [""]

console.log('All tests passed!');
