/*
 * @lc app=leetcode id=3746 lang=javascript
 *
 * [3746] Minimum String Length After Balanced Removals
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minLengthAfterRemovals = function(s) {
    let countA = 0, countB = 0;
    for (let c of s) {
        if (c === 'a') countA++;
        else countB++;
    }
    return Math.abs(countA - countB);
};
// @lc code=end

// TEST:
console.log(minLengthAfterRemovals('aabbab')); // 0
console.log(minLengthAfterRemovals('aaaa')); // 4
console.log(minLengthAfterRemovals('aaabb')); // 1
