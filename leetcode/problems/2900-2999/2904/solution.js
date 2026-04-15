/*
 * @lc app=leetcode id=2904 lang=javascript
 *
 * [2904] Shortest and Lexicographically Smallest Beautiful String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    const n = s.length;
    let minLen = n + 1;
    let result = '';

    for (let i = 0; i < n; i++) {
        let cnt = 0;
        for (let j = i; j < n; j++) {
            if (s[j] === '1') cnt++;
            if (cnt === k) {
                const len = j - i + 1;
                if (len < minLen) {
                    minLen = len;
                    result = s.substring(i, j + 1);
                } else if (len === minLen) {
                    const sub = s.substring(i, j + 1);
                    if (sub < result) result = sub;
                }
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(shortestBeautifulSubstring('100011001', 3));  // '11001'
console.log(shortestBeautifulSubstring('1011', 2));        // '11'
console.log(shortestBeautifulSubstring('000', 1));         // ''
