/*
 * @lc app=leetcode id=3545 lang=javascript
 *
 * [3545] Minimum Deletions for At Most K Distinct Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s, k) {
    const freq = new Array(26).fill(0);
    for (const c of s) freq[c.charCodeAt(0) - 97]++;
    const counts = freq.filter(f => f > 0).sort((a, b) => a - b);
    let deletions = 0;
    for (let i = 0; i < counts.length - k; i++) {
        deletions += counts[i];
    }
    return deletions;
};
// @lc code=end

// TEST:
console.log(minDeletion("abc", 2)); // 1
console.log(minDeletion("aabb", 2)); // 0
console.log(minDeletion("yyyzz", 1)); // 2
console.log(minDeletion("aaabbbcccddd", 1)); // 6
console.log(minDeletion("a", 1)); // 0
