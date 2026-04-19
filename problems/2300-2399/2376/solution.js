/*
 * @lc app=leetcode id=2376 lang=javascript
 *
 * [2376] Count Special Integers
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function(n) {
  const s = String(n);
  const len = s.length;
  let result = 0;

  // Count special numbers with fewer digits than n
  for (let k = 1; k < len; k++) {
    let count = 9;
    for (let i = 0; i < k - 1; i++) {
      count *= (9 - i);
    }
    result += count;
  }

  // Count special numbers with same number of digits as n
  const digits = s.split('').map(Number);
  const used = new Set();

  for (let i = 0; i < len; i++) {
    const digit = digits[i];
    // Try placing a smaller digit at position i
    for (let d = (i === 0 ? 1 : 0); d < digit; d++) {
      if (used.has(d)) continue;
      // Remaining positions: len - i - 1, available digits: 10 - used.size - 1
      let count = 1;
      let available = 10 - used.size - 1;
      for (let j = 0; j < len - i - 1; j++) {
        count *= available;
        available--;
      }
      result += count;
    }
    if (used.has(digit)) break;
    used.add(digit);
    // If we've placed all digits and n itself is special, count it
    if (i === len - 1) result++;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(countSpecialNumbers(20) === 19);
console.log(countSpecialNumbers(5) === 5);
console.log(countSpecialNumbers(135) === 110);
console.log(countSpecialNumbers(1) === 1);
console.log(countSpecialNumbers(100) === 90);
console.log(countSpecialNumbers(1000) === 738);
console.log(countSpecialNumbers(999999999) !== undefined);
