/*
 * @lc app=leetcode.cn id=2330 lang=javascript
 *
 * [2330] 验证回文串 IV
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var makePalindrome = function(s) {
    let mismatch = 0;
    for (let l = 0, r = s.length - 1; l < r; l++, r--) {
        if (s[l] !== s[r]) mismatch++;
        if (mismatch > 2) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(makePalindrome("abcdba")); // true
console.log(makePalindrome("aa")); // true
console.log(makePalindrome("abcdef")); // false
console.log(makePalindrome("a")); // true (flip away and back)
console.log(makePalindrome("abcd")); // true (2 mismatched pairs)
