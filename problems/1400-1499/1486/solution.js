/*
 * @lc app=leetcode id=1486 lang=javascript
 *
 * [1486] XOR Operation in an Array
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result ^= start + 2 * i;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(xorOperation(5, 0)); // 8
console.log(xorOperation(4, 3)); // 8
console.log(xorOperation(1, 7)); // 7
console.log(xorOperation(10, 5)); // 2
console.log(xorOperation(3, 1)); // 6
