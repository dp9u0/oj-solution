/*
 * @lc app=leetcode id=3407 lang=javascript
 *
 * [3407] Substring Matching Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function(s, p) {
    const starIdx = p.indexOf('*');
    const pre = p.substring(0, starIdx);
    const suf = p.substring(starIdx + 1);

    const preIdx = s.indexOf(pre);
    if (preIdx === -1) return false;

    const sufIdx = s.indexOf(suf, preIdx + pre.length);
    return sufIdx !== -1;
};
// @lc code=end

// TEST:
console.log(hasMatch("leetcode", "ee*e")); // true
console.log(hasMatch("car", "c*v"));        // false
console.log(hasMatch("luck", "u*"));        // true
