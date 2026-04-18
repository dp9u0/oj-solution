/*
 * @lc app=leetcode id=1694 lang=javascript
 *
 * [1694] Reformat Phone Number
 */

// @lc code=start
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  const digits = number.replace(/[\s-]/g, '');
  const blocks = [];
  let i = 0;
  while (i < digits.length) {
    const remaining = digits.length - i;
    if (remaining <= 4) {
      if (remaining <= 3) blocks.push(digits.slice(i));
      else { blocks.push(digits.slice(i, i + 2)); blocks.push(digits.slice(i + 2)); }
      break;
    }
    blocks.push(digits.slice(i, i + 3));
    i += 3;
  }
  return blocks.join('-');
};
// @lc code=end

// TEST:
console.log(reformatNumber('1-23-45 6')); // '123-456'
console.log(reformatNumber('123 4-567')); // '123-45-67'
console.log(reformatNumber('123 4-5678')); // '123-456-78'
console.log(reformatNumber('12')); // '12'
console.log(reformatNumber('123')); // '123'
console.log(reformatNumber('1234')); // '12-34'
console.log(reformatNumber('--1-2-3--')); // '123'
