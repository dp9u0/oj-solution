/*
 * @lc app=leetcode id=3798 lang=javascript
 *
 * [3798] Largest Even Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function(s) {
    const last2 = s.lastIndexOf('2');
    return last2 === -1 ? '' : s.substring(0, last2 + 1);
};
// @lc code=end

// TEST:
console.log(largestEven("1112")); // "1112"
console.log(largestEven("221")); // "22"
console.log(largestEven("1")); // ""
console.log(largestEven("222")); // "222"
