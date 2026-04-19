/*
 * @lc app=leetcode id=1657 lang=javascript
 *
 * [1657] Determine if Two Strings Are Close
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);
    for (const c of word1) count1[c.charCodeAt(0) - 97]++;
    for (const c of word2) count2[c.charCodeAt(0) - 97]++;
    for (let i = 0; i < 26; i++) {
        if ((count1[i] === 0) !== (count2[i] === 0)) return false;
    }
    count1.sort((a, b) => a - b);
    count2.sort((a, b) => a - b);
    return count1.join(',') === count2.join(',');
};
// @lc code=end

// TEST:
console.log(closeStrings("abc", "bca")); // true
console.log(closeStrings("a", "aa")); // false
console.log(closeStrings("cabbba", "abbccc")); // true
