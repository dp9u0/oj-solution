/*
 * @lc app=leetcode id=2235 lang=javascript
 *
 * [2235] Add Two Integers
 */

// @lc code=start
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function(num1, num2) {
    return num1 + num2;
};
// @lc code=end

// TEST:
console.log(sum(12, 5)); // 17
console.log(sum(-10, 4)); // -6
console.log(sum(0, 0)); // 0
console.log(sum(100, -100)); // 0
console.log(sum(-50, -50)); // -100
