/*
 * @lc app=leetcode id=3178 lang=javascript
 *
 * [3178] Find the Child Who Has the Ball After K Seconds
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    const round = 2 * (n - 1);
    const r = k % round;
    return r < n ? r : round - r;
};
// @lc code=end

// TEST:
console.log(numberOfChild(3, 5));  // 1
console.log(numberOfChild(5, 6));  // 2
console.log(numberOfChild(4, 2));  // 2
