/*
 * @lc app=leetcode id=3085 lang=javascript
 *
 * [3085] Minimum Deletions to Make String K-Special
 */

// @lc code=start
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
    const freq = new Array(26).fill(0);
    for (const ch of word) {
        freq[ch.charCodeAt(0) - 97]++;
    }
    const freqs = freq.filter(f => f > 0);
    let result = word.length;

    for (const target of freqs) {
        let deletions = 0;
        for (const f of freqs) {
            if (f < target) {
                deletions += f;
            } else if (f > target + k) {
                deletions += f - target - k;
            }
        }
        result = Math.min(result, deletions);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(minimumDeletions("aabcaba", 0)); // 3
console.log(minimumDeletions("dabdcbdcdcd", 2)); // 2
console.log(minimumDeletions("aaabaaa", 2)); // 1
