/*
 * @lc app=leetcode id=1559 lang=javascript
 *
 * [1559] Detect Cycles in 2D Grid
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
  const m = grid.length, n = grid[0].length;
  const parent = new Int32Array(m * n);
  const rank = new Int32Array(m * n);
  for (let i = 0; i < m * n; i++) parent[i] = i;

  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };

  const union = (a, b) => {
    a = find(a); b = find(b);
    if (a === b) return false;
    if (rank[a] < rank[b]) [a, b] = [b, a];
    parent[b] = a;
    if (rank[a] === rank[b]) rank[a]++;
    return true;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const idx = i * n + j;
      if (i > 0 && grid[i][j] === grid[i - 1][j]) {
        if (!union(idx, (i - 1) * n + j)) return true;
      }
      if (j > 0 && grid[i][j] === grid[i][j - 1]) {
        if (!union(idx, i * n + j - 1)) return true;
      }
    }
  }
  return false;
};
// @lc code=end

// TEST:
console.log(containsCycle([["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]])); // true
console.log(containsCycle([["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]])); // true
console.log(containsCycle([["a","b","b"],["b","z","b"],["b","b","a"]])); // false
console.log(containsCycle([["a","a"],["a","a"]])); // true
console.log(containsCycle([["a","b"],["c","d"]])); // false
