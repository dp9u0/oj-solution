/*
 * @lc app=leetcode id=1358 lang=javascript
 *
 * [1358] Number of Substrings Containing All Three Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let lastA = -1, lastB = -1, lastC = -1;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') lastA = i;
        else if (s[i] === 'b') lastB = i;
        else lastC = i;
        if (lastA >= 0 && lastB >= 0 && lastC >= 0) {
            result += Math.min(lastA, lastB, lastC) + 1;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(numberOfSubstrings("abcabc")); // 10
console.log(numberOfSubstrings("aaacb")); // 3
console.log(numberOfSubstrings("abc")); // 1
