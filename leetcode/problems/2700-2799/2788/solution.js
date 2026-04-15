/*
 * @lc app=leetcode id=2788 lang=javascript
 *
 * [2788] Split Strings by Separator
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const result = [];
    for (const word of words) {
        for (const part of word.split(separator)) {
            if (part.length > 0) result.push(part);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(splitWordsBySeparator(["one.two.three","four.five","six"], '.'))); // ["one","two","three","four","five","six"]
console.log(JSON.stringify(splitWordsBySeparator(["$easy$","$problem$"], '$'))); // ["easy","problem"]
