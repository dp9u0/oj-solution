/*
 * @lc app=leetcode id=3223 lang=javascript
 *
 * [3223] Minimum Length of String After Operations
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const count = new Array(26).fill(0);
    for (const c of s) count[c.charCodeAt(0) - 97]++;
    let result = 0;
    for (const freq of count) {
        if (freq === 0) continue;
        result += freq % 2 === 0 ? 2 : 1;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minimumLength("abaacbcbb")); // 5
console.log(minimumLength("aa")); // 2
console.log(minimumLength("abc")); // 3
