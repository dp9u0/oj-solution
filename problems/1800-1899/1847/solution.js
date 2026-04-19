/*
 * @lc app=leetcode id=1847 lang=javascript
 *
 * [1847] Closest Room
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function(rooms, queries) {
  rooms.sort((a, b) => b[1] - a[1]);
  const indexed = queries.map((q, i) => [q[0], q[1], i]);
  indexed.sort((a, b) => b[1] - a[1]);

  const sorted = []; // roomIds sorted ascending
  const result = new Array(queries.length).fill(-1);
  let ri = 0;

  const bisect = (arr, target) => {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };

  const insert = (arr, val) => {
    const pos = bisect(arr, val);
    arr.splice(pos, 0, val);
  };

  for (const [preferred, minSize, qi] of indexed) {
    while (ri < rooms.length && rooms[ri][1] >= minSize) {
      insert(sorted, rooms[ri][0]);
      ri++;
    }

    if (sorted.length === 0) continue;

    const pos = bisect(sorted, preferred);
    let best = -1, bestDiff = Infinity;

    if (pos < sorted.length) {
      const diff = Math.abs(sorted[pos] - preferred);
      if (diff < bestDiff || (diff === bestDiff && sorted[pos] < best)) {
        bestDiff = diff;
        best = sorted[pos];
      }
    }
    if (pos > 0) {
      const diff = Math.abs(sorted[pos - 1] - preferred);
      if (diff < bestDiff || (diff === bestDiff && sorted[pos - 1] < best)) {
        bestDiff = diff;
        best = sorted[pos - 1];
      }
    }

    result[qi] = best;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(closestRoom([[2,2],[1,2],[3,2]], [[3,1],[3,3],[5,2]])) === JSON.stringify([3,-1,3]));
console.log(JSON.stringify(closestRoom([[1,4],[2,3],[3,5],[4,1],[5,2]], [[2,3],[2,4],[2,5]])) === JSON.stringify([2,1,3]));
console.log(JSON.stringify(closestRoom([[1,1]], [[1,1],[2,1]])) === JSON.stringify([1,1]));
console.log(JSON.stringify(closestRoom([[2,5],[1,5],[3,5]], [[2,5],[2,3]])) === JSON.stringify([2,2]));
console.log(JSON.stringify(closestRoom([[100,10],[200,20],[300,30]], [[150,5],[250,25]])) === JSON.stringify([100,300]));
console.log(JSON.stringify(closestRoom([[1,10]], [[5,20]])) === JSON.stringify([-1]));
