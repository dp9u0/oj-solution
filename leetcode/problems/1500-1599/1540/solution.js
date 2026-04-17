/*
 * @lc app=leetcode id=1540 lang=javascript
 *
 * [1540] Can Convert String in K Moves
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var canConvertString = function(s, t, k) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        const diff = (t.charCodeAt(i) - s.charCodeAt(i) + 26) % 26;
        if (diff > 0) count[diff]++;
    }

    for (let d = 1; d < 26; d++) {
        // Moves available for shift d: d, d+26, d+52, ...
        // Count = floor((k - d) / 26) + 1, if d <= k
        const available = d > k ? 0 : Math.floor((k - d) / 26) + 1;
        if (count[d] > available) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(canConvertString("input", "ouput", 9));   // true
console.log(canConvertString("abc", "bcd", 10));       // false
console.log(canConvertString("aab", "bbb", 27));       // true
console.log(canConvertString("abc", "abc", 0));        // true (no changes needed)
console.log(canConvertString("a", "z", 25));           // true (shift by 25)
console.log(canConvertString("aa", "bb", 1));          // false (need 2 shifts of 1, only move 1 available)
