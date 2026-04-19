/*
 * @lc app=leetcode id=1347 lang=javascript
 *
 * [1347] Minimum Number of Steps to Make Two Strings Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }
    let result = 0;
    for (const c of count) {
        if (c > 0) result += c;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minSteps("bab", "aba")); // 1
console.log(minSteps("leetcode", "practice")); // 5
console.log(minSteps("anagram", "mangaar")); // 0
