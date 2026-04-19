/*
 * @lc app=leetcode id=2825 lang=javascript
 *
 * [2825] Make String a Subsequence Using Cyclic Increments
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let j = 0;
    for (let i = 0; i < str1.length && j < str2.length; i++) {
        const c = str1.charCodeAt(i);
        const t = str2.charCodeAt(j);
        if (c === t || (c - 96) % 26 + 97 === t) j++;
    }
    return j === str2.length;
};
// @lc code=end

// TEST:
console.log(canMakeSubsequence("abc", "ad")); // true
console.log(canMakeSubsequence("zc", "ad")); // true
console.log(canMakeSubsequence("ab", "d")); // false
console.log(canMakeSubsequence("a", "a")); // true
console.log(canMakeSubsequence("z", "a")); // true (z→a)
console.log(canMakeSubsequence("abc", "abcd")); // false
