/*
 * @lc app=leetcode id=738 lang=javascript
 *
 * [738] Monotone Increasing Digits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    const digits = String(n).split('').map(Number);
    let mark = digits.length;

    for (let i = digits.length - 2; i >= 0; i--) {
        if (digits[i] > digits[i + 1]) {
            digits[i]--;
            mark = i + 1;
        }
    }

    for (let i = mark; i < digits.length; i++) {
        digits[i] = 9;
    }

    return Number(digits.join(''));
};
// @lc code=end

// TEST:
console.log(monotoneIncreasingDigits(10));    // 9
console.log(monotoneIncreasingDigits(1234));  // 1234
console.log(monotoneIncreasingDigits(332));   // 299
console.log(monotoneIncreasingDigits(0));     // 0
console.log(monotoneIncreasingDigits(100));   // 99
console.log(monotoneIncreasingDigits(120));   // 119
