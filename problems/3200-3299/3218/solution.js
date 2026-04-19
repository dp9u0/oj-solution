/*
 * @lc app=leetcode id=3218 lang=javascript
 *
 * [3218] Minimum Cost for Cutting Cake I
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function(m, n, horizontalCut, verticalCut) {
  horizontalCut.sort((a, b) => b - a);
  verticalCut.sort((a, b) => b - a);

  let i = 0, j = 0, hSegs = 1, vSegs = 1, cost = 0;
  while (i < horizontalCut.length || j < verticalCut.length) {
    const h = i < horizontalCut.length ? horizontalCut[i] : 0;
    const v = j < verticalCut.length ? verticalCut[j] : 0;
    if (h >= v) {
      cost += h * vSegs;
      hSegs++;
      i++;
    } else {
      cost += v * hSegs;
      vSegs++;
      j++;
    }
  }
  return cost;
};
// @lc code=end

// TEST:
console.log(minimumCost(3, 2, [1,3], [5])); // 13
console.log(minimumCost(2, 2, [7], [4])); // 15
console.log(minimumCost(1, 1, [], [])); // 0
console.log(minimumCost(3, 3, [1,2], [3,4])); // ?
console.log(minimumCost(2, 3, [5], [1,2])); // ?
