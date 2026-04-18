/*
 * @lc app=leetcode id=3461 lang=javascript
 *
 * [3461] Check If Digits Are Equal in String After Operations I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
  let digits = Array.from(s, c => c | 0);
  while (digits.length > 2) {
    const next = [];
    for (let i = 0; i < digits.length - 1; i++) {
      next.push((digits[i] + digits[i + 1]) % 10);
    }
    digits = next;
  }
  return digits[0] === digits[1];
};
// @lc code=end

// TEST:
console.log(hasSameDigits('3902')); // true
console.log(hasSameDigits('34789')); // false
console.log(hasSameDigits('11')); // true
console.log(hasSameDigits('12')); // false
console.log(hasSameDigits('123')); // false
