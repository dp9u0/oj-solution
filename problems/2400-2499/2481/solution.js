/*
 * @lc app=leetcode id=2481 lang=javascript
 *
 * [2481] Minimum Cuts to Divide a Circle
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function(n) {
    if (n === 1) return 0;
    return n % 2 === 0 ? n / 2 : n;
};
// @lc code=end

// TEST:
console.log(numberOfCuts(4)); // 2
console.log(numberOfCuts(3)); // 3
console.log(numberOfCuts(1)); // 0
