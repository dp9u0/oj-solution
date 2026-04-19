/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (!num) {
    return '' + num;
  }
  let res = "";
  let isNeg = num < 0;
  if (isNeg) {
    num = -num;
  }
  while (num) {
    res = num % 7 + res;
    num = ~~(num / 7);
  }
  return isNeg ? '-' + res : res
};