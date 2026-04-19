/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let result = [];
  let [i, j, di, dj] = [0, 0, 0, 1];
  let ni = matrix.length;
  let nj = matrix[0] ? matrix[0].length :  0;
  let n = nj * ni;
  for (let k = 0; k < n; k++) {
    result[k] = matrix[i][j];
    matrix[i][j] = 0;
    // 有值了 调转方向
    if (!matrix[Math.abs((i + di) % ni)][Math.abs((j + dj) % nj)]) {
      [di, dj] = [dj, -di];
    }
    i += di;
    j += dj;
  }
  return result;
};


//TEST:
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }
  let [i, j, di, dj] = [0, 0, 0, 1];
  let n2 = n * n;
  for (let k = 0; k < n2; k++) {
    matrix[i][j] = k + 1;
    // 有值了 调转方向
    if (matrix[Math.abs((i + di) % n)][Math.abs((j + dj) % n)]) {
      [di, dj] = [dj, -di];
    }
    i += di;
    j += dj;
  }
  return matrix;
};
console.log(spiralOrder(generateMatrix(3)))

let input = [[1,2,3],[4,5,6]];
console.log(spiralOrder(input))