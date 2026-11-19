/*
 * @lc app=leetcode.cn id=1062 lang=javascript
 *
 * [1062] 最长重复子串的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestRepeatingSubstring = function(s) {
    const n = s.length;
    const MOD = 1000000007, BASE = 131;
    const codes = [...s].map((c) => c.charCodeAt(0) - 96);

    const hasDup = (L) => {
        if (L === 0) return true;
        let h = 0, pw = 1;
        for (let i = 0; i < L; i++) {
            h = (h * BASE + codes[i]) % MOD;
            pw = (pw * BASE) % MOD;
        }
        const seen = new Map(); // hash -> list of start indices (verify on hit)
        seen.set(h, [0]);
        for (let i = L; i < n; i++) {
            h = (h * BASE + codes[i] - pw * codes[i - L]) % MOD;
            if (h < 0) h += MOD;
            const start = i - L + 1;
            const list = seen.get(h);
            if (list) {
                for (const j of list) {
                    if (s.substr(j, L) === s.substr(start, L)) return true;
                }
                list.push(start);
            } else {
                seen.set(h, [start]);
            }
        }
        return false;
    };

    let lo = 0, hi = n - 1;
    while (lo < hi) {
        const mid = (lo + hi + 1) >> 1;
        if (hasDup(mid)) lo = mid;
        else hi = mid - 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(longestRepeatingSubstring("abcd")); // 0
console.log(longestRepeatingSubstring("abbaba")); // 2
console.log(longestRepeatingSubstring("aabcaabdaab")); // 3
console.log(longestRepeatingSubstring("aaaaa")); // 4
console.log(longestRepeatingSubstring("banana")); // 3 ("ana" overlaps)
console.log(longestRepeatingSubstring("a")); // 0
