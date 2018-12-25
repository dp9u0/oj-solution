/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  while (n > 100) {
    let next = 0;
    while (n) {
      next += (n % 10) * (n % 10);
      n = ~~(n / 10);
    }
    n = next;
  }
  return n === 1 || n === 7 || n === 10 || n === 13 || n === 19 ||
    n === 23 || n === 28 || n === 31 || n === 32 || n === 44 ||
    n === 49 || n === 68 || n === 70 || n === 79 || n === 82 || n === 86 ||
    n === 91 || n === 94 || n === 97 || n === 100;
};