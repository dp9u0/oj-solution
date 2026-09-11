/*
 * @lc app=leetcode.cn id=3483 lang=javascript
 *
 * [3483] 不同三位偶数的数目
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
  const n = digits.length;
  const seen = new Set();

  for (let i = 0; i < n; i++) {
    if (digits[i] === 0) continue; // no leading zero
    for (let j = 0; j < n; j++) {
      if (j === i) continue;
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;
        if (digits[k] % 2 !== 0) continue; // must be even
        seen.add(digits[i] * 100 + digits[j] * 10 + digits[k]);
      }
    }
  }

  return seen.size;
};
// @lc code=end

// TEST:
console.log(totalNumbers([1, 2, 3, 4]) === 12);
console.log(totalNumbers([0, 2, 2]) === 2);
console.log(totalNumbers([6, 6, 6]) === 1);
console.log(totalNumbers([1, 3, 5]) === 0);
console.log(totalNumbers([0, 0, 2]) === 1);
console.log(totalNumbers([1, 8, 8, 6]) === 9);
