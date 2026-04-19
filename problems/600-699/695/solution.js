/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const W = grid.length;
  const H = grid[0].length;
  let maxArea = 0;
  for (let i = 0; i < W; i++) {
    for (let j = 0; j < H; j++) {
      if (grid[i][j] === 1) {
        let area = 0;
        let queue = [{ x: i, y: j }];
        grid[i][j] = 0;
        while (queue.length) {
          area++;
          const { x, y } = queue.shift();
          if (x - 1 >= 0 && grid[x - 1][y] === 1) { grid[x - 1][y] = 0;; queue.push({ x: x - 1, y }); }
          if (x + 1 < W && grid[x + 1][y] === 1) { grid[x + 1][y] = 0;; queue.push({ x: x + 1, y }); }
          if (grid[x][y - 1] === 1) { grid[x][y - 1] = 0;; queue.push({ x, y: y - 1 }); }
          if (grid[x][y + 1] === 1) { grid[x][y + 1] = 0;; queue.push({ x, y: y + 1 }); }
        }
        maxArea = Math.max(area, maxArea)
      }
    }
  }
  return maxArea;
};


// TEST:
console.log(maxAreaOfIsland(
  [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
))

console.log(maxAreaOfIsland([[0, 1], [1, 1]]))
