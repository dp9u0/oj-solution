/*
 * @lc app=leetcode id=1880 lang=javascript
 *
 * [1880] Check if Word Equals Summation of Two Words
 */

// @lc code=start
/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    const toNum = (s) => parseInt(s.split('').map(ch => ch.charCodeAt(0) - 97).join(''));
    return toNum(firstWord) + toNum(secondWord) === toNum(targetWord);
};
// @lc code=end

// TEST:
console.log(isSumEqual('acb', 'cba', 'cdb'));   // true
console.log(isSumEqual('aaa', 'a', 'aab'));     // false
console.log(isSumEqual('aaa', 'a', 'aaaa'));    // true
