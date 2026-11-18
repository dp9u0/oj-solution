/*
 * @lc app=leetcode.cn id=625 lang=javascript
 *
 * [625] 最小因式分解
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var smallestFactorization = function(num) {
    if (num === 1) return 1;
    const digits = [];
    for (let f = 9; f >= 2; f--) {
        while (num % f === 0) {
            digits.push(f);
            num /= f;
        }
    }
    if (num !== 1) return 0; // prime factor > 7 impossible for a single digit
    digits.reverse(); // ascending order = smallest number
    if (digits.length > 10) return 0;
    let x = 0;
    for (const d of digits) x = x * 10 + d;
    return x > 2147483647 ? 0 : x;
};
// @lc code=end

// TEST:
console.log(smallestFactorization(48)); // 68
console.log(smallestFactorization(15)); // 35
console.log(smallestFactorization(1)); // 1
console.log(smallestFactorization(22)); // 0 (prime 11)
console.log(smallestFactorization(180)); // 459 (4*5*9)
console.log(smallestFactorization(10)); // 25
