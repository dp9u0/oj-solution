/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let length = matrix.length;
  let halfLength = ~~(length / 2);
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      let temp = 0;
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  console.log(matrix)
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < halfLength; j++) {
      let temp = 0;
      temp = matrix[i][j];
      matrix[i][j] = matrix[i][length - 1 - j];
      matrix[i][length - 1 - j] = temp;
    }
  }
};

let matrix;
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

rotate(matrix)
console.log(matrix)