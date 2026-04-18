/*
 * @lc app=leetcode id=3844 lang=javascript
 *
 * [3844] Longest Almost-Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var almostPalindromic = function(s) {
    const n = s.length;
    const dp = new Uint8Array(n * n);
    const get = (l, r) => dp[l * n + r];
    const set = (l, r, v) => { dp[l * n + r] = v > 2 ? 2 : v; };

    let ans = 0;
    for (let len = 2; len <= n; len++) {
        for (let l = 0; l <= n - len; l++) {
            const r = l + len - 1;
            if (s[l] === s[r]) {
                set(l, r, len === 2 ? 0 : get(l + 1, r - 1));
            } else {
                set(l, r, 1 + Math.min(get(l + 1, r), get(l, r - 1)));
            }
            if (get(l, r) <= 1 && len > ans) ans = len;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(almostPalindromic("abca")); // 4
console.log(almostPalindromic("abba")); // 4
console.log(almostPalindromic("zzabba")); // 5
console.log(almostPalindromic("abc")); // 2
console.log(almostPalindromic("aa")); // 2
console.log(almostPalindromic("abcdefedcba")); // 11
