/*
 * @lc app=leetcode.cn id=3662 lang=javascript
 *
 * [3662] 按频率筛选字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var filterCharacters = function(s, k) {
    const freq = new Array(26).fill(0);
    for (const c of s) freq[c.charCodeAt(0) - 97]++;

    let res = '';
    for (const c of s) {
        if (freq[c.charCodeAt(0) - 97] < k) res += c;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(filterCharacters("aadbbcccca", 3)); // "dbb"
console.log(filterCharacters("xyz", 2)); // "xyz"
console.log(filterCharacters("aaa", 1)); // ""
console.log(filterCharacters("abcabc", 2)); // ""
console.log(filterCharacters("abcabc", 3)); // "abcabc"
console.log(filterCharacters("aabbc", 2)); // "c"
