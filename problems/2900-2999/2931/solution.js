/*
 * @lc app=leetcode id=2931 lang=javascript
 *
 * [2931] Maximum Spending After Buying Items
 */

// @lc code=start
/**
 * @param {number[][]} values
 * @return {number}
 */
var maxSpending = function(values) {
  const m = values.length;
  const n = values[0].length;
  const idx = new Array(m).fill(n - 1);
  let result = 0;

  for (let d = 1; d <= m * n; d++) {
    let minShop = -1, minVal = Infinity;
    for (let i = 0; i < m; i++) {
      if (idx[i] >= 0 && values[i][idx[i]] < minVal) {
        minVal = values[i][idx[i]];
        minShop = i;
      }
    }
    result += minVal * d;
    idx[minShop]--;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(maxSpending([[8,5,2],[6,4,1],[9,7,3]])); // 285
console.log(maxSpending([[10,8,6,4,2],[9,7,5,3,2]])); // 386
