/*
 * @lc app=leetcode.cn id=3104 lang=javascript
 *
 * [3104] 查找最长的自包含子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxSubstringLength = function(s) {
    const n = s.length;
    const first = new Array(26).fill(-1);
    const last = new Array(26).fill(-1);
    const cnt = Array.from({ length: 26 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i < n; i++) {
        const c = s.charCodeAt(i) - 97;
        if (first[c] === -1) first[c] = i;
        last[c] = i;
        for (let d = 0; d < 26; d++) cnt[d][i + 1] = cnt[d][i];
        cnt[c][i + 1]++;
    }
    let ans = -1;
    for (let i = 0; i < n; i++) {
        for (let c = 0; c < 26; c++) {
            const e = last[c];
            if (e < i) continue;
            if (i === 0 && e === n - 1) continue; // t != s
            let ok = true;
            for (let d = 0; d < 26; d++) {
                if (first[d] === -1) continue;
                if (cnt[d][e + 1] - cnt[d][i] > 0) {
                    // d occurs inside the window; must be fully contained
                    if (first[d] < i || last[d] > e) { ok = false; break; }
                }
            }
            if (ok && e - i + 1 > ans) ans = e - i + 1;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxSubstringLength("abba")); // 2
console.log(maxSubstringLength("abab")); // -1
console.log(maxSubstringLength("abacd")); // 4
console.log(maxSubstringLength("aa")); // -1
console.log(maxSubstringLength("abcabc")); // -1
