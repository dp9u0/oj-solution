/*
 * @lc app=leetcode id=678 lang=javascript
 *
 * [678] Valid Parenthesis String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let lo = 0, hi = 0;

    for (const c of s) {
        if (c === '(') {
            lo++;
            hi++;
        } else if (c === ')') {
            lo--;
            hi--;
        } else {
            lo--;
            hi++;
        }
        if (hi < 0) return false;
        lo = Math.max(lo, 0);
    }

    return lo === 0;
};
// @lc code=end

// TEST:
console.log(checkValidString("()")); // true
console.log(checkValidString("(*)")); // true
console.log(checkValidString("(*))")); // true
console.log(checkValidString("(")); // false
