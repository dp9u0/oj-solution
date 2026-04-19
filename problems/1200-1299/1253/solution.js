/*
 * @lc app=leetcode id=1253 lang=javascript
 *
 * [1253] Reconstruct a 2-Row Binary Matrix
 */

// @lc code=start
/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
  const n = colsum.length;
  const row0 = new Array(n).fill(0);
  const row1 = new Array(n).fill(0);

  // Phase 1: handle fixed positions (colsum = 0 or 2)
  for (let i = 0; i < n; i++) {
    if (colsum[i] === 2) {
      row0[i] = 1;
      row1[i] = 1;
      upper--;
      lower--;
    } else if (colsum[i] === 0) {
      row0[i] = 0;
      row1[i] = 0;
    }
  }

  // Check feasibility
  if (upper < 0 || lower < 0) return [];

  // Phase 2: handle colsum = 1 — greedily assign to the row with more remaining
  for (let i = 0; i < n; i++) {
    if (colsum[i] === 1) {
      if (upper >= lower) {
        if (upper === 0) return [];
        row0[i] = 1;
        upper--;
      } else {
        if (lower === 0) return [];
        row1[i] = 1;
        lower--;
      }
    }
  }

  return upper === 0 && lower === 0 ? [row0, row1] : [];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(reconstructMatrix(2, 1, [1, 1, 1]))); // [[1,1,0],[0,0,1]] or similar
console.log(JSON.stringify(reconstructMatrix(2, 3, [2, 2, 1, 1]))); // []
console.log(JSON.stringify(reconstructMatrix(5, 5, [2, 1, 2, 0, 1, 0, 1, 2, 0, 1]))); // valid reconstruction
console.log(JSON.stringify(reconstructMatrix(1, 0, [1]))); // [[1],[0]]
console.log(JSON.stringify(reconstructMatrix(0, 0, [0, 0]))); // [[0,0],[0,0]]
