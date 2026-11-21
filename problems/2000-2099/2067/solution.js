/*
 * @lc app=leetcode.cn id=2067 lang=javascript
 *
 * [2067] 等计数子串的数量
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} count
 * @return {number}
 */
var equalCountSubstrings = function(s, count) {
    const n = s.length;
    let ans = 0;
    for (let k = 1; k <= 26; k++) {
        const W = k * count;
        if (W > n) break;
        const cnt = new Array(26).fill(0);
        let distinct = 0, over = 0;
        for (let i = 0; i < n; i++) {
            const ci = s.charCodeAt(i) - 97;
            cnt[ci]++;
            if (cnt[ci] === 1) distinct++;
            if (cnt[ci] === count + 1) over++;
            if (i >= W) {
                const co = s.charCodeAt(i - W) - 97;
                cnt[co]--;
                if (cnt[co] === 0) distinct--;
                if (cnt[co] === count) over--;
            }
            if (i >= W - 1 && distinct === k && over === 0) ans++;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(equalCountSubstrings("aaabcbbcc", 3)); // 3
console.log(equalCountSubstrings("abcd", 2)); // 0
console.log(equalCountSubstrings("a", 5)); // 0
console.log(equalCountSubstrings("aabc", 1)); // 7 (4 singles + "ab","bc" + "abc")
