/*
 * @lc app=leetcode id=1915 lang=javascript
 *
 * [1915] Number of Wonderful Substrings
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
    const count = new Array(1024).fill(0);
    count[0] = 1;
    let mask = 0;
    let result = 0;

    for (const ch of word) {
        mask ^= 1 << (ch.charCodeAt(0) - 97);
        result += count[mask];
        for (let i = 0; i < 10; i++) {
            result += count[mask ^ (1 << i)];
        }
        count[mask]++;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(wonderfulSubstrings('aba'));  // 4
console.log(wonderfulSubstrings('aabb')); // 9
console.log(wonderfulSubstrings('he'));   // 2
