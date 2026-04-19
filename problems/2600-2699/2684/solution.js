/*
 * @lc app=leetcode id=2684 lang=javascript
 *
 * [2684] Maximum Number of Moves in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let current = new Set();
  for (let i = 0; i < m; i++) current.add(i);

  let moves = 0;

  for (let col = 0; col < n - 1; col++) {
    const next = new Set();
    for (const row of current) {
      for (const dr of [-1, 0, 1]) {
        const nr = row + dr;
        if (nr >= 0 && nr < m && grid[nr][col + 1] > grid[row][col]) {
          next.add(nr);
        }
      }
    }
    if (next.size === 0) break;
    current = next;
    moves++;
  }

  return moves;
};
// @lc code=end

// TEST:
console.log(maxMoves([[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]])); // 3
console.log(maxMoves([[3,2,4],[2,1,9],[1,1,7]])); // 0
