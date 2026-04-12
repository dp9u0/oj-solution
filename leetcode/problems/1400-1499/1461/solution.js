/*
 * @lc app=leetcode id=1461 lang=javascript
 *
 * [1461] Check If a String Contains All Binary Codes of Size K
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    const need = 1 << k;
    const seen = new Set();

    for (let i = 0; i <= s.length - k; i++) {
        seen.add(s.slice(i, i + k));
        if (seen.size === need) return true;
    }

    return seen.size === need;
};
// @lc code=end

// TEST:
console.log(hasAllCodes("00110110", 2)); // true
console.log(hasAllCodes("0110", 1)); // true
console.log(hasAllCodes("0110", 2)); // false
