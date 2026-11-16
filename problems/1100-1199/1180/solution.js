/*
 * @lc app=leetcode.cn id=1180 lang=javascript
 *
 * [1180] 统计只含单一字母的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countLetters = function(s) {
    let total = 0, runLen = 1;
    for (let i = 1; i <= s.length; i++) {
        if (i < s.length && s[i] === s[i - 1]) {
            runLen++;
        } else {
            total += runLen * (runLen + 1) / 2;
            runLen = 1;
        }
    }
    return total;
};
// @lc code=end

// TEST:
console.log(countLetters("aaaba")); // 8
console.log(countLetters("aaaaaaaaaa")); // 55
console.log(countLetters("a")); // 1
console.log(countLetters("abc")); // 3
console.log(countLetters("aabbb")); // 9 (3 + 6)
