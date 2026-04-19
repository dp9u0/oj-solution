/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let fr = false,
    fc = false;
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        if (i == 0) fr = true;
        if (j == 0) fc = true;
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (fr) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
  if (fc) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};

/**
// TEST:

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]
setZeroes(matrix);
console.log(matrix)
*/