/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  r = x;
  while (r * r > x) {
    r = ~~((r + x / r) / 2);
  }
  return r;
};

//TEST:
console.log(mySqrt(8))