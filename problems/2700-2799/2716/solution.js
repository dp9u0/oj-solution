/*
 * @lc app=leetcode id=2716 lang=javascript
 *
 * [2716] Minimize String Length
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    return new Set(s).size;
};
// @lc code=end

// TEST:
console.log(minimizedStringLength("aaabc"));
console.log(minimizedStringLength("cbbd"));
console.log(minimizedStringLength("baadccab"));
console.log(minimizedStringLength("abc"));
