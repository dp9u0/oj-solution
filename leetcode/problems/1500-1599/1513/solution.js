/*
 * @lc app=leetcode id=1513 lang=javascript
 *
 * [1513] Number of Substrings With Only 1s
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    const MOD = 1e9 + 7;
    let result = 0, len = 0;

    for (const c of s) {
        if (c === '1') {
            len++;
            result = (result + len) % MOD;
        } else {
            len = 0;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(numSub("0110111")); // 9
console.log(numSub("101")); // 2
console.log(numSub("111111")); // 21
console.log(numSub("0")); // 0
console.log(numSub("1")); // 1
