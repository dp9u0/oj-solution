/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  const backtrack = (cur, left, right) => {
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }
    if (left < n) backtrack(cur + '(', left + 1, right);
    if (right < left) backtrack(cur + ')', left, right + 1);
  };
  backtrack('', 0, 0);
  return res;
};
// @lc code=end

// TEST:
console.log(generateParenthesis(1)); // ["()"]
console.log(generateParenthesis(2)); // ["(())","()()"]
console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(4)); // 14 combinations
console.log(generateParenthesis(8).length); // 1430
