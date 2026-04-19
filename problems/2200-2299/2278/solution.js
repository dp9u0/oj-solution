/*
 * @lc app=leetcode id=2278 lang=javascript
 *
 * [2278] Percentage of Letter in String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count = 0;
    for (const c of s) {
        if (c === letter) count++;
    }
    return Math.floor(count * 100 / s.length);
};
// @lc code=end

// TEST:
console.log(percentageLetter("foobar", "o")); // 33
console.log(percentageLetter("jjjj", "k")); // 0
console.log(percentageLetter("abc", "a")); // 33
console.log(percentageLetter("aaaa", "a")); // 100
console.log(percentageLetter("ab", "b")); // 50
