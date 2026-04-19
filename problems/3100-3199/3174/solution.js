/*
 * @lc app=leetcode id=3174 lang=javascript
 *
 * [3174] Clear Digits
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];
    for (const c of s) {
        if (c >= '0' && c <= '9') {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.join('');
};
// @lc code=end

// TEST:
console.log(clearDigits("abc")); // "abc"
console.log(clearDigits("cb34")); // ""
console.log(clearDigits("a1b2c3")); // ""
