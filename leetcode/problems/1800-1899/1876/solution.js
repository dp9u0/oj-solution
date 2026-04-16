/*
 * @lc app=leetcode id=1876 lang=javascript
 *
 * [1876] Substrings of Size Three with Distinct Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let ans = 0;
    for (let i = 0; i <= s.length - 3; i++) {
        if (s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2]) ans++;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countGoodSubstrings("xyzzaz")); // 1
console.log(countGoodSubstrings("aababcabc")); // 4
console.log(countGoodSubstrings("abc")); // 1
