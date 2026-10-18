/*
 * @lc app=leetcode.cn id=面试题 08.09 lang=javascript
 *
 * [面试题 08.09] 括号
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 回溯：左括号未用完加 '('，右括号已放数 < 左可加 ')'
    const res = [];
    const buf = [];
    const dfs = (left, right) => {
        if (buf.length === 2 * n) {
            res.push(buf.join(''));
            return;
        }
        if (left < n) {
            buf.push('(');
            dfs(left + 1, right);
            buf.pop();
        }
        if (right < left) {
            buf.push(')');
            dfs(left, right + 1);
            buf.pop();
        }
    };
    dfs(0, 0);
    return res;
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(eq(generateParenthesis(3), ['((()))', '(()())', '(())()', '()(())', '()()()']));
console.log(eq(generateParenthesis(1), ['()']));
console.log(eq(generateParenthesis(2), ['(())', '()()']));
