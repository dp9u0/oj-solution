/*
 * @lc app=leetcode id=3988 lang=javascript
 *
 * [3988] Create Grid With Exactly K Paths I
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {string[]}
 */
var createGrid = function(m, n, k) {
  const grid = Array.from({ length: m }, () => Array(n).fill('#'));
  const open = (i, j) => { grid[i][j] = '.'; };
  const toRows = () => grid.map((row) => row.join(''));
  // Free rows [r1, r2] x cols [c1, c2]
  const openBlock = (r1, r2, c1, c2) => {
    for (let i = r1; i <= r2; i++) for (let j = c1; j <= c2; j++) open(i, j);
  };
  // Corridor along row 1 to the right edge, then down the last column.
  const corridorRight = () => {
    for (let j = 1; j < n; j++) open(1, j);
    for (let i = 2; i < m; i++) open(i, n - 1);
  };
  // Transposed corridor: down column 1, then right along the last row.
  const corridorDown = (depth) => {
    for (let i = depth; i < m; i++) open(i, 1);
    for (let j = 2; j < n; j++) open(m - 1, j);
  };

  // Single row/column: a monotone path is unique (all free) or absent.
  if (m === 1 || n === 1) {
    if (k !== 1) return [];
    openBlock(0, m - 1, 0, n - 1);
    return toRows();
  }

  if (k === 1) {
    // L-shaped corridor: column 0 then last row.
    for (let i = 0; i < m; i++) open(i, 0);
    for (let j = 0; j < n; j++) open(m - 1, j);
    return toRows();
  }

  if (k === 2) {
    // 2x2 merge point yields dp(1,1) = 2, then ship it through corridors.
    openBlock(0, 1, 0, 1);
    corridorRight();
    return toRows();
  }

  if (k === 3) {
    if (n >= 3) {
      openBlock(0, 1, 0, 2); // 2x3 all free -> dp(1,2) = 3
      corridorRight();
    } else if (m >= 3) {
      openBlock(0, 2, 0, 1); // 3x2 all free -> dp(2,1) = 3
      corridorDown(2);
    } else {
      return []; // 2x2 caps at 2 paths
    }
    return toRows();
  }

  if (k === 4) {
    if (n >= 4) {
      openBlock(0, 1, 0, 3); // 2x4 all free -> dp(1,3) = 4
      corridorRight();
    } else if (m >= 4) {
      openBlock(0, 3, 0, 1); // 4x2 all free -> dp(3,1) = 4
      corridorDown(3);
    } else if (m === 3 && n === 3) {
      open(0, 0); open(0, 1);
      open(1, 0); open(1, 1); open(1, 2);
      open(2, 1); open(2, 2); // ['..#','...','#..'] -> dp(2,2) = 4
    } else {
      return []; // 2x2 / 2x3 / 3x2 cap below 4
    }
    return toRows();
  }

  return [];
};
// @lc code=end

// TEST:
const countPaths = (rows) => {
  const m = rows.length;
  const n = rows[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i][j] === '#') continue;
      dp[i][j] = i === 0 && j === 0 ? 1 : (i > 0 ? dp[i - 1][j] : 0) + (j > 0 ? dp[i][j - 1] : 0);
    }
  }
  return dp[m - 1][n - 1];
};

const assertGrid = (m, n, k, expected) => {
  const res = createGrid(m, n, k);
  if (expected === null) {
    console.assert(res.length === 0, `expected [] for (${m},${n},${k}), got`, res);
  } else {
    console.assert(res.length === m && res.every((r) => r.length === n), `bad shape for (${m},${n},${k})`, res);
    console.assert(countPaths(res) === k, `expected ${k} paths for (${m},${n},${k}), got ${countPaths(res)}`, res);
  }
};

// Provided examples
assertGrid(2, 3, 2, 2);
assertGrid(3, 3, 4, 4);
assertGrid(1, 4, 2, null);
// Single row / column
assertGrid(1, 1, 1, 1);
assertGrid(1, 10, 1, 1);
assertGrid(10, 1, 2, null);
// k = 1 corridor
assertGrid(2, 2, 1, 1);
assertGrid(10, 10, 1, 1);
// k = 2 everywhere
assertGrid(2, 2, 2, 2);
assertGrid(2, 10, 2, 2);
assertGrid(10, 2, 2, 2);
assertGrid(7, 9, 2, 2);
// k = 3 branches
assertGrid(2, 3, 3, 3);
assertGrid(2, 7, 3, 3);
assertGrid(3, 2, 3, 3);
assertGrid(7, 2, 3, 3);
assertGrid(2, 2, 3, null);
// k = 4 branches
assertGrid(2, 4, 4, 4);
assertGrid(2, 10, 4, 4);
assertGrid(4, 2, 4, 4);
assertGrid(10, 2, 4, 4);
assertGrid(4, 3, 4, 4);
assertGrid(3, 10, 4, 4);
assertGrid(3, 3, 4, 4);
assertGrid(2, 3, 4, null);
assertGrid(3, 2, 4, null);
assertGrid(2, 2, 4, null);
// Exhaustive sweep over all constraint values
let sweepOk = true;
for (let m = 1; m <= 10; m++) {
  for (let n = 1; n <= 10; n++) {
    for (let k = 1; k <= 4; k++) {
      const res = createGrid(m, n, k);
      const maxPaths = m === 1 || n === 1 ? 1 : 0;
      if (res.length === 0) {
        const capOk = (m === 1 || n === 1) ? k !== 1 : k > Math.min(4, comb(m + n - 2, m - 1)) || k > 4;
        if (!capOk) { sweepOk = false; console.log(`suspicious [] for (${m},${n},${k})`); }
      } else if (countPaths(res) !== k) {
        sweepOk = false; console.log(`wrong count for (${m},${n},${k})`, res);
      }
    }
  }
}
function comb(a, b) {
  let r = 1;
  for (let i = 0; i < b; i++) r = (r * (a - i)) / (i + 1);
  return r;
}
console.assert(sweepOk, 'sweep found problems');
console.log('m=2,n=3,k=2 ->', createGrid(2, 3, 2));
console.log('m=3,n=3,k=4 ->', createGrid(3, 3, 4));
console.log('sweep ok:', sweepOk);
