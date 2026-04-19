/*
 * @lc app=leetcode id=2186 lang=javascript
 *
 * [2186] Minimum Number of Steps to Make Two Strings Anagram II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const count = new Array(26).fill(0);
    for (const c of s) count[c.charCodeAt(0) - 97]++;
    for (const c of t) count[c.charCodeAt(0) - 97]--;
    let steps = 0;
    for (const d of count) steps += Math.abs(d);
    return steps;
};
// @lc code=end

// TEST:
console.log(minSteps("leetcode", "coats"));
console.log(minSteps("night", "thing"));
console.log(minSteps("a", "b"));
