/*
 * @lc app=leetcode id=1935 lang=javascript
 *
 * [1935] Maximum Number of Words You Can Type
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let broken = new Set(brokenLetters);
    let words = text.split(' ');
    let count = 0;
    for (let word of words) {
        let canType = true;
        for (let ch of word) {
            if (broken.has(ch)) {
                canType = false;
                break;
            }
        }
        if (canType) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(canBeTypedWords("hello world", "ad")); // 1
console.log(canBeTypedWords("leet code", "lt")); // 1
console.log(canBeTypedWords("leet code", "e")); // 0
