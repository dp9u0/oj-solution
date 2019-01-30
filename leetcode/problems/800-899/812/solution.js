/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let max = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        max = Math.max(max, calcArea(points[i], points[j], points[k]))
      }
    }
  }
  return max;
};

function calcArea(p1, p2, p3) {
  let [
    [x1, y1],
    [x2, y2],
    [x3, y3]
  ] = [p1, p2, p3]
  return Math.abs(((x1 * y2 - x2 * y1) + (x2 * y3 - x3 * y2) + (x3 * y1 - x1 * y3)) / 2);
}