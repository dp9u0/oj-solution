/*
 * @lc app=leetcode id=3084 lang=javascript
 *
 * [3084] Count Substrings Starting and Ending with Given Character
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
var countSubstrings = function(s, c) {
    let cnt = 0;
    for (const ch of s) {
        if (ch === c) cnt++;
    }
    return cnt * (cnt + 1) / 2;
};
// @lc code=end

// TEST:
console.log(countSubstrings("abada", "a")); // 6 (a...a positions: 0,2,4 -> C(3,2)+3=6)
console.log(countSubstrings("zzz", "z")); // 6
console.log(countSubstrings("abcde", "a")); // 1
console.log(countSubstrings("aaaa", "a")); // 10
console.log(countSubstrings("abcd", "x")); // 0
console.log(countSubstrings("a", "a")); // 1
