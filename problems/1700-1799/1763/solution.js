/*
 * @lc app=leetcode id=1763 lang=javascript
 *
 * [1763] Longest Nice Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    let best = '';
    for (let i = 0; i < s.length; i++) {
        const lower = new Set();
        const upper = new Set();
        for (let j = i; j < s.length; j++) {
            const c = s[j];
            if (c >= 'a' && c <= 'z') lower.add(c);
            else upper.add(c.toLowerCase());
            if (lower.size === upper.size && [...lower].every(x => upper.has(x))) {
                if (j - i + 1 > best.length) {
                    best = s.substring(i, j + 1);
                }
            }
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(longestNiceSubstring("YazaAay")); // "aAa"
console.log(longestNiceSubstring("Bb")); // "Bb"
console.log(longestNiceSubstring("c")); // ""
