/*
 * @lc app=leetcode id=3442 lang=javascript
 *
 * [3442] Maximum Difference Between Even and Odd Frequency I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let freq = {};
    for (const c of s) {
        freq[c] = (freq[c] || 0) + 1;
    }
    let maxOdd = 0, minEven = Infinity;
    for (const f of Object.values(freq)) {
        if (f % 2 === 1) {
            if (f > maxOdd) maxOdd = f;
        } else {
            if (f < minEven) minEven = f;
        }
    }
    return maxOdd - minEven;
};
// @lc code=end

// TEST:
console.log(maxDifference("aaaaabbc")); // 3
console.log(maxDifference("abcabcab")); // 1
