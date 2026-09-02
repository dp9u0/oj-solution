/*
 * @lc app=leetcode.cn id=LCS 03 lang=javascript
 *
 * [LCS 03] 主题空间
 */

// @lc code=start
/**
 * @param {string[]} grid
 * @return {number}
 */
var largestArea = function(grid) {
  const R = grid.length;
  const C = grid[0].length;
  const visited = Array.from({ length: R }, () => new Array(C).fill(false));
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let best = 0;

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (visited[r][c] || grid[r][c] === '0') continue;
      const ch = grid[r][c];
      let area = 0;
      let touchesCorridor = false;
      // BFS
      const queue = [[r, c]];
      visited[r][c] = true;
      let head = 0;
      while (head < queue.length) {
        const [cr, cc] = queue[head++];
        area++;
        for (const [dr, dc] of dirs) {
          const nr = cr + dr;
          const nc = cc + dc;
          if (nr < 0 || nr >= R || nc < 0 || nc >= C) {
            touchesCorridor = true; // outside is corridor
            continue;
          }
          if (grid[nr][nc] === '0') {
            touchesCorridor = true;
            continue;
          }
          if (!visited[nr][nc] && grid[nr][nc] === ch) {
            visited[nr][nc] = true;
            queue.push([nr, nc]);
          }
        }
      }
      if (!touchesCorridor && area > best) best = area;
    }
  }
  return best;
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(largestArea(['110', '231', '221']), 1);
assert.strictEqual(largestArea(['11111100000', '21243101111', '21224101221', '11111101111']), 3);
assert.strictEqual(largestArea(['1']), 0); // single cell bordered outside -> corridor
assert.strictEqual(largestArea(['11']), 0);
assert.strictEqual(largestArea(['00', '01']), 0); // '1' adjacent to corridor
assert.strictEqual(largestArea(['11', '11']), 0); // borders outside (corridor)
// interior component isolated from border/corridor by different chars
assert.strictEqual(largestArea(['111', '121', '111']), 1); // center '2' surrounded by '1's interior? border '1's touch border -> invalid; only center 2 is candidate
assert.strictEqual(largestArea(['222', '202', '222']), 0); // '2' ring touches border

console.log('All tests passed!');
console.log('ex1 =', largestArea(['110', '231', '221']));
