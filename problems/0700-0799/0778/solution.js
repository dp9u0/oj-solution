/*
 * @lc app=leetcode id=778 lang=javascript
 *
 * [778] Swim in Rising Water
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  const n = grid.length;
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
  dist[0][0] = grid[0][0];
  const heap = [[dist[0][0], 0, 0]];
  const push = (d, x, y) => {
    heap.push([d, x, y]);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      while (true) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        let m = i;
        if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
        if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
        if (m === i) break;
        [heap[m], heap[i]] = [heap[i], heap[m]];
        i = m;
      }
    }
    return top;
  };
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (heap.length) {
    const [d, x, y] = pop();
    if (x === n - 1 && y === n - 1) return d;
    if (d > dist[x][y]) continue;
    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      const nd = Math.max(d, grid[nx][ny]);
      if (nd < dist[nx][ny]) {
        dist[nx][ny] = nd;
        push(nd, nx, ny);
      }
    }
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(swimInWater([[0, 2], [1, 3]]) === 3);
console.log(swimInWater([[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]]) === 16);
console.log(swimInWater([[5]]) === 5);
console.log(swimInWater([[1, 10], [2, 5]]) === 5);
