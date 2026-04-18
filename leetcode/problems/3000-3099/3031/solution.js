/*
 * @lc app=leetcode id=3031 lang=javascript
 *
 * [3031] Minimum Time to Revert Word to Initial State II
 */

// @lc code=start
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function(word, k) {
    const n = word.length;
    const z = new Array(n).fill(0);
    z[0] = n;
    let l = 0, r = 0;
    for (let i = 1; i < n; i++) {
        if (i < r) z[i] = Math.min(r - i, z[i - l]);
        while (i + z[i] < n && word[z[i]] === word[i + z[i]]) z[i]++;
        if (i + z[i] > r) { l = i; r = i + z[i]; }
    }
    for (let t = 1; ; t++) {
        const s = t * k;
        if (s >= n) return t;
        if (z[s] >= n - s) return t;
    }
};
// @lc code=end

// TEST:
console.log(minimumTimeToInitialState("abacaba", 3)); // 2
console.log(minimumTimeToInitialState("abacaba", 4)); // 1
console.log(minimumTimeToInitialState("abcbabcd", 2)); // 4
console.log(minimumTimeToInitialState("a", 1)); // 1
console.log(minimumTimeToInitialState("aa", 1)); // 1
console.log(minimumTimeToInitialState("ab", 1)); // 2
