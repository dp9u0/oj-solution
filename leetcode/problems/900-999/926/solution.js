/*
 * @lc app=leetcode id=926 lang=javascript
 *
 * [926] Flip String to Monotone Increasing
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let ones = 0;
    let result = 0;
    for (const c of s) {
        if (c === '1') {
            ones++;
        } else {
            result = Math.min(result + 1, ones);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minFlipsMonoIncr("00110")); // 1
console.log(minFlipsMonoIncr("010110")); // 2
console.log(minFlipsMonoIncr("00011000")); // 2
