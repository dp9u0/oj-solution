/*
 * @lc app=leetcode id=2981 lang=javascript
 *
 * [2981] Find Longest Special Substring That Occurs Thrice I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    const n = s.length;
    const count = new Map();

    for (let i = 0; i < n; i++) {
        let j = i;
        while (j < n && s[j] === s[i]) j++;
        const len = j - i;
        for (let k = 1; k <= len; k++) {
            const key = s[i] + ',' + k;
            count.set(key, (count.get(key) || 0) + len - k + 1);
        }
        i = j - 1;
    }

    let result = -1;
    for (const [key, c] of count) {
        if (c >= 3) {
            const len = parseInt(key.split(',')[1]);
            result = Math.max(result, len);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maximumLength('aaaa'));      // 2
console.log(maximumLength('abcdef'));    // -1
console.log(maximumLength('abcaba'));    // 1
