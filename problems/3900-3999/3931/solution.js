/*
 * @lc app=leetcode id=3931 lang=javascript
 *
 * [3931] Check Adjacent Digit Differences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function(s) {
    for (let i = 1; i < s.length; i++) {
        if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1)) > 2) {
            return false;
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(isAdjacentDiffAtMostTwo("132")); // true
console.log(isAdjacentDiffAtMostTwo("129")); // false
console.log(isAdjacentDiffAtMostTwo("12")); // true
console.log(isAdjacentDiffAtMostTwo("99")); // false
console.log(isAdjacentDiffAtMostTwo("0000")); // true
console.log(isAdjacentDiffAtMostTwo("1357531")); // true
console.log(isAdjacentDiffAtMostTwo("3030")); // false
