/*
 * @lc app=leetcode id=1611 lang=javascript
 *
 * [1611] Minimum One Bit Operations to Make Integers Zero
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function(n) {
    let result = 0;
    while (n > 0) {
        result ^= n;
        n >>= 1;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minimumOneBitOperations(3));    // 2
console.log(minimumOneBitOperations(6));    // 4
console.log(minimumOneBitOperations(0));    // 0
console.log(minimumOneBitOperations(1));    // 1
console.log(minimumOneBitOperations(4));    // 7
console.log(minimumOneBitOperations(7));    // 5
console.log(minimumOneBitOperations(1000000000)); // large
