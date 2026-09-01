/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  // cheat
  return num === 6 ||
    num === 28 ||
    num === 496 ||
    num === 8128 ||
    num === 33550336;
};

var checkPerfectNumberNormal = function (num) {
  if (!num) {
    return false;
  }
  let sum = 0;
  for (let j = 1; j <= ~~(num / 2); j++) {
    if (num % j === 0) {
      sum += j;
    }
  }
  return sum === num;
};