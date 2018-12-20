/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let n = matrix.length;
  if (n === 0) {
    return false;
  }
  let m = matrix[0].length;
  if (m === 0) {
    return false;
  }
  let left = 0,
    right = m * n - 1;
  while (left !== right) {
    let mid = ~~((left + right - 1) / 2);
    if (matrix[~~(mid / m)][mid % m] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return matrix[~~(right / m)][right % m] === target;
};

/**
// TEST:

let matrix, target;

matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
target = 3;
console.log(searchMatrix(matrix, target))
*/