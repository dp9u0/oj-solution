/*
 * @lc app=leetcode id=1869 lang=javascript
 *
 * [1869] Longer Contiguous Segments of Ones than Zeros
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
  let maxOne = 0, maxZero = 0, cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && s[i] !== s[i - 1]) cnt = 0;
    cnt++;
    if (s[i] === '1') maxOne = Math.max(maxOne, cnt);
    else maxZero = Math.max(maxZero, cnt);
  }
  return maxOne > maxZero;
};
// @lc code=end

// TEST:
console.log(checkZeroOnes('1101')); // true
console.log(checkZeroOnes('111000')); // false
console.log(checkZeroOnes('110100010')); // false
console.log(checkZeroOnes('1')); // true
console.log(checkZeroOnes('0')); // false
console.log(checkZeroOnes('1111')); // true
console.log(checkZeroOnes('10')); // false
