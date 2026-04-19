/*
 * @lc app=leetcode id=2767 lang=javascript
 *
 * [2767] Partition String Into Minimum Beautiful Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumBeautifulSubstrings = function(s) {
    const n = s.length;
    const powers = new Set();
    let p = 1;
    for (let i = 0; i < 7; i++) {
        powers.add(p.toString(2));
        p *= 5;
    }
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (s[j - 1] === '0') continue;
            const sub = s.substring(j - 1, i);
            if (powers.has(sub)) {
                dp[i] = Math.min(dp[i], dp[j - 1] + 1);
            }
        }
    }
    return dp[n] === Infinity ? -1 : dp[n];
};
// @lc code=end

// TEST:
console.log(minimumBeautifulSubstrings("1011"));
console.log(minimumBeautifulSubstrings("111"));
console.log(minimumBeautifulSubstrings("0"));
console.log(minimumBeautifulSubstrings("1"));
