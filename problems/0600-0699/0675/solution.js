/*
 * @lc app=leetcode id=675 lang=javascript
 *
 * [675] Cut Off Trees for Golf Event
 */

// @lc code=start
/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function (forest) {
  const DIRS = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const m = forest.length;
  const n = forest[0].length;

  // 收集所有树，按高度升序排序得到必经的目标序列
  const trees = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (forest[i][j] > 1) trees.push([i, j, forest[i][j]]);
    }
  }
  trees.sort((a, b) => a[2] - b[2]);

  // BFS 求 (sr,sc) 到 (tr,tc) 的最短步数，不可达返回 -1
  const bfs = (sr, sc, tr, tc) => {
    if (sr === tr && sc === tc) return 0;
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));
    const queue = [[sr, sc]];
    let head = 0;
    visited[sr][sc] = true;
    let steps = 0;
    while (head < queue.length) {
      steps++;
      const size = queue.length;
      for (let k = head; k < size; k++) {
        const [r, c] = queue[k];
        for (const [dr, dc] of DIRS) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
          if (visited[nr][nc] || forest[nr][nc] === 0) continue;
          if (nr === tr && nc === tc) return steps;
          visited[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
      head = size;
    }
    return -1;
  };

  // 依次求相邻两目标间的最短路径并累加
  let total = 0;
  let sr = 0;
  let sc = 0;
  for (const [tr, tc] of trees) {
    const d = bfs(sr, sc, tr, tc);
    if (d === -1) return -1;
    total += d;
    sr = tr;
    sc = tc;
  }
  return total;
};
// @lc code=end


// TEST:
console.log(cutOffTree([[1, 2, 3], [0, 0, 4], [7, 6, 5]])); // 6
console.log(cutOffTree([[1, 2, 3], [0, 0, 0], [7, 6, 5]])); // -1
console.log(cutOffTree([[2, 3, 4], [0, 0, 5], [8, 7, 6]])); // 6
console.log(cutOffTree([[1, 1, 1], [1, 1, 1], [1, 1, 2]])); // 4
console.log(cutOffTree([[2, 1], [1, 1]])); // 0（唯一的树就在起点）
console.log(cutOffTree([[0, 2], [3, 1]])); // 3（起点为障碍也能向四周走）
console.log(cutOffTree([[1, 2], [0, 0]])); // 1
