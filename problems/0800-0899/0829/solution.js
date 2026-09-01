/*
 * @lc app=leetcode id=829 lang=javascript
 *
 * [829] Consecutive Numbers Sum
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function(n) {
    let count = 0;
    for (let k = 1; (k * (k - 1)) / 2 < n; k++) {
        const m = n - (k * (k - 1)) / 2;
        if (m % k === 0) {
            count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(consecutiveNumbersSum(5)); // 2
console.log(consecutiveNumbersSum(9)); // 3
console.log(consecutiveNumbersSum(15)); // 4
console.log(consecutiveNumbersSum(1)); // 1
console.log(consecutiveNumbersSum(2)); // 1
console.log(consecutiveNumbersSum(1000000000)); // 10 (number of odd divisors of 10^9)
