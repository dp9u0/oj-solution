/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;
  grid[-1] = [];
  grid[grid.length] = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!grid[i][j]) continue;
      if (!grid[i - 1][j]) perimeter++
      if (!grid[i + 1][j]) perimeter++
      if (!grid[i][j - 1]) perimeter++
      if (!grid[i][j + 1]) perimeter++
    }
  }
  return perimeter;
};