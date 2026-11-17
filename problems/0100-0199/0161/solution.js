/*
 * @lc app=leetcode.cn id=161 lang=javascript
 *
 * [161] 相隔为 1 的编辑距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    if (s.length > t.length) [s, t] = [t, s]; // s: shorter (or equal)
    if (t.length - s.length > 1) return false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            if (s.length === t.length) {
                return s.slice(i + 1) === t.slice(i + 1); // replace
            }
            return s.slice(i) === t.slice(i + 1); // insert into s / delete from t
        }
    }
    // s fully matches t's prefix: valid only if t has exactly one extra char
    return t.length === s.length + 1;
};
// @lc code=end

// TEST:
console.log(isOneEditDistance("ab", "acb")); // true
console.log(isOneEditDistance("", "")); // false (zero edits)
console.log(isOneEditDistance("", "a")); // true
console.log(isOneEditDistance("abc", "abc")); // false
console.log(isOneEditDistance("abcd", "abc")); // true
console.log(isOneEditDistance("cab", "ad")); // false
