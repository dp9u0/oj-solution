/*
 * @lc app=leetcode.cn id=LCP 13 lang=javascript
 *
 * [LCP 13] 寻宝
 */

// @lc code=start
/**
 * @param {string[]} maze
 * @return {number}
 */
var minimalSteps = function(maze) {
  const R = maze.length;
  const C = maze[0].length;
  const INF = 1e9;

  // BFS from (sr, sc); returns dist grid, -1 unreachable. Only '#' blocks.
  const bfs = (sr, sc) => {
    const dist = Array.from({ length: R }, () => new Array(C).fill(-1));
    const queue = [[sr, sc]];
    dist[sr][sc] = 0;
    let head = 0;
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    while (head < queue.length) {
      const [x, y] = queue[head++];
      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
        if (maze[nx][ny] === '#') continue;
        if (dist[nx][ny] !== -1) continue;
        dist[nx][ny] = dist[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
    return dist;
  };

  const M = [];
  const O = [];
  let S = null;
  let T = null;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      const ch = maze[i][j];
      if (ch === 'S') S = [i, j];
      else if (ch === 'T') T = [i, j];
      else if (ch === 'M') M.push([i, j]);
      else if (ch === 'O') O.push([i, j]);
    }
  }

  // no mechanisms -> just reach the treasure
  if (M.length === 0) {
    const d = bfs(S[0], S[1]);
    return d[T[0]][T[1]];
  }

  const distFromStart = bfs(S[0], S[1]);
  const distFromT = bfs(T[0], T[1]);
  const m = M.length;
  const o = O.length;

  // distances from each mechanism to every stone pile
  const dM = [];
  for (let i = 0; i < m; i++) {
    dM.push(bfs(M[i][0], M[i][1]));
  }

  // distance from mechanism i to stone pile k
  const oDist = (i, k) => dM[i][O[k][0]][O[k][1]];

  // start[i]: trigger first mechanism i from S via a stone pile
  const start = new Array(m).fill(INF);
  for (let i = 0; i < m; i++) {
    for (let k = 0; k < o; k++) {
      const ds = distFromStart[O[k][0]][O[k][1]];
      if (ds === -1) continue;
      const dm = oDist(i, k);
      if (dm === -1) continue;
      start[i] = Math.min(start[i], ds + dm);
    }
  }

  // D[i][j]: from triggered mechanism i to trigger mechanism j (via some pile)
  const D = Array.from({ length: m }, () => new Array(m).fill(INF));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      if (i === j) continue;
      let best = INF;
      for (let k = 0; k < o; k++) {
        const a = oDist(i, k);
        const b = oDist(j, k);
        if (a === -1 || b === -1) continue;
        best = Math.min(best, a + b);
      }
      D[i][j] = best;
    }
  }

  // end[i]: from triggered mechanism i to treasure
  const end = new Array(m).fill(INF);
  for (let i = 0; i < m; i++) {
    if (distFromT[M[i][0]][M[i][1]] !== -1) {
      end[i] = distFromT[M[i][0]][M[i][1]];
    }
  }

  const full = (1 << m) - 1;
  // dp[mask][last]
  const dp = Array.from({ length: full + 1 }, () => new Array(m).fill(INF));
  for (let i = 0; i < m; i++) {
    if (start[i] < INF) dp[1 << i][i] = start[i];
  }

  for (let mask = 1; mask <= full; mask++) {
    for (let last = 0; last < m; last++) {
      if (dp[mask][last] >= INF) continue;
      if ((mask & (1 << last)) === 0) continue;
      for (let j = 0; j < m; j++) {
        if (mask & (1 << j)) continue;
        const nm = mask | (1 << j);
        if (dp[mask][last] + D[last][j] < dp[nm][j]) {
          dp[nm][j] = dp[mask][last] + D[last][j];
        }
      }
    }
  }

  let ans = INF;
  for (let j = 0; j < m; j++) {
    ans = Math.min(ans, dp[full][j] + end[j]);
  }
  return ans >= INF ? -1 : ans;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(minimalSteps(["S#O", "M..", "M.T"]), 16);
assert.strictEqual(minimalSteps(["S#O", "M.#", "M.T"]), -1);
assert.strictEqual(minimalSteps(["S#O", "M.T", "M.."]), 17);
// no mechanism: straight reachability
assert.strictEqual(minimalSteps(["S.T"]), 2);
assert.strictEqual(minimalSteps(["S#T"]), -1);
// treasure reachable, no mechanism, path goes around a wall
assert.strictEqual(minimalSteps(["S#.", "..#", "..T"]), 4);
// a mechanism that is directly reachable but requires the only pile
assert.strictEqual(minimalSteps(["SOMT"]), 3);

console.log('All tests passed!');
console.log('minimalSteps(["S#O", "M..", "M.T"]) =', minimalSteps(["S#O", "M..", "M.T"]));
