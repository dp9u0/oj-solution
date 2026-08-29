/*
 * @lc app=leetcode id=1093 lang=javascript
 *
 * [1093] Statistics from a Large Sample
 */

// @lc code=start
/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function(count) {
  let n = 0;
  let sum = 0;
  let min = -1;
  let max = -1;
  let mode = 0;
  let modeCount = 0;
  for (let k = 0; k < 256; k++) {
    if (count[k] === 0) continue;
    n += count[k];
    sum += k * count[k];
    if (min === -1) min = k;
    max = k;
    if (count[k] > modeCount) {
      modeCount = count[k];
      mode = k;
    }
  }
  const kth = (rank) => {
    let cum = 0;
    for (let k = 0; k < 256; k++) {
      cum += count[k];
      if (cum >= rank) return k;
    }
  };
  const median = n % 2 === 1 ? kth((n + 1) / 2) : (kth(n / 2) + kth(n / 2 + 1)) / 2;
  return [min, max, sum / n, median, mode];
};
// @lc code=end

// TEST:
const build = (entries) => {
  const arr = Array(256).fill(0);
  for (const [k, c] of entries) arr[k] = c;
  return arr;
};
const eq = (a, b) => a.length === 5 && a.every((v, i) => Math.abs(v - b[i]) < 1e-9);
console.log(eq(sampleStats(build([[1, 1], [2, 3], [3, 4]])), [1, 3, 2.375, 2.5, 3]));
console.log(eq(sampleStats(build([[1, 4], [2, 3], [3, 2], [4, 2]])), [1, 4, 24 / 11, 2, 1]));
console.log(eq(sampleStats(build([[0, 1]])), [0, 0, 0, 0, 0]));
console.log(eq(sampleStats(build([[2, 2], [10, 1]])), [2, 10, 14 / 3, 2, 2]));
console.log(eq(sampleStats(build([[1, 3], [2, 1]])), [1, 2, 1.25, 1, 1]));
console.log(eq(sampleStats(build([[7, 100]])), [7, 7, 7, 7, 7]));
console.log(eq(sampleStats(build([[255, 5], [0, 4]])), [0, 255, 1275 / 9, 255, 255]));
