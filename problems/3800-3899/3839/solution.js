/*
 * @lc app=leetcode id=3839 lang=javascript
 *
 * [3839] Number of Prefix Connected Groups
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {number}
 */
var prefixConnected = function(words, k) {
    const count = new Map();
    for (const w of words) {
        if (w.length < k) continue;
        const prefix = w.slice(0, k);
        count.set(prefix, (count.get(prefix) || 0) + 1);
    }
    let groups = 0;
    for (const c of count.values()) {
        if (c >= 2) groups++;
    }
    return groups;
};
// @lc code=end

// TEST:
console.log(prefixConnected(["apple","apply","banana","bandit"], 2)); // 2
console.log(prefixConnected(["car","cat","cartoon"], 3)); // 1
console.log(prefixConnected(["bat","dog","dog","doggy","bat"], 3)); // 2
console.log(prefixConnected(["a","ab","ac"], 1)); // 1
console.log(prefixConnected(["hello","world"], 3)); // 0
