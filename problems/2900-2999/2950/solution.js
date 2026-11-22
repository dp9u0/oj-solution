/*
 * @lc app=leetcode.cn id=2950 lang=javascript
 *
 * [2950] 可整除子串的数量
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var countDivisibleSubstrings = function(word) {
    const digit = new Array(26);
    const groups = ['ab', 'cde', 'fgh', 'ijk', 'lmn', 'opq', 'rst', 'uvw', 'xyz'];
    for (let g = 0; g < 9; g++) {
        for (const ch of groups[g]) digit[ch.charCodeAt(0) - 97] = g + 1;
    }
    const n = word.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + digit[word.charCodeAt(i) - 97];
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if ((prefix[j + 1] - prefix[i]) % (j - i + 1) === 0) count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countDivisibleSubstrings("asdf")); // 6
console.log(countDivisibleSubstrings("bdh")); // 5
console.log(countDivisibleSubstrings("abcd")); // 6
console.log(countDivisibleSubstrings("a")); // 1
console.log(countDivisibleSubstrings("zz")); // 3
