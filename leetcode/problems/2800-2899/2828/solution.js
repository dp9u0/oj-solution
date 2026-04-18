/*
 * @lc app=leetcode id=2828 lang=javascript
 *
 * [2828] Check if a String Is an Acronym of Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    return words.length === s.length && words.every((w, i) => w[0] === s[i]);
};
// @lc code=end

// TEST:
console.log(isAcronym(["alice","bob","charlie"], "abc")); // true
console.log(isAcronym(["an","apple"], "a")); // false
console.log(isAcronym(["never","gonna","give","up","on","you"], "ngguoy")); // true
console.log(isAcronym(["a"], "a")); // true
console.log(isAcronym(["ab","cd"], "ac")); // true
