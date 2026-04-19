/*
 * @lc app=leetcode id=2894 lang=javascript
 *
 * [2894] Divisible and Non-divisible Sums Difference
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    const total = n * (n + 1) / 2;
    const k = Math.floor(n / m);
    const num2 = m * k * (k + 1) / 2;
    return total - 2 * num2;
};
// @lc code=end

// TEST:
console.log(differenceOfSums(10, 3));   // 19
console.log(differenceOfSums(5, 6));    // 15
console.log(differenceOfSums(5, 1));    // -15
console.log(differenceOfSums(1, 1));    // -1
console.log(differenceOfSums(1000, 1)); // -500500
console.log(differenceOfSums(7, 7));    // 21-7=14
