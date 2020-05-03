/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const height = grid.length;
  const width = height === 0 ? 0 : grid[0].length;

  let count = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j, height, width)
        count++;
      }
    }
  }
  return count;
};

/**
* @param {character[][]} grid
* @param {number} i
* @param {number} j
* @return {boolean}
*/
const dfs = (grid, i, j, height, width) => {
  if (i < 0 || j < 0 || i >= height || j >= width || grid[i][j] === "0") {
    return;
  }
  grid[i][j] = "0";
  dfs(grid, i - 1, j, height, width);
  dfs(grid, i + 1, j, height, width);
  dfs(grid, i, j + 1, height, width);
  dfs(grid, i, j - 1, height, width);
}

// TEST:
console.log(numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]))
