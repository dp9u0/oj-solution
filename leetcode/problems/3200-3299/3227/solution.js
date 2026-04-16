/*
 * @lc app=leetcode id=3227 lang=javascript
 *
 * [3227] Vowels Game in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (const c of s) {
        if (vowels.has(c)) return true;
    }
    return false;
};
// @lc code=end

// TEST:
console.log(doesAliceWin("leetcoder")); // true
console.log(doesAliceWin("bbcd")); // false
console.log(doesAliceWin("a")); // true
console.log(doesAliceWin("bbbb")); // false
