/*
 * @lc app=leetcode id=3019 lang=javascript
 *
 * [3019] Number of Changing Keys
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let ans = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i].toLowerCase() !== s[i - 1].toLowerCase()) ans++;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countKeyChanges("aAbBcC")); // 2
console.log(countKeyChanges("AaAaAaaA")); // 0
console.log(countKeyChanges("ab")); // 1
