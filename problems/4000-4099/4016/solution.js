/*
 * @lc app=leetcode id=4016 lang=javascript
 *
 * [4016] Maximum Area of Two Non-Overlapping Square Submatrices
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
function maxArea(mat) {
  const m = mat.length;
  const n = mat[0].length;

  // 2D prefix sums: pre[r][c] = sum of mat[0..r-1][0..c-1]
  const pre = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      pre[r + 1][c + 1] = pre[r][c + 1] + pre[r + 1][c] - pre[r][c] + mat[r][c];
    }
  }

  // O(1) check: k×k square with top-left (r, c) is all ones
  const allOnes = (r, c, k) =>
    pre[r + k][c + k] - pre[r][c + k] - pre[r + k][c] + pre[r][c] === k * k;

  // For side k, two non-overlapping squares exist iff the row span or column
  // span of all valid top-left corners is at least k
  const check = (k) => {
    let minR = Infinity;
    let maxR = -1;
    let minC = Infinity;
    let maxC = -1;
    for (let r = 0; r + k <= m; r++) {
      for (let c = 0; c + k <= n; c++) {
        if (allOnes(r, c, k)) {
          if (r < minR) minR = r;
          if (r > maxR) maxR = r;
          if (c < minC) minC = c;
          if (c > maxC) maxC = c;
        }
      }
    }
    if (minR === Infinity) return false;
    return maxR - minR >= k || maxC - minC >= k;
  };

  // Binary search max k (monotone: k works => k-1 works)
  let lo = 1;
  let hi = Math.min(m, n);
  let best = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (check(mid)) {
      best = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return best * best;
}
// @lc code=end

// TEST:
console.log(maxArea([[1, 1, 1, 0], [1, 1, 1, 1], [0, 0, 1, 1]]) === 4); // true (k=2)
console.log(maxArea([[0, 1], [1, 0]]) === 1); // true (k=1)
console.log(maxArea([[0, 0], [0, 1]]) === 0); // true (single cell, impossible)
console.log(maxArea([[0, 0], [0, 0]]) === 0); // true (no usable cell)
console.log(maxArea([[1, 1], [1, 1]]) === 1); // true (k=1 e.g. (0,0) & (1,1))
console.log(maxArea([[1, 1, 1], [1, 1, 1], [1, 1, 1]]) === 1); // true (3×3 all ones, only one 2×2 spot cluster)
console.log(maxArea([[1, 1, 1, 1], [1, 1, 1, 1]]) === 4); // true (2×4, k=2 at cols 0-1 and 2-3)
