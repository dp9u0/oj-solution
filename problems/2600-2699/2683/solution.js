/*
 * @lc app=leetcode id=2683 lang=javascript
 *
 * [2683] Neighboring Bitwise XOR
 */

// @lc code=start
/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    return derived.reduce((xor, v) => xor ^ v, 0) === 0;
};
// @lc code=end

// TEST:
console.log(doesValidArrayExist([1,1,0])); // true
console.log(doesValidArrayExist([1,1]));   // true
console.log(doesValidArrayExist([1,0]));   // false
