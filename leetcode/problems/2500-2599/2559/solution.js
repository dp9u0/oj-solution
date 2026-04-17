/*
 * @lc app=leetcode id=2559 lang=javascript
 *
 * [2559] Count Vowel Strings in Ranges
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const n = words.length;
    const prefix = new Int32Array(n + 1);
    for (let i = 0; i < n; i++) {
        const w = words[i];
        const ok = vowels.has(w[0]) && vowels.has(w[w.length - 1]);
        prefix[i + 1] = prefix[i] + (ok ? 1 : 0);
    }
    return queries.map(([l, r]) => prefix[r + 1] - prefix[l]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(vowelStrings(['aba','bcb','ece','aa','e'], [[0,2],[1,4],[1,1]]))); // [2,3,0]
console.log(JSON.stringify(vowelStrings(['a','e','i'], [[0,2],[0,1],[2,2]])));               // [3,2,1]
console.log(JSON.stringify(vowelStrings(['abc'], [[0,0]])));                                  // [0]
console.log(JSON.stringify(vowelStrings(['a'], [[0,0]])));                                    // [1]
