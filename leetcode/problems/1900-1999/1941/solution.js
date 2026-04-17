/*
 * @lc app=leetcode id=1941 lang=javascript
 *
 * [1941] Check if All Characters Have Equal Number of Occurrences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const count = new Map();
    for (const c of s) count.set(c, (count.get(c) || 0) + 1);
    const freqs = new Set(count.values());
    return freqs.size === 1;
};
// @lc code=end

// TEST:
console.log(areOccurrencesEqual("abacbc"));   // true
console.log(areOccurrencesEqual("aaabb"));    // false
console.log(areOccurrencesEqual("a"));        // true
console.log(areOccurrencesEqual("abcabc"));   // true
console.log(areOccurrencesEqual("aabbccd"));  // false
