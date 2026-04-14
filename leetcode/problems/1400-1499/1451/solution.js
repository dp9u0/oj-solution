/*
 * @lc app=leetcode id=1451 lang=javascript
 *
 * [1451] Rearrange Words in a Sentence
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    const words = text.toLowerCase().split(' ');
    words.sort((a, b) => a.length - b.length);
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    return words.join(' ');
};
// @lc code=end

// TEST:
console.log(arrangeWords("Leetcode is cool")); // "Is cool leetcode"
console.log(arrangeWords("Keep calm and code on")); // "On and keep calm code"
console.log(arrangeWords("To be or not to be")); // "To be or to be not"
