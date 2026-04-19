/*
 * @lc app=leetcode id=1284 lang=javascript
 *
 * [1284] Minimum Number of Flips to Convert Binary Matrix to Zero Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const total = m * n;

  // Encode initial state
  let start = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j]) {
        start |= (1 << (i * n + j));
      }
    }
  }

  if (start === 0) return 0;

  // Precompute flip mask for each position
  const flipMasks = [];
  const dirs = [[0, 0], [0, 1], [0, -1], [1, 0], [-1, 0]];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let mask = 0;
      for (const [di, dj] of dirs) {
        const ni = i + di, nj = j + dj;
        if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
          mask |= (1 << (ni * n + nj));
        }
      }
      flipMasks.push(mask);
    }
  }

  // BFS
  const visited = new Uint8Array(1 << total);
  visited[start] = 1;
  const queue = [[start, 0]];

  let head = 0;
  while (head < queue.length) {
    const [state, steps] = queue[head++];
    for (const mask of flipMasks) {
      const next = state ^ mask;
      if (next === 0) return steps + 1;
      if (!visited[next]) {
        visited[next] = 1;
        queue.push([next, steps + 1]);
      }
    }
  }

  return -1;
};
// @lc code=end

// TEST:
console.log(minFlips([[0, 0], [0, 1]])); // 3
console.log(minFlips([[0]])); // 0
console.log(minFlips([[1, 0, 0], [1, 0, 0]])); // -1
