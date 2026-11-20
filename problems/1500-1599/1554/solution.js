/*
 * @lc app=leetcode.cn id=1554 lang=javascript
 *
 * [1554] 只有一个不同字符的字符串
 */

// @lc code=start
/**
 * @param {string[]} dict
 * @return {boolean}
 */
var differByOne = function(dict) {
    const M1 = 1000000007, M2 = 998244353, B1 = 131, B2 = 137;
    const seen = new Set();
    for (const s of dict) {
        const m = s.length;
        const pre1 = new Array(m + 1).fill(0), pre2 = new Array(m + 1).fill(0);
        const suf1 = new Array(m + 1).fill(0), suf2 = new Array(m + 1).fill(0);
        const pw1 = new Array(m + 1).fill(1), pw2 = new Array(m + 1).fill(1);
        for (let i = 1; i <= m; i++) {
            pw1[i] = (pw1[i - 1] * B1) % M1;
            pw2[i] = (pw2[i - 1] * B2) % M2;
        }
        for (let i = 0; i < m; i++) {
            const c = s.charCodeAt(i);
            pre1[i + 1] = (pre1[i] * B1 + c) % M1;
            pre2[i + 1] = (pre2[i] * B2 + c) % M2;
        }
        for (let i = m - 1; i >= 0; i--) {
            const c = s.charCodeAt(i);
            suf1[i] = (c + B1 * suf1[i + 1]) % M1;
            suf2[i] = (c + B2 * suf2[i + 1]) % M2;
        }
        // mask position i: pre[i] (weights B^0..) + B^i * suf[i+1] (local weights)
        for (let i = 0; i < m; i++) {
            const h1 = (pre1[i] + pw1[i] * suf1[i + 1]) % M1;
            const h2 = (pre2[i] + pw2[i] * suf2[i + 1]) % M2;
            const key = i + ',' + h1 + ',' + h2;
            if (seen.has(key)) return true;
            seen.add(key);
        }
    }
    return false;
};
// @lc code=end

// TEST:
console.log(differByOne(["abcd","acbd","aacd"])); // true (a*cd)
console.log(differByOne(["ab","cd","yz"])); // false
console.log(differByOne(["abcd","cccc","abyd","abab"])); // true (ab*d)
console.log(differByOne(["ab","ba","aa"])); // true (*a)
console.log(differByOne(["abc","def"])); // false
