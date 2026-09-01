/*
 * @lc app=leetcode id=827 lang=javascript
 *
 * [827] Making A Large Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
  const n = grid.length;
  const id = Array.from({ length: n }, () => Array(n).fill(-1));
  const sizes = [];
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let curId = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && id[i][j] === -1) {
        let size = 0;
        const stack = [[i, j]];
        id[i][j] = curId;
        while (stack.length) {
          const [x, y] = stack.pop();
          size++;
          for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 1 && id[nx][ny] === -1) {
              id[nx][ny] = curId;
              stack.push([nx, ny]);
            }
          }
        }
        sizes.push(size);
        curId++;
      }
    }
  }
  let ans = sizes.length ? Math.max(...sizes) : 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== 0) continue;
      const seen = new Set();
      let total = 1;
      for (const [dx, dy] of dirs) {
        const nx = i + dx;
        const ny = j + dy;
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 1) {
          const t = id[nx][ny];
          if (!seen.has(t)) {
            seen.add(t);
            total += sizes[t];
          }
        }
      }
      if (total > ans) ans = total;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(largestIsland([[1, 0], [0, 1]]) === 3);
console.log(largestIsland([[1, 1], [1, 0]]) === 4);
console.log(largestIsland([[1, 1], [1, 1]]) === 4);
console.log(largestIsland([[0, 0], [0, 0]]) === 1);
console.log(largestIsland([[0]]) === 1);
console.log(largestIsland([[1]]) === 1);
