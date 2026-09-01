/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 从左下角向右上角查找
  const H = matrix.length;
  const W = matrix[0].length
  let row = H - 1;
  let col = 0;
  while (row >= 0 && col < W) {
    if (matrix[row][col] > target) { // 当前数字大于target 向上方移动
      row--;
    } else if (matrix[row][col] < target) { // 当前数字小于 target 向右侧移动
      col++;
    } else {
      return true;
    }
  }
  return false;
};


// TEST:
let matrix, target, result;

matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 5;
result = searchMatrix(matrix, target);
console.log(result);

matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 20;
result = searchMatrix(matrix, target);
console.log(result)