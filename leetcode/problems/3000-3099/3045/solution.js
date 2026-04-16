/*
 * @lc app=leetcode id=3045 lang=javascript
 *
 * [3045] Count Prefix and Suffix Pairs II
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let ans = 0;
    const root = {};

    for (const w of words) {
        const n = w.length;

        // Z-function to find border lengths
        const z = new Array(n).fill(0);
        let l = 0, r = 0;
        for (let i = 1; i < n; i++) {
            if (i < r) z[i] = Math.min(r - i, z[i - l]);
            while (i + z[i] < n && w[z[i]] === w[i + z[i]]) z[i]++;
            if (i + z[i] > r) { l = i; r = i + z[i]; }
        }

        // Collect all border lengths (prefix = suffix)
        const borders = new Set();
        borders.add(n);
        for (let i = 1; i < n; i++) {
            if (z[i] >= n - i) borders.add(n - i);
        }

        // Walk trie, count matches at border depths
        let node = root;
        for (let d = 0; d < n; d++) {
            const c = w[d];
            if (!node[c]) node[c] = {};
            node = node[c];
            if (borders.has(d + 1)) {
                ans += node.cnt || 0;
            }
        }
        node.cnt = (node.cnt || 0) + 1;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"])); // 4
console.log(countPrefixSuffixPairs(["pa", "papa", "ma", "mama"])); // 2
console.log(countPrefixSuffixPairs(["abab", "ab"]));              // 0
