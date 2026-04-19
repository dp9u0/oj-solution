/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0,
    n1l = num1.length,
    n2l = num2.length,
    result = '';
  while (n1l > 0 || n2l > 0) {
    let sum = Number(num1[--n1l] || 0) + Number(num2[--n2l] || 0) + carry;
    if (sum > 9) {
      sum %= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    result = sum + result;
  }
  return carry ? '1' + result : result;
};

/**
// TEST:

console.log(addStrings('9', '99'));
*/