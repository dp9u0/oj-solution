/*
 * @lc app=leetcode id=2718 lang=javascript
 *
 * [2718] Sum of Matrix After Queries
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function(n, queries) {
  let sum = 0;
  const seenRow = new Set();
  const seenCol = new Set();
  let rowCount = 0, colCount = 0;

  for (let i = queries.length - 1; i >= 0; i--) {
    const [type, index, val] = queries[i];
    if (type === 0) {
      if (seenRow.has(index)) continue;
      seenRow.add(index);
      rowCount++;
      sum += val * (n - colCount);
    } else {
      if (seenCol.has(index)) continue;
      seenCol.add(index);
      colCount++;
      sum += val * (n - rowCount);
    }
  }

  return sum;
};
// @lc code=end

// TEST:
console.log(matrixSumQueries(3, [[0,0,1],[1,2,2],[0,2,3],[1,0,4]])); // 23
console.log(matrixSumQueries(3, [[0,0,4],[0,1,2],[1,0,1],[0,2,3],[1,2,1]])); // 17
