/*
 * @lc app=leetcode id=3146 lang=javascript
 *
 * [3146] Permutation Difference between Two Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    const pos = new Map();
    for (let i = 0; i < t.length; i++) pos.set(t[i], i);
    let result = 0;
    for (let i = 0; i < s.length; i++) result += Math.abs(i - pos.get(s[i]));
    return result;
};
// @lc code=end

// TEST:
console.log(findPermutationDifference('abc', 'bac')); // 2
console.log(findPermutationDifference('abcde', 'edbac')); // 12
