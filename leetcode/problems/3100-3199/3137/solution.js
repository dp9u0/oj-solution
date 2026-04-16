/*
 * @lc app=leetcode id=3137 lang=javascript
 *
 * [3137] Minimum Number of Operations to Make Word K-Periodic
 */

// @lc code=start
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function(word, k) {
    const freq = new Map();
    const blocks = word.length / k;

    for (let i = 0; i < word.length; i += k) {
        const block = word.substring(i, i + k);
        freq.set(block, (freq.get(block) || 0) + 1);
    }

    let maxFreq = 0;
    for (const count of freq.values()) {
        maxFreq = Math.max(maxFreq, count);
    }

    return blocks - maxFreq;
};
// @lc code=end

// TEST:
console.log(minimumOperationsToMakeKPeriodic("leetcodeleet", 4)); // 1
console.log(minimumOperationsToMakeKPeriodic("leetcoleet", 2));   // 3
console.log(minimumOperationsToMakeKPeriodic("ababab", 2));       // 0
