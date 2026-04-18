/*
 * @lc app=leetcode id=1914 lang=javascript
 *
 * [1914] Cyclically Rotating a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {
  const m = grid.length, n = grid[0].length;
  const layers = Math.min(m, n) / 2;

  for (let l = 0; l < layers; l++) {
    const r1 = l, c1 = l, r2 = m - 1 - l, c2 = n - 1 - l;
    const perimeter = 2 * (r2 - r1 + c2 - c1);
    const shift = k % perimeter;

    // Extract clockwise
    const ring = [];
    for (let c = c1; c < c2; c++) ring.push(grid[r1][c]);
    for (let r = r1; r < r2; r++) ring.push(grid[r][c2]);
    for (let c = c2; c > c1; c--) ring.push(grid[r2][c]);
    for (let r = r2; r > r1; r--) ring.push(grid[r][c1]);

    // Left rotate by shift
    const rotated = [...ring.slice(shift), ...ring.slice(0, shift)];

    // Write back clockwise
    let idx = 0;
    for (let c = c1; c < c2; c++) grid[r1][c] = rotated[idx++];
    for (let r = r1; r < r2; r++) grid[r][c2] = rotated[idx++];
    for (let c = c2; c > c1; c--) grid[r2][c] = rotated[idx++];
    for (let r = r2; r > r1; r--) grid[r][c1] = rotated[idx++];
  }

  return grid;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(rotateGrid([[40,10],[30,20]], 1))); // [[10,20],[40,30]]
console.log(JSON.stringify(rotateGrid([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 2)));
// [[3,4,8,12],[2,11,10,16],[1,7,6,15],[5,9,13,14]]
console.log(JSON.stringify(rotateGrid([[1,2],[3,4]], 4))); // [[1,2],[3,4]] (full rotation)
console.log(JSON.stringify(rotateGrid([[1,2],[3,4]], 1))); // [[2,4],[1,3]]
