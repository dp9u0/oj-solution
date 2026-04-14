/*
 * @lc app=leetcode id=1368 lang=javascript
 *
 * [1368] Minimum Cost to Make at Least One Valid Path in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  // Directions: 1=right, 2=left, 3=down, 4=up
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const INF = m * n + 1;
  const dist = Array.from({ length: m }, () => new Int32Array(n).fill(INF));
  dist[0][0] = 0;

  // 0-1 BFS with deque
  const deque = [[0, 0]];

  while (deque.length > 0) {
    const [r, c] = deque.shift();
    const curDist = dist[r][c];

    for (let d = 0; d < 4; d++) {
      const nr = r + dirs[d][0];
      const nc = c + dirs[d][1];
      if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

      const cost = (grid[r][c] === d + 1) ? 0 : 1;
      const newDist = curDist + cost;

      if (newDist < dist[nr][nc]) {
        dist[nr][nc] = newDist;
        if (cost === 0) {
          deque.unshift([nr, nc]);
        } else {
          deque.push([nr, nc]);
        }
      }
    }
  }

  return dist[m - 1][n - 1];
};
// @lc code=end

// TEST:
console.log(minCost([[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]])); // 3
console.log(minCost([[1,1,3],[3,2,2],[1,1,4]])); // 0
console.log(minCost([[1,2],[4,3]])); // 1
