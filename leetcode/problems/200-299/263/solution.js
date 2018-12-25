/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  for (var p of [2, 3, 5]) {
    while (num && num % p === 0) {
      num /= p;
    }
  }
  return num === 1;
};


/**
// TEST: 
console.log(isUgly(-2147483648));
*/