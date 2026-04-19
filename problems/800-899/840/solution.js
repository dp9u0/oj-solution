/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  let count = 0;
  let row = grid.length;
  let col = grid[0].length;
  if (row < 3 || col < 3) {
    return count;
  }
  for (let i = 0; i < row - 2; i++) {
    for (let j = 0; j < col - 2; j++) {
      if (grid[i + 1][j + 1] != 5) {
        continue;
      }
      // 5 必须在中间
      // 必须 [1,9]
      if ((grid[i][j] === 5 &&
          grid[i][j + 1] === 5 &&
          grid[i][j + 2] === 5 &&
          grid[i + 1][j] === 5 &&
          grid[i + 1][j + 1] === 5 &&
          grid[i + 1][j + 2] === 5 &&
          grid[i + 2][j] === 5 &&
          grid[i + 2][j + 1] === 5 &&
          grid[i + 2][j + 1] === 5
        ) || (grid[i][j] > 9 || grid[i][j] < 1 ||
          grid[i][j + 1] > 9 || grid[i][j + 1] < 1 ||
          grid[i][j + 2] > 9 || grid[i][j + 2] < 1 ||
          grid[i + 1][j] > 9 || grid[i + 1][j] < 1 ||
          grid[i + 1][j + 1] > 9 || grid[i + 1][j + 1] < 1 ||
          grid[i + 1][j + 2] > 9 || grid[i + 1][j + 2] < 1 ||
          grid[i + 2][j] > 9 || grid[i + 2][j] < 1 ||
          grid[i + 2][j + 1] > 9 || grid[i + 2][j + 1] < 1 ||
          grid[i + 2][j + 1] > 9 || grid[i + 2][j + 2] < 1
        )) {
        continue;
      }
      if (grid[i][j] + grid[i][j + 1] + grid[i][j + 2] === 15 &&
        grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2] === 15 &&
        grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2] === 15 &&
        grid[i][j] + grid[i + 1][j] + grid[i + 2][j] === 15 &&
        grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1] === 15 &&
        grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2] === 15 &&
        grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2] === 15 &&
        grid[i][j + 2] + grid[i + 1][j + 1] + grid[i + 2][j] === 15
      ) {
        count++;
      }
    }
  }

  return count;
};