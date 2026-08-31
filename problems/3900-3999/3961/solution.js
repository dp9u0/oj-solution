/*
 * @lc app=leetcode id=3961 lang=javascript
 *
 * [3961] Maximize Sum of Device Ratings
 */

// @lc code=start
/**
 * @param {number[][]} units
 * @return {number}
 */
var maxRatings = function(units) {
  const m = units.length;
  const r = new Array(m); // 每台设备的初始 rating（最小单位）
  const g = new Array(m); // 作为 source 时的增益 = 次小值 - 最小值
  let sumR = 0;
  let totalG = 0;

  for (let i = 0; i < m; i++) {
    const arr = units[i];
    let min1 = Infinity;
    let min2 = Infinity;
    for (const x of arr) {
      if (x < min1) {
        min2 = min1;
        min1 = x;
      } else if (x < min2) {
        min2 = x;
      }
    }
    r[i] = min1;
    sumR += min1;
    g[i] = arr.length >= 2 ? min2 - min1 : 0;
    totalG += g[i];
  }

  const rMin = Math.min(...r);

  // 枚举垃圾桶 k：其余所有 n>=2 设备作为 source
  let best = 0;
  for (let k = 0; k < m; k++) {
    const benefit = totalG - g[k] - Math.max(0, r[k] - rMin);
    if (benefit > best) best = benefit;
  }

  return sumR + best;
};
// @lc code=end

// TEST:
console.log(maxRatings([[1, 3], [2, 2]]) === 4, maxRatings([[1, 3], [2, 2]]));
console.log(maxRatings([[1, 2, 3], [4, 5, 6]]) === 6, maxRatings([[1, 2, 3], [4, 5, 6]]));
console.log(maxRatings([[5, 5, 5], [1, 1, 1]]) === 6, maxRatings([[5, 5, 5], [1, 1, 1]]));
console.log(maxRatings([[1, 100], [2, 50], [3, 4]]) === 151, maxRatings([[1, 100], [2, 50], [3, 4]]));
console.log(maxRatings([[2, 2], [3, 5]]) === 7, maxRatings([[2, 2], [3, 5]]));
console.log(maxRatings([[1, 5], [1, 5], [10, 20]]) === 26, maxRatings([[1, 5], [1, 5], [10, 20]]));
console.log(maxRatings([[7], [2, 8], [3, 9]]) === 19, maxRatings([[7], [2, 8], [3, 9]]));
console.log(maxRatings([[2, 10], [3, 4], [100, 101]]) === 113, maxRatings([[2, 10], [3, 4], [100, 101]]));
console.log(maxRatings([[5]]) === 5, maxRatings([[5]]));
