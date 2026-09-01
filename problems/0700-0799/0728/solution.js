/** 
 * @param {number} num
*/
function isSelfDividingNumber(num) {
  return num.toString()
    .split('')
    .map(Number)
    .map((digit) => digit !== 0 && num % digit === 0)
    .reduce((acc, val) => acc && val);
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  return new Array(right - left + 1)
    .fill(0)
    .map((val, index) => left + index)
    .filter((val) => isSelfDividingNumber(val));
};