/*
 * @lc app=leetcode id=3114 lang=javascript
 *
 * [3114] Latest Time You Can Obtain After Replacing Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function(s) {
  const chars = s.split('');
  if (chars[0] === '?') {
    chars[0] = (chars[1] !== '?' && chars[1] > '1') ? '0' : '1';
  }
  if (chars[1] === '?') {
    chars[1] = chars[0] === '1' ? '1' : '9';
  }
  if (chars[3] === '?') chars[3] = '5';
  if (chars[4] === '?') chars[4] = '9';
  return chars.join('');
};
// @lc code=end

// TEST:
console.log(findLatestTime('1?:?4')); // '11:54'
console.log(findLatestTime('0?:5?')); // '09:59'
console.log(findLatestTime('??:??')); // '11:59'
console.log(findLatestTime('0?:??')); // '09:59'
