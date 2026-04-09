/*
 * @lc app=leetcode id=3090 lang=javascript
 *
 * [3090] Maximum Length Substring With Two Occurrences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    const cnt = new Array(26).fill(0);
    let ans = 0, l = 0;
    for (let r = 0; r < s.length; r++) {
        const idx = s.charCodeAt(r) - 97;
        cnt[idx]++;
        while (cnt[idx] > 2) {
            cnt[s.charCodeAt(l) - 97]--;
            l++;
        }
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximumLengthSubstring("bcbbbcba")); // 4
console.log(maximumLengthSubstring("aaaa")); // 2
console.log(maximumLengthSubstring("abcabc")); // 6
