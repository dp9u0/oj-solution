/*
 * @lc app=leetcode id=2287 lang=javascript
 *
 * [2287] Rearrange Characters to Make Target String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    const freqS = new Array(26).fill(0);
    const freqT = new Array(26).fill(0);
    for (const c of s) freqS[c.charCodeAt(0) - 97]++;
    for (const c of target) freqT[c.charCodeAt(0) - 97]++;
    let res = Infinity;
    for (let i = 0; i < 26; i++) {
        if (freqT[i] > 0) {
            res = Math.min(res, Math.floor(freqS[i] / freqT[i]));
        }
    }
    return res;
};
// @lc code=end

// TEST:
console.log(rearrangeCharacters("ilovecodingonleetcode", "code")); // 2
console.log(rearrangeCharacters("abcba", "abc")); // 1
console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa")); // 1
