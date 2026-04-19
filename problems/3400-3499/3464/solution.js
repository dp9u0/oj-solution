/*
 * @lc app=leetcode id=3464 lang=javascript
 *
 * [3464] Maximize the Distance Between Points on a Square
 */

// @lc code=start
/**
 * @param {number} side
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var maxDistance = function(side, points, k) {
  const n = points.length;
  const P = 4 * side;

  // Compute perimeter coordinate (clockwise from origin)
  const perm = points.map(([x, y]) => {
    if (y === 0) return x;
    if (x === side) return side + y;
    if (y === side) return 2 * side + (side - x);
    return 3 * side + (side - y);
  });

  perm.sort((a, b) => a - b);

  // Extended array for circular handling
  const ext = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    ext[i] = perm[i];
    ext[i + n] = perm[i] + P;
  }

  // Check: can we select k points with min pairwise Manhattan distance >= d?
  // For d <= side, this equals: all consecutive perimeter gaps >= d
  const check = (d) => {
    // Two-pointer next[]: next[i] = first j > i with ext[j]-ext[i] >= d
    const next = new Array(2 * n + 1);
    let j = 0;
    for (let i = 0; i < 2 * n; i++) {
      j = Math.max(j, i + 1);
      while (j < 2 * n && ext[j] - ext[i] < d) j++;
      next[i] = j;
    }
    next[2 * n] = 2 * n;

    for (let i = 0; i < n; i++) {
      let pos = i;
      for (let step = 1; step < k; step++) {
        pos = next[pos];
        if (pos >= i + n) break;
      }
      if (pos < i + n && ext[pos] - ext[i] <= P - d) return true;
    }
    return false;
  };

  // Binary search for max d (answer <= side for k >= 4)
  let lo = 1, hi = side;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (check(mid)) lo = mid;
    else hi = mid - 1;
  }
  return lo;
};
// @lc code=end

// TEST:
console.log(maxDistance(2, [[0,2],[2,0],[2,2],[0,0]], 4)); // 2
console.log(maxDistance(2, [[0,0],[1,2],[2,0],[2,2],[2,1]], 4)); // 1
console.log(maxDistance(2, [[0,0],[0,1],[0,2],[1,2],[2,0],[2,2],[2,1]], 5)); // 1
