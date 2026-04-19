/*
 * @lc app=leetcode id=1837 lang=javascript
 *
 * [1837] Sum of Digits in Base K
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let sum = 0;
    while (n > 0) {
        sum += n % k;
        n = Math.floor(n / k);
    }
    return sum;
};
// @lc code=end

// TEST:
console.log(sumBase(34, 6)); // 9
console.log(sumBase(10, 10)); // 1
console.log(sumBase(1, 2)); // 1
console.log(sumBase(100, 2)); // 3
console.log(sumBase(42, 2)); // 3
