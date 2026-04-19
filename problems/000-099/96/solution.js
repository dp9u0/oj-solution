/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (!n) {
    return 0;
  }
  let f = Array.from({
    length: n + 1
  }, x => []);
  for (let d = 0; d < n; d++) {
    for (let i = 1; i <= n - d; i++) {
      if (d === 0) {
        f[i][i] = 1;
      } else {
        let j = i + d;
        f[i][j] = 0;
        for (let k = i; k <= j; k++) {
          let treeLeft = (k - 1 >= i) ? f[i][k - 1] : 1;
          let treeRight = (k + 1 <= j) ? f[k + 1][j] : 1;
          f[i][j] += treeLeft * treeRight;
        }
      }
    }
  }
  return f[1][n];
};