/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let ans = 0;
    let left = 0;
    let right = 0;
    // Left-to-right: reset when ')' exceeds '('
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if (left === right) {
            ans = Math.max(ans, 2 * right);
        } else if (right > left) {
            left = 0;
            right = 0;
        }
    }
    // Right-to-left: catches cases like "(()" where left always leads
    left = 0;
    right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if (left === right) {
            ans = Math.max(ans, 2 * left);
        } else if (left > right) {
            left = 0;
            right = 0;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(longestValidParentheses('(()') === 2); // "()"
console.log(longestValidParentheses(')()())') === 4); // "()()"
console.log(longestValidParentheses('') === 0); // empty
console.log(longestValidParentheses('()(()') === 2); // "()"
console.log(longestValidParentheses('()(())') === 6); // whole string valid
console.log(longestValidParentheses('((()))') === 6); // nested all valid
console.log(longestValidParentheses(')(') === 0); // nothing matches
console.log(longestValidParentheses('(()())') === 6); // whole string valid
