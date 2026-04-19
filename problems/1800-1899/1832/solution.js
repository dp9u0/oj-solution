/*
 * @lc app=leetcode id=1832 lang=javascript
 *
 * [1832] Check if the Sentence Is Pangram
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    return new Set(sentence).size === 26;
};
// @lc code=end

// TEST:
console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')); // true
console.log(checkIfPangram('leetcode')); // false
console.log(checkIfPangram('abcdefghijklmnopqrstuvwxyz')); // true
