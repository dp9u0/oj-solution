/*
 * @lc app=leetcode.cn id=1100 lang=javascript
 *
 * [1100] 长度为 K 的无重复字符子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    const n = s.length;
    if (k > 26 || k > n) return 0;
    const freq = new Array(26).fill(0);
    let l = 0, ans = 0;
    for (let r = 0; r < n; r++) {
        const c = s.charCodeAt(r) - 97;
        freq[c]++;
        while (freq[c] > 1) { // shrink until duplicate removed
            freq[s.charCodeAt(l) - 97]--;
            l++;
        }
        if (r - l + 1 === k) {
            ans++;
            freq[s.charCodeAt(l) - 97]--; // slide: drop leftmost
            l++;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(numKLenSubstrNoRepeats("havefunonleetcode", 5)); // 6
console.log(numKLenSubstrNoRepeats("home", 5)); // 0 (k > s.length)
console.log(numKLenSubstrNoRepeats("abcabc", 3)); // 4 (abc,bca,cab,abc)
console.log(numKLenSubstrNoRepeats("aaaa", 2)); // 0
console.log(numKLenSubstrNoRepeats("ab", 1)); // 2
console.log(numKLenSubstrNoRepeats("abcdefghijklmnopqrstuvwxyz", 26)); // 1
console.log(numKLenSubstrNoRepeats("abcdefghijklmnopqrstuvwxyz", 27)); // 0 (k > 26)
