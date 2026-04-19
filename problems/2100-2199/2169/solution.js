/*
 * @lc app=leetcode id=2169 lang=javascript
 *
 * [2169] Count Operations to Obtain Zero
 */

// @lc code=start
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let ops = 0;
    while (num1 > 0 && num2 > 0) {
        if (num1 >= num2) {
            ops += Math.floor(num1 / num2);
            num1 %= num2;
        } else {
            ops += Math.floor(num2 / num1);
            num2 %= num1;
        }
    }
    return ops;
};
// @lc code=end

// TEST:
console.log(countOperations(2, 3));    // 3
console.log(countOperations(10, 10));  // 1
console.log(countOperations(0, 5));    // 0
console.log(countOperations(1, 1));    // 1
