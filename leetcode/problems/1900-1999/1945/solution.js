/*
 * @lc app=leetcode id=1945 lang=javascript
 *
 * [1945] Sum of Digits of String After Convert
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
  let num = '';
  for (const c of s) {
    num += (c.charCodeAt(0) - 96);
  }
  while (k-- > 0) {
    let sum = 0;
    for (const d of num) {
      sum += parseInt(d);
    }
    num = String(sum);
  }
  return parseInt(num);
};
// @lc code=end

// TEST:
console.log(getLucky('iiii', 1));       // 36
console.log(getLucky('leetcode', 2));   // 6
console.log(getLucky('zbax', 2));       // 8
