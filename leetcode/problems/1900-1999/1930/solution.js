/*
 * @lc app=leetcode id=1930 lang=javascript
 *
 * [1930] Unique Length-3 Palindromic Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let result = 0;
    for (let c = 0; c < 26; c++) {
        const ch = String.fromCharCode(97 + c);
        const first = s.indexOf(ch);
        const last = s.lastIndexOf(ch);
        if (first < last) {
            const seen = new Set();
            for (let i = first + 1; i < last; i++) {
                seen.add(s[i]);
            }
            result += seen.size;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(countPalindromicSubsequence("aabca")); // 3
console.log(countPalindromicSubsequence("adc")); // 0
console.log(countPalindromicSubsequence("bbcbaba")); // 4
