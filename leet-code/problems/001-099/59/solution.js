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

//TEST: 
console.log(generateMatrix(4));