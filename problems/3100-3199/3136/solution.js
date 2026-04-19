/*
 * @lc app=leetcode id=3136 lang=javascript
 *
 * [3136] Valid Word
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) return false;
    let vowels = new Set('aeiouAEIOU');
    let hasVowel = false, hasConsonant = false;
    for (let c of word) {
        if (c >= '0' && c <= '9') continue;
        let lower = c.toLowerCase();
        if (lower >= 'a' && lower <= 'z') {
            if (vowels.has(c)) hasVowel = true;
            else hasConsonant = true;
        } else {
            return false;
        }
    }
    return hasVowel && hasConsonant;
};
// @lc code=end

// TEST:
console.log(isValid('234Adas'));
console.log(isValid('b3'));
console.log(isValid('a3$e'));
