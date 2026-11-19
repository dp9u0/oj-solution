/*
 * @lc app=leetcode.cn id=727 lang=javascript
 *
 * [727] 最小窗口子序列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var minWindow = function(s1, s2) {
    const n = s1.length, m = s2.length;
    // next[i][c] = smallest index >= i holding char c (n = sentinel)
    const next = Array.from({ length: n + 1 }, () => new Array(26).fill(n));
    for (let i = n - 1; i >= 0; i--) {
        next[i] = next[i + 1].slice();
        next[i][s1.charCodeAt(i) - 97] = i;
    }
    let best = null;
    for (let i = 0; i < n; i++) {
        if (s1[i] !== s2[0]) continue;
        let pos = i, ok = true;
        for (let p = 1; p < m; p++) {
            pos = next[pos + 1][s2.charCodeAt(p) - 97];
            if (pos >= n) { ok = false; break; }
        }
        if (ok) {
            const len = pos - i + 1;
            if (best === null || len < best.length) {
                best = s1.slice(i, pos + 1);
                if (len === m) break; // cannot get shorter
            }
        }
    }
    return best === null ? '' : best;
};
// @lc code=end

// TEST:
console.log(minWindow('abcdebdde', 'bde')); // "bcde"
console.log(minWindow('jmeqksfrsdcmsiwvaovztaqenprpvnbstl', 'u')); // ""
console.log(minWindow('abc', 'b')); // "b"
console.log(minWindow('abc', 'd')); // ""
console.log(minWindow('aaabbaabbaa', 'aab')); // "aab" (leftmost of the ties)
console.log(minWindow('geeksforgeeks', 'eks')); // "eeks"
