/*
 * @lc app=leetcode id=1446 lang=javascript
 *
 * [1446] Consecutive Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let maxLen = 1, curLen = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            curLen++;
            if (curLen > maxLen) maxLen = curLen;
        } else {
            curLen = 1;
        }
    }
    return maxLen;
};
// @lc code=end

// TEST:
console.log(maxPower("leetcode")); // 2
console.log(maxPower("abbcccddddeeeeedcba")); // 5
console.log(maxPower("a")); // 1
console.log(maxPower("aaaa")); // 4
console.log(maxPower("abc")); // 1
