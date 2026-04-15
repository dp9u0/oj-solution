/*
 * @lc app=leetcode id=3071 lang=javascript
 *
 * [3071] Minimum Operations to Write the Letter Y on a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function(grid) {
  const n = grid.length;
  const mid = n >> 1;
  const isY = Array.from({ length: n }, () => new Array(n).fill(false));
  // Left diagonal: (r, r) for r = 0..mid
  for (let r = 0; r <= mid; r++) isY[r][r] = true;
  // Right diagonal: (r, n-1-r) for r = 0..mid
  for (let r = 0; r <= mid; r++) isY[r][n - 1 - r] = true;
  // Vertical: (r, mid) for r = mid..n-1
  for (let r = mid; r < n; r++) isY[r][mid] = true;

  const yCnt = [0, 0, 0], nCnt = [0, 0, 0];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (isY[r][c]) yCnt[grid[r][c]]++;
      else nCnt[grid[r][c]]++;
    }
  }
  let minOps = Infinity;
  for (let vy = 0; vy < 3; vy++) {
    for (let vn = 0; vn < 3; vn++) {
      if (vy === vn) continue;
      const ops = (yCnt[0] + yCnt[1] + yCnt[2] - yCnt[vy])
                + (nCnt[0] + nCnt[1] + nCnt[2] - nCnt[vn]);
      minOps = Math.min(minOps, ops);
    }
  }
  return minOps;
};
// @lc code=end

// TEST:
console.log(minimumOperationsToWriteY([[1,2,2],[1,1,0],[0,1,0]])); // 3
console.log(minimumOperationsToWriteY([[0,1,0,1,0],[2,1,0,1,2],[2,2,2,0,1],[2,2,2,2,2],[2,1,2,2,2]])); // 12
