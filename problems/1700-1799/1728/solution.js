/*
 * @lc app=leetcode id=1728 lang=javascript
 *
 * [1728] Cat and Mouse II
 */

// @lc code=start
/**
 * @param {string[]} grid
 * @param {number} catJump
 * @param {number} mouseJump
 * @return {boolean}
 */
var canMouseWin = function(grid, catJump, mouseJump) {
  const R = grid.length, C = grid[0].length;
  let foodR, foodC, mouseR, mouseC, catR, catC;
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
    const ch = grid[r][c];
    if (ch === 'F') { foodR = r; foodC = c; }
    else if (ch === 'M') { mouseR = r; mouseC = c; }
    else if (ch === 'C') { catR = r; catC = c; }
  }

  const id = (r, c) => r * C + c;
  const N = R * C;
  const food = id(foodR, foodC);
  const startM = id(mouseR, mouseC);
  const startC = id(catR, catC);

  const isWall = new Uint8Array(N);
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
    if (grid[r][c] === '#') isWall[id(r, c)] = 1;
  }

  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];

  function computeMoves(maxJump) {
    const moves = new Array(N);
    for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
      const p = id(r, c);
      if (isWall[p]) { moves[p] = []; continue; }
      const m = [p]; // staying in place
      for (const [dr, dc] of dirs) {
        for (let s = 1; s <= maxJump; s++) {
          const nr = r + dr * s, nc = c + dc * s;
          if (nr < 0 || nr >= R || nc < 0 || nc >= C || grid[nr][nc] === '#') break;
          m.push(id(nr, nc));
        }
      }
      moves[p] = m;
    }
    return moves;
  }

  const mMoves = computeMoves(mouseJump);
  const cMoves = computeMoves(catJump);

  // Convert moves arrays to Sets for O(1) lookup
  const mMoveSets = mMoves.map(a => new Set(a));
  const cMoveSets = cMoves.map(a => new Set(a));

  // State: idx(m, c, t) = m * N * 2 + c * 2 + t
  const total = N * N * 2;
  const result = new Uint8Array(total); // 0=unknown, 1=mouse wins, 2=cat wins
  const pending = new Int32Array(total);
  const queue = [];

  // Initialize terminal states and compute pending
  for (let m = 0; m < N; m++) {
    if (isWall[m]) continue;
    for (let c = 0; c < N; c++) {
      if (isWall[c]) continue;
      for (let t = 0; t <= 1; t++) {
        const i = m * N * 2 + c * 2 + t;
        if (m === c || c === food) {
          result[i] = 2; queue.push(i);
        } else if (m === food) {
          result[i] = 1; queue.push(i);
        } else {
          pending[i] = t === 0 ? mMoves[m].length : cMoves[c].length;
        }
      }
    }
  }

  // BFS backward induction
  let head = 0;
  while (head < queue.length) {
    const i = queue[head++];
    const t = i & 1;
    const c = (i >>> 1) % N;
    const m = (i >>> 1) / N | 0;
    const r = result[i];

    if (t === 0) {
      // Predecessors: (m, oldC, 1) where cat can move from oldC to c
      for (let oldC = 0; oldC < N; oldC++) {
        if (isWall[oldC] || oldC === m) continue;
        if (!cMoveSets[oldC].has(c)) continue;
        const pi = m * N * 2 + oldC * 2 + 1;
        if (result[pi]) continue;
        if (r === 2) {
          result[pi] = 2; queue.push(pi); // Cat picks winning move
        } else {
          if (--pending[pi] === 0) { result[pi] = 1; queue.push(pi); }
        }
      }
    } else {
      // Predecessors: (oldM, c, 0) where mouse can move from oldM to m
      for (let oldM = 0; oldM < N; oldM++) {
        if (isWall[oldM] || oldM === c) continue;
        if (!mMoveSets[oldM].has(m)) continue;
        const pi = oldM * N * 2 + c * 2 + 0;
        if (result[pi]) continue;
        if (r === 1) {
          result[pi] = 1; queue.push(pi); // Mouse picks winning move
        } else {
          if (--pending[pi] === 0) { result[pi] = 2; queue.push(pi); }
        }
      }
    }
  }

  return result[startM * N * 2 + startC * 2 + 0] === 1;
};
// @lc code=end

// TEST:
console.log(canMouseWin(["####F","#C...","M...."], 1, 2)); // true
console.log(canMouseWin(["M.C...F"], 1, 4)); // true
console.log(canMouseWin(["M.C...F"], 1, 3)); // false
console.log(canMouseWin([".F.M","..#C","...."], 2, 1)); // depends
console.log(canMouseWin(["C.MF"], 1, 1)); // true (mouse adjacent to food)
