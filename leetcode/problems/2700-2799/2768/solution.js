/*
 * @lc app=leetcode id=2768 lang=javascript
 *
 * [2768] Number of Black Blocks
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */
var countBlackBlocks = function(m, n, coordinates) {
  const blockCount = new Map();

  for (const [x, y] of coordinates) {
    for (const [dx, dy] of [[0,0],[-1,0],[0,-1],[-1,-1]]) {
      const bx = x + dx, by = y + dy;
      if (bx >= 0 && bx < m - 1 && by >= 0 && by < n - 1) {
        const key = bx * n + by;
        blockCount.set(key, (blockCount.get(key) || 0) + 1);
      }
    }
  }

  const result = [0, 0, 0, 0, 0];
  for (const count of blockCount.values()) {
    result[count]++;
  }
  result[0] = (m - 1) * (n - 1) - result[1] - result[2] - result[3] - result[4];

  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countBlackBlocks(3, 3, [[0,0]]))); // [3,1,0,0,0]
console.log(JSON.stringify(countBlackBlocks(3, 3, [[0,0],[1,1],[0,2]]))); // [0,2,2,0,0]
