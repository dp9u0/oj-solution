/*
 * @lc app=leetcode id=1163 lang=javascript
 *
 * [1163] Last Substring in Lexicographical Order
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {
    const n = s.length;
    let i = 0, j = 1, k = 0;
    while (j + k < n) {
        const c = s.charCodeAt(i + k) - s.charCodeAt(j + k);
        if (c === 0) {
            k++;
        } else if (c < 0) {
            i += k + 1;
            k = 0;
            if (i >= j) j = i + 1;
        } else {
            j += k + 1;
            k = 0;
        }
    }
    return s.substring(i);
};
// @lc code=end

// TEST:
console.log(lastSubstring("abab")); // "bab"
console.log(lastSubstring("leetcode")); // "tcode"
console.log(lastSubstring("a")); // "a"
console.log(lastSubstring("aaaaaa")); // "aaaaaa"
console.log(lastSubstring("zazb")); // "zb"
console.log(lastSubstring("ababab")); // "babab"
