/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let cnt = new Map();
    for (let c of s) cnt.set(c, (cnt.get(c) || 0) + 1);
    let entries = [...cnt.entries()].sort((a, b) => b[1] - a[1]);
    return entries.map(([c, n]) => c.repeat(n)).join('');
};
// @lc code=end

// TEST:
console.log(frequencySort('tree')); // 'eert' or 'eetr'
console.log(frequencySort('cccaaa')); // 'cccaaa' or 'aaaccc'
console.log(frequencySort('Aabb')); // 'bbAa' or 'bbaA'
