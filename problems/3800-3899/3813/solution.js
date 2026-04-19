/*
 * @lc app=leetcode id=3813 lang=javascript
 *
 * [3813] Vowel-Consonant Score
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var vowelConsonantScore = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let v = 0, c = 0;
    for (const ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            if (vowels.has(ch)) v++;
            else c++;
        }
    }
    return c > 0 ? Math.floor(v / c) : 0;
};
// @lc code=end

// TEST:
console.log(vowelConsonantScore('cooear')); // 2
console.log(vowelConsonantScore('axeyizou')); // 1
console.log(vowelConsonantScore('au 123')); // 0
