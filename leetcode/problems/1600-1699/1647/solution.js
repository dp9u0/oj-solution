/*
 * @lc app=leetcode id=1647 lang=javascript
 *
 * [1647] Minimum Deletions to Make Character Frequencies Unique
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let freq = new Array(26).fill(0);
    for (let c of s) freq[c.charCodeAt(0) - 97]++;
    freq.sort((a, b) => b - a);
    let used = new Set();
    let deletions = 0;
    for (let f of freq) {
        if (f === 0) break;
        while (f > 0 && used.has(f)) {
            f--;
            deletions++;
        }
        used.add(f);
    }
    return deletions;
};
// @lc code=end

// TEST:
console.log(minDeletions('aab'));
console.log(minDeletions('aaabbbcc'));
console.log(minDeletions('ceabaacb'));
