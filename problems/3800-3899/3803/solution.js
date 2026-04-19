/*
 * @lc app=leetcode id=3803 lang=javascript
 *
 * [3803] Count Residue Prefixes
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function(s) {
    const seen = new Set();
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        seen.add(s[i]);
        if (seen.size === (i + 1) % 3) count++;
    }

    return count;
};
// @lc code=end

// TEST:
console.log(residuePrefixes("abc")); // 2
console.log(residuePrefixes("dd"));  // 1
console.log(residuePrefixes("bob")); // 2
