/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  let result = 0;
  let prime = {
    2: true,
    3: true,
    5: true,
    7: true,
    11: true,
    13: true,
    17: true,
    19: true,
    23: true
  }
  for (let i = L; i <= R; i++) {
    let count = 0;
    let v = i;
    while (v) {
      count += (v & 1);
      v = (v >>> 1);
    }
    if (prime[count]) result++;
  }
  return result;
};