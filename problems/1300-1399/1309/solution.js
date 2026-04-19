/*
 * @lc app=leetcode id=1309 lang=javascript
 *
 * [1309] Decrypt String from Alphabet to Integer Mapping
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  const result = [];
  let i = s.length - 1;
  while (i >= 0) {
    if (s[i] === '#') {
      const num = parseInt(s.substring(i - 2, i));
      result.push(String.fromCharCode(num + 96));
      i -= 3;
    } else {
      result.push(String.fromCharCode(parseInt(s[i]) + 96));
      i--;
    }
  }
  return result.reverse().join('');
};
// @lc code=end

// TEST:
console.log(freqAlphabets('10#11#12')); // jkab
console.log(freqAlphabets('1326#')); // acz
