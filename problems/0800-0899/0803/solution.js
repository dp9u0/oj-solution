/*
 * @lc app=leetcode id=803 lang=javascript
 *
 * [803] Bricks Falling When Hit
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function(grid, hits) {
  const m = grid.length;
  const n = grid[0].length;
  const g = grid.map((row) => row.slice());
  for (const [x, y] of hits) {
    g[x][y] = g[x][y] === 1 ? 2 : 0;
  }

  const parent = Array.from({ length: m * n + 1 }, (_, i) => i);
  const size = Array(m * n + 1).fill(1);
  const find = (a) => {
    while (parent[a] !== a) {
      parent[a] = parent[parent[a]];
      a = parent[a];
    }
    return a;
  };
  const union = (a, b) => {
    a = find(a);
    b = find(b);
    if (a === b) return;
    if (size[a] < size[b]) [a, b] = [b, a];
    parent[b] = a;
    size[a] += size[b];
  };

  const ROOF = m * n;
  for (let j = 0; j < n; j++) {
    if (g[0][j] === 1) union(j, ROOF);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (g[i][j] !== 1) continue;
      const id = i * n + j;
      if (i + 1 < m && g[i + 1][j] === 1) union(id, (i + 1) * n + j);
      if (j + 1 < n && g[i][j + 1] === 1) union(id, i * n + j + 1);
    }
  }

  const res = new Array(hits.length);
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (let h = hits.length - 1; h >= 0; h--) {
    const [x, y] = hits[h];
    if (g[x][y] === 2) {
      const before = size[find(ROOF)];
      g[x][y] = 1;
      const id = x * n + y;
      if (x === 0) union(id, ROOF);
      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < m && ny >= 0 && ny < n && g[nx][ny] === 1) {
          union(id, nx * n + ny);
        }
      }
      const after = size[find(ROOF)];
      res[h] = Math.max(0, after - before - 1);
    } else {
      res[h] = 0;
    }
  }
  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(hitBricks([[1, 0, 0, 0], [1, 1, 1, 0]], [[1, 0]])) === JSON.stringify([2]));
console.log(JSON.stringify(hitBricks([[1, 0, 0, 0], [1, 1, 0, 0]], [[1, 1], [1, 0]])) === JSON.stringify([0, 0]));
console.log(JSON.stringify(hitBricks([[1, 0, 0], [1, 1, 0]], [[0, 0]])) === JSON.stringify([2]));
console.log(JSON.stringify(hitBricks([[1]], [[0, 0]])) === JSON.stringify([0]));
console.log(JSON.stringify(hitBricks([[0]], [[0, 0]])) === JSON.stringify([0]));
console.log(JSON.stringify(hitBricks([[1, 1, 1], [1, 1, 1]], [[0, 0], [0, 2]])) === JSON.stringify([0, 0]));
console.log(JSON.stringify(hitBricks([[1, 1], [1, 1]], [[1, 1], [1, 0], [0, 1]])) === JSON.stringify([0, 0, 0]));
