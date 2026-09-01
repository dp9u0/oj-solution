/*
 * @lc app=leetcode id=767 lang=javascript
 *
 * [767] Reorganize String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const count = new Array(26).fill(0);
    for (const c of s) count[c.charCodeAt(0) - 97]++;

    let maxCount = 0, maxChar = 0;
    for (let i = 0; i < 26; i++) {
        if (count[i] > maxCount) {
            maxCount = count[i];
            maxChar = i;
        }
    }
    if (maxCount > Math.floor((s.length + 1) / 2)) return '';

    const result = new Array(s.length);
    let idx = 0;
    // Fill even positions first, then odd
    for (let i = 0; i < s.length; i += 2) {
        while (count[maxChar] > 0 && idx < s.length) {
            result[idx] = String.fromCharCode(maxChar + 97);
            idx += 2;
            count[maxChar]--;
        }
    }
    for (let i = 0; i < 26; i++) {
        while (count[i] > 0) {
            if (idx >= s.length) idx = 1;
            result[idx] = String.fromCharCode(i + 97);
            idx += 2;
            count[i]--;
        }
    }
    return result.join('');
};
// @lc code=end

// TEST:
console.log(reorganizeString("aab")); // "aba"
console.log(reorganizeString("aaab")); // ""
console.log(reorganizeString("vvvlo")); // valid rearrangement
