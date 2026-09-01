/*
 * @lc app=leetcode id=848 lang=javascript
 *
 * [848] Shifting Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  const n = s.length;
  const result = new Array(n);
  let suffix = 0;

  for (let i = n - 1; i >= 0; i--) {
    suffix += shifts[i];
    const code = (s.charCodeAt(i) - 97 + suffix) % 26;
    result[i] = String.fromCharCode((code + 26) % 26 + 97);
  }

  return result.join('');
};
// @lc code=end

// TEST:
console.log(shiftingLetters('abc', [3,5,9])); // 'rpl'
console.log(shiftingLetters('aaa', [1,2,3])); // 'gfd'
