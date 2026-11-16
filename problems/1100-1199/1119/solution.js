/*
 * @lc app=leetcode.cn id=1119 lang=javascript
 *
 * [1119] 删去字符串中的元音
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    return s.replace(/[aeiou]/g, '');
};
// @lc code=end

// TEST:
console.log(removeVowels("leetcodeisacommunityforcoders")); // "ltcdscmmntyfrcdrs"
console.log(removeVowels("aeiou")); // ""
console.log(removeVowels("xyz")); // "xyz"
console.log(removeVowels("")); // ""
console.log(removeVowels("aeioua")); // ""
