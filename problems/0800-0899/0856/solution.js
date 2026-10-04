/*
 * @lc app=leetcode.cn id=856 lang=javascript
 *
 * [856] 括号的分数
 */

// @lc code=start
/**
 * 分数由"核心 ()"（内部为空的括号对）贡献，每个核心 () 贡献 2^depth，
 * depth 为其被外层括号包裹的层数。
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  let ans = 0;
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      depth++;
    } else {
      depth--;
      if (s[i - 1] === '(') ans += 1 << depth;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(scoreOfParentheses('()')); // 1
console.log(scoreOfParentheses('(())')); // 2
console.log(scoreOfParentheses('()()')); // 2
console.log(scoreOfParentheses('(()(()))')); // 6
console.log(scoreOfParentheses('((()))')); // 4
console.log(scoreOfParentheses('(()())')); // 4
console.log(scoreOfParentheses('()((()))')); // 5
