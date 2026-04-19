/*
 * @lc app=leetcode id=3000 lang=javascript
 *
 * [3000] Maximum Area of Longest Diagonal Rectangle
 */

// @lc code=start
/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
  let maxDiag = 0, maxArea = 0;
  for (const [l, w] of dimensions) {
    const diag = l * l + w * w;
    const area = l * w;
    if (diag > maxDiag || (diag === maxDiag && area > maxArea)) {
      maxDiag = diag;
      maxArea = area;
    }
  }
  return maxArea;
};
// @lc code=end

// TEST:
console.log(areaOfMaxDiagonal([[9,3],[8,6]])); // 48
console.log(areaOfMaxDiagonal([[3,4],[4,3]])); // 12
console.log(areaOfMaxDiagonal([[1,1]])); // 1
console.log(areaOfMaxDiagonal([[5,12],[9,8]])); // 60 (13^2=169 vs 12^2=145)
console.log(areaOfMaxDiagonal([[2,3],[3,2],[1,4]])); // 6
