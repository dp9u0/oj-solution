/*
 * @lc app=leetcode id=2520 lang=javascript
 *
 * [2520] Count the Digits That Divide a Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0, n = num;
    while (n > 0) {
        if (num % (n % 10) === 0) count++;
        n = Math.floor(n / 10);
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countDigits(7)); // 1
console.log(countDigits(121)); // 2
console.log(countDigits(1248)); // 4
console.log(countDigits(11)); // 2
