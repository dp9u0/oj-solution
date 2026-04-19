/*
 * @lc app=leetcode id=902 lang=javascript
 *
 * [902] Numbers At Most N Given Digit Set
 */

// @lc code=start
/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function(digits, n) {
  const s = String(n);
  const m = digits.length;
  const len = s.length;
  let result = 0;

  // Numbers with fewer digits than n
  for (let k = 1; k < len; k++) {
    result += Math.pow(m, k);
  }

  // Numbers with exactly len digits
  for (let i = 0; i < len; i++) {
    let hasSame = false;
    for (const d of digits) {
      if (d < s[i]) {
        result += Math.pow(m, len - 1 - i);
      } else if (d === s[i]) {
        hasSame = true;
      }
    }
    if (!hasSame) return result;
  }

  return result + 1;
};
// @lc code=end

// TEST:
console.log(atMostNGivenDigitSet(['1','3','5','7'], 100)); // 20
console.log(atMostNGivenDigitSet(['1','4','9'], 1000000000)); // 29523
console.log(atMostNGivenDigitSet(['7'], 8)); // 1
console.log(atMostNGivenDigitSet(['3','5'], 4)); // 1
