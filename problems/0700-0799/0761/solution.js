/*
 * @lc app=leetcode id=761 lang=javascript
 *
 * [761] Special Binary String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function(s) {
  const parts = [];
  let cnt = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    cnt += s[i] === '1' ? 1 : -1;
    if (cnt === 0) {
      parts.push('1' + makeLargestSpecial(s.slice(start + 1, i)) + '0');
      start = i + 1;
    }
  }
  parts.sort((a, b) => (a < b ? 1 : -1));
  return parts.join('');
};
// @lc code=end

// TEST:
console.log(makeLargestSpecial('11011000') === '11100100');
console.log(makeLargestSpecial('10') === '10');
console.log(makeLargestSpecial('1100') === '1100');
console.log(makeLargestSpecial('11100010') === '11100010');
