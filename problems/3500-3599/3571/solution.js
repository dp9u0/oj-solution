/*
 * @lc app=leetcode.cn id=3571 lang=javascript
 *
 * [3571] 最短超级串 II
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var shortestSuperstring = function(s1, s2) {
    if (s1.includes(s2)) return s1;
    if (s2.includes(s1)) return s2;

    // max k such that suffix(a, k) === prefix(b, k)
    const overlap = (a, b) => {
        for (let k = Math.min(a.length, b.length); k > 0; k--) {
            if (a.slice(a.length - k) === b.slice(0, k)) return k;
        }
        return 0;
    };

    const m12 = s1 + s2.slice(overlap(s1, s2));
    const m21 = s2 + s1.slice(overlap(s2, s1));
    return m12.length <= m21.length ? m12 : m21;
};
// @lc code=end

// TEST:
console.log(shortestSuperstring("aba", "bab")); // "abab"
console.log(shortestSuperstring("aa", "aaa")); // "aaa"
console.log(shortestSuperstring("abc", "def")); // "abcdef"
console.log(shortestSuperstring("abab", "baba")); // "ababa"
console.log(shortestSuperstring("a", "a")); // "a"
console.log(shortestSuperstring("abcd", "cdab")); // "abcdab"
