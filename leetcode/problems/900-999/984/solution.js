/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function (A, B) {
  let result = '';
  let a = b = 0; // 当前连续a/b的个数
  while (A + B > 0) {
    if ((A >= B && a < 2) || b === 2) {
      result += "a";
      A--;
      a++;
      b = 0;
    } else {
      result += "b";
      b++;
      B--;
      a = 0;
    }
  }
  return result;
};