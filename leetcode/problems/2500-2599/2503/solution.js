/*
 * @lc app=leetcode id=2503 lang=javascript
 *
 * [2503] Maximum Number of Points From Grid Queries
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function(grid, queries) {
  const m = grid.length, n = grid[0].length;
  const sortedQ = queries.map((q, i) => [q, i]).sort((a, b) => a[0] - b[0]);

  const heap = [];
  const push = (item) => {
    heap.push(item);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    if (heap.length <= 1) return heap.pop();
    const top = heap[0];
    heap[0] = heap.pop();
    let i = 0;
    while (true) {
      let s = i, l = 2 * i + 1, r = 2 * i + 2;
      if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
      if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };

  const visited = Array.from({ length: m }, () => new Uint8Array(n));
  visited[0][0] = 1;
  push([grid[0][0], 0, 0]);

  const result = new Array(queries.length);
  let count = 0;
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  for (const [qVal, qIdx] of sortedQ) {
    while (heap.length > 0 && heap[0][0] < qVal) {
      const [, r, c] = pop();
      count++;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc]) {
          visited[nr][nc] = 1;
          push([grid[nr][nc], nr, nc]);
        }
      }
    }
    result[qIdx] = count;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maxPoints([[1,2,3],[2,5,7],[3,5,1]], [5,6,2])) === JSON.stringify([5,8,1]));
console.log(JSON.stringify(maxPoints([[5,2,1],[1,1,2]], [3])) === JSON.stringify([0]));
console.log(JSON.stringify(maxPoints([[1,1],[1,1]], [2])) === JSON.stringify([4]));
console.log(JSON.stringify(maxPoints([[1]], [1,2])) === JSON.stringify([0,1]));
console.log(JSON.stringify(maxPoints([[3,2,1],[4,5,6]], [3,5])) === JSON.stringify([0,4]));
