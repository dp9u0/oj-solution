/*
 * @lc app=leetcode id=2116 lang=javascript
 *
 * [2116] Check if a Parentheses String Can Be Valid
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {
    if (s.length % 2 !== 0) return false;

    let balance = 0;
    // left to right: treat unlocked and '(' as potential '('
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || locked[i] === '0') balance++;
        else balance--;
        if (balance < 0) return false;
    }

    balance = 0;
    // right to left: treat unlocked and ')' as potential ')'
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ')' || locked[i] === '0') balance++;
        else balance--;
        if (balance < 0) return false;
    }

    return true;
};
// @lc code=end

// TEST:
console.log(canBeValid("))()))", "010100")); // true
console.log(canBeValid("()()", "0000")); // true
console.log(canBeValid(")", "0")); // false
console.log(canBeValid("(((())(((())", "111111010111")); // true
