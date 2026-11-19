/*
 * @lc app=leetcode.cn id=758 lang=javascript
 *
 * [758] 字符串中的加粗单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} s
 * @return {string}
 */
var boldWords = function(words, s) {
    const n = s.length;
    const mask = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        for (const w of words) {
            if (s.startsWith(w, i)) {
                for (let j = i; j < i + w.length; j++) mask[j] = true;
            }
        }
    }
    let out = '';
    for (let i = 0; i < n; i++) {
        if (mask[i] && (i === 0 || !mask[i - 1])) out += '<b>';
        out += s[i];
        if (mask[i] && (i === n - 1 || !mask[i + 1])) out += '</b>';
    }
    return out;
};
// @lc code=end

// TEST:
console.log(boldWords(["ab","bc"], "aabcd")); // "a<b>abc</b>d"
console.log(boldWords(["ab","cb"], "aabcd")); // "a<b>ab</b>cd"
console.log(boldWords(["a"], "aaa")); // "<b>aaa</b>" (one merged run)
console.log(boldWords([], "abc")); // "abc" (no words)
console.log(boldWords(["xyz"], "abc")); // "abc" (no match)
console.log(boldWords(["b","cd","e"], "abcdef")); // "a<b>bcde</b>f" (adjacent runs merge)
