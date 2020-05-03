/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  if (m === 0) return 0;
  let i = 0; // i means we have how many bits are 0 on the right
  while (m !== n) {
    m >>= 1;
    n >>= 1;
    i++;
  }
  return m << i;
};


// TEST:
console.log(rangeBitwiseAnd(5, 7))
console.log(rangeBitwiseAnd(0, 1))