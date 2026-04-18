/*
 * @lc app=leetcode id=2245 lang=javascript
 *
 * [2245] Maximum Trailing Zeros in a Cornered Path
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxTrailingZeros = function(grid) {
  const m = grid.length, n = grid[0].length;
  const getFactors = (x, f) => { let c = 0; while (x % f === 0) { c++; x /= f; } return c; };

  const c2 = grid.map(row => row.map(v => getFactors(v, 2)));
  const c5 = grid.map(row => row.map(v => getFactors(v, 5)));

  // prefix sums: left->right, top->bottom
  const lr2 = Array.from({length: m}, () => new Array(n).fill(0));
  const lr5 = Array.from({length: m}, () => new Array(n).fill(0));
  const td2 = Array.from({length: m}, () => new Array(n).fill(0));
  const td5 = Array.from({length: m}, () => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      lr2[i][j] = c2[i][j] + (j > 0 ? lr2[i][j - 1] : 0);
      lr5[i][j] = c5[i][j] + (j > 0 ? lr5[i][j - 1] : 0);
      td2[i][j] = c2[i][j] + (i > 0 ? td2[i - 1][j] : 0);
      td5[i][j] = c5[i][j] + (i > 0 ? td5[i - 1][j] : 0);
    }
  }

  const h2 = (i, j1, j2) => j1 <= j2 ? lr2[i][j2] - (j1 > 0 ? lr2[i][j1 - 1] : 0) : lr2[i][j1] - (j2 > 0 ? lr2[i][j2 - 1] : 0);
  const h5 = (i, j1, j2) => j1 <= j2 ? lr5[i][j2] - (j1 > 0 ? lr5[i][j1 - 1] : 0) : lr5[i][j1] - (j2 > 0 ? lr5[i][j2 - 1] : 0);
  const v2 = (j, i1, i2) => i1 <= i2 ? td2[i2][j] - (i1 > 0 ? td2[i1 - 1][j] : 0) : td2[i1][j] - (i2 > 0 ? td2[i2 - 1][j] : 0);
  const v5 = (j, i1, i2) => i1 <= i2 ? td5[i2][j] - (i1 > 0 ? td5[i1 - 1][j] : 0) : td5[i1][j] - (i2 > 0 ? td5[i2 - 1][j] : 0);

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 4 combos: left+up, left+down, right+up, right+down
      // left: h(0..j), up: v(0..i-1) — pivot counted only in horizontal
      if (j > 0) {
        const l2 = h2(i, 0, j), l5 = h5(i, 0, j);
        if (i > 0) { const u2 = v2(j, 0, i - 1), u5 = v5(j, 0, i - 1); ans = Math.max(ans, Math.min(l2 + u2, l5 + u5)); }
        if (i < m - 1) { const d2 = v2(j, i + 1, m - 1), d5 = v5(j, i + 1, m - 1); ans = Math.max(ans, Math.min(l2 + d2, l5 + d5)); }
      }
      // right: h(j..n-1)
      if (j < n - 1) {
        const r2 = h2(i, j, n - 1), r5 = h5(i, j, n - 1);
        if (i > 0) { const u2 = v2(j, 0, i - 1), u5 = v5(j, 0, i - 1); ans = Math.max(ans, Math.min(r2 + u2, r5 + u5)); }
        if (i < m - 1) { const d2 = v2(j, i + 1, m - 1), d5 = v5(j, i + 1, m - 1); ans = Math.max(ans, Math.min(r2 + d2, r5 + d5)); }
      }
      // straight lines
      ans = Math.max(ans, Math.min(lr2[i][n - 1], lr5[i][n - 1]));
      ans = Math.max(ans, Math.min(td2[m - 1][j], td5[m - 1][j]));
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxTrailingZeros([[23,17,15,3,20],[8,1,20,27,11],[9,4,6,2,21],[40,9,1,10,6],[22,7,4,5,3]])); // 3
console.log(maxTrailingZeros([[4,3,2],[7,6,1],[8,8,8]])); // 0
console.log(maxTrailingZeros([[1]])); // 0
console.log(maxTrailingZeros([[10]])); // 1
console.log(maxTrailingZeros([[5,10]])); // 1
console.log(maxTrailingZeros([[10],[6],[15]])); // 2
console.log(maxTrailingZeros([[1,5,2,4,25]])); // 3
