/*
 * @lc app=leetcode id=3568 lang=javascript
 *
 * [3568] Minimum Moves to Clean the Classroom
 */

// @lc code=start
/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
var minMoves = function(classroom, maxE) {
  const m = classroom.length, n = classroom[0].length;
  let sr = 0, sc = 0;
  const litterMap = new Map();
  let lc = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const ch = classroom[i][j];
      if (ch === 'S') { sr = i; sc = j; }
      if (ch === 'L') litterMap.set(i * n + j, lc++);
    }
  }

  if (lc === 0) return 0;
  const full = (1 << lc) - 1;
  const sz = 1 << lc;

  // visited[r * n + c][mask] = max energy seen
  const visited = new Int8Array(m * n * sz).fill(-1);
  const key = (r, c, mask) => (r * n + c) * sz + mask;

  // BFS queue: [r, c, mask, energy, moves]
  const q = [[sr, sc, 0, maxE, 0]];
  visited[key(sr, sc, 0)] = maxE;

  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let head = 0;

  while (head < q.length) {
    const [r, c, mask, e, moves] = q[head++];
    if (e === 0) continue;

    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
      const cell = classroom[nr][nc];
      if (cell === 'X') continue;

      let ne = e - 1;
      let nm = mask;
      if (cell === 'R') ne = maxE;
      if (cell === 'L') nm |= (1 << litterMap.get(nr * n + nc));

      if (nm === full) return moves + 1;

      const k = key(nr, nc, nm);
      if (ne > visited[k]) {
        visited[k] = ne;
        q.push([nr, nc, nm, ne, moves + 1]);
      }
    }
  }

  return -1;
};
// @lc code=end

// TEST:
console.log(minMoves(["S.", "XL"], 2)); // 2
console.log(minMoves(["LS", "RL"], 4)); // 3
console.log(minMoves(["L.S", "RXL"], 3)); // -1
console.log(minMoves(["S"], 1)); // 0 (no litter)
console.log(minMoves(["SRL"], 1)); // 2
