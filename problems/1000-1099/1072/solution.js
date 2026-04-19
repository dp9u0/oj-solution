/*
 * @lc app=leetcode id=1072 lang=javascript
 *
 * [1072] Flip Columns For Maximum Number of Equal Rows
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  const count = new Map();

  for (const row of matrix) {
    const flip = row[0] === 1;
    const key = row.map(v => flip ? 1 - v : v).join('');
    count.set(key, (count.get(key) || 0) + 1);
  }

  return Math.max(...count.values());
};
// @lc code=end

// TEST:
console.log(maxEqualRowsAfterFlips([[0,1],[1,1]])); // 1
console.log(maxEqualRowsAfterFlips([[0,1],[1,0]])); // 2
console.log(maxEqualRowsAfterFlips([[0,0,0],[0,0,1],[1,1,0]])); // 2
