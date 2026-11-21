/*
 * @lc app=leetcode.cn id=2083 lang=javascript
 *
 * [2083] 求以相同字母开头和结尾的子串总数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const cnt = new Array(26).fill(0);
    for (const ch of s) cnt[ch.charCodeAt(0) - 97]++;
    let total = 0;
    for (const c of cnt) total += (c * (c + 1)) / 2;
    return total;
};
// @lc code=end

// TEST:
console.log(numberOfSubstrings("abcba")); // 7
console.log(numberOfSubstrings("abacad")); // 9
console.log(numberOfSubstrings("a")); // 1
console.log(numberOfSubstrings("zz")); // 3
console.log(numberOfSubstrings("abc")); // 3
