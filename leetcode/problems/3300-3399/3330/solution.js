/*
 * @lc app=leetcode id=3330 lang=javascript
 *
 * [3330] Find the Original Typed String I
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let result = 1;
    let i = 0;
    while (i < word.length) {
        let j = i;
        while (j < word.length && word[j] === word[i]) j++;
        const len = j - i;
        if (len > 1) result += len - 1;
        i = j;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(possibleStringCount("abbcccc")); // 5
console.log(possibleStringCount("abcd")); // 1
console.log(possibleStringCount("aaaa")); // 4
console.log(possibleStringCount("a")); // 1
console.log(possibleStringCount("aab")); // 2
console.log(possibleStringCount("aaabbb")); // 5
