/*
 * @lc app=leetcode id=3895 lang=javascript
 *
 * [3895] Count Digit Occurrences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function(nums, digit) {
  const s = String(digit);
  let ans = 0;
  for (const v of nums) {
    for (const ch of String(v)) {
      if (ch === s) ans++;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(countDigitOccurrences([12, 54, 32, 22], 2) === 4);
console.log(countDigitOccurrences([1, 34, 7], 9) === 0);
console.log(countDigitOccurrences([111], 1) === 3);
console.log(countDigitOccurrences([5], 5) === 1);
console.log(countDigitOccurrences([1000000], 0) === 6);
