/*
 * @lc app=leetcode id=3456 lang=javascript
 *
 * [3456] Find Special Substring of Length K
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function(s, k) {
    const n = s.length;
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && s[j] === s[i]) j++;
        if (j - i === k) return true;
        i = j;
    }
    return false;
};
// @lc code=end

// TEST:
console.log(hasSpecialSubstring("aaabaaa", 3)); // true
console.log(hasSpecialSubstring("abc", 2)); // false
console.log(hasSpecialSubstring("a", 1)); // true
console.log(hasSpecialSubstring("aa", 1)); // false
