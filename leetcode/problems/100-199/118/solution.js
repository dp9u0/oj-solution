/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let f = [];
  for (let n = 0; n < numRows; n++) {
    f[n] = [];
    f[n][n] = f[n][0] = 1;
    let mid = ~~(n / 2)
    for (let m = 1; m <= mid; m++) {
      f[n][n - m] = f[n][m] = f[n - 1][m - 1] + f[n - 1][m];
    }
  }
  return f;
};