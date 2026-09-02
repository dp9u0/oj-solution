/*
 * @lc app=leetcode.cn id=LCR 085 lang=javascript
 *
 * [LCR 085] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];

  function backtrack(open, close, cur) {
    if (open === n && close === n) {
      res.push(cur);
      return;
    }
    if (open < n) {
      backtrack(open + 1, close, cur + '(');
    }
    if (close < open) {
      backtrack(open, close + 1, cur + ')');
    }
  }

  backtrack(0, 0, '');
  return res;
};
// @lc code=end

// TEST:
console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
console.log(generateParenthesis(2)); // ["(())","()()"]
console.log(generateParenthesis(4).length); // 14
console.log(generateParenthesis(8).length); // 1430
console.log(generateParenthesis(3).length); // 5
