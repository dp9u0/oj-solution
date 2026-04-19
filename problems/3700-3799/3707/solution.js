/*
 * @lc app=leetcode id=3707 lang=javascript
 *
 * [3707] Equal Score Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var scoreBalance = function(s) {
    let total = 0;
    for (const ch of s) total += ch.charCodeAt(0) - 96;

    let left = 0;
    for (let i = 0; i < s.length - 1; i++) {
        left += s.charCodeAt(i) - 96;
        if (left * 2 === total) return true;
    }
    return false;
};
// @lc code=end

// TEST:
console.log(scoreBalance("adcb"));   // true
console.log(scoreBalance("bace"));   // false
console.log(scoreBalance("ab"));     // false
console.log(scoreBalance("acca"));   // true
