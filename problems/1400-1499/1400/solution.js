/*
 * @lc app=leetcode id=1400 lang=javascript
 *
 * [1400] Construct K Palindrome Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (k > s.length) return false;

    const count = new Array(26).fill(0);
    for (const c of s) {
        count[c.charCodeAt(0) - 97]++;
    }

    let oddCount = 0;
    for (const cnt of count) {
        if (cnt % 2 === 1) oddCount++;
    }

    return oddCount <= k;
};
// @lc code=end

// TEST:
console.log(canConstruct("annabelle", 2)); // true
console.log(canConstruct("leetcode", 3)); // false
console.log(canConstruct("true", 4)); // true
console.log(canConstruct("aaa", 2)); // true
