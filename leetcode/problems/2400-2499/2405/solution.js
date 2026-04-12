/*
 * @lc app=leetcode id=2405 lang=javascript
 *
 * [2405] Optimal Partition of String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let count = 1;
    let mask = 0;

    for (const ch of s) {
        const bit = 1 << (ch.charCodeAt(0) - 97);
        if (mask & bit) {
            count++;
            mask = 0;
        }
        mask |= bit;
    }

    return count;
};
// @lc code=end

// TEST:
console.log(partitionString('abacaba'));
// Expected: 4

console.log(partitionString('ssssss'));
// Expected: 6

console.log(partitionString('abcdef'));
// Expected: 1
