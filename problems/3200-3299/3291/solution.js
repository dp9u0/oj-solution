/*
 * @lc app=leetcode id=3291 lang=javascript
 *
 * [3291] Minimum Number of Valid Strings to Form Target I
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var minValidStrings = function(words, target) {
    // Build Trie
    const trie = {};
    for (const word of words) {
        let node = trie;
        for (const ch of word) {
            if (!node[ch]) node[ch] = {};
            node = node[ch];
        }
    }

    const n = target.length;
    // For each position, find max valid prefix length via Trie
    const maxLen = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let node = trie;
        for (let j = i; j < n; j++) {
            if (!node[target[j]]) break;
            node = node[target[j]];
            maxLen[i] = j - i + 1;
        }
    }

    // Greedy jump game II
    let jumps = 0, curEnd = 0, farthest = 0;
    for (let i = 0; i < n; i++) {
        farthest = Math.max(farthest, i + maxLen[i]);
        if (farthest >= n) return jumps + 1;
        if (i === curEnd) {
            if (farthest === curEnd) return -1;
            jumps++;
            curEnd = farthest;
        }
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(minValidStrings(["abc","aaaaa","bcdef"], "aabcdabc"));
console.log(minValidStrings(["abababab","ab"], "ababaababa"));
console.log(minValidStrings(["abcdef"], "xyz"));
