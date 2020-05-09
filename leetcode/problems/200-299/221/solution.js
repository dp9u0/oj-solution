/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let height = matrix.length;
  let width = height === 0 ? 0 : matrix[0].length;
  let max = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const e = matrix[i][j];
      if (e === '1') {
        let maxSide = Math.min(height - i, width - j);
        if (maxSide <= max) continue;
        let l = 1;
        while (l < maxSide && check(matrix, i, j, l)) {
          l++;
        }
        max = Math.max(max, l);
      }
    }
  }
  return max * max;
};

function check(matrix, i, j, l) {
  for (let h = 0; h <= l; h++) {
    if (matrix[i + l][j + h] === '0') return false;
  }
  for (let w = 0; w <= l; w++) {
    if (matrix[i + w][j + l] === '0') return false;
  }
  return true;
}


// TEST:
console.log(maximalSquare([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]))

console.log(maximalSquare([
  ['1']
]))