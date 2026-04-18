/*
 * @lc app=leetcode id=3047 lang=javascript
 *
 * [3047] Find the Largest Area of Square Inside Two Rectangles
 */

// @lc code=start
/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function(bottomLeft, topRight) {
  const n = bottomLeft.length;
  let maxSide = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const x1 = Math.max(bottomLeft[i][0], bottomLeft[j][0]);
      const y1 = Math.max(bottomLeft[i][1], bottomLeft[j][1]);
      const x2 = Math.min(topRight[i][0], topRight[j][0]);
      const y2 = Math.min(topRight[i][1], topRight[j][1]);
      if (x1 < x2 && y1 < y2) {
        maxSide = Math.max(maxSide, Math.min(x2 - x1, y2 - y1));
      }
    }
  }

  return maxSide * maxSide;
};
// @lc code=end

// TEST:
console.log(largestSquareArea([[1,1],[2,2],[3,1]], [[3,3],[4,4],[6,6]])); // 1
console.log(largestSquareArea([[1,1],[1,3],[1,5]], [[5,5],[5,7],[5,9]])); // 4
console.log(largestSquareArea([[1,1],[2,2],[1,2]], [[3,3],[4,4],[3,4]])); // 1
console.log(largestSquareArea([[1,1],[3,3],[3,1]], [[2,2],[4,4],[4,2]])); // 0
console.log(largestSquareArea([[1,1]], [[5,5]])); // 0 (only one rect)
