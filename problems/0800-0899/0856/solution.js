/*
 * @lc app=leetcode id=856 lang=javascript
 *
 * [856] Score of Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [0];

    for (const c of s) {
        if (c === '(') {
            stack.push(0);
        } else {
            const top = stack.pop();
            const score = top === 0 ? 1 : 2 * top;
            stack[stack.length - 1] += score;
        }
    }

    return stack[0];
};
// @lc code=end

// TEST:
console.log(scoreOfParentheses("()")); // 1
console.log(scoreOfParentheses("(())")); // 2
console.log(scoreOfParentheses("()()")); // 2
console.log(scoreOfParentheses("(()(()))")); // 6
