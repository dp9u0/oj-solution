/*
 * @lc app=leetcode id=2938 lang=javascript
 *
 * [2938] Separate Black and White Balls
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let result = 0;
    let whitePos = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            result += i - whitePos;
            whitePos++;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minimumSteps("101")); // 1
console.log(minimumSteps("100")); // 2
console.log(minimumSteps("0111")); // 0
