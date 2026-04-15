/*
 * @lc app=leetcode id=3794 lang=javascript
 *
 * [3794] Reverse String Prefix
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    return s.slice(0, k).split('').reverse().join('') + s.slice(k);
};
// @lc code=end

// TEST:
console.log(reversePrefix("abcd", 2)); // "bacd"
console.log(reversePrefix("xyz", 3)); // "zyx"
console.log(reversePrefix("hey", 1)); // "hey"
