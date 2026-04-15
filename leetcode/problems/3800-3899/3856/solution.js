/*
 * @lc app=leetcode id=3856 lang=javascript
 *
 * [3856] Trim Trailing Vowels
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let i = s.length - 1;
    while (i >= 0 && vowels.has(s[i])) i--;
    return s.substring(0, i + 1);
};
// @lc code=end

// TEST:
console.log(trimTrailingVowels('idea'));
console.log(trimTrailingVowels('day'));
console.log(trimTrailingVowels('aeiou'));
