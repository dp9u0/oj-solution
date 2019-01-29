/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
  // f[i] = 0, invalid number
  // f[i] = 1, valid and same number
  // f[i] = 2, valid and different number
  let f = new Array(N + 1).fill(0);
  let count = 0;
  for (let i = 0; i <= N; i++) {
    if (i < 10) {
      if (i === 0 || i === 1 || i === 8) {
        f[i] = 1;
      } else if (i === 2 || i === 5 || i === 6 || i === 9) {
        f[i] = 2;
        count++;
      }
    } else {
      let a = f[~~(i / 10)],
        b = f[i % 10];
      if (a === 1 && b === 1) {
        f[i] = 1;
      } else if (a >= 1 && b >= 1) {
        f[i] = 2;
        count++;
      }
    }
  }
  return count;
};