/*
 * @lc app=leetcode id=3459 lang=javascript
 *
 * [3459] Length of Longest V-Shaped Diagonal Segment
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var lenOfVDiagonal = function(grid) {
  const n = grid.length, m = grid[0].length;

  // Directions in clockwise order: NE, SE, SW, NW
  const dr = [-1, 1, 1, -1];
  const dc = [1, 1, -1, -1];

  // Flat arrays: index = (r * m + c) * 4 + d
  const N = n * m * 4;
  const next2 = new Int32Array(N);
  const next0 = new Int32Array(N);

  const id = (r, c, d) => (r * m + c) * 4 + d;

  // Precompute next2 and next0 for each direction
  for (let d = 0; d < 4; d++) {
    for (let ri = 0; ri < n; ri++) {
      for (let ci = 0; ci < m; ci++) {
        const r = (dr[d] > 0) ? (n - 1 - ri) : ri;
        const c = (dc[d] > 0) ? (m - 1 - ci) : ci;
        const nr = r + dr[d], nc = c + dc[d];
        const ok = nr >= 0 && nr < n && nc >= 0 && nc < m;
        const ni = ok ? id(nr, nc, d) : 0;
        const ci2 = id(r, c, d);
        next2[ci2] = (grid[r][c] === 2) ? (1 + (ok ? next0[ni] : 0)) : 0;
        next0[ci2] = (grid[r][c] === 0) ? (1 + (ok ? next2[ni] : 0)) : 0;
      }
    }
  }

  let ans = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (grid[r][c] !== 1) continue;
      for (let d1 = 0; d1 < 4; d1++) {
        const nr1 = r + dr[d1], nc1 = c + dc[d1];
        const ok1 = nr1 >= 0 && nr1 < n && nc1 >= 0 && nc1 < m;
        const L1 = 1 + (ok1 ? next2[id(nr1, nc1, d1)] : 0);
        if (L1 > ans) ans = L1;

        // Try turning at each step
        const d2 = (d1 + 1) % 4;
        let cr = r + dr[d1], cc = c + dc[d1];
        for (let k = 1; k < L1; k++) {
          const tr = cr + dr[d2], tc = cc + dc[d2];
          if (tr >= 0 && tr < n && tc >= 0 && tc < m) {
            const segLen = k + 1;
            const second = (segLen & 1) ? next2[id(tr, tc, d2)] : next0[id(tr, tc, d2)];
            const total = segLen + second;
            if (total > ans) ans = total;
          }
          cr += dr[d1];
          cc += dc[d1];
        }
      }
    }
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(lenOfVDiagonal([[2,2,1,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]])); // 5
console.log(lenOfVDiagonal([[2,2,2,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]])); // 4
console.log(lenOfVDiagonal([[1,2,2,2,2],[2,2,2,2,0],[2,0,0,0,0],[0,0,2,2,2],[2,0,0,2,0]])); // 5
console.log(lenOfVDiagonal([[1]])); // 1
console.log(lenOfVDiagonal([[2]])); // 0
console.log(lenOfVDiagonal([[1,0],[0,2]])); // 2 (straight SE diagonal)
console.log(lenOfVDiagonal([[0,0,0],[0,0,0],[0,0,0]])); // 0
