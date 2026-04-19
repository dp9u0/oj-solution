/*
 * @lc app=leetcode id=1736 lang=javascript
 *
 * [1736] Latest Time by Replacing Hidden Digits
 */

// @lc code=start
/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
  const t = time.split('');
  if (t[0] === '?') t[0] = (t[1] === '?' || Number(t[1]) <= 3) ? '2' : '1';
  if (t[1] === '?') t[1] = t[0] === '2' ? '3' : '9';
  if (t[3] === '?') t[3] = '5';
  if (t[4] === '?') t[4] = '9';
  return t.join('');
};
// @lc code=end

// TEST:
console.log(maximumTime('2?:?0')); // '23:50'
console.log(maximumTime('0?:3?')); // '09:39'
console.log(maximumTime('1?:22')); // '19:22'
console.log(maximumTime('04:?9')); // '04:59'
console.log(maximumTime('??:??')); // '23:59'
console.log(maximumTime('?4:5?')); // '14:59'
