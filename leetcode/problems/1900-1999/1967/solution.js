/*
 * @lc app=leetcode id=1967 lang=javascript
 *
 * [1967] Number of Strings That Appear as Substrings in Word
 */

// @lc code=start
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count = 0;
    for (const p of patterns) {
        if (word.includes(p)) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(numOfStrings(["a","abc","bc","d"], "abc")); // 3
console.log(numOfStrings(["a","b","c"], "aaaaabbbbb")); // 2
console.log(numOfStrings(["a","a","a"], "ab")); // 3
console.log(numOfStrings(["x"], "abc")); // 0
console.log(numOfStrings(["abc"], "abc")); // 1
