/*
 * @lc app=leetcode id=3303 lang=javascript
 *
 * [3303] Find the Occurrence of First Almost Equal Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} pattern
 * @return {number}
 */
var minStartingIndex = function(s, pattern) {
    const n = s.length, m = pattern.length;

    const zFunc = (str) => {
        const len = str.length;
        const z = new Int32Array(len);
        z[0] = len;
        let l = 0, r = 0;
        for (let i = 1; i < len; i++) {
            if (i < r) z[i] = Math.min(r - i, z[i - l]);
            while (i + z[i] < len && str.charCodeAt(z[i]) === str.charCodeAt(i + z[i])) z[i]++;
            if (i + z[i] > r) { l = i; r = i + z[i]; }
        }
        return z;
    };

    const fwd = zFunc(pattern + '#' + s);
    const revS = [...s].reverse().join('');
    const revP = [...pattern].reverse().join('');
    const rev = zFunc(revP + '#' + revS);

    for (let i = 0; i <= n - m; i++) {
        const prefix = fwd[m + 1 + i];
        const suffix = rev[m + 1 + (n - m - i)];
        if (prefix >= m || prefix + suffix >= m - 1) return i;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(minStartingIndex("abcdefg", "bcdffg")); // 1
console.log(minStartingIndex("ababbababa", "bacaba")); // 4
console.log(minStartingIndex("abcd", "dba")); // -1
console.log(minStartingIndex("dde", "d")); // 0
console.log(minStartingIndex("abcde", "abcde")); // 0
console.log(minStartingIndex("abcde", "fbcde")); // 0
