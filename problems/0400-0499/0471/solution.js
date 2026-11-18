/*
 * @lc app=leetcode.cn id=471 lang=javascript
 *
 * [471] 编码最短长度的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var encode = function(s) {
    const n = s.length;
    // dp[i][j] = shortest encoding of s[i..j]
    const dp = Array.from({ length: n }, () => new Array(n).fill(''));
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i + len - 1 < n; i++) {
            const j = i + len - 1;
            let cur = s.slice(i, j + 1);
            if (len <= 4) { // no encoding can shorten a piece this small
                dp[i][j] = cur;
                continue;
            }
            // repetition: smallest period p of cur
            const p = (cur + cur).indexOf(cur, 1);
            if (p < len) {
                const enc = (len / p) + '[' + dp[i][i + p - 1] + ']';
                if (enc.length < cur.length) cur = enc;
            }
            // split into two encoded halves
            for (let m = i; m < j; m++) {
                const split = dp[i][m] + dp[m + 1][j];
                if (split.length < cur.length) cur = split;
            }
            dp[i][j] = cur;
        }
    }
    return dp[0][n - 1];
};
// @lc code=end

// TEST:
console.log(encode('aaa')); // "aaa"
console.log(encode('aaaaa')); // "5[a]"
console.log(encode('aaaaaaaaaa')); // "10[a]"
console.log(encode('aabcaabcd')); // "2[aabc]d"
console.log(encode('abbbabbbcabbbabbbc')); // "2[2[abbb]c]"
console.log(encode('a')); // "a"
console.log(encode('abababab')); // "4[ab]"
console.log(encode('aabcaabc')); // "2[aabc]"
