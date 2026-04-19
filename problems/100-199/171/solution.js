/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let number = 0;
  let charCodeOffset = 'A'.charCodeAt(0) - 1;
  let maxIndex = s.length - 1;
  for (let index = maxIndex; index >= 0; index--) {
    number += (s.charCodeAt(index) - charCodeOffset) * Math.pow(26, maxIndex - index);
  }
  return number;
};

/**
// TEST:

console.log(titleToNumber('ZY'));
*/