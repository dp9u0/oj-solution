/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let length = triangle.length;
  let f = new Array(length + 1).fill(0);
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      f[j] = Math.min(f[j], f[j + 1]) + triangle[i][j];
    }
  }
  return f[0];
};