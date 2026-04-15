/*
 * @lc app=leetcode id=1790 lang=javascript
 *
 * [1790] Check if One String Swap Can Make Strings Equal
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    const diff = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
            if (diff.length > 2) return false;
        }
    }
    if (diff.length === 0) return true;
    if (diff.length !== 2) return false;
    const [i, j] = diff;
    return s1[i] === s2[j] && s1[j] === s2[i];
};
// @lc code=end

// TEST:
console.log(areAlmostEqual("bank", "kanb")); // true
console.log(areAlmostEqual("attack", "defend")); // false
console.log(areAlmostEqual("kelb", "kelb")); // true
console.log(areAlmostEqual("abcd", "dcba")); // false
