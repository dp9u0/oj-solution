/*
 * @lc app=leetcode id=890 lang=javascript
 *
 * [890] Find and Replace Pattern
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const matches = (word) => {
        const m1 = new Map(), m2 = new Map();
        for (let i = 0; i < word.length; i++) {
            if (!m1.has(pattern[i])) m1.set(pattern[i], word[i]);
            if (!m2.has(word[i])) m2.set(word[i], pattern[i]);
            if (m1.get(pattern[i]) !== word[i] || m2.get(word[i]) !== pattern[i]) return false;
        }
        return true;
    };
    return words.filter(matches);
};
// @lc code=end

// TEST:
console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb")); // ["mee","aqq"]
console.log(findAndReplacePattern(["a","b","c"], "a"));                             // ["a","b","c"]
