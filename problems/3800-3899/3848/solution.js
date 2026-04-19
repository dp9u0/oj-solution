/*
 * @lc app=leetcode id=3848 lang=javascript
 *
 * [3848] Check Digitorial Permutation
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isDigitorialPermutation = function(n) {
    const FACT = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

    const digits = String(n).split('').map(Number);
    const digitCount = new Array(10).fill(0);
    for (const d of digits) digitCount[d]++;

    // Sum of factorials of digits
    let factorialSum = 0;
    for (const d of digits) factorialSum += FACT[d];

    // Check if factorialSum is a valid permutation of n
    const sumStr = String(factorialSum);
    const sumDigits = sumStr.split('').map(Number);

    // Must have same number of digits (no leading zeros in permutation)
    if (sumDigits.length !== digits.length) return false;

    // Must have same digit frequency
    const sumCount = new Array(10).fill(0);
    for (const d of sumDigits) sumCount[d]++;

    for (let i = 0; i < 10; i++) {
        if (digitCount[i] !== sumCount[i]) return false;
    }

    return true;
};
// @lc code=end

// TEST:
console.log(isDigitorialPermutation(145)); // true
console.log(isDigitorialPermutation(10)); // false
console.log(isDigitorialPermutation(1)); // true (1! = 1)
console.log(isDigitorialPermutation(2)); // true (2! = 2)
console.log(isDigitorialPermutation(40585)); // true (4!+0!+5!+8!+5! = 24+1+120+40320+120 = 40585)
