/*
 * @lc app=leetcode id=2014 lang=javascript
 *
 * [2014] Longest Subsequence Repeated k Times
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var longestSubsequenceRepeatedK = function(s, k) {
    const n = s.length;
    const np = new Int32Array((n + 1) * 26);
    for (let c = 0; c < 26; c++) np[n * 26 + c] = n;
    for (let i = n - 1; i >= 0; i--) {
        for (let c = 0; c < 26; c++) np[i * 26 + c] = np[(i + 1) * 26 + c];
        np[i * 26 + (s.charCodeAt(i) - 97)] = i;
    }

    const freq = new Int32Array(26);
    for (let i = 0; i < n; i++) freq[s.charCodeAt(i) - 97]++;

    const maxLen = Math.floor(n / k);
    if (maxLen === 0) return '';

    const seq = [];

    const matchK = (len) => {
        let pos = 0;
        for (let rep = 0; rep < k; rep++) {
            for (let i = 0; i < len; i++) {
                const next = np[pos * 26 + seq[i]];
                if (next >= n) return -1;
                pos = next + 1;
            }
        }
        return pos;
    };

    const dfs = (idx, L) => {
        if (idx === L) return true;
        for (let c = 25; c >= 0; c--) {
            if (freq[c] < k) continue;
            seq[idx] = c;
            if (matchK(idx + 1) >= 0 && dfs(idx + 1, L)) return true;
        }
        return false;
    };

    for (let L = maxLen; L >= 1; L--) {
        if (dfs(0, L)) {
            return seq.slice(0, L).map(c => String.fromCharCode(97 + c)).join('');
        }
    }
    return '';
};
// @lc code=end

// TEST:
console.log(longestSubsequenceRepeatedK('letsleetcode', 2)); // 'let'
console.log(longestSubsequenceRepeatedK('bb', 2)); // 'b'
console.log(longestSubsequenceRepeatedK('ab', 2)); // ''
console.log(longestSubsequenceRepeatedK('ababb', 2)); // 'ab'
console.log(longestSubsequenceRepeatedK('aaaa', 2)); // 'aa'
