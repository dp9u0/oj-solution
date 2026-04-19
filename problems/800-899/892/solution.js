/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  let area = 0,
    M = grid.length,
    N = grid[0].length;
  grid[-1] = grid[grid.length] = new Array(N).fill(0); // NOTE: dummy
  for (let i = 0; i < M; i++) {
    grid[i][-1] = grid[i][N] = 0 // NOTE: dummy
    for (let j = 0; j < N; j++) {
      let el = grid[i][j];
      if (el) {
        let area1 = grid[i][j] - grid[i - 1][j];
        let area2 = grid[i][j] - grid[i + 1][j];
        let area3 = grid[i][j] - grid[i][j - 1];
        let area4 = grid[i][j] - grid[i][j + 1];
        area1 = area1 < 0 ? 0 : area1;
        area2 = area2 < 0 ? 0 : area2;
        area3 = area3 < 0 ? 0 : area3;
        area4 = area4 < 0 ? 0 : area4;
        area = area + 2 + area1 + area2 + area3 + area4;
      }
    }
  }
  return area;
};

/**
// TEST:

console.log(surfaceArea([
  [2]
]))
console.log(surfaceArea([
  [1, 2],
  [3, 4]
]))
console.log(surfaceArea([
  [1, 0],
  [0, 2]
]))
console.log(surfaceArea([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]))
console.log(surfaceArea([
  [2, 2, 2],
  [2, 1, 2],
  [2, 2, 2]
]))
*/