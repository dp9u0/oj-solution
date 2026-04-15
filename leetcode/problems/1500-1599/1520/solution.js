/*
 * @lc app=leetcode id=1520 lang=javascript
 *
 * [1520] Maximum Number of Non-Overlapping Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {
    const n = s.length;
    const first = new Array(26).fill(n);
    const last = new Array(26).fill(-1);
    for (let i = 0; i < n; i++) {
        const c = s.charCodeAt(i) - 97;
        first[c] = Math.min(first[c], i);
        last[c] = Math.max(last[c], i);
    }

    const intervals = [];
    for (let c = 0; c < 26; c++) {
        if (first[c] > last[c]) continue;
        let L = first[c], R = last[c];
        let stable = false;
        while (!stable) {
            stable = true;
            for (let j = L; j <= R; j++) {
                const d = s.charCodeAt(j) - 97;
                if (first[d] < L) { L = first[d]; stable = false; }
                if (last[d] > R) { R = last[d]; stable = false; }
            }
        }
        if (L === first[c]) intervals.push([L, R]);
    }

    intervals.sort((a, b) => a[1] - b[1] || b[0] - a[0]);

    const result = [];
    let end = -1;
    for (const [l, r] of intervals) {
        if (l > end) {
            result.push(s.substring(l, r + 1));
            end = r;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maxNumOfSubstrings("adefaddaccc")); // ["e","f","ccc"]
console.log(maxNumOfSubstrings("abbaccd")); // ["bb","cc","d"]
