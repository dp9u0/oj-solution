/*
 * @lc app=leetcode id=467 lang=javascript
 *
 * [467] Unique Substrings in Wraparound String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function(s) {
    const maxLen = new Array(26).fill(0);
    let curLen = 0;

    for (let i = 0; i < s.length; i++) {
        if (i > 0 && (s.charCodeAt(i) - s.charCodeAt(i - 1) + 26) % 26 === 1) {
            curLen++;
        } else {
            curLen = 1;
        }
        const idx = s.charCodeAt(i) - 97;
        maxLen[idx] = Math.max(maxLen[idx], curLen);
    }

    return maxLen.reduce((a, b) => a + b, 0);
};
// @lc code=end

// TEST:
console.log(findSubstringInWraproundString("a"));     // 1
console.log(findSubstringInWraproundString("cac"));   // 2
console.log(findSubstringInWraproundString("zab"));   // 6
console.log(findSubstringInWraproundString("zabab")); // 6
