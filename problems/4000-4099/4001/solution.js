/*
 * @lc app=leetcode id=4001 lang=javascript
 *
 * [4001] Aggregate Two Time Series
 */

// @lc code=start
/**
 * @param {number[][]} series1
 * @param {number[][]} series2
 * @return {number[][]}
 */
var aggregateTimeSeries = function (series1, series2) {
  // 1. merge-step: collect the union of timestamps (strictly increasing)
  const timestamps = [];
  let i = 0;
  let j = 0;
  while (i < series1.length || j < series2.length) {
    const t1 = i < series1.length ? series1[i][0] : Infinity;
    const t2 = j < series2.length ? series2[j][0] : Infinity;
    if (t1 < t2) {
      timestamps.push(t1);
      i++;
    } else if (t2 < t1) {
      timestamps.push(t2);
      j++;
    } else {
      timestamps.push(t1);
      i++;
      j++;
    }
  }

  // 2. scan right-to-left, maintaining the next available value of each series
  const ans = [];
  let next1 = 0;
  let next2 = 0;
  let a = series1.length - 1;
  let b = series2.length - 1;
  for (let k = timestamps.length - 1; k >= 0; k--) {
    const t = timestamps[k];
    if (a >= 0 && series1[a][0] === t) {
      next1 = series1[a][1];
      a--;
    }
    if (b >= 0 && series2[b][0] === t) {
      next2 = series2[b][1];
      b--;
    }
    ans.push([t, next1 + next2]);
  }
  ans.reverse();
  return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(aggregateTimeSeries([[1, 3], [4, 1]], [[2, 2], [5, 2]]))); // [[1,5],[2,3],[4,3],[5,2]]
console.log(JSON.stringify(aggregateTimeSeries([[1, 5], [3, 1]], [[2, 2]]))); // [[1,7],[2,3],[3,1]]
console.log(JSON.stringify(aggregateTimeSeries([[1, 5]], [[1000000000, 2]]))); // [[1,7],[1000000000,2]]
console.log(JSON.stringify(aggregateTimeSeries([[1, 1]], [[1, 2], [3, 4]]))); // [[1,3],[3,4]]
console.log(JSON.stringify(aggregateTimeSeries([[5, 7], [6, 1]], [[5, 2], [9, 3], [10, 4]]))); // [[5,9],[6,4],[9,3],[10,4]]
