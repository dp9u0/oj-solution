/*
 * @lc app=leetcode id=2546 lang=javascript
 *
 * [2546] Apply Bitwise Operations to Make Strings Equal
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function(s, target) {
    return s.includes('1') === target.includes('1');
};
// @lc code=end

// TEST:
console.log(makeStringsEqual("1010", "0110")); // true
console.log(makeStringsEqual("11", "00"));     // false
console.log(makeStringsEqual("00", "00"));     // true
console.log(makeStringsEqual("00", "01"));     // false
