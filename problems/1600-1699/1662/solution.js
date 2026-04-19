/*
 * @lc app=leetcode id=1662 lang=javascript
 *
 * [1662] Check If Two String Arrays are Equivalent
 */

// @lc code=start
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('');
};
// @lc code=end

// TEST:
console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])); // true
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])); // false
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])); // true
console.log(arrayStringsAreEqual(["a"], ["a"])); // true
console.log(arrayStringsAreEqual(["a"], ["b"])); // false
